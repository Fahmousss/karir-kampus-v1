import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Calendar } from "~/components/assets/Calendar"; // Replace with your Calendar icon component

const CalendarCard = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <View style={[styles.card, { shadowColor: "#000" }]}>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Calendar />
          <Text className="text-base font-bold text-black ml-2">Kalender</Text>
        </View>
        <Text className="text-xs text-[#8A8A8A]">{time}</Text>
      </View>
      <Text className="text-sm font-bold text-black mt-3">{title}</Text>
      <Text className="text-xs text-[#5F5F61] mt-1">{description}</Text>
    </View>
  );
};

export function CalendarList() {
  return (
    <View className="flex-1 bg-white items-start border border-[#00000050] rounded-3xl p-4 ">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <CalendarCard
          title="Bimbingan Proposal Dan Tempat Kerja Praktik"
          description="Dilakukan Secara Tatap Muka\nAgustus 05, 2024 Jam 10:00 AM"
          time="4m Ago"
        />
        <CalendarCard
          title="Pengumpulan Proposal Dan Surat Kerja Praktik"
          description="Agustus 01, 2024 S.D Agustus 31, 2024"
          time=""
        />
        {/* Add more CalendarCard components here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginRight: 10,
    width: 280,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
  },
});
