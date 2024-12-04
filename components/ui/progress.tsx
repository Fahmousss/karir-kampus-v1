import * as ProgressPrimitive from "@rn-primitives/progress";
import * as React from "react";
import { Platform, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { cn } from "~/lib/utils";

const EmojiProgress = React.forwardRef<
  ProgressPrimitive.RootRef,
  ProgressPrimitive.RootProps & {
    indicatorClassName?: string;
    emoji?: string;
  }
>(({ className, value, indicatorClassName, emoji = "😊", ...props }, ref) => {
  return (
    <View className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
          className
        )}
        {...props}
      >
        <Indicator value={value} className={indicatorClassName} />
      </ProgressPrimitive.Root>
      <EmojiIndicator value={value} emoji={emoji} />
    </View>
  );
});
EmojiProgress.displayName = ProgressPrimitive.Root.displayName;

export { EmojiProgress };

function Indicator({
  value,
  className,
}: {
  value: number | undefined | null;
  className?: string;
}) {
  const progress = useDerivedValue(() => value ?? 0);

  const indicator = useAnimatedStyle(() => {
    return {
      width: withSpring(
        `${interpolate(
          progress.value,
          [0, 200],
          [1, 200],
          Extrapolation.CLAMP
        )}%`,
        { overshootClamping: true }
      ),
    };
  });

  if (Platform.OS === "web") {
    return (
      <View
        className={cn(
          "h-full w-full flex-1 bg-primary web:transition-all",
          className
        )}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      >
        <ProgressPrimitive.Indicator
          className={cn("h-full w-full ", className)}
        />
      </View>
    );
  }

  return (
    <ProgressPrimitive.Indicator asChild>
      <Animated.View
        style={indicator}
        className={cn("h-full bg-[#FFD358]", className)}
      />
    </ProgressPrimitive.Indicator>
  );
}

function EmojiIndicator({
  value,
  emoji,
}: {
  value: number | undefined | null;
  emoji: string;
}) {
  const progress = useDerivedValue(() => value ?? 0);

  const emojiStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            interpolate(
              progress.value,
              [0, 200],
              [0, 200],
              Extrapolation.CLAMP
            ),
            { overshootClamping: true }
          ),
        },
      ],
    };
  });

  return (
    <Animated.Text
      style={[
        {
          position: "absolute",
          top: -10,
          left: 50 * 2,
          fontSize: 20,
        },
        emojiStyle,
      ]}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants"
    >
      {emoji}
    </Animated.Text>
  );
}
