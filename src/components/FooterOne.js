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
        padding: "32px 10px 32px 32px",
    }
}))
export default function FooterOne() {
    const classes = useStyles();
    return (
        <Container maxWidth className={classes.container}>
            <Typography variant="h2" sx={{
                color: "#A17FC9", fontFamily: 'Playfair Display',
                fontStyle: "normal",
                fontWeight: "689",
                fontSize: "99px",
                lineHeight: "132px",
                position: "relative",
                letterSpacing: "-0.015em",
                }}>
                Looking to drive<br />
                results? <span style={{ color: "#FF6E6C" }}>Lets chat</span>
            </Typography>
        </Container >
    );
}