import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    Blue: Palette['primary'];
  }
  interface PaletteOptions {
    Blue?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#08b89d",
    },
    Blue: {
      main: "#283995",
    },
  },
  typography: {
    fontFamily: "firesans",
    body1: {
      color: "#283995",
      fontFamily: "firesans",
    },
    h4: {
      fontWeight: "bold",
      fontFamily: "firesans",
      paddingBottom: "24px",
    },
    h1: {
      fontFamily: "geeks",
      fontWeight: "bold",
      color: "#08b89d",
      paddingTop: "24px",
      fontSize: "48px",
      "@media (max-width:960px)": { fontSize: "24px" },
      "@media (max-width:600px)": { fontSize: "16px" },
    },
    caption: {
      color: "text.secondary",
    },
  },
});

export default theme;
