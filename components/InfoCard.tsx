import React from "react";
import { Box, Heading, Text } from "@gluestack-ui/themed";

type Props = {
  description: string;
  infos: string[];
};

export default function InfoCard({ description, infos }: Props) {
  return (
    <Box>
      <Heading mb="$2" size="xl" fontWeight="$bold">
        {description}
      </Heading>

      <Box px="$4">
        {infos.map((info, index) => (
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
            <Text fontSize="$lg">{info}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
