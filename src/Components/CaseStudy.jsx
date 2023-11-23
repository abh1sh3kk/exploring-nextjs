import { Button, Text, Card, Flex, Stack, Title } from "@mantine/core";

import {
  AiFillAccountBook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const CaseStudy = () => {
  return (
    <section style={{ marginInline: "1rem", marginBlock: "0.4rem" }}>
      <Card
        component={Flex}
        direction={{ base: "column", md: "row" }}
        radius={12}
        className="case-study-card"
        // c="white"
        maw={800}
        // bg="transparent"
        w="85vw"
      >
        {/* ---------------------Left---------------------------- */}
        <Stack
          style={{
            borderRight: "1px solid #373737f0",
            width: "100%",
          }}
          className="card-radial"
          w={{ xs: "100%", lg: "280px !important" }}
          p="xl"
          justify="center"
        >
          {/* ----------------------circle-------------- */}
          <div className="circle-gradient"></div>

          <Stack
            align="center"
            justify="space-between"
            gap="xl"
            style={{ position: "relative" }}
          >
            <Title order={2}>Pitch</Title>
            {/* ----------------------Integrated and logos-------------- */}
            <Stack
              align="center"
              // visibleFrom="md"
            >
              <Text size="xl">Integrated Apps</Text>
              <Flex gap="sm">
                <AiFillGithub
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "0.2rem",
                  }}
                  fill="#6a0bffb0"
                  fontSize={36}
                />{" "}
                <AiFillAccountBook
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "0.2rem",
                  }}
                  fill="#6a0bffb0"
                  fontSize={36}
                />
                <AiFillLinkedin
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "0.2rem",
                  }}
                  fill="#6a0bffb0"
                  fontSize={36}
                />
              </Flex>
            </Stack>

            {/* ----------------------Case study button-------------- */}
            <Button variant="white" radius="xl" size="md" color="black">
              Case Study
            </Button>
          </Stack>
        </Stack>

        {/* ---------------------Right---------------------------- */}
        <Stack
          className="case-study-card__details"
          w={{ sm: "100%", lg: "520px" }}
          p="xl"
        >
          <Stack gap={2}>
            <Title order={3}>
              Jeremy Dahan
            </Title>
            <Text size="xl">Design System Designer</Text>
          </Stack>
          <Text size="xl">
            &quot;Specify brought us confidence and ease of mind. Before, we
            used to be cautious and hesitant before updating our design tokens.
            We&apos;re now confident about updating a token, rolling back to a
            previous version, or even trying new ones.&quot;
          </Text>
        </Stack>
      </Card>
    </section>
  );
};

export default CaseStudy;
