import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import featured from "./FeaturedQuotes.tsx";

const FeaturedTestimonials: React.FC = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 5000); // 5 seconds for each featured testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          ⭐ Featured Feedback
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: "100px",
            maxWidth: "2000px",
            mx: "auto",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 0 20px rgba(106,17,203,0.3)"
                        : "0 0 12px rgba(100,100,255,0.2)",
                  },
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "#fff",
                }}
              >
                <Typography variant="h6" fontStyle="italic" gutterBottom>
                  "{featured[index].quote}"
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                   -  {featured[index].name}
                </Typography>
              </Paper>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FeaturedTestimonials;
