import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { ExpandLeftDouble } from "~/components/assets/ExpandLeftDouble";
import { DialogForm } from "~/components/DialogForm";
import HorizontalLine from "~/components/HorizontalLine";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function DetailPengingat() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        className="px-10 flex-1 bg-[#3470A2]"
        style={{
          paddingTop:
            (StatusBar.currentHeight ? StatusBar.currentHeight : 40) + 30,
          paddingBottom: 32,
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(127,140,151,1)"]}
          style={styles.background}
        />
        {/* Back Button */}
        <View>
          <Button
            onPress={() => {
              router.back();
            }}
            size={"icon"}
            className="p-7 rounded-full bg-[#FFC727]  mb-8"
          >
            <ExpandLeftDouble />
          </Button>
        </View>

        {/* Scrollable Content */}

        {/* Calendar with Rounded Corners */}
        <View className="rounded-lg overflow-hidden bg-white shadow-sm">
          <Calendar
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#b6c1cd",
              selectedDayBackgroundColor: "#FFEBB7",
              selectedDayTextColor: "#000000",
              todayTextColor: "#00adf5",
              dayTextColor: "#2d4150",
              textDisabledColor: "#d9e1e8",
              arrowColor: "#FFD700",
              monthTextColor: "#000",
              textDayFontFamily: "Outfit_400Regular", // Use Loaded Font
              textMonthFontFamily: "Outfit_600SemiBold",
              textDayHeaderFontFamily: "Outfit_500Medium",
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 14,
            }}
            markedDates={{
              "2024-08-10": {
                selected: true,
                marked: true,
                selectedColor: "#FFD700",
              },
              "2024-08-15": {
                selected: true,
                marked: true,
                selectedColor: "#FFD700",
              },
              "2024-08-17": {
                selected: true,
                marked: true,
                selectedColor: "#FFD700",
              },
            }}
            style={{
              borderRadius: 16, // Rounded Corners
              margin: 8,
            }}
          />
        </View>

        {/* Agenda Section */}
        <Text
          className="my-4 text-2xl"
          style={{
            fontFamily: "Outfit_600SemiBold",
          }}
        >
          Jadwal Hari ini
        </Text>
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          <View className="flex-row gap-3 flex items-center">
            <View className="gap-16">
              <Text
                className="text-lg text-black"
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
              >
                13:00
              </Text>
              <Text
                className="text-lg text-black"
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
              >
                14:00
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push("/(progress)/detail_bimbingan");
              }}
              style={styles.shadow}
              className="bg-white rounded-xl border-l-[4px] border-[#143C5E] p-4 flex-1"
            >
              <View>
                <Text
                  className="text-sm text-black "
                  style={{
                    fontFamily: "Outfit_700Bold",
                  }}
                >
                  Bimbingan Laporan KP
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
            </TouchableOpacity>
          </View>

          <HorizontalLine />

          <View className="flex-row gap-3 flex items-center">
            <View className="gap-16">
              <Text
                className="text-lg text-black"
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
              >
                15:00
              </Text>
              <Text
                className="text-lg text-black"
                style={{
                  fontFamily: "Outfit_400Regular",
                }}
              >
                16:00
              </Text>
            </View>
            <View
              style={styles.shadow}
              className="bg-white rounded-xl border-l-[4px] border-[#143C5E] p-4 flex-1"
            >
              <View>
                <Text
                  className="text-sm text-black "
                  style={{
                    fontFamily: "Outfit_700Bold",
                  }}
                >
                  Bimbingan Formulir KP
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
                    #Magang
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Floating Action Button */}
        </ScrollView>
      </View>
      <DialogForm
        title="Buat Jadwal Baru"
        trigger={
          <TouchableOpacity
            // size={"icon"}
            className="absolute p-4 bottom-4 right-4 rounded-full bg-[#143C5E] items-center"
          >
            <Feather name="plus" size={35} color={"white"} />
          </TouchableOpacity>
        }
        footer={
          <View className="items-end">
            <Button className="bg-[#99D1FF] rounded-full">
              <Text className="text-white ">Kumpulkan</Text>
            </Button>
          </View>
        }
      >
        <View className="w-full">
          <View className="mb-4">
            <Text
              className=" text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Tanggal
            </Text>

            <View className="rounded-lg overflow-hidden bg-white shadow-sm">
              <Calendar
                theme={{
                  backgroundColor: "#ffffff",
                  calendarBackground: "#ffffff",
                  textSectionTitleColor: "#b6c1cd",
                  selectedDayBackgroundColor: "#FFEBB7",
                  selectedDayTextColor: "#000000",
                  todayTextColor: "#00adf5",
                  dayTextColor: "#2d4150",
                  textDisabledColor: "#d9e1e8",
                  arrowColor: "#FFD700",
                  monthTextColor: "#000",
                  textDayFontFamily: "Outfit_400Regular", // Use Loaded Font
                  textMonthFontFamily: "Outfit_600SemiBold",
                  textDayHeaderFontFamily: "Outfit_500Medium",
                  textDayFontSize: 16,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 14,
                }}
                markedDates={{
                  "2024-08-10": {
                    selected: true,
                    marked: true,
                    selectedColor: "#FFD700",
                  },
                  "2024-08-15": {
                    selected: true,
                    marked: true,
                    selectedColor: "#FFD700",
                  },
                  "2024-08-17": {
                    selected: true,
                    marked: true,
                    selectedColor: "#FFD700",
                  },
                }}
                style={{
                  borderRadius: 16, // Rounded Corners
                  margin: 8,
                }}
              />
            </View>
          </View>
          <View className="flex mb-4 flex-row gap-10">
            <View className="gap-3">
              <Text
                className=" text-2xl"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Waktu
              </Text>
              <View className="flex flex-row items-center gap-3">
                <Input />
                <Text className="text-xl font-bold">:</Text>
                <Input />
              </View>
            </View>
            <View className="flex-1 gap-3">
              <Text
                className=" text-2xl"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Prioritas
              </Text>
              <View className="flex flex-row gap-2">
                <BouncyCheckbox
                  size={20}
                  fillColor="black"
                  unFillColor="#FFFFFF"
                  disableText
                  iconStyle={{ borderColor: "black" }}
                />
                <Text className="text-xs">
                  Jadikan prioritas agar muncul di beranda
                </Text>
              </View>
            </View>
          </View>
          <View className="gap-3 mb-4">
            <Text
              className=" text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Judul
            </Text>
            <Input placeholder="Ketik disini..." className="rounded-full" />
          </View>
          <View className="gap-3 mb-4">
            <Text
              className=" text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Kategori
            </Text>
            <Input className="rounded-full" placeholder="Ketik disini..." />
          </View>
          <View className="gap-3 mb-4">
            <Text
              className=" text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Lokasi
            </Text>
            <Input className="rounded-full" placeholder="Ketik disini..." />
          </View>
        </View>
      </DialogForm>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
});
