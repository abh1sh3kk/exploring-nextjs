import {
  Button,
  Flex,
  Text,
  Image,
  Title,
  Stack,
  Center,
  Box,
} from "@mantine/core";

import NextImage from "next/image";
import HeroImage from "@/assets/hero-img.webp";
import { BsPlayCircleFill } from "react-icons/bs";
import { RiLink } from "react-icons/ri";

// ----------------------------------
// color rough
// primary button color: #9254f5;
// ----------------------------------

const HeroSection = () => {
  const rightIcon = <RiLink style={{ marginLeft: "0.2rem" }} fontSize={18} />;
  return (
    <Center
      component={Stack}
      justify="center"
      gap={{ base: "sm", sm: "xl" }}
      align="center"
      w={{ base: "clamp(0px, 60%, 800px)" }}
      className="section hero-section"
    >
      <Button
        component="p"
        className="badge"
        rightSection={rightIcon}
        c="dimmed"
        fz="clamp(8px, 4vw, 18px)"
      >
        Introducing our Figma Variables compatibility
      </Button>

      <Stack
        align="center"
        gap={{ base: "sm", sm: "xl" }}
        justify="center"
        className="hero-texts"
      >
        <Title className="hero-text" align="center">
          Automate the distribution of your design tokens -
          <Text inherit className="highlight-gradient">
            your team will love it.
          </Text>
        </Title>

        <Text fz={22} align="center" maw="70ch">
          Enhance your design system by creating your own source of truth,
          improve collaboration between design and development and reduce manual
          work.
        </Text>

        <Flex
          className="btn-group"
          gap={{ sm: "md", md: "sm" }}
          direction={{ md: "row" }}
          w="100%"
          justify="center"
        >
          <Button
            size="md"
            variant="primary"
          >
            Book demo
          </Button>
          <Button
            variant="secondary"
            size="md"
            className="secondary-btn"
            leftSection={<BsPlayCircleFill fontSize={18} />}
          >
            Watch video
          </Button>
        </Flex>
      </Stack>

      <Box style={{ flex: 1 }} className="hero__bg-gradient">
        <Image
          src={HeroImage}
          component={NextImage}
          radius="lg"
          style={{ width: "clamp(0px, 80vw, 1000px)", height: "auto" }}
          alt="Hero Image"
          className="hero-img"
        />
      </Box>
    </Center>
  );
};

export default HeroSection;
