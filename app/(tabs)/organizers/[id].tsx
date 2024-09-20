import AppScreenTemplate from "@/components/AppScreenTemplate";
import DeleteModal from "@/components/DeleteModal";
import InfoCard from "@/components/InfoCard";
import ItemCard from "@/components/ItemCard";
import ItemModal from "@/components/ItemModal";
import { generateId } from "@/utils/idManager";
import { encodeIdToHash } from "@/utils/hashDecoder";
import { useUserContext } from "@/context/UserContext";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Plus, QrCode, Download, Share2, X } from "lucide-react-native";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { captureRef } from "react-native-view-shot";
import QRCode from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";

export default function OrganizerInfo() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { readOrganizer, deleteOrganizer, createItem, deleteItem, updateItem } =
    useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeRef, setQrCodeRef] = useState(null);

  const organizerId = parseInt(id!);
  const organizer = readOrganizer(organizerId);

  if (!organizer) {
    return (
      <Center flex={1}>
        <Text>Organizador não encontrado</Text>
      </Center>
    );
  }

  const infos = [organizer.name, organizer.description];

  const handleAddItem = (newItem: {
    name: string;
    image: string;
    quantity: number;
  }) => {
    createItem(organizer.id, {
      id: generateId("item"),
      name: newItem.name,
      image: newItem.image,
      quantity: newItem.quantity,
    });

    setIsModalOpen(false);
  };

  const handleDeleteOrganizer = () => {
    deleteOrganizer(organizer.id);
    router.back();
  };

  const handleItemSave = (updatedItem) => {
    updateItem(organizerId, updatedItem);
  };

  const handleDownloadQRCode = async () => {
    if (qrCodeRef) {
      try {
        const uri = await captureRef(qrCodeRef, {
          format: "png",
          quality: 1,
        });

        const fileName = `qrcode_${organizer.name}.png`;

        // Verificar se é Android e salvar na pasta de Downloads
        if (Platform.OS === "android") {
          // Usar StorageAccessFramework para salvar na pasta de Downloads
          const permissions =
            await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

          if (permissions.granted) {
            const downloadDir = `${permissions.directoryUri}/${fileName}`;

            // Converter a URI da imagem capturada para Base64
            const base64 = await FileSystem.readAsStringAsync(uri, {
              encoding: FileSystem.EncodingType.Base64,
            });

            // Salvar o arquivo na pasta de Downloads pública
            await FileSystem.StorageAccessFramework.createFileAsync(
              permissions.directoryUri,
              fileName,
              "image/png"
            ).then(async (uri) => {
              await FileSystem.writeAsStringAsync(uri, base64, {
                encoding: FileSystem.EncodingType.Base64,
              });
              alert(`QR Code salvo com sucesso em: ${uri}`);
            });
          } else {
            alert("Permissão para acessar a pasta de Downloads negada.");
          }
        } else {
          // iOS não permite salvar diretamente na pasta de Downloads
          const cacheDir = `${FileSystem.cacheDirectory}${fileName}`;
          await FileSystem.writeAsStringAsync(cacheDir, uri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          await Sharing.shareAsync(cacheDir);
        }
      } catch (error) {
        console.error("Erro ao salvar o QR Code: ", error);
      }
    }
  };

  const handleShareQRCode = async () => {
    if (qrCodeRef) {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
      });

      await Sharing.shareAsync(uri);
    }
  };

  return (
    <AppScreenTemplate title={organizer.name}>
      <ScrollView px="$6">
        <ItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddItem}
        />

        <DeleteModal
          name="organizador"
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          onDelete={handleDeleteOrganizer}
        />

        <Modal isOpen={showQRCode} onClose={() => setShowQRCode(false)}>
          <ModalBackdrop />

          <ModalContent>
            <ModalHeader bg="#4C1D95" h="$12" mb="$4" position="relative">
              <ModalCloseButton position="absolute" top="$2" right="$2">
                <X size={24} color="#FFFFFF" strokeWidth={2} />
              </ModalCloseButton>
            </ModalHeader>

            <ModalBody>
              <Center>
                <QRCode
                  value={encodeIdToHash(organizer.id)}
                  size={200}
                  getRef={(ref) => setQrCodeRef(ref)}
                />
              </Center>
            </ModalBody>

            <ModalFooter>
              <HStack space="md">
                <Pressable
                  onPress={handleDownloadQRCode}
                  bg="#4C1D95"
                  rounded="$full"
                  p="$2"
                >
                  <Download size={20} color="#FFFFFF" />
                </Pressable>

                <Pressable
                  onPress={handleShareQRCode}
                  bg="#4C1D95"
                  rounded="$full"
                  p="$2"
                >
                  <Share2 size={20} color="#FFFFFF" />
                </Pressable>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <VStack space="4xl" py="$8" position="relative">
          <Box position="absolute" top={20} right={5} zIndex={1}>
            <Pressable onPress={() => setShowQRCode(!showQRCode)}>
              <QrCode size={24} color="#4C1D95" />
            </Pressable>
          </Box>

          <Center>
            <Image
              size="xl"
              source={{
                uri: organizer.image,
              }}
              alt="Foto do organizador"
            />
          </Center>

          <Center>
            <HStack space="md">
              <Button
                onPress={() =>
                  router.push(`/organizers/edit/${organizer.id}` as Href)
                }
                size="lg"
                bgColor="#4C1D95"
              >
                <ButtonText fontWeight="$bold">Editar</ButtonText>
              </Button>

              <Button
                onPress={() => setShowDeleteModal(true)}
                size="lg"
                bgColor="#4C1D95"
              >
                <ButtonText fontWeight="$bold">Excluir</ButtonText>
              </Button>
            </HStack>
          </Center>

          <Divider bgColor="#CFD1D4" />

          <Box>
            <Heading mb="$2" size="xl" fontWeight="$bold">
              Informações
            </Heading>

            <InfoCard infos={infos} />
          </Box>

          <Box>
            <Heading mb="$2" size="xl" fontWeight="$bold">
              Itens guardados
            </Heading>

            <VStack space="lg">
              {organizer.items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onDelete={() => deleteItem(organizer.id, item.id)}
                  onSave={handleItemSave}
                />
              ))}

              <Pressable
                onPress={() => setIsModalOpen(true)}
                mx="$4"
                borderColor="#CFD1D4"
                borderStyle="dashed"
                borderRadius="$lg"
                borderWidth={1}
              >
                <Center py="$4">
                  <Plus size={48} color="#CFD1D4" />
                </Center>
              </Pressable>
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </AppScreenTemplate>
  );
}
