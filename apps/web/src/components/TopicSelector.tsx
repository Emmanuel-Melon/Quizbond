import { Button } from "ui";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const TopicSelector = () => {
  return (
    <Flex gap={4} alignItems="center">
      <Image
        src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1673117712/neno/avatars/3d-fluency-starred-speech-bubble.png"
        height="150"
        width="150"
        alt="mood selector"
      />
      <Stack>
        <Heading size="md">
          What are you in the mood to talk about today?
        </Heading>
        <Text>
          By selecting the mood that best reflects your current emotional state,
          you'll help the app match you with other users who are feeling
          similarly.
        </Text>
        <Stack>
          <Flex gap={4}>
            <Button>🎵 Music</Button>
            <Button>🧥 Fashion</Button>
            <Button>🥗 Food</Button>
            <Button>🏀 Sports</Button>
            <Button>🎮 Games</Button>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};
