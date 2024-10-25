import React from "react";
import { Typography, Link, Stack, Box, ThemeProvider } from "@mui/material";
import theme from "@/theme/mui.theme";

export const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ borderTop: "1px solid", borderColor: "divider", paddingY: 2 }}
      >
        <Box

          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            width: "85%",
            maxWidth: "1300px",
            marginY: 2,
          }}
        >
          <Typography variant="caption">© 2024 Copyright reserved</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="caption">Developed by</Typography>
            <Link href="https://metakeys.mn/" target="_blank" rel="noopener">
              <img className="w-17 h-8" src="meta2.png" alt="meta logo" />
            </Link>
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
