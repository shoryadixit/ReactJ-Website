import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import banner from "../images/Banner_image.png";

const useStyles = makeStyles(() => ({
  cover: {
    display: "flex",
    backgroundImage: `url(../images/Banner_image.png)`,
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "flexstart",
    flexDirection: "column",
  },

  outer: {
    display: "flex",
    width: "700px",
    height: "500px",
    flexDirection: "column",
    position: "absolute",
    background: "rgba(255, 255, 255, 0.44)",
  },

  inner: {
    position: "absolute",
    display: "flex",
    background: "rgba(255, 255, 255, 0.44)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "cener",
    width: "100%",
    textAlign: "center",
    top: "150px",
    height: "150px",
    margin: "0 auto",
  }
}));

function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Card
      variant="outlined"
      className={classes.cover}
      style={{ borderRadius: "0px", border: "none" }}
    >
      {!isMatch ? (
        <div className={classes.outer}>
          <Typography
            style={{
              fontSize: "99px",
              fontFamily: "Playfair Display",
              marginLeft: "50px",
              color: "#301E4E",
              fontStyle: "normal",
              fontWeight: "686",
              lineHeight: "132px",
              letterSpacing: "-0.015em",
              marginTop: "30px",
            }}
          >
            We are
            <br />
            <span
              style={{
                color: "#B7364A",
              }}
            >
              Extensive.
            </span>
          </Typography>

          <Typography
            style={{
              fontSize: "49px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              lineHeight: "65px",
              color: "#301E4E",
              marginLeft: "50px",
              marginTop: "30px",
            }}
          >
            Helping you stand out in a crowded market
          </Typography>
        </div>
      ) : (
        <div className={classes.inner}>
          <Typography
            style={{
              fontSize: "53px",
              fontFamily: "Playfair Display",
              display: "flex",
              position: "relative",
              color: "#301E4E",
              lineHeight: "30px",
              fontStyle: "normal",
              fontWeight: "686",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            We are 
            <span
              style={{
                color: "#B7364A",
                marginLeft: "10px"
              }}
            >
              Extensive.
            </span>
          </Typography>
          <div style={{display: "flex"}}>
          <Typography
            style={{
              fontSize: "40px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              lineHeight: "65px",
              color: "#301E4E",
              margin: "0 auto",
              padding: "auto"
            }}
          >
            Helping you stand out in a crowded market
          </Typography>
          </div>
        </div>
      )}
      <CardMedia
        component="img"
        height="auto"
        image={banner}
        alt="green iguana"
      />
    </Card>
  );
}

export default Banner;
