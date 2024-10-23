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
});

export default theme;
