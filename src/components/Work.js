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

    // const theme = useTheme();
    // const isMatch = useMediaQuery(theme.breakpoints.down("sm"));


    const classes = useStyles();
    return (
        <Container maxWidth className={classes.container} sx={{}}>
            <Box sx={{ color: "#E2DAEB", padding: "10px" }}>
                <h1 className={classes.h1}>OUR WORK</h1>
                <Button className={classes.viewButton} variant="contained" style={{ backgroundColor: "#FF6E6C" }}>
                    View All
                </Button>
            </Box>
            <Box sx={{ width: "100%", position: "relative" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item>
                            <img
                                src={Starbucks}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <img
                                src={Nike}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                        <h6>DIGITAL MARKETING</h6>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <img
                                src={Nike}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <img
                                src={Starbucks}
                                alt=""
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
