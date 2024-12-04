import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Container } from "~/components/Container";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { ExpandLeftDouble } from "~/components/assets/ExpandLeftDouble";
import { Input } from "~/components/ui/input";
import { BimbinganCard } from "~/components/BimbinganCard";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import ExpandRightDouble from "~/components/assets/ExpandRightDouble";

export default function PengingatScreen() {
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
          <View className="flex flex-col mb-4">
            <Text
              className="text-sm text-white"
              style={{ fontFamily: "Outfit_700Bold" }}
            >
              Selamat Datang Di Pengingat
            </Text>
            <Text
              className="text-2xl text-[#FFC727]"
              style={{ fontFamily: "Outfit_800ExtraBold" }}
            >
              Bryan Hanggara
            </Text>
          </View>
          <BlurView
            intensity={60}
            tint="extraLight"
            style={{
              overflow: "hidden",
              borderRadius: 12,
            }}
            className="p-4"
            experimentalBlurMethod="dimezisBlurView"
          >
            <View className="flex flex-row  items-center gap-3">
              <View>
                <Ionicons name="calendar-outline" color={"#3470A2"} size={40} />
              </View>
              <View>
                <View className="flex flex-row  gap-1 justify-between">
                  <Text
                    className="text-base text-black"
                    style={{ fontFamily: "Outfit_600SemiBold" }}
                  >
                    Bimbingan Laporan KP
                  </Text>
                  <Text
                    className="text-sm text-red-500"
                    style={{ fontFamily: "Outfit_400Regular" }}
                  >
                    *prioritas
                  </Text>
                </View>
                <Text
                  className="text-sm mb-3"
                  style={{ fontFamily: "Outfit_400Regular" }}
                >
                  Hari ini pukul 13:00
                </Text>
                <View className="gap-1 flex flex-row items-center">
                  <Text
                    className="text-xs"
                    style={{ fontFamily: "Outfit_400Regular" }}
                  >
                    Kategori:
                  </Text>
                  <Text
                    className="text-xs bg-yellow-300 p-1 rounded-full"
                    style={{ fontFamily: "Outfit_500Medium" }}
                  >
                    #Bimbingan
                  </Text>
                  <Text
                    className="text-xs bg-yellow-300 p-1 rounded-full"
                    style={{ fontFamily: "Outfit_500Medium" }}
                  >
                    #Laporan
                  </Text>
                </View>
              </View>
            </View>
          </BlurView>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          className="px-6"
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 30 }}
        >
          <View className="mb-3">
            <Text
              className="mb-3 text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Jadwal Hari ini
            </Text>
            <View className="gap-3">
              <BimbinganCard
                footer={
                  <Button className="bg-[#FFE088]" size={"sm"}>
                    <View className="flex items-center gap-2 flex-row">
                      <Ionicons name="time" size={16} />
                      <Text
                        className="text-sm"
                        style={{
                          fontFamily: "Outfit_600SemiBold",
                        }}
                      >
                        Sudah dilakukan pukul 09:20
                      </Text>
                    </View>
                  </Button>
                }
                classname={"grow bg-[#FFF9E9]"}
                title={""}
                icon={<FontAwesome name="laptop" size={35} />}
              >
                <View>
                  <View className="flex flex-row justify-between ">
                    <Text
                      style={{ fontFamily: "Outfit_700Bold" }}
                      className="text-lg"
                    >
                      Rapat Perusahaan
                    </Text>
                    <Ionicons name="checkmark-circle" size={24} />
                  </View>
                  <Text
                    style={{ fontFamily: "Outfit_400Regular" }}
                    className="text-sm text-[#8A8A8A]"
                  >
                    Hari ini pukul 09:00
                  </Text>
                </View>
              </BimbinganCard>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(progress)/detail_bimbingan");
                }}
              >
                <BimbinganCard
                  classname={"grow bg-[#FFF9E9]"}
                  title={""}
                  footer={null}
                  icon={<Ionicons name="calendar-outline" size={35} />}
                >
                  <View>
                    <View className="flex flex-row justify-between ">
                      <Text
                        style={{ fontFamily: "Outfit_700Bold" }}
                        className="text-lg"
                      >
                        Bimbingan Laporan KP
                      </Text>
                      <FontAwesome name="circle" size={24} />
                    </View>
                    <Text
                      style={{ fontFamily: "Outfit_400Regular" }}
                      className="text-sm text-[#8A8A8A]"
                    >
                      Hari ini pukul 13:00
                    </Text>
                  </View>
                </BimbinganCard>
              </TouchableOpacity>
              <BimbinganCard
                classname={"grow bg-[#FFF9E9]"}
                title={""}
                footer={null}
                icon={<Ionicons name="calendar-outline" size={35} />}
              >
                <View>
                  <View className="flex flex-row justify-between ">
                    <Text
                      style={{ fontFamily: "Outfit_700Bold" }}
                      className="text-lg"
                    >
                      Sharing Session
                    </Text>
                    <FontAwesome name="circle" size={24} />
                  </View>
                  <Text
                    style={{ fontFamily: "Outfit_400Regular" }}
                    className="text-sm text-[#8A8A8A]"
                  >
                    Hari ini pukul 16:00
                  </Text>
                </View>
              </BimbinganCard>
            </View>
          </View>
          <View className="mb-3">
            <Text
              className="mb-3 text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Jadwal Besok
            </Text>
            <View className="gap-3">
              <BimbinganCard
                classname={"grow bg-[#FFF9E9]"}
                title={""}
                footer={null}
                icon={<Ionicons name="calendar-outline" size={35} />}
              >
                <View>
                  <View className="flex flex-row justify-between ">
                    <Text
                      style={{ fontFamily: "Outfit_700Bold" }}
                      className="text-lg"
                    >
                      Revisi Database
                    </Text>
                    <FontAwesome name="circle" size={24} />
                  </View>
                  <Text
                    style={{ fontFamily: "Outfit_400Regular" }}
                    className="text-sm text-[#8A8A8A]"
                  >
                    Besok pukul 09:00
                  </Text>
                </View>
              </BimbinganCard>
              <BimbinganCard
                classname={"grow bg-[#FFF9E9]"}
                title={""}
                footer={null}
                icon={<Ionicons name="calendar-outline" size={35} />}
              >
                <View>
                  <View className="flex flex-row justify-between ">
                    <Text
                      style={{ fontFamily: "Outfit_700Bold" }}
                      className="text-lg"
                    >
                      Rapat Magang
                    </Text>
                    <FontAwesome name="circle" size={24} />
                  </View>
                  <Text
                    style={{ fontFamily: "Outfit_400Regular" }}
                    className="text-sm text-[#8A8A8A]"
                  >
                    Besok pukul 13:00
                  </Text>
                </View>
              </BimbinganCard>
            </View>
          </View>
          <View className="items-end">
            <Pressable
              onPress={() => {
                router.push("/(pengingat)/detail_pengingat");
              }}
            >
              <ExpandRightDouble />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
