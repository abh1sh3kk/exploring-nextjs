import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@/styles/App.css";
import { MantineProvider, createTheme, rem } from "@mantine/core";

const themeObj = {
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    "md-2": rem(15),
    lg: rem(16),
    xl: rem(20),
  },
  headings: {
    FontFace: "Inter sans-serif",
    fontWeight: "400",

    sizes: {
      h1: { fontWeight: "800", fontSize: rem(42), lineHeight: "1.1" },
      h2: { fontWeight: "700", fontSize: rem(32), lineHeight: "1.1" },
      h6: { fontWeight: "900" },
    },
  },
};
const theme = createTheme(themeObj);

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
