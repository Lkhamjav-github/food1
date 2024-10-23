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
              image="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/440936162_122162924738062624_5151130331559887633_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NCLhhXjbGG4Q7kNvgGVEXdw&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=Ah8Fgd9F-Dfb-umFMDDgy7d&oh=00_AYDk6Y6vwypT0IX9QkAYXJQ7qnYCj_ZKnZMsdGwCCIK-Cw&oe=671E7EB4"
              alt="food image"
            />
            <CardMedia
              component="img"
              sx={{ width: "32%" }}
              image="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/395793326_122116907276062624_5560650098997026588_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=AwQl4z3GkHQQ7kNvgEHdJvL&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=ACIiKmiYwhOeQnaYeU8uwrL&oh=00_AYConNAezs41oMgvqnVFZJHhdHBcmtXdRlqC2HnhMofepQ&oe=671E8F4F"
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
