import AppHeader from "@/components/AppHeader";
import { Box } from "@gluestack-ui/themed";

export default function Profile() {
  return (
    <Box flex={1} bg="$black">
      <Box flex={1} bg="$white">
        <AppHeader title="Perfil" extended />
      </Box>
    </Box>
  );
}
