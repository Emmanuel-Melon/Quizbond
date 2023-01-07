import { Button } from "ui";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";

export default function Web() {
  return (
    <Flex p="8">
      <Stack>
        <Heading>Quizbond</Heading>
        <Heading size="md">
          Are you feeling happy, sad, or somewhere in between?
        </Heading>
        <Text>By selecting the mood that best reflects your current emotional state, you'll help the app match you with other users who are feeling similarly.</Text>
        <Flex gap={4}>
          <Button>Excited</Button>
          <Button>Argumentative</Button>
          <Button>Curious</Button>
          <Button>Doubtful</Button>
          <Button>Cheerful</Button>
        </Flex>
        <Heading size="md">
          What are you in the mood to talk about today?
        </Heading>
        <Text>By selecting the mood that best reflects your current emotional state, you'll help the app match you with other users who are feeling similarly.</Text>
        <Stack>
          <Flex gap={4}>
            <Button>Music</Button>
            <Button>Fashion</Button>
            <Button>Food</Button>
            <Button>Sports</Button>
            <Button>Games</Button>
          </Flex>
        </Stack>

        <Button>Start Quizzing!</Button>
      </Stack>
    </Flex>
  );
}
