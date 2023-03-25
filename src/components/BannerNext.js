import { Box, Button, Card, CardMedia, Grid, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ellipse from "../images/ellipse.jpeg"

const Booking = () => {
  return (
    <Container
      maxWidth
      style={{ marginTop: "288px", marginBottom: "250px" }}
    >
      <Container maxWidth>
        <Card variant="">
          <Typography
            style={{
              fontSize: "25px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              textTransform: "uppercase",
            }}
          >
            Who we are
          </Typography>

          <Typography
            style={{
              marginTop: "52px",
              fontSize: "99px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              fontWeight: "900",
            }}
          >
            We are Extensive.
          </Typography>

          <Typography
            style={{
              marginTop: "30px",
              fontSize: "35px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              color: "#494949",
              lineHeight: "44px",
              fontWeight: "400",
              letterSpacing: "0.0025em",
            }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>

          <Button
            variant="contained"
            style={{
              marginTop: "52px",
              backgroundColor: "#301E4E",
              display: "flex",
              padding: "20px 36px",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: "15px"
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: "0.0125em",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
              }}
            >
              Book A Free Marketing Audit
            </Typography>
          </Button>
        </Card>
      </Container>

      <Container maxWidth sx={{ marginTop: "200px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              style={{ width: "600px" }}
              sx={{ display: "flex", overflow: "hidden", marginLeft: "30px" }}
            >
              <CardMedia component="img" image={ellipse} alt="green iguana" sx={{display: "flex"}}/>
              <Typography
                sx={{
                  fontSize: "99px",
                  fontFamily: "Playfair Display",
                  position: "absolute",
                  marginTop: "8vh",
                  fontWeight: "700",
                  paddingLeft: "60px",
                  color: "#301E4E",
                  lineHeight: "1.3",
                }}
              >
                WHAT <br /> WE DO.
                <Typography
                  sx={{
                    fontSize: "35px",
                    fontFamily: "Source Sans Pro",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "44px",
                    letterSpacing: "-0.0025em",
                    marginTop: "20px",
                  }}
                >
                  We do lots of stuffs, basically <br />
                  adding value to your product.
                </Typography>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} >
            <Box sx={{ marginLeft: "130px" }}>
              <list >
                <ListItem sx={{ padding: "26px 0px" }}>
                  <Typography
                    sx={{
                      color: "#301E4E",
                      fontSize: "62px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      fontStyle: "normal",
                      letterSpacing: "-0.005em",
                      lineHeight: "83px",
                    }}
                  >
                    Digital Marketing
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "26px 0px" }}>
                  <Typography
                    sx={{
                      color: "#301E4E",
                      fontSize: "62px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      fontStyle: "normal",
                      letterSpacing: "-0.005em",
                      lineHeight: "83px",
                    }}
                  >
                    Digital Marketing
                  </Typography>
                </ListItem>
                <ListItem sx={{ padding: "26px 0px" }}>
                  <Typography
                    sx={{
                      color: "#301E4E",
                      fontSize: "62px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      fontStyle: "normal",
                      letterSpacing: "-0.005em",
                      lineHeight: "83px",
                    }}
                  >
                    Digital Marketing
                  </Typography>
                </ListItem>

                <ListItem sx={{ padding: "26px 0px" }}>
                  <Typography
                    sx={{
                      color: "#301E4E",
                      fontSize: "62px",
                      fontFamily: "Playfair Display",
                      fontWeight: "400",
                      fontStyle: "normal",
                      letterSpacing: "-0.005em",
                      lineHeight: "83px",
                    }}
                  >
                    Digital Marketing
                  </Typography>
                </ListItem>
              </list>
              <Button
                variant="contained"
                sx={{
                  textTransform: "uppercase",
                  padding: "17px",
                  fontFamily: "Source Sans Pro",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "25px",
                  letterSpacing: "0.0125em",
                  backgroundColor: "#301E4E",
                }}
              >
                View All
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Booking;


