import { Card, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import pinterest from "../images/Pinterest.jpeg";
import F from "../images/f.jpeg";
import pwa from "../images/pwa.jpeg";
import sass from "../images/sass.jpeg";
import V from "../images/V.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={2.3}>
        <Item sx={{boxShadow: 'none', outline: 'none'}}>
          <img
            src={pinterest}
            alt=""
            style={{ width: "60%", objectFit: "contain", mixBlendMode: "hard-light" }}
          />
        </Item>
      </Grid>
      <Grid item xs={2.3}>
        <Item sx={{boxShadow: 'none', outline: 'none'}}>
          <img src={F} alt="" style={{ width: "60%", objectFit: "cover", mixBlendMode: "hard-light" }} />
        </Item>
      </Grid>
      <Grid item xs={2.3}>
        <Item sx={{boxShadow: 'none', outline: 'none'}}>
          <img src={pwa} alt="" style={{ width: "60%", objectFit: "cover", mixBlendMode: "hard-light" }} />
        </Item>
      </Grid>
      <Grid item xs={2.3}>
        <Item sx={{boxShadow: 'none', outline: 'none'}}>
          <img src={sass} alt="" style={{ width: "60%", objectFit: "cover", mixBlendMode: "hard-light" }} />
        </Item>
      </Grid>
      <Grid item xs={2.3}>
        <Item sx={{boxShadow: 'none', outline: 'none'}}>
          <img src={V} alt="" style={{ width: "60%", objectFit: "cover", mixBlendMode: "hard-light" }} />
        </Item>
      </Grid>
    </React.Fragment>
  );
}

const Ourpartners = () => {
  return (
    <Container
      maxWidth
      style={{ backgroundColor: "#fff", marginTop: "64px" }}
    >
      <Container maxWidth style={{alignItems: "center"}}>
        <Card variant="" style={{ borderRadius: "0px", marginBottom: "90px" }}>
          <Typography
            style={{
              marginTop: "30px",
              fontSize: "62px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#301E4E",
              fontWeight: "700",
              lineHeight: "83px",
              letterSpacing: "-0.005em",
            }}
          >
            Our <br /> Partners .
          </Typography>
          <Typography
            style={{
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "25px",
              lineHeight: "31px",
              color: "#FF6E6C",
            }}
          >
            Your success is our success.
          </Typography>
        </Card>
        <Box sx={{ flexGrow: 10}}>
          <Grid container sx={{boxShadow: 'none', outline: 'none'}}>
            <Grid container sx={{boxShadow: 'none', outline: 'none'}}>
              <FormRow />
            </Grid>
            <Grid container sx={{boxShadow: 'none', outline: 'none'}}>
              <FormRow />
            </Grid>
          </Grid>
        </Box>
        </Container>

    </Container>
  );
};

export default Ourpartners;