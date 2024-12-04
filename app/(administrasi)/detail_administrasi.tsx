import { View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { InputSelect } from "~/components/InputSelect";
import { provinsiKotaData } from "~/constants/data_dummy";
import * as DocumentPicker from "expo-document-picker";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function DetailAdministrasi() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [file, setFile] = useState<any>(null); // To store the selected file

  // Filter the cities based on the selected province
  const selectedCities =
    (selectedProvince &&
      provinsiKotaData.find((provinsi) => provinsi.value === selectedProvince)
        ?.cities) ||
    [];

  // Function to handle document selection
  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the document type
        copyToCacheDirectory: false,
      });

      if (result.type === "success") {
        setFile(result); // Store the selected file
      } else {
        console.log("Document picker was canceled");
      }
    } catch (error) {
      console.error("Error picking document", error);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{ animation: "slide_from_bottom", headerShown: false }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View
            className="px-6 flex-1 items-center"
            style={{
              paddingTop:
                (StatusBar.currentHeight ? StatusBar.currentHeight : 40) + 30,
              paddingBottom: 32,
            }}
          >
            <Text
              className="mb-3 text-xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Berkas Pengajuan Dosen Pembimbing
            </Text>
            <View className="mb-3 w-full">
              <Text
                className="mb-3 text-lg"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Biodata Mahasiswa
              </Text>
              <View className="gap-3">
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="NIM"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Nama"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Tempat Lahir"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Tanggal Lahir"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Program"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Angkatan"
                />
              </View>
            </View>
            <View className="mb-3 w-full">
              <Text
                className="mb-3 text-lg"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Alamat
              </Text>
              <View className="gap-3">
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Jalan"
                />
                <Input
                  style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                  placeholder="Detail Lainnya"
                />
                <View className="flex flex-row justify-between">
                  {/* Province Select */}
                  <InputSelect
                    placeholder="Provinsi"
                    label="Provinces"
                    data={provinsiKotaData.map((provinsi) => ({
                      label: provinsi.label,
                      value: provinsi.value,
                    }))}
                    onChange={(value: any) => setSelectedProvince(value)} // Handle province selection
                  />
                  {/* City Select */}
                  <InputSelect
                    placeholder="Kota"
                    label="Cities"
                    data={selectedCities}
                    onChange={(value: any) => setSelectedCity(value)} // Handle city selection
                  />
                  <Input
                    style={{ fontFamily: "Outfit_400Regular", fontSize: 11 }}
                    placeholder="Kode Pos"
                  />
                </View>
              </View>
            </View>

            {/* Surat Pengajuan Dosen Pembimbing */}
            <View className="mb-3 w-full">
              <Text
                className="mb-3 text-lg"
                style={{
                  fontFamily: "Outfit_600SemiBold",
                }}
              >
                Surat Pengajuan Dosen Pembimbing
              </Text>
              <View className="gap-3">
                <View className="flex flex-row justify-between">
                  <Text
                    className="text-xs"
                    style={{
                      fontFamily: "Outfit_600SemiBold",
                    }}
                  >
                    <Text className="text-red-600 text-xs">*Format File </Text>
                    PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text
                    className="text-xs underline"
                    style={{
                      fontFamily: "Outfit_600SemiBold",
                    }}
                  >
                    Format Surat
                  </Text>
                </View>

                {/* Document Picker Button */}
                <Button
                  onPress={handleDocumentPick}
                  className="items-start"
                  variant={"outline"}
                >
                  <View className="flex flex-row gap-2 items-center">
                    <FontAwesome name="cloud-upload" size={20} />
                    <Text
                      style={{
                        fontFamily: "Outfit_400Regular",
                        fontSize: 12,
                      }}
                    >
                      {file?.name
                        ? `Selected file: ${file?.name}`
                        : "No file selected"}
                    </Text>
                  </View>
                </Button>
              </View>
            </View>
            <View className="items-end w-full">
              <Button className="rounded-full bg-[#FFC828]">
                <Text>Kirim</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
