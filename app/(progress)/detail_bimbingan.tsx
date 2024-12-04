import { View, Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { ExpandLeftDouble } from "~/components/assets/ExpandLeftDouble";
import { Calendar } from "~/components/assets/Calendar";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { BimbinganCard } from "~/components/BimbinganCard";
import { Input } from "~/components/ui/input";

export default function DetailBimbingan() {
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
          <View className="flex">
            <Button
              onPress={() => {
                router.back();
              }}
              size={"icon"}
              className="p-7 rounded-full flex-none bg-[#FFC727]"
            >
              <ExpandLeftDouble />
            </Button>
            <View className="grow items-center">
              <View className=" bg-[#63ABE6] justify-center items-center w-[185px] h-[185px] rounded-full">
                <Ionicons name="calendar-outline" size={55} />
                <Text
                  className="text-2xl"
                  style={{
                    fontFamily: "Outfit_700Bold",
                  }}
                >
                  Bimbingan
                </Text>
                <Text
                  className="text-base opacity-50"
                  style={{
                    fontFamily: "Outfit_400Regular",
                  }}
                >
                  Laporan Kerja Praktik
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Scrollable Content */}
        <ScrollView
          className="px-6"
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 30 }}
        >
          <View className="gap-3 mb-3">
            <View className="flex flex-row items-center gap-3">
              <BimbinganCard
                footer={null}
                classname={"grow"}
                title={"Durasi"}
                icon={<Ionicons name="calendar-clear-outline" size={35} />}
              >
                <Text style={{ fontFamily: "Outfit_500Medium" }}>1 Bulan</Text>
              </BimbinganCard>
              <BimbinganCard
                footer={null}
                classname={"grow"}
                title={"Frekuensi"}
                icon={<Ionicons name="bar-chart-outline" size={35} />}
              >
                <Text style={{ fontFamily: "Outfit_500Medium" }}>
                  2 x Seminggu
                </Text>
              </BimbinganCard>
            </View>
            <View className="flex flex-row items-center gap-3">
              <BimbinganCard
                footer={null}
                classname={"grow"}
                title={"Kategori"}
                icon={<AntDesign name="tago" size={35} />}
              >
                <View className="gap-1">
                  <Text
                    className="text-xs"
                    style={{ fontFamily: "Outfit_500Medium" }}
                  >
                    #Bimbingan
                  </Text>
                  <Text
                    className="text-xs"
                    style={{ fontFamily: "Outfit_500Medium" }}
                  >
                    #Laporan
                  </Text>
                </View>
              </BimbinganCard>
              <BimbinganCard
                footer={null}
                classname={"grow"}
                title={"Jam"}
                icon={<Ionicons name="time-outline" size={35} />}
              >
                <Text style={{ fontFamily: "Outfit_500Medium" }}>
                  13:00 - 14:00
                </Text>
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
              Lokasi
            </Text>
            <BimbinganCard
              footer={null}
              classname={"grow"}
              title={""}
              icon={<Entypo name="location" size={35} />}
            >
              <View>
                <Text
                  style={{ fontFamily: "Outfit_700Bold" }}
                  className="text-lg"
                >
                  Gedung Diklat Fasilkom Bukit
                </Text>
                <Text
                  style={{ fontFamily: "Outfit_400Regular" }}
                  className="text-sm text-[#8A8A8A]"
                >
                  Lantai 4, Ruang Dosen
                </Text>
              </View>
            </BimbinganCard>
          </View>
          <View>
            <View className="mb-3">
              <Text
                className="mb-3 text-2xl"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Catatan
              </Text>
              <Input
                style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                placeholder="Tambahkan catatan disini..."
              />
            </View>
            <View className="mb-3">
              <Text
                className="mb-3 text-2xl"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Kontak
              </Text>
              <BimbinganCard classname={""} title={""} icon={""} footer={null}>
                <View className="flex px-4 py-2 flex-row items-center justify-between">
                  <View className="items-center">
                    <View>
                      <FontAwesome name="whatsapp" size={30} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Outfit_600SemiBold",
                      }}
                      className=""
                    >
                      Whatsapp
                    </Text>
                  </View>
                  <View className="items-center">
                    <View>
                      <Feather name="phone-call" size={30} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Outfit_600SemiBold",
                      }}
                      className=""
                    >
                      Telepon
                    </Text>
                  </View>
                  <View className="items-center">
                    <View>
                      <Feather name="mail" size={30} />
                    </View>
                    <Text
                      style={{
                        fontFamily: "Outfit_600SemiBold",
                      }}
                      className=""
                    >
                      Email
                    </Text>
                  </View>
                </View>
              </BimbinganCard>
            </View>
          </View>
          <View>
            <Button className="bg-[#99D1FF]">
              <Text className="text-black">Selesai</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
