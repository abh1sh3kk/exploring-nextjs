import { Flex, Text, Title, Stack, Box } from "@mantine/core";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiStoreFill } from "react-icons/ri";
import { BsStopCircleFill } from "react-icons/bs";
const VideoFrame = () => {
  return (
    <Flex
      maw={1100}
      className="section frame"
      gap={{ sm: "1rem", lg: "3rem" }}
      direction={{ lg: "row" }}
    >
      <Stack className="frame__left" gap={0}>
        <Stack gap={4}>
          <Flex gap={8} align="center">
            <BsCollectionPlayFill color="#5f3dc4" />
            <Title order={6}>Collect</Title>
          </Flex>
          <Text size="lg" align={{ md: "left" }}>
            Easily connect all your favorite tools to Specify to create a fully
            networked design system.
          </Text>
        </Stack>

        <Stack>
          <Flex gap={8} align="center">
            <RiStoreFill color="#5f3dc4" />
            <Title order={6}>Store</Title>
          </Flex>
          <Text size="lg">
            Create a single source of truth for your design tokens and assets
            and start building brand consistency
          </Text>
        </Stack>

        <Stack>
          <Flex gap={8} align="center">
            <BsStopCircleFill color="#5f3dc4" />
            <Title order={6}>Distribute</Title>
          </Flex>
          <Text size="lg">
            Quickly build a custom delivery pipeline that adapts to your
            technology, framework, and platform — automatically.
          </Text>
        </Stack>
      </Stack>

      <Box className="frame__right video-container">
        <video
          style={{ width: "100%" }}
          src="https://static.specifyapp.com/34458951720-720.mp4"
          title="Video"
          allow=" autoplay; encrypted-media;"
        />
      </Box>
    </Flex>
  );
};

export default VideoFrame;
