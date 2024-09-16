import { useUserContext } from "@/context/UserContext";
import { generateId } from "@/utils/idManager";
import { isValidDate, formatDate } from "@/utils/dateValidator";
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Text,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { ChevronDownIcon, X } from "lucide-react-native";

type CreateEventModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateEventModal({
  isOpen,
  onClose,
}: CreateEventModalProps) {
  const { createEvent } = useUserContext();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    if (!isValidDate(eventDate)) {
      setDateError(true);

      return;
    }

    createEvent({
      id: generateId("event"),
      name: eventName,
      description: eventDescription,
      eventType: selectedEventType,
      date: formatDate(eventDate) || "",
    });

    setEventName("");
    setEventDescription("");
    setEventDate("");
    setSelectedEventType("");
    setDateError(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />

      <ModalContent>
        <ModalHeader bg="#4C1D95" justifyContent="center" position="relative">
          <ModalCloseButton position="absolute" top="$2" right="$2">
            <X size={24} color="#FFFFFF" strokeWidth={2} />
          </ModalCloseButton>

          <Text color="#FFFFFF" my="$4" fontWeight="$bold" fontSize="$2xl">
            Criar novo evento
          </Text>
        </ModalHeader>

        <ModalBody>
          <Box py="$8">
            <VStack space="4xl" px="$4">
              <FormControl size="lg" isRequired={true}>
                <FormControlLabel mb="$2">
                  <FormControlLabelText>Nome</FormControlLabelText>
                </FormControlLabel>

                <Input>
                  <InputField
                    type="text"
                    value={eventName}
                    placeholder="Nome"
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
                    placeholder="Descrição"
                    placeholderTextColor="#DBDFE5"
                    onChangeText={setEventDescription}
                  />
                </Input>
              </FormControl>

              <FormControl size="lg" isRequired={true}>
                <FormControlLabel mb="$2">
                  <FormControlLabelText>Data do evento</FormControlLabelText>
                </FormControlLabel>

                <Input>
                  <InputField
                    type="text"
                    value={eventDate}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="#DBDFE5"
                    onChangeText={setEventDate}
                  />
                </Input>
              </FormControl>

              <FormControl size="lg" isRequired={true}>
                <FormControlLabel mb="$2">
                  <FormControlLabelText>Tipo do evento</FormControlLabelText>
                </FormControlLabel>

                <Select
                  onValueChange={(itemValue) => setSelectedEventType(itemValue)}
                >
                  <SelectTrigger pr="$3" variant="outline" size="md">
                    <SelectInput placeholder="Selecione o tipo do evento" />

                    <SelectIcon>
                      <Icon as={ChevronDownIcon} />
                    </SelectIcon>
                  </SelectTrigger>

                  <SelectPortal>
                    <SelectBackdrop />

                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>

                      <SelectItem
                        label="Consulta Médica"
                        value="Consulta Médica"
                      />

                      <SelectItem
                        label="Revisão do Carro"
                        value="Revisão do Carro"
                      />

                      <SelectItem label="Viagem" value="Viagem" />

                      <SelectItem label="Aniversário" value="Aniversário" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </FormControl>
            </VStack>
          </Box>

          <Box pb="$4" alignItems="center">
            <Button w="$1/2" onPress={handleSubmit} bgColor="#4C1D95">
              <ButtonText>Criar evento</ButtonText>
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
