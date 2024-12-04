import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "./ui/button";

export function ApprovalCard() {
  return (
    <View
      style={styles.shadow}
      className="bg-white rounded-xl border-l-[4px] border-[#3470A2] w-full p-4 mb-6"
    >
      <View className="max-w-[220px]">
        <Text
          className="text-sm text-black "
          style={{
            fontFamily: "Outfit_700Bold",
          }}
        >
          Persetujuan Pembimbing Kerja Praktik
        </Text>
        <Text
          className="text-[9px] text-[#5F5F61] mb-4"
          style={{
            fontFamily: "Outfit_500Medium",
          }}
        >
          Berikut Adalah Hasil Pengumuman Pembimbing Kerja Praktik Yang Telah
          Disetujui Oleh Ketua Jurusan
        </Text>
      </View>
      <View className="items-start">
        <Button size={"sm"} className="bg-yellow-400 rounded-full ">
          <Text
            className="text-white text-xs text-center"
            style={{
              fontFamily: "Outfit_500Medium",
            }}
          >
            Klik Disini
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});
