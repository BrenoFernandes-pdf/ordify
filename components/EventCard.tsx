import DeleteModal from "@/components/DeleteModal";
import InfoCard from "@/components/InfoCard";
import GetIcon from "@/components/GetIcon";
import {
  Box,
  Button,
  ButtonText,
  Card,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { ExternalLink, Pencil, Trash, X } from "lucide-react-native";

type EventProps = {
  name: string;
  description: string;
  eventType: string;
  onDelete: () => void;
};

export default function EventCard({
  name,
  description,
  eventType,
  onDelete,
}: EventProps) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [eventName, setEventName] = useState(name);
  const [eventDescription, setEventDescription] = useState(description);

  const infos = [eventName, eventDescription];

  return (
    <Pressable onPress={() => setShowInfoModal(true)}>
      <Card
        size="md"
        variant="filled"
        bg="$white"
        shadowColor="$black"
        elevation="$1"
        mx="$4"
      >
        <Modal
          isOpen={showInfoModal}
          onClose={() => {
            setShowInfoModal(false);
            setShowEditForm(false);
          }}
        >
          <ModalBackdrop />

          <ModalContent>
            <ModalHeader
              bg="#4C1D95"
              justifyContent="center"
              position="relative"
            >
              <ModalCloseButton position="absolute" top="$2" left="$2">
                <X size={24} color="#FFFFFF" strokeWidth={2} />
              </ModalCloseButton>

              <HStack alignItems="center" my="$4" space="md">
                <GetIcon type={eventType} size={20} color="#FFFFFF" />

                <Text color="#FFFFFF" fontWeight="$bold" fontSize="$xl">
                  {eventType}
                </Text>
              </HStack>
            </ModalHeader>

            <ModalBody>
              <Box py="$8">
                {showEditForm ? (
                  <VStack space="4xl" px="$4">
                    <FormControl size="lg" isRequired={true}>
                      <FormControlLabel mb="$2">
                        <FormControlLabelText>Nome</FormControlLabelText>
                      </FormControlLabel>

                      <Input>
                        <InputField
                          type="text"
                          value={eventName}
                          placeholder="Nome do evento"
                          placeholderTextColor="#DBDFE5"
                          onChangeText={setEventName}
                        />
                      </Input>
                    </FormControl>

                    <FormControl size="lg" isRequired={true}>
                      <FormControlLabel mb="$2">
                        <FormControlLabelText>Descrição</FormControlLabelText>
                      </FormControlLabel>

                      <Input>
                        <InputField
                          type="text"
                          value={eventDescription}
                          placeholder="Descrição do evento"
                          placeholderTextColor="#DBDFE5"
                          onChangeText={setEventDescription}
                        />
                      </Input>
                    </FormControl>

                    <Box alignItems="center">
                      <Button
                        w="$1/2"
                        onPress={() => setShowEditForm(false)}
                        bgColor="#4C1D95"
                      >
                        <ButtonText>Salvar</ButtonText>
                      </Button>
                    </Box>
                  </VStack>
                ) : (
                  <InfoCard infos={infos}></InfoCard>
                )}
              </Box>
            </ModalBody>

            {!showEditForm && (
              <ModalFooter>
                <HStack space="md">
                  <Pressable bg="#4C1D95" rounded="$full" p="$2">
                    <ExternalLink color="#FFFFFF" size={20} />
                  </Pressable>

                  <Pressable
                    onPress={() => setShowEditForm(true)}
                    bg="#4C1D95"
                    rounded="$full"
                    p="$2"
                  >
                    <Pencil color="#FFFFFF" size={20} />
                  </Pressable>
                </HStack>
              </ModalFooter>
            )}
          </ModalContent>
        </Modal>

        <DeleteModal
          name="evento"
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          onDelete={onDelete}
        />

        <HStack justifyContent="space-between">
          <HStack space="md" alignItems="center">
            <GetIcon type={eventType} size={24} color="#000000" />

            <VStack space="xs">
              <Text fontWeight="$bold" fontSize="$lg">
                {eventName}
              </Text>

              <Text fontWeight="$light" fontSize="$sm">
                {eventDescription}
              </Text>
            </VStack>
          </HStack>

          <HStack space="md">
            <Pressable onPress={() => setShowDeleteModal(true)}>
              <Trash size={20} color="#000000" />
            </Pressable>
          </HStack>
        </HStack>
      </Card>
    </Pressable>
  );
}
