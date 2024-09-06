import {
  Button,
  ButtonText,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";

type DeleteModalProps = {
  name: string;
  showDeleteModal: boolean;
  setShowDeleteModal: (value: boolean) => void;
  onDelete: () => void;
};

export default function DeleteModal({
  name,
  showDeleteModal,
  setShowDeleteModal,
  onDelete,
}: DeleteModalProps) {
  return (
    <Modal
      isOpen={showDeleteModal}
      onClose={() => {
        setShowDeleteModal(false);
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Excluir {name}?</Heading>
          <ModalCloseButton>
            <X size={24} color="#000000" strokeWidth={2} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Esta ação é irreversível.</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowDeleteModal(false);
            }}
          >
            <ButtonText>Cancelar</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            borderWidth="$0"
            onPress={() => {
              onDelete();
              setShowDeleteModal(false);
            }}
          >
            <ButtonText>Excluir</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
