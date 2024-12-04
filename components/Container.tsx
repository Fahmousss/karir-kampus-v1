import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "./ui/input";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { ExpandLeftDouble } from "./assets/ExpandLeftDouble";
import { router } from "expo-router";

export function Container({
  children,
  title = "",
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          className="rounded-b-[20px] px-10 overflow-hidden bg-[#3470A2] relative"
          style={{
            paddingTop:
              (StatusBar.currentHeight ? StatusBar.currentHeight : 40) + 30,
            paddingBottom: 32,
          }}
        >
          <View className="absolute bg-[#63ABE6] w-[500px] h-[500px] rounded-full -right-[265px] top-10"></View>
          <View className="">
            <ImageBackground
              imageStyle={{
                opacity: 0.5,
              }}
              source={require("assets/images/karir_kampus.png")}
              className="w-[288px] absolute -right-20 top-16  h-[262px]"
            />
          </View>
          <View>
            <Button
              onPress={() => {
                router.push("/");
              }}
              size={"icon"}
              className="p-7 rounded-full bg-[#FFC727]   mb-10"
            >
              <ExpandLeftDouble />
            </Button>
          </View>
          <View className="flex flex-col">
            <Text
              className="text-sm text-white"
              style={{ fontFamily: "Outfit_700Bold" }}
            >
              Selamat Datang Di {title}
            </Text>
            <Text
              className="text-2xl text-[#FFC727]"
              style={{ fontFamily: "Outfit_800ExtraBold" }}
            >
              Bryan Hanggara
            </Text>
          </View>
        </View>
        <View>
          <View className="absolute w-[350px] -top-6 left-10 z-10">
            <View className="items-center justify-center">
              <Input
                placeholder="Apa yang kamu cari hari ini?"
                className="rounded-full px-12  w-full "
                clearButtonMode="always"
                style={{
                  shadowColor: "black",
                  elevation: 20,
                  fontFamily: "Outfit_500Medium",
                  fontSize: 14,
                }}
              />
              <Ionicons
                name="search"
                size={17}
                color={"#8A8A8A"}
                className="absolute left-4 "
              />
            </View>
          </View>
        </View>
        {/* Scrollable Content */}
        <ScrollView
          className="px-6"
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 30 }}
        >
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
