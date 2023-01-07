import { Button } from "ui";
import { Flex, Stack, Heading } from "@chakra-ui/react";

export default function Web() {
  return (
    <Flex p="8">
      <Stack>
        <Heading>Quizbond</Heading>
        <Heading size="md">
          Are you feeling happy, sad, or somewhere in between?
        </Heading>
        <Heading size="md">
          What are you in the mood to talk about today?
        </Heading>
        <Button>Start Quizzing!</Button>
      </Stack>
    </Flex>
  );
}
