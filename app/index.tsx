import { View, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Bell, BellDark } from "~/components/assets/Bell";
import { BlurView } from "expo-blur";
import { Input } from "~/components/ui/input";
import { Ionicons } from "@expo/vector-icons";
import { File } from "~/components/assets/File";
import { Calendar } from "~/components/assets/Calendar";
import { LineUp } from "~/components/assets/LineUp";
import { ApprovalCard } from "~/components/ApprovalCard";
import { CalendarList } from "~/components/CalendarList";
import { router } from "expo-router";

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View className="rounded-b-[20px] h-[311px] px-10 py-16 overflow-hidden bg-[#3470A2] relative">
          <View className="absolute bg-[#63ABE6] w-[500px] h-[500px] rounded-full -right-[265px] top-10"></View>
          <View className="absolute -right-16 -bottom-10">
            <Image
              source={require("assets/images/karir_kampus.png")}
              className="w-[288px] h-[262px]"
            />
          </View>
          <View className="flex flex-row mb-14 justify-between">
            <View className="flex flex-col">
              <Text
                className="text-sm text-white"
                style={{ fontFamily: "Outfit_700Bold" }}
              >
                Selamat Pagi
              </Text>
              <Text
                className="text-2xl text-[#FFC727]"
                style={{ fontFamily: "Outfit_800ExtraBold" }}
              >
                Bryan Hanggara
              </Text>
            </View>
            <Button
              size={"icon"}
              className="p-7 bg-white rounded-full flex items-center"
            >
              <Bell />
            </Button>
          </View>
          <BlurView
            intensity={60}
            tint="extraLight"
            style={{
              overflow: "hidden",
              borderRadius: 12,
            }}
            className="p-6 "
            experimentalBlurMethod="dimezisBlurView"
          >
            <View className="flex flex-col">
              <Text
                className="text-xl text-white"
                style={{ fontFamily: "Outfit_600SemiBold" }}
              >
                Fakultas Ilmu Komputer
              </Text>
              <Text
                className="text-xl text-white"
                style={{ fontFamily: "Outfit_600SemiBold" }}
              >
                Jurusan Sistem Informasi
              </Text>
            </View>
          </BlurView>
        </View>
        <View>
          <View className="absolute -top-5 w-[350px] left-10  z-10">
            <View className="items-center justify-center">
              <Ionicons
                name="search"
                size={17}
                color={"#8A8A8A"}
                className="absolute left-4 z-10"
              />
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
            </View>
          </View>
        </View>
        {/* Scrollable Content */}
        <ScrollView
          className="px-6"
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 30 }}
        >
          <View className="mb-8">
            <Text
              className="mb-4 text-xl text-[#002649]"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Fitur
            </Text>
            <View className="flex flex-row justify-between">
              <View className="flex items-center">
                <Button
                  onPress={() => router.push("/administrasi")}
                  size={"icon"}
                  className="rounded-xl bg-[#FFC727] p-7"
                >
                  <File />
                </Button>
                <Text
                  className="text-[#5F5F61] text-base"
                  style={{
                    fontFamily: "Outfit_500Medium",
                  }}
                >
                  Administrasi
                </Text>
              </View>
              <View className="flex items-center">
                <Button
                  onPress={() => router.push("/progress")}
                  size={"icon"}
                  className="rounded-xl bg-[#FFC727] p-7"
                >
                  <LineUp />
                </Button>
                <Text
                  className="text-[#5F5F61] text-base"
                  style={{
                    fontFamily: "Outfit_500Medium",
                  }}
                >
                  Progress
                </Text>
              </View>
              <View className="flex items-center">
                <Button
                  size={"icon"}
                  onPress={() => {
                    router.push("/(pengingat)/pengingat");
                  }}
                  className="rounded-xl bg-[#FFC727] p-7"
                >
                  <Calendar />
                </Button>
                <Text
                  className="text-[#5F5F61] text-base"
                  style={{
                    fontFamily: "Outfit_500Medium",
                  }}
                >
                  Pengingat
                </Text>
              </View>
            </View>
          </View>

          <View className="mb-8">
            <Text
              className="mb-4 text-xl text-[#002649]"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Pengumuman
            </Text>
            <View className="flex flex-col bg-white items-start border border-[#00000050] rounded-xl px-6 py-3">
              <View className="mb-4 flex items-center gap-2 flex-row border-b-2 w-full  border-[#5F5F61]">
                <BellDark />
                <Text
                  className="text-sm text-[#5F5F61]"
                  style={{
                    fontFamily: "Outfit_500Medium",
                  }}
                >
                  Kerja Pratik Universitas Sriwijaya 2024
                </Text>
              </View>

              <ApprovalCard />
              <ApprovalCard />
              <ApprovalCard />
            </View>
          </View>

          <View className="mb-8">
            <Text
              className="mb-4 text-xl text-[#002649]"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Pengingat
            </Text>
            <CalendarList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
