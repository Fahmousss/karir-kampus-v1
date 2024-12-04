import { View, Text } from "react-native";
import React from "react";

export function BimbinganCard({
  title,
  icon,
  children,
  footer,
  classname = "",
}: {
  title: String;
  icon: any;
  children: React.ReactNode;
  footer: any;
  classname: String;
}) {
  return (
    <View className={`p-4 border border-[#E0E0E0] rounded-xl  ${classname}`}>
      {title ? (
        <Text className="mb-2" style={{ fontFamily: "Outfit_500Medium" }}>
          {title}
        </Text>
      ) : (
        <></>
      )}
      <View className="flex mb-2 flex-row items-center gap-2 w-full">
        {icon && <View>{icon}</View>}
        <View className="flex-1">{children}</View>
      </View>
      {footer && <View>{footer}</View>}
    </View>
  );
}
