import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    ListItem,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ellipse from "../images/ellipse.jpeg";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        background: "#E7D7F6",
        alignItems: "flex-start",
        flexDirection: "row",
        padding: "32px 10px 32px 32px",
    }
}))

const Marketing = () => {

    const classes = useStyles();

    return (
        <Box maxWidth sx={{ marginTop: { lg: "200px", md: "200px", sm: "200px", xs: "-150px" }, marginBottom: "90px" }}>
            <Box maxWidth>
                <Box>
                    <Grid container spacing={2} style={{ display: "flex" }} sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}>
                        <Grid item xs={6}>
                            <Box
                                style={{}}
                                sx={{ display: "flex", overflow: "hidden", marginLeft: "30px" }}
                            >
                                <CardMedia component="img" image={ellipse} width="100px" alt="green iguana" style={{ width: "750", height: "650" }} sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }} />
                                <CardMedia component="img" image={ellipse} alt="green iguana" style={{ width: "250", height: "250" }} sx={{ display: { lg: "none", xs: "none", md: "block", sm: "block" } }} />
                                <CardMedia component="img" image={ellipse} alt="green iguana" style={{ width: "0px", height: "0px" }} sx={{ display: { lg: "none", xs: "none", md: "none", sm: "block" } }} />

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
                                        display: { lg: "block", md: "none", sm: "none", xs: "none" }
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
                                <Typography
                                    sx={{
                                        fontSize: "65px",
                                        fontFamily: "Playfair Display",
                                        position: "absolute",
                                        marginTop: "8vh",
                                        fontWeight: "700",
                                        paddingLeft: "60px",
                                        color: "#301E4E",
                                        lineHeight: "1.3",
                                        display: { lg: "none", md: "block", sm: "none", xs: "none" }
                                    }}
                                >
                                    WHAT <br /> WE DO.
                                    <Typography
                                        sx={{
                                            fontSize: "25px",
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
                                <Typography
                                    sx={{
                                        fontSize: "42px",
                                        fontFamily: "Playfair Display",
                                        position: "absolute",
                                        marginTop: "5vh",
                                        fontWeight: "700",
                                        paddingLeft: "40px",
                                        color: "#301E4E",
                                        lineHeight: "1.3",
                                        display: { md: "none", sm: "block", xs: "none" }

                                    }}
                                >
                                    WHAT <br /> WE DO.
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontFamily: "Source Sans Pro",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "24px",
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

                        <Grid item xs={6}>
                            <Box>
                                <list>
                                    <ListItem sx={{ padding: "26px 0px" }}>
                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "54px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "83px",
                                                marginLeft: "150px",
                                                display: { lg: "block", md: "none", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>


                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "45px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "40px",
                                                marginTop: "50px",
                                                marginLeft: "70px",
                                                display: { lg: "none", md: "block", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "30px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "20px",
                                                marginLeft: "40px",
                                                display: { lg: "none", xs: "none", md: "none", sm: "block" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                    </ListItem>

                                    <ListItem sx={{ padding: "26px 0px" }}>
                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "54px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "83px",
                                                marginLeft: "150px",
                                                display: { lg: "block", md: "none", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "45px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "40px",
                                                marginLeft: "70px",
                                                display: { lg: "none", md: "block", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "30px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "20px",
                                                marginLeft: "40px",
                                                display: { lg: "none", xs: "none", md: "none", sm: "block" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>


                                    </ListItem>

                                    <ListItem sx={{ padding: "26px 0px" }}>
                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "54px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "83px",
                                                marginLeft: "150px",
                                                display: { lg: "block", md: "none", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "45px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "40px",
                                                marginLeft: "70px",
                                                display: { lg: "none", md: "block", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "30px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "20px",
                                                marginLeft: "40px",
                                                display: { lg: "none", xs: "none", md: "none", sm: "block" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                    </ListItem>

                                    <ListItem sx={{ padding: "26px 0px" }}>
                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "54px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "83px",
                                                marginLeft: "150px",
                                                display: { lg: "block", md: "none", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "45px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "40px",
                                                marginLeft: "70px",
                                                display: { lg: "none", md: "block", sm: "none", xs: "none" },
                                            }}
                                        >
                                            Digital Marketing
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "#301E4E",
                                                fontSize: "30px",
                                                fontFamily: "Playfair Display",
                                                fontWeight: "400",
                                                fontStyle: "normal",
                                                letterSpacing: "-0.005em",
                                                lineHeight: "20px",
                                                marginLeft: "40px",
                                                display: { lg: "none", xs: "none", md: "none", sm: "block" },
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
                                        padding: { lg: "17px", md: "12px", sm: "7px" },
                                        marginLeft: { lg: "150px", md: "75px", sm: "40px" },
                                        fontFamily: "Source Sans Pro",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: { lg: "20px", md: "15px" },
                                        lineHeight: "20px",
                                        letterSpacing: "0.0125em",
                                        backgroundColor: "#301E4E",
                                        display: { lg: "block", xs: "none", md: "block", sm: "block" }
                                    }}
                                >
                                    View All
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }}>
                        <Container maxWidth className={classes.container}>
                            <Typography variant="h2" sx={{
                                color: "#301E4E",
                                fontFamily: 'Playfair Display',
                                fontStyle: "normal",
                                fontWeight: "689",
                                fontSize: "40px",
                                textTransform: "uppercase",
                                letterSpacing: "-0.015em",
                                marginLeft: "15px"

                            }}>
                                What<br />
                                We Do.
                            </Typography>
                            <Typography sx={{
                                color: "#301E4E",
                                fontFamily: 'Playfair Display',
                                fontStyle: "normal",
                                fontWeight: "689",
                                fontSize: "15px",
                                letterSpacing: "-0.015em",
                                marginTop: "10px",
                                marginLeft: "15px"
                            }}
                            >We do lots of stuffs , basically adding value to your product. </Typography>
                        </Container>

                        <ListItem sx={{ padding: "26px 0px" }}>
                            <Typography
                                sx={{
                                    color: "#301E4E",
                                    fontSize: "30px",
                                    fontFamily: "Playfair Display",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.005em",
                                    lineHeight: "20px",
                                    marginLeft: "30px",
                                }}
                            >
                                Digital Marketing
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ padding: "26px 0px" }}>
                            <Typography
                                sx={{
                                    color: "#301E4E",
                                    fontSize: "30px",
                                    fontFamily: "Playfair Display",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.005em",
                                    lineHeight: "20px",
                                    marginLeft: "30px",
                                }}
                            >
                                Digital Marketing
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ padding: "26px 0px" }}>
                            <Typography
                                sx={{
                                    color: "#301E4E",
                                    fontSize: "30px",
                                    fontFamily: "Playfair Display",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.005em",
                                    lineHeight: "20px",
                                    marginLeft: "30px",
                                }}
                            >
                                Digital Marketing
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ padding: "26px 0px" }}>
                            <Typography
                                sx={{
                                    color: "#301E4E",
                                    fontSize: "30px",
                                    fontFamily: "Playfair Display",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                    letterSpacing: "-0.005em",
                                    lineHeight: "20px",
                                    marginLeft: "30px",
                                }}
                            >
                                Digital Marketing
                            </Typography>
                        </ListItem>

                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "initial",
                                padding: "10px",
                                marginLeft: "30px",
                                fontFamily: "Source Sans Pro",
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: { lg: "20px", md: "15px" },
                                lineHeight: "20px",
                                letterSpacing: "0.0125em",
                                backgroundColor: "#301E4E",
                            }}
                        >
                            View all
                        </Button>

                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Marketing;