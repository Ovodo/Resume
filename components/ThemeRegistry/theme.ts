import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    text: {
      // primary: "var(--secondary)",
      primary: "var(--binance_white)",
      secondary: "blue",
    },
  },
  typography: {
    // color: ["var(--secondary)"],
    fontFamily: [
      "calibri",
      "dynapuff",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "0.75rem",
          wordSpacing: 1,
          letterSpacing: 0,
          // lineHeight: 1.25,
        },
      },
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "12pt",
            fontWeight: 400,
            color: "var(--binance_brightash)",
          },
        },
        {
          props: {
            variant: "h5",
          },
          style: {
            fontWeight: 600,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: "13pt",
            fontWeight: 400,
          },
        },
      ],
    },
  },
});

export default theme;
