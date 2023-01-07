import { Button } from "ui";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const MoodSelector = () => {
  return (
    <Flex gap={4} alignItems="center">
      <Image
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1673117685/neno/avatars/3d-fluency-star-struck.png"
        height="150"
        width="150"
        alt="mood selector"
      />
      <Stack>
        <Heading size="md">
          Are you feeling happy, sad, or somewhere in between?
        </Heading>
        <Text>
          By selecting the mood that best reflects your current emotional state,
          you'll help the app match you with other users who are feeling
          similarly.
        </Text>
        <Flex gap={4}>
          <Button>🥳 Excited</Button>
          <Button>😏 Argumentative</Button>
          <Button>🤔 Curious</Button>
          <Button>🤯 Mindblown</Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
