import { Title, Flex } from "@mantine/core";
import Design2 from "../assets/design-2.png";
import LongCard from "./LongCard";

const DesignTokens = () => {
  const cards = [
    {
      title: "Design tokens and assets",
      description:
        "Specify supports colors, dimensions, bitmaps, vectors, font files, and many more. All of them are automatically synced and updated. ",
      imageSrc: Design2,
    },
    {
      title: "Export production-ready code",
      description:
        "Use our templates to generate design tokens for any platform, ranging from CSS, Tailwind, React to React Native, Flutter, Style Dictionary and more.  ",
      imageSrc: Design2,
    },
  ];
  return (
    <section className="section design-section">
      <Title c="white" my="3rem" order={1} maw="800px" align="center" w="100%">
        Design tokens are the heart of your design system
      </Title>
      <Flex gap="lg" align="center" justify="center" wrap="wrap">
        {cards.map((card, index) => (
          <LongCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            theme="greyShade"
          />
        ))}
      </Flex>
    </section>
  );
};

export default DesignTokens;
