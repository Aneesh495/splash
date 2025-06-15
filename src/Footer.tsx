import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        px: { xs: 3, md: 10 },
        py: 6,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            PricedIn
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, maxWidth: 360 }}>
            PricedIn delivers real-time trade insights, due diligence tools, and
            AI-powered analysis so you can trade smarter. Unlock the power of
            options intelligence and dominate the markets with confidence.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, maxWidth: 360 }}>
            Disclaimer: Investments are subject to market risks, read all scheme
            related documents carefully.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            MENU
          </Typography>
          {["Home", "Pricing", "Features", "Testimonials"].map((label) => (
            <Link
              key={label}
              href="#"
              underline="hover"
              sx={{
                display: "block",
                mt: 1,
                color: theme.palette.text.primary,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  color: "#FFA500",
                  pl: 1,
                },
              }}
            >
              {label}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            USEFUL LINKS
          </Typography>
          {["Privacy Policy", "FAQ", "Terms & Conditions", "About Us"].map(
            (label) => (
              <Link
                key={label}
                href="#"
                underline="hover"
                sx={{
                  display: "block",
                  mt: 1,
                  color: theme.palette.text.primary,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    color: "#FFA500",
                    pl: 1,
                  },
                }}
              >
                {label}
              </Link>
            )
          )}
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            CONTACT US
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
            <Link
              href="mailto:support@retailhedging.com"
              underline="hover"
              sx={{
                color: theme.palette.text.primary,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  color: "#FFA500",
                  pl: 0.5,
                },
              }}
            >
              Email
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
            <Link
              href="#contact"
              underline="hover"
              color="inherit"
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "#FFA500", pl: 0.5 },
              }}
            >
              Phone
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <ContactMailIcon fontSize="small" sx={{ mr: 1 }} />
            <Link
              href="#contact"
              underline="hover"
              color="inherit"
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "#FFA500", pl: 0.5 },
              }}
            >
              Form
            </Link>
          </Box>

          <Box display="flex" alignItems="center" mt={1}>
            <LinkedInIcon fontSize="small" sx={{ mr: 1 }} />
            <Link
              href="https://linkedin.com/company/pricedin"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  color: "#FFA500",
                  pl: 0.5,
                },
              }}
            >
              LinkedIn
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{
          my: 4,
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        }}
      />

      <Box textAlign="center">
        <Typography variant="body2">
          © 2025 PricedIn. All rights reserved.
        </Typography>
        <Box mt={1}>
          {["Privacy", "Terms", "FAQ"].map((label) => (
            <Link
              key={"FAQ"}
              href="#"
              underline="hover"
              sx={{
                mx: 1,
                color: theme.palette.text.primary,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  color: "#FFA500",
                },
              }}
            >
              {label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
