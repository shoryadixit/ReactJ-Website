import { makeStyles } from "@mui/styles";
import { Container, Box, Card, useTheme, useMediaQuery, CardMedia } from "@mui/material";
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
    fontSize: "10vw",
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
    fontSize: "60px",
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
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth className={classes.container}>
      <Container maxWidth>
        {isMatch ? (
          <>
            <Box maxWidth sx={{ marginBottom: "50px" }}>
              <h1 className={classes.h1} style={{ padding: "0", margin: "0" }}>Testimonials</h1>
            </Box>

            <Container maxWidth>
              <Card>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingTop: "30px",

                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ margin: "0 auto", width: "126px" }}
                    image={profile}
                    alt="My Image"
                  />

                  <p style={{
                    fontFamily: 'Source Sans Pro',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "23px",
                    textAlign: "center",
                    margin: "0 auto"
                  }}>“Working with Extensive is great” </p>
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
                      flexDirection: "column",
                      alignItems: "flex-start",
                      color: "#301E4E",
                      flex: "none",
                      fontWeight: "400",
                      order: 1,
                      alignSelf: "stretch",
                      flexGrow: "0",
                      fontStyle: "none"
                    }}
                  >
                    <p style={{ padding: "0", margin: "0" }}>-Hershel</p>
                    <p style={{ padding: "0", margin: "0", color: "#FF6E6C" }}>Head of director GGPL PVT LTD.</p>
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
          </>
        ) : (
          <>
            <Box maxWidth sx={{ marginBottom: "50px" }}>
              <h1 className={classes.h1} style={{
                padding: "0", margin: "0", position: "relative",
                color: "#301E4E",
                display: "flex",
                fontFamily: "Playfair Display",
                fontStyle: "normal",
                fontWeight: "689",
                fontSize: "5.7vw",
                lineHeight: "80px",
                letterSpacing: "-0.015em",
                width: "auto",
                marginBottom: "20px",
              }}>Testimonials</h1>
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
                    fontFamily: "Playfair Display",
                    fontStyle: "normal"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      color: "#301E4E",
                      justifyContent: "center",
                      fontSize: "49px",
                      textAlign: "right",
                    }}
                  >
                    <p style={{float: "right", margin: "0 auto", padding: "10px"}}>Hershel</p>
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
          </>
        )}
      </Container>
    </Container>
  );
}
