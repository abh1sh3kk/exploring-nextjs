import { Flex, Text, Stack, Image, Title, Badge } from "@mantine/core";
import NextImage from "next/image";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Stack
      p={{ base: "md", md: "unset" }}
      gap="md"
      w="100%"
      align="center"
      className="footer"
    >
      <Flex
        style={{ borderBlock: " 1px solid #6f6f6f66" }}
        py="lg"
        direction={{ base: "column-reverse", md: "row" }}
        gap="2rem"
        justify="space-around"
        w={{ base: "100%" }}
        maw="1120px"
      >
        {/* Image */}
        <Stack w={{ base: "100%", md: "unset" }} pr="xl" align="center">
          <Image component={NextImage} src={Logo} alt="" maw="5rem" />
        </Stack>

        {/* Menu items */}
        <Flex
          direction={{ base: "column", md: "row" }}
          style={{ flex: 1 }}
          gap={{ base: "2rem", md: "md" }}
        >
          <Flex
            gap="lg"
            //   className="border"
            style={{ flex: 1 }}
            justify={{ base: "flex-start", md: "space-around" }}
          >
            <Stack component={Stack} gap="xs" style={{ flex: 1 }}>
              <Title order={6}>Product</Title>
              <Text>Documentation</Text>
              <Text>Changelog</Text>
              <Text>Notion</Text>
              <Text>Parsers</Text>
              <Text component={Flex} align="center" gap="sm">
                SDTF
                <Badge color="indigo" size="xs">
                  New
                </Badge>
              </Text>
              <Text>Launch Week</Text>
              <Text>Feedback</Text>
            </Stack>

            <Stack component={Stack} gap="xs" style={{ flex: 1 }}>
              <Title order={6}>Resources</Title>
              <Text>Templete</Text>
              <Text>Guide</Text>
              <Text>Blog</Text>
              <Text>Customers</Text>
              <Text>Help Center</Text>
            </Stack>
          </Flex>

          <Flex
            gap="lg"
            //   className="border"
            style={{ flex: 1 }}
            justify={{ base: "flex-start", md: "space-around" }}
          >
            <Stack component={Stack} style={{ flex: 1 }} gap="xs">
              <Title order={6}>Company</Title>
              <Text>Press Kit</Text>
              <Text component={Flex} align="center" gap="sm">
                Climate
                <Badge color="indigo" size="xs">
                  New
                </Badge>
              </Text>

              <Text>Jobs</Text>
              <Text>Contact Us</Text>
            </Stack>

            <Stack component={Stack} gap="xs" style={{ flex: 1 }}>
              <Title order={6}>Community</Title>
              <Text>Discord</Text>
              <Text>Twitter</Text>
              <Text>Github</Text>
              <Text>Dribbble</Text>
            </Stack>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w={{ base: "100%" }}
        maw="1120px"
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "center", sm: "space-between" }}
        gap="sm"
      >
        <Flex gap="xl" justify={{ base: "space-between", sm: "center" }}>
          <Text>Privacy Policy</Text>
          <Text>Terms Of Use</Text>
          <Text>Security</Text>
        </Flex>
        <Text
          c="dimmed"
          w={{ base: "100%", sm: "unset" }}
          style={{ textAlign: "center" }}
        >
          ©2023 Specify · All rights reserved.
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
