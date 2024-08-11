import { Box, Text } from "@gluestack-ui/themed";

type Props = {
  infos: string[];
};

export default function InfoCard({ infos }: Props) {
  return (
    <Box px="$4">
      {infos?.map((info, index) => (
        <Box
          key={index}
          bg={index % 2 === 0 ? "$white" : "#F3F2F2"}
          borderWidth={0.5}
          borderColor="#D1D5DB"
          pl="$3"
          py="$3"
          borderTopLeftRadius={index === 0 ? "$md" : 0}
          borderTopRightRadius={index === 0 ? "$md" : 0}
          borderBottomLeftRadius={index === infos.length - 1 ? "$md" : 0}
          borderBottomRightRadius={index === infos.length - 1 ? "$md" : 0}
        >
          <Text fontSize="$lg" fontWeight="$bold">
            {info}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
