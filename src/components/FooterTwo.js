import { Box } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Typography, Stack } from "@mui/material";

const options = [
  "Home Page",
  "About Us",
  "Book Audit",
  "Contact Us",
  "Our Services",
  "Blogs",
];

export default function FooterTwo() {
  return (
    <Box
      sx={{
        bgcolor: "#301E4E",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        fontFamily: "Playfair Display",
        marginTop: "20px",
        alignItems: "flex-start",
        padding: "10px",
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} sm={3} md={2}>
          <Box sx={{
            float: 'left',
            display: 'flex',
            padding: '25px 54px',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                margin: "auto",

                fontFamily: "Playfair Display",
                fontSize: "32px",
              }}
            >
              Logo
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marign: "0 auto",
          }}
        >
          <Grid container spacing={1} sx={{ margin: "0" }}>
            {options.map((option, index) => (
              <Grid key={index} item xs={6} sm={4} md={2}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    fontFamily: "Playfair Display",
                    fontSize: "20px",
                  }}
                >
                  {option}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          sm={6}
          sx={{
            margin: "0",
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "row",
            padding: "50px",
            marginTop: "30px"
          }}
        >
          <Stack direction="row" spacing={2} sx={{ color: "#fff" }}>
            <InstagramIcon width="50" height="50" />
            <FacebookIcon width="50" height="50" />
            <TwitterIcon width="50" height="50" />
          </Stack>
        </Grid>
      </Grid>
      <h6
        style={{
          display: "flex",
          margin: "0 auto",
          fontFamily: "Playfair Display",
          color: "#fff",
          padding: "10px",
          fontSize: "17px",
        }}
      >
        Copyright@2022
      </h6>
    </Box>
  );
}
