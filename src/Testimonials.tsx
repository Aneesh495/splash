import React from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import "./Testimonials.css";
import testimonials from "./quotes.tsx";

const getLevelBadge = (level: string) => {
  const styles: any = {
    Beginner: { border: "#43a047", emoji: "🟢" },
    Intermediate: { border: "#fbc02d", emoji: "🟡" },
    Expert: { border: "#1e88e5", emoji: "🔵" },
    Quant: { border: "#8e24aa", emoji: "🟣" },
  };

  const { border, emoji } = styles[level] || {};

  return (
    <Box
      sx={{
        position: "absolute", // NOTE: Keep this in the top right hand corner - it clashes with the text otherwise
        top: 12,
        right: 12,
        px: 1.5,
        py: 0.5,
        borderRadius: "999px",
        fontSize: "0.7rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: border,
        border: `1px solid ${border}`,
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        letterSpacing: "0.5px",
        zIndex: 2,
      }}
    >
      {emoji} {level}
    </Box>
  );
};

const glowCardStyles = (theme: any) => ({
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(100,84,255,0.08))"
      : "linear-gradient(to bottom right, #ffffff, #f9f9ff)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 20px rgba(106,17,203,0.3)"
      : "0 2px 10px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: "0 0 30px rgba(106,17,203,0.45)",
  },
});

const Testimonials: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        align="center"
        sx={{ mb: 3 }}
      >
        What Our Users Say 💬
      </Typography>

      <Box
        sx={{
          height: "600px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          className="scrolling-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "scrollUp 180s linear infinite",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(106, 17, 203, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                sx={{ ...glowCardStyles(theme), p: 2, position: "relative" }}
              >
                {getLevelBadge(t.level)}
                <CardContent>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: theme.palette.text.primary }}
                  >
                    "{t.quote}"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    - {t.name}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {t.stars}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Testimonials;