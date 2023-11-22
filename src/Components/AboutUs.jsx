import {
  AppShell,
  Button,
  Center,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Footer from "./Footer";
import Navbar from "../Navbar";
import LogoPNG from "../assets/logo2.png";
import Pitch from "../assets/l-pitch.svg";
import Census from "../assets/l-census.svg";
import ComCast from "../assets/l-comcast.svg";
import Pocket from "../assets/l-pocket.svg";
import Dashlane from "../assets/l-dashlane.svg";
import Ruter from "../assets/l-ruter.svg";
import StarAtlas from "../assets/l-staratlas.svg";
import EpicGames from "../assets/l-epicgames.svg";

function AboutUs() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Navbar />

      <AppShell.Main className="main">
        <Stack c="white" gap="lg" my="4rem" align="center">
          <Image src={LogoPNG} alt="" maw="6rem" />
          <Title order={2} w="100%" style={{ textAlign: "center" }}>
            Join Our Global Team
          </Title>
          <Text maw="450px" style={{ textAlign: "center" }}>
            We&apos;re on a mission to help organizations efficiently manage
            their brand identity at scale.
          </Text>
          <Button
            size="md"
            variant="gradient"
            gradient={{
              from: "rgba(223, 97, 255, 1)",
              to: "violet",
              deg: 173,
            }}
          >
            View Jobs
          </Button>
        </Stack>

        <Group className="" mt="2rem" my="5rem" maw="1100px">
          <Title
            order={2}
            c="white"
            w="100%"
            p="md"
            style={{ textAlign: "center" }}
          >
            About Us
          </Title>
          <Flex
            direction={{ base: "column", md: "row" }}
            lh="1.8"
            c="white"
            gap="md"
            p="md"
          >
            <Text size="lg" lh="inherit">
              We&apos;re a passionate remote team building the future of Design
              Systems. We started in 2018 believing we could help organizations
              unify their brand identity and today we&apos;re on a mission to
              become the backbone of design & code decisions within an
              organization. Since then, we hired more than 10 people and raised
              a total of 5 million euros.
            </Text>
            <Text size="lg" lh="inherit">
              And it&apos;s only the beginning. Joining Specify today is an
              amazing opportunity for you to be part of a product that will
              innovate the way companies operate their brand identity.
              We&apos;re product maniacs and a design-centric startup that wish
              to build the greatest remote team in the game. Wanna join the
              ride? 😎
            </Text>
          </Flex>
        </Group>

        <Flex
          mb="5rem"
          gap={{ base: "1rem", sm: "2rem", md: "3rem" }}
          w="100%"
          justify="center"
          py="xl"
          wrap="wrap"
          bg="rgba(36, 36, 36, 0.27)"
          // maw={1100}
          c="white"
        >
          <Stack align="center" className="" p="md">
            <Title order={2}>2018</Title>
            <Text size="lg">Year Founded</Text>
          </Stack>
          <Stack align="center" className="" p="md">
            <Title order={2}>5M</Title>
            <Text size="lg">Total Funding</Text>
          </Stack>
          <Stack align="center" className="" p="md">
            <Title order={2}>14</Title>
            <Text size="lg">Team Members</Text>
          </Stack>
        </Flex>

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
            gap="lg"
            my="5rem"
            // className="second-hero hero-texts"
          >
            <Title order={1} c="white" align="center">
              Start automating your design system today.
            </Title>

            <Flex
              className="btn-group"
              gap={{ base: "xl", md: "xl" }}
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
            </Flex>
          </Stack>
        </Center>

        <Stack
          style={{ borderRadius: "10px" }}
          w="100%"
          py="xl"
          align="center"
          my="4rem"
          bg="#20232445"
        >
          <Text size="lg" w="100%" style={{ textAlign: "center" }}>
            Already loved and trusted by product teams
          </Text>
          <Flex gap="lg" p="md" wrap="wrap" justify="center" maw={900}>
            <Image className="logo-img" alt="logo" src={Pitch} />
            <Image className="logo-img" alt="logo" src={Census} />
            <Image className="logo-img" alt="logo" src={EpicGames} />
            <Image className="logo-img" alt="logo" src={ComCast} />
            <Image className="logo-img" alt="logo" src={Pocket} />
            <Image className="logo-img" alt="logo" src={Dashlane} />
            <Image className="logo-img" alt="logo" src={Ruter} />
            <Image className="logo-img" alt="logo" src={StarAtlas} />
          </Flex>
        </Stack>

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default AboutUs;
