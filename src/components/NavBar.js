import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery("(max-width: 650px)");

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          fontFamily: "Playfair Display",
          fontStyle: "normal",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#301E4E",
                borderRadius: 3,
              }}
            />
          </IconButton>
          {isMatch ? (
            <>
              <Drawer
                open={openDrawer}
                anchor="right"
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                  style: {
                    width: isSmallScreen ? "100%" : "674px",
                    paddingLeft: "40px",
                    backgroundColor: "#301E4E",
                    color: "#fff",
                    maxHeight: "auto",
                  },
                }}
              >
                <CancelIcon
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    marginLeft: "auto",
                    padding: "30px",
                    fontSize: "70px",
                    color: "#E7D7F6",
                  }}
                />
                <List sx={{
                  margin
                    : "20px", fontWeight: "800"
                }}>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "800",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                          color: "#E7D7F6"
                        }}
                      >
                        Services
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "800",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                          color: "#E7D7F6"
                        }}
                      >
                        About Us
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "800",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                          color: "#E7D7F6"
                        }}
                      >
                        Blogs
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "800",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                          color: "#E7D7F6"
                        }}
                      >
                        Contact Us
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemButton>
                      <Button
                        variant="contained"
                        fullWidth={true}
                        style={{
                          height: "50px",
                          borderRadius: "15px",
                          backgroundColor: "#FF6E6C"
                        }}
                      >
                        Contained
                      </Button>
                    </ListItemButton>
                  </ListItemButton>
                </List>
              </Drawer>
              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{ marginLeft: "auto" }}
              >
                <MenuRoundedIcon
                  sx={{
                    backgroundColor: "#E7D7F6",
                    padding: "10px",
                    borderRadius: "50%",
                    fontSize: "35px",
                  }}
                />
              </IconButton>
            </>
          ) : (
            <>
              <Typography sx={{ float: "left", marginLeft: "auto" }}>
                <Tabs textColor="secondary">
                  <Tab
                    label="Contact"
                    style={{
                      fontFamily: "Playfair Display",
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      fontWeight: "400",
                      fontSize: "22px",
                      lineHeight: "83px",
                      letterSpacing: "-0.005em",
                    }}
                  />
                  <Tab
                    label="Work"
                    style={{
                      fontFamily: "Playfair Display",
                      textTransform: "capitalize",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "22px",
                      lineHeight: "83px",
                      letterSpacing: "-0.005em",
                    }}
                  />
                </Tabs>
              </Typography>
              <Drawer
                open={openDrawer}
                anchor="right"
                PaperProps={{
                  style: {
                    width: isSmallScreen ? "100%" : "550px",
                    padding: "10px",
                    backgroundColor: "#301E4E",
                    color: "#fff",
                  },
                }}
              >
                <CancelIcon
                  onClick={() => setOpenDrawer(false)}
                  sx={{
                    marginLeft: "auto",
                    padding: "30px",
                    fontSize: "70px",
                    color: "#E7D7F6",
                    cursor: "pointer",
                  }}
                />
                <List sx={{
                  margin
                    : "20px"
                }}>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "62px",
                          lineHeight: "5px",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        Services
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        About Us
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        Blogs
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText>
                      <h3
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "62px",
                          lineHeight: "20px",
                          letterSpacing: "-0.005em",
                        }}
                      >
                        Contact Us
                      </h3>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <Button
                      variant="contained"
                      fullWidth={true}
                      style={{
                        height: "50px",
                        borderRadius: "15px",
                        backgroundColor: "#FF6E6C"
                      }}
                    >
                      Contained
                    </Button>
                  </ListItemButton>
                </List>
              </Drawer>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuRoundedIcon
                  sx={{
                    backgroundColor: "#E7D7F6",
                    padding: "10px",
                    borderRadius: "50%",
                    fontSize: "35px",
                  }}
                />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
