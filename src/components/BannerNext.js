// import { Box, Button, Card, CardMedia, Grid, ListItem, Typography } from "@mui/material";
// import { Container } from "@mui/system";
// import React from "react";
// import ellipse from "../images/ellipse.jpeg"

// const Booking = () => {
//   return (
//     <Container
//       maxWidth
//       style={{ marginTop: "288px", marginBottom: "250px" }}
//     >
//       <Container maxWidth>
//         <Card variant="">
//           <Typography
//             style={{
//               fontSize: "25px",
//               fontFamily: "Playfair Display",
//               fontStyle: "normal",
//               color: "#463366",
//               textTransform: "uppercase",
//             }}
//           >
//             Who we are
//           </Typography>

//           <Typography
//             style={{
//               marginTop: "52px",
//               fontSize: "99px",
//               fontFamily: "Playfair Display",
//               fontStyle: "normal",
//               color: "#463366",
//               fontWeight: "900",
//             }}
//           >
//             We are Extensive.
//           </Typography>

//           <Typography
//             style={{
//               marginTop: "30px",
//               fontSize: "35px",
//               fontFamily: "Source Sans Pro",
//               fontStyle: "normal",
//               color: "#494949",
//               lineHeight: "44px",
//               fontWeight: "400",
//               letterSpacing: "0.0025em",
//             }}
//           >
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. Velit officia consequat duis enim velit mollit. Exercitation
//             veniam consequat sunt nostrud amet.
//           </Typography>

//           <Button
//             variant="contained"
//             style={{
//               marginTop: "52px",
//               backgroundColor: "#301E4E",
//               display: "flex",
//               padding: "20px 36px",
//               alignContent: "center",
//               justifyContent: "center",
//               flexDirection: "row",
//               borderRadius: "15px"
//             }}
//           >
//             <Typography
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "600",
//                 fontStyle: "normal",
//                 letterSpacing: "0.0125em",
//                 textTransform: "uppercase",
//                 fontFamily: "Source Sans Pro",
//               }}
//             >
//               Book A Free Marketing Audit
//             </Typography>
//           </Button>
//         </Card>
//       </Container>
//     </Container>
//   );
// };

// export default Booking;



import { Button, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Booking = () => {
  return (
    <Container maxWidth>
      <Container maxWidth>
        <Card variant="">
          {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* 600px above */}
          <Typography
            style={{
              marginTop: "200px",
              fontSize: "25px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              textTransform: "uppercase",
            }}
            sx={{ display: { sm: "block", xs: "none" } }}
          >
            Who we are
          </Typography>

          {/* below 600px */}
          <Typography
            style={{
              marginTop: "50px",
              fontSize: "14px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              textTransform: "uppercase",
            }}
            sx={{ display: { sm: "none", xs: "block" } }}
          >
            Who we are
          </Typography>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


          {/*  1400px*/}

          <Typography
            style={{
              marginTop: "52px",
              fontSize: "99px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              fontWeight: "900",
            }}
            sx={{ display: { md: "block", xs: "none" } }}
          >
            We are Extensive.
          </Typography>

          {/* 900px */}
          <Typography
            style={{
              marginTop: "30px",
              fontSize: "62px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              fontWeight: "900",
            }}
            sx={{ display: { sm: "block", md: "none", xs: "none" } }}
          >
            We are Extensive.
          </Typography>

          {/*  600pxpx*/}

          <Typography
            style={{
              marginTop: "20px",
              fontSize: "40px",
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              color: "#463366",
              fontWeight: "900",
            }}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            We are Extensive.
          </Typography>

          {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


          {/* 1440px */}
          <Typography
            style={{
              marginTop: "30px",
              fontSize: "35px",
              fontStyle: "normal",
              color: "#494949",
              lineHeight: "44px",
              fontWeight: "400",
              letterSpacing: "0.0025em",
            }}
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>

          {/*  900px */}
          <Typography
            style={{
              marginTop: "15px",
              fontSize: "25px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              color: "#494949",
              lineHeight: "30px",
              fontWeight: "400",
              letterSpacing: "0.0025em",
            }}
            sx={{ display: { xs: "none", md: "none", sm: "block" } }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>

          {/*  600px */}

          <Typography
            style={{
              marginTop: "5px",
              fontSize: "14px",
              fontFamily: "Source Sans Pro",
              fontStyle: "normal",
              color: "#494949",
              lineHeight: "20px",
              fontWeight: "400",
              letterSpacing: "0.0025em",
            }}
            sx={{ display: { xs: "block", md: "none", sm: "none" } }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          

          {/* 1440px */}
          <Button
            variant="contained"
            style={{
              width: "427px",
              height: "65px",
              marginTop: "52px",
              backgroundColor: "#301E4E",
              padding: "20px 36px",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: "15px",
            }}
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}

          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: "0.0125em",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
              }}
            >
              Book A Free Marketing Audit
            </Typography>
          </Button>

            {/* 900px */}

          <Button
            variant="contained"
            style={{
              
              marginTop: "30px",
              backgroundColor: "#301E4E",
              padding: "10px 25px",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: "10px",
            }}sx={{ display: { xs: "none", md: "none", sm: "block" } }}
            

          >
            <Typography
              style={{
                fontSize: "15px",
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: "0.0125em",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
              }}
            >
              Book A Free Marketing Audit
            </Typography>
          </Button>

            {/* 600px */}
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              backgroundColor: "#301E4E",
              padding: "10px 20px",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "row",
              borderRadius: "10px",
            }}
            sx={{ display: { xs: "block", md: "none", sm: "none" } }}
          >
            <Typography
              style={{
                fontSize: "15px",
                fontWeight: "600",
                fontStyle: "normal",
                letterSpacing: "0.0125em",
                textTransform: "uppercase",
                fontFamily: "Source Sans Pro",
              }}
            >
              Book A Free Marketing Audit
            </Typography>
          </Button>
        </Card>
      </Container>
    </Container>
  );
};

export default Booking;