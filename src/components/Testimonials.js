import { makeStyles } from "@mui/styles";
import { Container, Box, Card } from "@mui/material";
import React from "react";
import profile from "../images/logo.png";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "220px",
    marginBottom: "50px",
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "40px",
    position: "relative",
  },

  h1: {
    position: "relative",
    color: "#301E4E",
    display: "flex",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "689",
    fontSize: "5vw",
    lineHeight: "80px",
    letterSpacing: "-0.015em",
    width: "auto",
    margin: "0",
    marginBottom: "20px",
  },
  p: {
    display: "flex",
    position: "relative",
    color: "#301E4E",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: "62px",
    lineHeight: "80px",
    letterSpacing: "-0.015em",
    width: "auto",
    margin: "0",
    alignItems: "flex-end",
    flexDirection: "row",
    marginLeft: "120px",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "cener",
    padding: "30px",
    boxShadow: "none",
    border: "2px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    backgroundColor: "red",
  },
}));

export default function Testimonials() {
  const classes = useStyles();
  return (
    <Container maxWidth className={classes.container}>
      <Container maxWidth>
        <Box maxWidth sx={{ marginBottom: "50px" }}>
          <h1 className={classes.h1}>Testimonials</h1>
        </Box>

        <Container maxWidth>
          <Card className={classes.card}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                paddingTop: "30px",
                paddingLeft: "70px",
              }}
            >
              <img
                src={profile}
                alt=""
                style={{
                  mixBlendMode: "color-blend",
                  width: "168px",
                  height: "168px",
                  top: "-10px",
                  border: "1px solid grey",
                  borderRadius: "100%",
                }}
              />
              <p className={classes.p}>“Working with Extensive is great” </p>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: "0px 80px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  color: "#301E4E",
                  fontSize: "49px",
                }}
              >
                <div>Hershel</div>
              </Box>
              <Box sx={{ fontSize: "23px", color: "#FF6E6C" }}>
                <div>
                  Head of director
                  <br /> GGPL PVT LTD.
                </div>
              </Box>
            </Box>

            <hr
              style={{
                width: "155px",
                height: "10px",
                borderRadius: "20px",
                backgroundColor: "#301E4E",
                marginTop: "10px",
              }}
            />
          </Card>
        </Container>
      </Container>
    </Container>
  );
}