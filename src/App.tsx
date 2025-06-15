import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./header";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  IconButton,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import { getTheme } from "./theme";
import FeaturedTestimonials from "./FeaturedTestimonials.tsx";
import Hero from "./hero.tsx";
import ContactForm from "./ContactForm";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = getTheme(darkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          overflowX: "hidden",
          background: darkMode ? "#0d1117" : "#f5f5f5",
          p: 2,
        }}
      >
        <Header />

        {/* Light/Dark Mode Toggle */}
        <Box sx={{ position: "absolute", top: 20, right: 20, zIndex: 999 }}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: "20px",
              padding: "6px 12px",
              backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            }}
          >
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Paper>
        </Box>

        {/* Hero + Testimonials side-by-side */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ mt: 4 }}
        >
          <Hero darkMode={darkMode} />

          <Grid item xs={12} md={6}>
            <Box
              id="testimonials"
              sx={{
                height: "500px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                pr: 1,
                scrollbarWidth: "thin",
              }}
            >
              <Testimonials />
            </Box>
          </Grid>
        </Grid>

        {/* Leave the carousel here so it doesn't weirdly come to the right side of testimonials every once in a while */}
        <Box
          mt={6}
          sx={{
            maxWidth: "1000px",
            mx: "auto",
            px: 2,
          }}
        >
          <FeaturedTestimonials />
        </Box>

        {/* Other sections */}
        <Box id="pricing" mt={6}>
          <Pricing />
        </Box>

        <Box mt={6}>
          <FAQ />
        </Box>
        <Box mt={6}>
          <ContactForm />
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;