import { Button } from "ui";
import { Flex, Stack, Heading, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { MoodSelector } from "../src/components/MoodSelector";
import { TopicSelector } from "../src/components/TopicSelector";

export default function Web() {
  return (
    <Flex p="8">
      <Stack>
        <Heading>Quizbond</Heading>
        <Text>Feeling something? Find someone who feels the same</Text>
        <Stack>
          <MoodSelector />
          <Divider />
          <TopicSelector />
        </Stack>
        <Flex gap={4}>
          <Button>Start Quizzing!</Button>
          <Button>Share</Button>
          <Button>Report Bug</Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
