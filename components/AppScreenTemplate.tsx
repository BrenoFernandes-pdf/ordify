import AppHeader from "@/components/AppHeader";
import { Box } from "@gluestack-ui/themed";
import { ReactElement } from "react";

type Props = {
  title: string;
  children: ReactElement;
};

export default function AppScreenTemplate({ title, children }: Props) {
  return (
    <Box flex={1} bg="$black">
      <Box flex={1} bg="$white">
        <AppHeader title={title} />

        {children}
      </Box>
    </Box>
  );
}
