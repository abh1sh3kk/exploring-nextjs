import { Button, Image, Text, Card, Stack, Title } from "@mantine/core";
import NextImage from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";

const LongCard = ({ title, description, imageSrc, theme }) => {
  const rightIcon = (
    <BsArrowRightCircleFill style={{ marginLeft: "0.2rem" }} fontSize={18} />
  );

  let bgColor = "#000000";

  if (theme === "darkShade") {
    bgColor = "#000000";
  } else if (theme === "greyShade") {
    bgColor = "#232628";
  } else if (theme === "transparent") {
    bgColor = "#00000000";
  }

  return (
    <Card
      // c="white"
      // bg={bgColor}
      style={{ border: "1px solid #7b7b7bd4" }}
      withBorder
      radius="lg"
      maw={{ md: "640px" }}
      w={{ base: "100%", sm: "80%", md: "40%" }}
      minh="592px"
    >
      <Stack
        p={14}
        py="xl"
        align="center"
        style={{ textAlign: "center" }}
        gap="lg"
      >
        <Title c="white" order={2}>
          {title}
        </Title>
        <Text size="xl" c="dimmed">
          {description}
        </Text>
        <Button
          variant="white"
          color="black"
          radius="xl"
          size="lg"
          rightSection={rightIcon}
        >
          View Documentation
        </Button>
      </Stack>
      <Card.Section>
        <Image component={NextImage} alt="" src={imageSrc} h="100%" />
      </Card.Section>
    </Card>
  );
};

export default LongCard;
