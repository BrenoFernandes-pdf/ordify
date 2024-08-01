import {
  Text,
  Center,
  Heading,
  Divider,
  Link,
  Button,
  ButtonText,
  Box,
  LinkText,
  VStack,
} from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box flex={1}>
      <VStack>
        <Link>
          <LinkText>Tab 2</LinkText>
        </Link>
      </VStack>
    </Box>
  );
}
