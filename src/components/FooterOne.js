import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    background: "#301E4E",
    alignItems: "flex-start",
    flexDirection: "row",
    height: "auto",
    padding: "32px 10px 25px 25px",
    marginBottom: "20px",
  },
}));
export default function FooterOne() {
  const classes = useStyles();
  return (
    <Container maxWidth className={classes.container}>
      <Container maxWidth className={classes.container}>
        <Typography
          variant="h2"
          sx={{
            color: "#A17FC9",
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: "689",
            fontSize: { lg: "99px", md: "70px", sm: "60px", xs:"50px" },
            lineHeight: {lg:"132px", md:"100px", sm:"70px", xs:"50px"},
            position: "relative",
            letterSpacing: "-0.015em",

          }}
        >
          Looking to drive
          <br />
          results?{" "}
          <span style={{ color: "#FF6E6C" }}>
            <u>Lets chat</u>
          </span>
        </Typography>
      </Container>
    </Container>
  );
}