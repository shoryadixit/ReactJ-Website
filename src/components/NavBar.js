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
                    width: "674px",
                    padding: "10px",
                    backgroundColor: "#301E4E",
                    color: "#fff",
                    height: "500px",
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
                <List>
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
                </List>
                <Button variant="contained">Contained</Button>
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
                    width: "550px",
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
                <List>
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
                </List>
                <Button
                  variant="contained"
                  fullWidth={true}
                  style={{
                    height: "50px",
                    borderRadius: "15px",
                    width: "500px",
                  }}
                >
                  Contained
                </Button>
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
