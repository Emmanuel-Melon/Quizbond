import { Button } from "ui";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
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

export const TopicSelector = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "topics",
    defaultValue: "Fashion",
    onChange: (nextValue) => console.log("changed"),
  });

  const group = getRootProps();
  const interests = ["Music", "Fashion", "Food", "Sports", "Games"];
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
          you will help the app match you with other users who are feeling
          similarly.
        </Text>
        <Stack>
        <Flex width="100%" {...group} gap={4}>
          {interests.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};
