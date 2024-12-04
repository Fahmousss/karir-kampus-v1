import * as React from "react";
import * as ProgressPrimitive from "@rn-primitives/progress";

import { cn } from "~/lib/utils";
import { View } from "react-native";

const EmojiProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    emoji?: string;
  }
>(({ className, value, emoji = "😊", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <View
      className="absolute top-1/2 left-0 -translate-y-1/2 transition-all pointer-events-none"
      style={{ left: `${value || 0}%` }}
    >
      {emoji}
    </View>
  </ProgressPrimitive.Root>
));
EmojiProgress.displayName = ProgressPrimitive.Root.displayName;

export { EmojiProgress };
