import { Button } from "ui";
import { Flex, Stack, Heading, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { MoodSelector } from "../src/components/MoodSelector";
import { TopicSelector } from "../src/components/TopicSelector";

export default function Web() {

  const initQuest = () => {}
  const shareGame = () => {}
  const reportBug = () => {}
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
          <Button onClick={initQuest}>Start Quizzing!</Button>
          <Button onClick={initQuest}>Share</Button>
          <Button onClick={initQuest}>Report Bug</Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
