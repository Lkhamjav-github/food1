import React from "react";
import { Typography, Link, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ borderTop: "1px solid", borderColor: "divider", paddingY: 2 }}
    >
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          width: "85%",
          maxWidth: "1300px",
          marginY: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          © 2024 Copyright reserved
        </Typography>
        <Stack alignItems={"center"}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", marginRight: 1 }}
          >
            Developed by
          </Typography>
          <Link href="https://metakeys.mn/" target="_blank" rel="noopener">
            <img className="w-17 h-8" src="meta2.png" alt="meta logo" />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
