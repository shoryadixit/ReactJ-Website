import { Box } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { makeStyles } from "@mui/styles";
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
    <Box sx={{ bgcolor: "#301E4E", py: 4, fontFamily: "Playfair Display" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
          }}
        >
          <Grid container spacing={1} sx={{}}>
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
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sm={6}
          sx={{ display: "flex", margin: "0 auto", justifyContent: "center" }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ color: "#fff", fontFamily: "Playfair Display" }}
          >
            <InstagramIcon width="80" height="80" />
            <FacebookIcon width="80" height="80" />
            <TwitterIcon width="80" height="80" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
