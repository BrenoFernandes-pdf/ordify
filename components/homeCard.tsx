import {
  Box,
  Card,
  Divider,
  Heading,
  HStack,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";
import { Href, Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { ReactElement } from "react";

type Props = {
  description: string;
  title?: string;
  path?: Href;
  children: ReactElement;
};

export default function HomeCard({
  description,
  title,
  path,
  children,
}: Props) {
  return (
    <Box>
      <Heading mb="$2" ml="$6" size="md" fontWeight="$bold">
        {description}
      </Heading>

      <Card
        size="md"
        variant="filled"
        bg="$white"
        shadowColor="$black"
        elevation="$1"
        mx="$4"
      >
        <VStack space="sm">
          {path && (
            <>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading size="xl" fontWeight="$semi-bold">
                  {title}
                </Heading>

                <Link href={path}>
                  <ArrowRight color="black" />
                </Link>
              </HStack>

              <Divider />
            </>
          )}

          <ScrollView>{children}</ScrollView>
        </VStack>
      </Card>
    </Box>
  );
}
