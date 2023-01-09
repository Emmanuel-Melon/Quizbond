import { Button } from "ui";
import { useMemo } from "react";
import { Flex, Stack, Heading, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { MoodSelector } from "../src/components/MoodSelector";
import { TopicSelector } from "../src/components/TopicSelector";
import { QuestionView } from "../src/components/QuestionView";

// import { GET_MOODS } from "@quizbond/libs/apollo/queries/moods";
import {
  useQuery,
  useMutation,
  OperationVariables,
  useSubscription,
  gql
} from "@apollo/client";

export const GET_MOODS = gql`
  query getMoods {
    moods {
        name
        id
        created_at
      }
  }
`;

export const useGetMoods = () => {
  const { error, data, loading } = useQuery(GET_MOODS);
  return useMemo(
    () => ({
      loadingMoods: loading,
      moods: data?.word_categories,
      error,
    }),
    [loading, data, error]
  );
};

export default function Web() {
  const initQuest = () => {};
  const shareGame = () => {};
  const reportBug = () => {};

  const { moods, loadingMoods } = useGetMoods();
  console.log(moods);
  return (
    <>
      {true ? (
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
      ) : (
        <QuestionView />
      )}
    </>
  );
}
