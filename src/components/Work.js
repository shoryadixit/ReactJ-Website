import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Nike from "../images/nike.jpeg";
import Starbucks from "../images/Starbucks.jpeg";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        backgroundColor: "#301E4E",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px 0px",
        gap: "40px",
        position: "relative",
    },

    h1: {
        position: "relative",
        display: "flex",
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "689",
        fontSize: "6vw",
        lineHeight: "80px",
        letterSpacing: "-0.015em",
        width: "10px",
        margin: "0",
        marginBottom: "20px",
    },
}));
export default function Work() {

    const classes = useStyles();
    return (
        <Container maxWidth className={classes.container} sx={{}}>
            <Box sx={{ color: "#E2DAEB", padding: "10px" }}>
                <h1 className={classes.h1}>OUR WORK</h1>
                <Button  variant="contained" style={{ backgroundColor: "#FF6E6C" }} sx={{display:{lg:"block",md:"block",sm:"block", xs:"none"}}}>
                    View All
                </Button>
            </Box>
            <Box sx={{ width: "100%", position: "relative" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <img
                                src={Starbucks}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                        <Box sx={{color: "#fff"}}>
                            <h6 style={{color: "#FF6E6C", margin: "0",}}>Digital Marketing</h6>
                            <h1 style={{fontFamily: "Playfair Display", fontStyle: "normal", fontWeight: "400", color: "#E7D7F6",}}>STARBUCKS</h1>
                            <h2 style={{fontSize: "20px"}}>Our ad campaign brought 80% footfall to the company   </h2>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <img
                                src={Nike}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                        <Box sx={{color: "#fff"}}>
                            <h6 style={{color: "#FF6E6C", margin: "0",}}>Digital Marketing</h6>
                            <h1 style={{fontFamily: "Playfair Display", fontStyle: "normal", fontWeight: "400", color: "#E7D7F6"}}>Nike</h1>
                            <h2 style={{fontSize: "20px"}}>Our ad campaign brought 80% footfall to the company   </h2>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <img
                                src={Nike}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                        <Box sx={{color: "#fff"}}>
                            <h6 style={{color: "#FF6E6C", margin: "0",}}>Digital Marketing</h6>
                            <h1 style={{fontFamily: "Playfair Display", fontStyle: "normal", fontWeight: "400", color: "#E7D7F6"}}>Nike</h1>
                            <h2 style={{fontSize: "20px"}}>Our ad campaign brought 80% footfall to the company   </h2>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <img
                                src={Starbucks}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                        <Box sx={{color: "#fff"}}>
                            <h6 style={{color: "#FF6E6C", margin: "0",}}>Digital Marketing</h6>
                            <h1 style={{fontFamily: "Playfair Display", fontStyle: "normal", fontWeight: "400", color: "#E7D7F6"}}>STARBUCKS</h1>
                            <h2 style={{fontSize: "20px"}}>Our ad campaign brought 80% footfall to the company   </h2>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Button  variant="contained" style={{ backgroundColor: "#FF6E6C", width:"100%", marginTop:"10px", borderRadius:"7px" }} sx={{display:{lg:"none",md:"none",sm:"none", xs:"block"}}}>
                    View All
                </Button>
        </Container>
    );
}
