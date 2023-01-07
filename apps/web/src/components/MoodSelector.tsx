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
          bg: "green.600",
          color: "white",
          borderColor: "green.600",
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

export const MoodSelector = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "moods",
    defaultValue: "Excited",
    onChange: (nextValue) => console.log("changed"),
  });

  const group = getRootProps();
  const moods = ["Excited", "Argumentative", "Curious", "Mindblown"];
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
          you will help the app match you with other users who are feeling
          similarly.
        </Text>
        <Flex width="100%" {...group} gap={4}>
          {moods.map((value) => {
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
  );
};
