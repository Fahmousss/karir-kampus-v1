import { Image, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Container } from "~/components/Container";
import { Text } from "~/components/ui/text";
import { EmojiProgress } from "~/components/ui/progress";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "~/components/ui/button";
import { CalendarList } from "~/components/CalendarList";
import { router } from "expo-router";
// import { EmojiProgress } from "~/components/ui/emoji-progress";

export default function ProgressScreen() {
  const [progress, setProgress] = useState(50);
  return (
    <Container title="Progress">
      <View>
        <View className="p-6 mb-3 rounded-2xl bg-[#63ABE6]">
          <View className="mb-3">
            <Text
              className="text-white"
              style={{
                fontFamily: "Outfit_500Medium",
              }}
            >
              Dear Bryan,
            </Text>
            <Text
              className="text-xs text-white"
              style={{
                fontFamily: "Outfit_500Medium",
              }}
            >
              Jangan Lupa Untuk Selalu Cek Progress Bimbingan Mu Ya!
            </Text>
          </View>

          <EmojiProgress value={progress} className="w-full" />
        </View>
        <View className="mb-3">
          <Text
            className="mb-3 text-2xl"
            style={{
              fontFamily: "Outfit_600SemiBold",
            }}
          >
            Bimbingan Kerja Praktik
          </Text>
          <View className="gap-3">
            <Button className="items-start" variant={"outline"}>
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 12,
                  }}
                >
                  Bimbingan Topik Kerja Praktik
                </Text>
                <Ionicons name="checkmark-circle" size={19} />
              </View>
            </Button>
            <Button className="items-start" variant={"outline"}>
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 12,
                  }}
                >
                  Bimbingan Proposal Dan Tempat Kerja Praktik
                </Text>
                <Ionicons name="checkmark-circle" size={19} />
              </View>
            </Button>
            <Button className="items-start" variant={"outline"}>
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 12,
                  }}
                >
                  Bimbingan Formulir Kegiatan
                </Text>
                <Ionicons name="checkmark-circle" size={19} />
              </View>
            </Button>
            <Button
              className="items-start"
              onPress={() => {
                router.push("/detail_bimbingan");
              }}
              variant={"outline"}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 12,
                  }}
                >
                  Bimbingan Laporan Kerja Praktik
                </Text>
              </View>
            </Button>
            <Button className="items-start" variant={"outline"}>
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{
                    fontFamily: "Outfit_500Medium",
                    fontSize: 12,
                  }}
                >
                  Bimbingan Revisi Laporan Kerja Praktik Akhir
                </Text>
              </View>
            </Button>
          </View>
        </View>
        <View className="mb-3">
          <Text
            className="mb-3 text-2xl"
            style={{
              fontFamily: "Outfit_600SemiBold",
            }}
          >
            Inspirasi
          </Text>
          <View className="flex-1 items-start p-4 ">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 4,
                paddingHorizontal: 4,
              }}
            >
              <View className="mx-2">
                <Image source={require("assets/images/welcome_pict.png")} />
              </View>

              <View className="mx-2">
                <Image source={require("assets/images/inspirasi-1.png")} />
              </View>
              <View className="mx-2">
                <Image source={require("assets/images/inspirasi-2.png")} />
              </View>
              <View className="mx-2">
                <Image source={require("assets/images/inspirasi-3.png")} />
              </View>
              <View className="mx-2">
                <Image source={require("assets/images/inspirasi-4.png")} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Container>
  );
}
