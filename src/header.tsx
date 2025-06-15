import React from "react";
import {AppBar, Toolbar, Typography, Button, Box, Link, useTheme} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg, rgba(100,84,255,0.12) 0%, rgba(63,81,181,0.10) 100%)",
        boxShadow: "none",
        borderRadius: "12px",
        px: 2,
        py: 1,
        maxWidth: "90%",
        margin: "16px auto 0 auto",
        backdropFilter: "none", // NO funky backgrounds (did not work last time)
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", gap: 2, minHeight: "auto" }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
          gap={4}
        >
          {/* logo & text*/}
          <Typography
            fontWeight="bold"
            fontSize="1.3rem"
            sx={{ color: theme.palette.text.primary }}
          >
            PricedIn
          </Typography>

          {/* Dummy links up top */}
          <Box display="flex" gap={4}>
            {[
              "Pricing",
              "Testimonials",
              "Demo",
              "FAQ",
              "Contact",
              "About Us",
              "Founders",
            ].map((text) => (
              <Link
                key={text}
                href={`#${text.toLowerCase()}`}
                underline="none"
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: theme.palette.text.primary,
                  transition: "color 0.2s ease",
                  "&:hover": {
                    color: "#FFA500",
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>

          {/* action buttons */}
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="text"
              href="https://priced-in.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.primary }}
            >
              Sign In
            </Button>

            <Button
              variant="contained"
              href="https://priced-in.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                color: "#fff",
                textTransform: "none",
                borderRadius: "999px",
                px: 3,
                py: 1,
                fontWeight: "bold",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;