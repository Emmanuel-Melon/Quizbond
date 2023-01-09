import { Button } from "ui";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  useRadioGroup,
  useRadio,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import Image from "next/image";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "orange.600",
          color: "white",
          borderColor: "orange.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const questions = [
  {
    id: 1,
    body: "Does Pineapple go on Pizza?",
    answers: ["Ewww", "It depends", "Yess!"],
  },
  {
    id: 2,
    body: "Cold or warm water?",
    answers: ["Ewww", "It depends", "Yess!"],
  },
  {
    id: 3,
    body: "Tomatoes on burgers?",
    answers: ["Ewww", "It depends", "Yess!"],
  },
];

// display one question at a time!
// disqualify if x answers are wrong?
// set questions before requesting to match?
// different modes?
// feeling lucky vs trying to match?
export const QuestionView = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "topics",
    defaultValue: "Fashion",
    onChange: (nextValue) => console.log("changed"),
  });

  const group = getRootProps();
  return (
    <>
      {questions.map((question) => (
        <Flex p="8" width="100%" justifyContent="center" alignItems="center">
          <Stack>
            <Heading>{question.body}</Heading>
            <Flex width="100%" {...group} gap={4}>
              {question.answers.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </Flex>
          </Stack>
        </Flex>
      ))}
    </>
  );
};
