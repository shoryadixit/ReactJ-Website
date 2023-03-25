import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        marginTop: "30px",
        background: "#301E4E",
        alignItems: "flex-start",
        flexDirection: "column",
        height: "auto",
        padding: "80px"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        gap: "50px",
        width: "70%"
    },
}));
export default function FooterTwo() {
    const classes = useStyles();
    return (
        <Container maxWidth className={classes.container}>
            <Box>
                <Typography variant="h4" sx={{
                    color: "#fff",
                    fontFamily: "Playfair display",
                    fontStyle: "normal",
                    fontSize: "35px",
                    lineHeight: "47px",
                    letterSpacing: "0.0025em",
                    position: "relative"

                }}>
                    Logo
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0px",
                gap: "32px",
                color: "#fff",
                fontFamily: "Playfair Display",
                fontSize: "1.7vw",
            }}>
                <Grid spacing={3} className={classes.item}>
                    <Grid item xs={1}>
                        Home Page
                    </Grid>
                    <Grid item>
                        About Us
                    </Grid>
                    <Grid item>
                        Book Audit
                    </Grid>
                    <Grid item>
                        Contact Us
                    </Grid>
                    <Grid item>
                        Our Services
                    </Grid>
                    <Grid item>
                        Blogs
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <InstagramIcon/>
                <FacebookIcon />
                <TwitterIcon />
            </Box>
        </Container>
    );
}