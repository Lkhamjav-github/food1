import React from "react";
import { Box, Typography, CardMedia, ThemeProvider } from "@mui/material";
import theme from "@/theme/mui.theme";

export const Products = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "85%",
            maxWidth: "1300px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "firesans",
              paddingBottom: 6,
            }}
          >
            Our Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "32%" }}
              image="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/440936162_122162924738062624_5151130331559887633_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8aUff9iO2IQQ7kNvgEcqXS7&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=AIxyNwISlW3qRSy-PH2Ce_q&oh=00_AYBHdM-rnv2bI-zPU19MQFjmLoXXyEl5GhmzO_qz10OKWg&oe=6717E734"
              alt="food image"
            />
            <CardMedia
              component="img"
              sx={{ width: "32%" }}
              image="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/453403244_785998050365572_867753715413907162_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bfcRbYTCYBYQ7kNvgEEqFK-&_nc_zt=23&_nc_ht=scontent.fuln6-2.fna&_nc_gid=AF2qgTv92olr9kf2pAxajyU&oh=00_AYCPt9AMLKrPBDw1SitYfx3cmO8rf3cmdTNh1Lse7J8u3Q&oe=6717C368"
              alt="food image"
            />
            <CardMedia
              component="img"
              sx={{ width: "32%" }}
              image="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/440125519_7429249453796704_4548696286767984926_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wA3NXzkMbCcQ7kNvgGYVg_V&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=AgIO8ybtoYvfz5d6q3fbSNE&oh=00_AYDMbOqdWHjA2CisiygS--0vbIAQsBQGtnpmjKrlSw96uA&oe=671BFCD3"
              alt="food image"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
