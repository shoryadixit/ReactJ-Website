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
    backgroundPosition: "cover",
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
    display: "flex",
    padding: "0px 24px 24px 24px",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    position: "absolute",
    width: "93%",
    height: "100px",
    top: "120px",
    paddingBottom: "15px",
    background: "rgba(255, 255, 255, 0.44)",
  },

  "@media (max-width: 600px)": {
    inner: {
      width: "90%",
    }
  },

  "@media (max-width: 430px)": {
    inner: {
      width: "390px"
    }
  }
}));

function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Card
      variant="outlined"
      className={classes.cover}
      style={{ borderRadius: "0px", border: "none", width: "100%" }}
    >
      {!isMatchLg ? (
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
              width: "auto",
            }}
          >
            Helping you stand out in a crowded market
          </Typography>
        </div>
      ) : (
        <div className={classes.inner}>
          <Typography
            style={{
              fontFamily: 'Playfair Display',
              fontStyle: "normal",
              fontSize: "30px",
              fontWeight: "700",
              textAlign: "center",
              width: "auto"
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
          <div style={{ display: "flex", width: "auto"}}>
            <Typography
              style={{
                fontFamily: 'Playfair Display',
                fontStyle: "normal",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "24px",
                marginRight: "auto",
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
