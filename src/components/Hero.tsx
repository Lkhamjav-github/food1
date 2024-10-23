import theme from "@/theme/mui.theme";
import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";

export const Hero = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100dvh" }}
        >
          <Stack
            alignItems={"center"}
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('/goolifelores1.avif')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: { xl: "cover", xs: "bottom" },
            }}
          >
            <Box
              component="img"
              src="../logo.png"
              alt="logo"
              sx={{ width: "120px", height: "96px", mt: 4 }}
            />
            <Typography
              variant="h1"
              fontSize={{ xs: "16px", sm: "24px", md: "48px" }}
              sx={{
                color: "primary.main",
                pt: 3,
                fontFamily: "geeks",
                fontWeight: "bold",
              }}
            >
              Good food, Good mood
            </Typography>
            <Box
              sx={{
                width: "90%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingBottom: "12px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.Blue.main,
                  fontFamily: "firesans",
                }}
              >
                hello@goolifelores.mn
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.Blue.main,
                  fontFamily: "firesans",
                }}
              >
                +976 77102222
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
