import { motion } from "framer-motion";
import { Paper, Typography, Box, Button, alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import logo from "./assets/pricedin-logo.png";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={4}
        sx={{
          textAlign: "center",
          p: 6,
          borderRadius: 4,
          background: darkMode
            ? "linear-gradient(to bottom right, rgba(100,84,255,0.08), rgba(255,255,255,0.05))"
            : "linear-gradient(to bottom right, rgba(255,255,255,0.85), rgba(240,240,255,0.95))",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          backdropFilter: "blur(10px)",
          color: theme.palette.text.primary,
          boxShadow: darkMode
            ? "0 4px 24px rgba(0,0,0,0.5)"
            : "0 4px 12px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.01)",
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "100px", marginBottom: "0.75rem" }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "0.8rem",
                backgroundColor: "#6a11cb",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: "999px",
                letterSpacing: 1,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              🔥 AI-Powered Trading Intelligence
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Trade Smarter. Win Bigger.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              mb: 4,
              maxWidth: 640,
              mx: "auto",
              color: theme.palette.text.secondary,
              fontSize: "1.05rem",
            }}
          >
            Unlock lightning-fast due diligence, AI-ranked trade ideas, and
            one-click market clarity. PricedIn is where speed meets signal — and
            you stay ahead of the curve.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
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
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
              },
            }}
          >
            Get Started
          </Button>
          <Typography
            variant="caption"
            display="block"
            sx={{ mt: 2, color: theme.palette.text.secondary }}
          >
            🎯 Join 10,000+ traders upgrading their edge with PricedIn.
          </Typography>
        </motion.div>
      </Paper>
    </Grid>
  );
};

export default Hero;