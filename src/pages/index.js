import {
  AppShell,
  Button,
  Flex,
  Text,
  Title,
  Stack,
  Center,
} from "@mantine/core";
import HeroSection from "@/Components/HeroSection";
import VideoFrame from "@/Components/VideoFrame";

import CaseStudies from "@/Components/CaseStudies";
import DesignTokens from "@/Components/DesignTokens";
import Actions from "@/Components/Actions";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

function HomePage() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Navbar />

      <AppShell.Main
        p={{ base: "xl", sm: "5rem" }}
        // color="white"
        // bg="black"
        className="main"
      >
        <HeroSection />

        <Center
          component={Stack}
          justify="center"
          gap="xl"
          align="center"
          w={{ sm: "clamp(0px, 60%, 800px)" }}
          className="hero-section"
        >
          <Stack
            align="center"
            justify="center"
            className="second-hero hero-texts"
          >
            <Title order={1} className="hero-text" align="center">
              Improve your Continuous Design Data workflow
            </Title>

            <Text fz={22} align="center" maw="50ch">
              Specify helps you gain control of your design system across teams
              and products.
            </Text>

            <Flex
              className="btn-group"
              gap={{ base: "md", md: "sm" }}
              direction={{ xs: "column", md: "row" }}
              w="100%"
              justify="center"
            >
              <Button
                size="md"
                variant="gradient"
                gradient={{
                  from: "rgba(223, 97, 255, 1)",
                  to: "violet",
                  deg: 173,
                }}
              >
                Book demo
              </Button>
              <Button size="md" className="secondary-btn">
                Read Vision
              </Button>
            </Flex>
          </Stack>
        </Center>

        <VideoFrame />

        <CaseStudies />

        <Center
          component={Stack}
          justify="center"
          gap="xl"
          align="center"
          w={{ sm: "clamp(0px, 60%, 800px)" }}
          className="hero-section"
        >
          <Stack align="center" justify="center" className="section hero-texts">
            <Title order={1} className="hero-text" align="center">
              Customize Specify to your needs
            </Title>

            <Text fz={22} align="center" maw="50ch">
              Specify is made to fit your workflow, you are in control.
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
                variant="gradient"
                gradient={{
                  from: "rgba(223, 97, 255, 1)",
                  to: "violet",
                  deg: 173,
                }}
              >
                Book demo
              </Button>
              <Button size="md" className="secondary-btn">
                Watch Video
              </Button>
            </Flex>
          </Stack>
        </Center>

        <Actions />

        <DesignTokens />

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default HomePage;
