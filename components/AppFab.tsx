import { decodeHashToId } from "@/utils/hashDecoder";
import { Box, Fab, FabIcon } from "@gluestack-ui/themed";
import { ChevronDown, ChevronUp, QrCode, Plus, X } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Alert, TouchableOpacity } from "react-native";

export default function AppFab() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const router = useRouter();

  const isPermissionGranted = permission?.granted;

  const handleFabPress = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCreateOrganizer = () => {
    router.push("/organizers/createOrganizer");

    setIsExpanded(!isExpanded);
  };

  const handleQrCodeScan = async () => {
    if (!isPermissionGranted) {
      const { status } = await requestPermission();

      if (status !== "granted") {
        alert("Permission to access camera is required!");

        return;
      }
    }

    setIsCameraActive(true);
    setIsExpanded(false);
  };

  const renderCameraView = () => (
    <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={10}>
      <CameraView
        style={{ flex: 1 }}
        onBarcodeScanned={({ data }) => {
          if (isScanning) return;

          setIsScanning(true);

          try {
            const organizerId = decodeHashToId(data);

            router.push(`/organizers/${organizerId}`);

            setIsCameraActive(false);
            setIsScanning(false);
          } catch (error) {
            Alert.alert("Invalid QR code", "Please scan a valid code.", [
              {
                text: "OK",
                onPress: () => {
                  setIsScanning(false);
                },
              },
            ]);
          }
        }}
      >
        <Box flex={1} justifyContent="flex-end" alignItems="center">
          <TouchableOpacity
            onPress={() => setIsCameraActive(false)}
            style={{
              position: "absolute",
              top: 40,
              right: 20,
            }}
          >
            <X size={40} color="#FFFFFF" />
          </TouchableOpacity>
        </Box>
      </CameraView>
    </Box>
  );

  if (isCameraActive) {
    return renderCameraView();
  }

  return (
    <Box>
      {isExpanded ? (
        <>
          <Fab
            size="sm"
            placement="bottom right"
            bg="#4C1D95"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            mb="$24"
            onPress={handleQrCodeScan}
          >
            <FabIcon as={QrCode} />
          </Fab>

          <Fab
            size="sm"
            placement="bottom right"
            bg="#4C1D95"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            mb="$12"
            onPress={handleCreateOrganizer}
          >
            <FabIcon as={Plus} />
          </Fab>

          <Fab
            size="sm"
            placement="bottom right"
            bg="#4C1D95"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={handleFabPress}
          >
            <FabIcon as={ChevronDown} />
          </Fab>
        </>
      ) : (
        <Fab
          size="sm"
          placement="bottom right"
          bg="#4C1D95"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={handleFabPress}
        >
          <FabIcon as={ChevronUp} />
        </Fab>
      )}
    </Box>
  );
}
