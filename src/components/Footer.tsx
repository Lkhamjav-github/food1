import React from "react";
import { Box, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        paddingY: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%",
          maxWidth: "1300px",
          marginY: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          © 2024 Copyright reserved
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", marginRight: 1 }}
          >
            Developed by
          </Typography>
          <Link href="https://metakeys.mn/" target="_blank" rel="noopener">
            <img className="w-17 h-8" src="meta2.png" alt="meta logo" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
