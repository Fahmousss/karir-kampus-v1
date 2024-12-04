import { Feather, Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Container } from "~/components/Container";
import { DialogForm } from "~/components/DialogForm";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function AdministrasiScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container title="Administrasi">
        <View>
          <View className="mb-4 items-center">
            <Image source={require("assets/images/welcome_pict.png")} />
          </View>
          <View className="mb-3">
            <Text
              className="mb-3 text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Pengumpulan Berkas Kerja Praktik
            </Text>
            <View className="gap-3">
              <Button
                className="items-start"
                onPress={() => {
                  router.push("/(administrasi)/detail_administrasi");
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
                    Bimbingan Formulir Kegiatan
                  </Text>
                  <Feather name="plus" size={19} />
                </View>
              </Button>
              <DialogForm
                title="Surat Pengunduran Diri Dosen Pembimbing"
                trigger={
                  <Button className="items-start" variant={"outline"}>
                    <View className="flex flex-row items-center w-full justify-between">
                      <Text
                        style={{
                          fontFamily: "Outfit_500Medium",
                          fontSize: 12,
                        }}
                      >
                        Surat Pengunduran Diri Dosen Pembimbing
                      </Text>
                      <Feather name="plus" size={19} />
                    </View>
                  </Button>
                }
                footer={
                  <View className="w-full border p-2">
                    <View className="flex flex-row justify-between max-w-sm">
                      <Text>Berkas</Text>
                      <Text>*</Text>
                    </View>
                    <View className="gap-3">
                      <Button variant={"outline"}>
                        <Text>+ Tambah</Text>
                      </Button>
                      <Button className="bg-[#99D1FF]">
                        <Text className="text-black">Kumpulkan</Text>
                      </Button>
                    </View>
                  </View>
                }
              >
                <View className="w-full">
                  <View className="mb-10">
                    <Text>Bryan Hanggara - 17:05</Text>
                    <Text className="text-xs">Note :</Text>
                    <Text className="text-xs">
                      Diisi bila dosen mengundurkan diri
                    </Text>
                  </View>
                  <View className="mb-20 flex flex-row justify-between border-b">
                    <Text className="text-xs">
                      Format File PDF dengan ukuran maksimal 5mb
                    </Text>
                    <Text className="text-xs underline">Cek Komentar</Text>
                  </View>
                </View>
              </DialogForm>
              <DialogForm
                title="Pengumpulan Proposal"
                trigger={
                  <Button className="items-start" variant={"outline"}>
                    <View className="flex flex-row items-center w-full justify-between">
                      <Text
                        style={{
                          fontFamily: "Outfit_500Medium",
                          fontSize: 12,
                        }}
                      >
                        Pengumpulan Proposal
                      </Text>
                      <Feather name="plus" size={19} />
                    </View>
                  </Button>
                }
                footer={
                  <View className="w-full border p-2">
                    <View className="flex flex-row justify-between max-w-sm">
                      <Text>Berkas</Text>
                      <Text>*</Text>
                    </View>
                    <View className="gap-3">
                      <Button variant={"outline"}>
                        <Text>+ Tambah</Text>
                      </Button>
                      <Button className="bg-[#99D1FF]">
                        <Text className="text-black">Kumpulkan</Text>
                      </Button>
                    </View>
                  </View>
                }
              >
                <View className="w-full">
                  <View className="mb-10">
                    <Text>Bryan Hanggara - 17:05</Text>
                  </View>
                  <View className="mb-20 flex flex-row justify-between border-b">
                    <Text className="text-xs">
                      Format File PDF dengan ukuran maksimal 5mb
                    </Text>
                    <Text className="text-xs underline">Cek Komentar</Text>
                  </View>
                </View>
              </DialogForm>
              <DialogForm
                title="Surat Permohonan Izin Kerja Praktik"
                trigger={
                  <Button className="items-start" variant={"outline"}>
                    <View className="flex flex-row items-center w-full justify-between">
                      <Text
                        style={{
                          fontFamily: "Outfit_500Medium",
                          fontSize: 12,
                        }}
                      >
                        Surat Permohonan Izin Kerja Praktik
                      </Text>
                      <Feather name="plus" size={19} />
                    </View>
                  </Button>
                }
                footer={
                  <View className="w-full border p-2">
                    <View className="flex flex-row justify-between max-w-sm">
                      <Text>Berkas</Text>
                      <Text>*</Text>
                    </View>
                    <View className="gap-3">
                      <Button variant={"outline"}>
                        <Text>+ Tambah</Text>
                      </Button>
                      <Button className="bg-[#99D1FF]">
                        <Text className="text-black">Kumpulkan</Text>
                      </Button>
                    </View>
                  </View>
                }
              >
                <View className="w-full">
                  <View className="mb-10">
                    <Text>Bryan Hanggara - 17:05</Text>
                  </View>
                  <View className="mb-20 flex flex-row justify-between border-b">
                    <Text className="text-xs">
                      Format File PDF dengan ukuran maksimal 5mb
                    </Text>
                    <Text className="text-xs underline">Cek Komentar</Text>
                  </View>
                </View>
              </DialogForm>
              <DialogForm
                title="Laporan Akhir Kerja Praktik"
                trigger={
                  <Button className="items-start" variant={"outline"}>
                    <View className="flex flex-row items-center w-full justify-between">
                      <Text
                        style={{
                          fontFamily: "Outfit_500Medium",
                          fontSize: 12,
                        }}
                      >
                        Laporan Akhir Kerja Praktik
                      </Text>
                      <Feather name="plus" size={19} />
                    </View>
                  </Button>
                }
                footer={
                  <View className="w-full border p-2">
                    <View className="flex flex-row justify-between max-w-sm">
                      <Text>Berkas</Text>
                      <Text>*</Text>
                    </View>
                    <View className="gap-3">
                      <Button variant={"outline"}>
                        <Text>+ Tambah</Text>
                      </Button>
                      <Button className="bg-[#99D1FF]">
                        <Text className="text-black">Kumpulkan</Text>
                      </Button>
                    </View>
                  </View>
                }
              >
                <View className="w-full">
                  <View className="mb-10">
                    <Text>Bryan Hanggara - 17:05</Text>
                  </View>
                  <View className="mb-20 flex flex-row justify-between border-b">
                    <Text className="text-xs">
                      Format File PDF dengan ukuran maksimal 5mb
                    </Text>
                    <Text className="text-xs underline">Cek Komentar</Text>
                  </View>
                </View>
              </DialogForm>
              <DialogForm
                title="Formulir Kegiatan Harian"
                trigger={
                  <Button className="items-start" variant={"outline"}>
                    <View className="flex flex-row items-center w-full justify-between">
                      <Text
                        style={{
                          fontFamily: "Outfit_500Medium",
                          fontSize: 12,
                        }}
                      >
                        Formulir Kegiatan Harian
                      </Text>
                      <Feather name="plus" size={19} />
                    </View>
                  </Button>
                }
                footer={
                  <View className="w-full border p-2">
                    <View className="flex flex-row justify-between max-w-sm">
                      <Text>Berkas</Text>
                      <Text>*</Text>
                    </View>
                    <View className="gap-3">
                      <Button variant={"outline"}>
                        <Text>+ Tambah</Text>
                      </Button>
                      <Button className="bg-[#99D1FF]">
                        <Text className="text-black">Kumpulkan</Text>
                      </Button>
                    </View>
                  </View>
                }
              >
                <View className="w-full">
                  <View className="mb-10">
                    <Text>Bryan Hanggara - 17:05</Text>
                  </View>
                  <View className="mb-20 flex flex-row justify-between border-b">
                    <Text className="text-xs">
                      Format File PDF dengan ukuran maksimal 5mb
                    </Text>
                    <Text className="text-xs underline">Cek Komentar</Text>
                  </View>
                </View>
              </DialogForm>
            </View>
          </View>
          <View className="mb-3">
            <Text
              className="mb-3 text-2xl"
              style={{
                fontFamily: "Outfit_600SemiBold",
              }}
            >
              Admin
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
                    Surat Persetujuan Pembimbing oleh Ketua Jurusan
                  </Text>
                  <Feather name="download" size={19} />
                </View>
              </Button>
              <Button className="items-start " variant={"outline"}>
                <View className="flex flex-row items-center w-full justify-between ">
                  <Text
                    style={{
                      fontFamily: "Outfit_500Medium",
                      fontSize: 12,
                    }}
                  >
                    Surat Persetujuan Izin KP Wakil Dekan dan Ketua Jurusan
                  </Text>
                  <Feather name="download" size={19} />
                </View>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
}
