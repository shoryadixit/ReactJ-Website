import { makeStyles } from "@mui/styles";
import { Container, Box, Card } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";

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
        fontSize: "4.2vw",
        lineHeight: "80px",
        letterSpacing: "-0.015em",
        width: "100%",
        margin: "0",
        alignItems: "flex-end",
        flexDirection: "column",
        marginLeft: "16",
    },

    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "cener",
        padding: "48px",
        boxShadow: "none",
        border: "2px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
    },
}));


export default function Testimonials() {
    const classes = useStyles();
    return (
        <Container maxWidth className={classes.container}>
            <Box sx={{ margin: "50px", padding: "40px" }}>
                <h1 className={classes.h1}>Testimonials</h1>
            </Box>
            <Card className={classes.card}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "0",
                    gap: "40px",
                }}>
                    <img src={logo} alt="" style={{mixBlendMode: "color-blend", width: "158px", top: "-10px"}}/>
                    <p className={classes.p}>“Working with Extensive is great” </p>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Box />
                    <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <p className={classes.p}>Hershel</p>
                        <p className={classes.p}>
                            Head of director
                            <br />
                            GGPL PVT LTD.
                        </p>
                    </Box>
                </Box>
            </Card>
        </Container>
    );
}
