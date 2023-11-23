import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  Container,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";

import classes from "@/styles/HeaderMegaMenu.module.css";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton
      className={` ${classes.subLink}`}
      ml={18}
      my={8}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
          <Text size="md" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        // backgroundColor: "#151718",
        // backgroundColor: "#ffffff08",
        backdropFilter: "blur(25px)",
      }}
    >
      <header className={`${classes.header} `}>
        <Container size="lg" pt={12}>
          <Group justify="space-between" h="100%">
            <Image src={Logo} alt="" height={24} />

            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={`inherit-font ${classes.link}`}>
                Home
              </a>
              <HoverCard
                width={800}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={`inherit-font ${classes.link}`}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="md">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="md">
                          Get started
                        </Text>
                        <Text size="md" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default" size="md">
                        Get started
                      </Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <a href="#" className={`inherit-font ${classes.link}`}>
                Learn
              </a>

              <a href="#" className={`inherit-font ${classes.link}`}>
                About Us
              </a>
            </Group>

            <Group visibleFrom="sm">
              <Button
                fz={14}
                style={{ paddingInline: "0.8rem", height: "36px" }}
                size="md"
                className="secondary-btn"
              >
                Sign In
              </Button>
              <Button
                variant="gradient"
                gradient={{
                  from: "rgba(223, 97, 255, 1)",
                  to: "violet",
                  deg: 173,
                }}
                fz={14}
                style={{ paddingInline: "0.8rem" }}
              >
                Book demo
              </Button>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        title={<Image src={Logo} height={rem(6)} alt="Specify" />}
        hiddenFrom="sm"
        zIndex={50}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-sm">
          <Divider mb="sm" />

          <a href="#" className={`inherit-font ${classes.link}`}>
            Home
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" className="inherit-font" ml={8}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16), marginLeft: rem(8) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>

          <Collapse in={linksOpened}>{links}</Collapse>

          <a href="#" className={`${classes.link} inherit-font`}>
            Learn
          </a>
          <Link href="/About-Us" className={`inherit-font ${classes.link}`}>
            About Us
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button
              fz={14}
              style={{ paddingInline: "0.8rem", height: "36px" }}
              size="md"
              className="secondary-btn"
            >
              Sign In
            </Button>
            <Button
              variant="gradient"
              gradient={{
                from: "rgba(223, 97, 255, 1)",
                to: "violet",
                deg: 173,
              }}
              fz={14}
              style={{ paddingInline: "0.8rem" }}
            >
              Book demo
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
