import { Menu, Group, Center, Burger, Container, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import classes from "./styles/HeaderMenu.module.css";
import Logo from "./assets/logo.svg";

const links = [
  { link: "/about", label: "Features" },
  {
    link: "#1",
    label: "Learn",
    links: [
      { link: "/docs", label: "Documentation" },
      { link: "/resources", label: "Resources" },
      { link: "/community", label: "Community" },
      { link: "/blog", label: "Blog" },
    ],
  },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  {
    link: "#2",
    label: "Support",
    links: [
      { link: "/faq", label: "FAQ" },
      { link: "/demo", label: "Book a demo" },
      { link: "/forums", label: "Forums" },
    ],
  },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} style={{ fontSize: "inherit" }}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          style={{ fontSize: "inherit" }}
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown style={{ fontSize: "inherit" }}>
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
        style={{ fontSize: "inherit" }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header
      className={`${classes.header}`}
      style={{
        fontSize: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 3,
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <img src={Logo} height={24} />
          <Group gap={5} visibleFrom="sm">
            {items}
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

          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
