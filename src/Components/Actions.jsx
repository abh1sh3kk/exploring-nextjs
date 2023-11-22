import { Flex } from "@mantine/core";
import LongCard from "./LongCard";
import Parser from "../assets/parser.webp";
import Parser2 from "../assets/parser2.png";

const Actions = () => {
  const cards = [
    {
      title: "Connect your apps",
      description:
        "Specify is natively compatible with Figma, GitHub, Notion, Raycast, and many more to come. Our REST API and CLI help you to connect even more. ",
      imageSrc: Parser,
    },
    {
      title: "Parsers",
      description:
        "Specify’s open source parsers help you generate design tokens and assets that match your company standards. ",
      imageSrc: Parser2,
    },
  ];
  return (
    <section className="section">
      <Flex gap="lg" align="center" justify="center" wrap="wrap">
        {cards.map((card, index) => (
          <LongCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            theme="transparent"
          />
        ))}
      </Flex>
    </section>
  );
};

export default Actions;
