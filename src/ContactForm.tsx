import React, { useState } from "react";
import { Box, TextField, Typography, Button, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        maxWidth: "850px",
        mx: "auto",
        px: 2,
        borderRadius: 4,
        background: isDark
          ? "radial-gradient(circle at top left, rgba(106,17,203,0.1), transparent)"
          : "linear-gradient(to bottom right, #ffffff, #f0f4ff)",
        boxShadow: isDark
          ? "0 0 30px rgba(106,17,203,0.25)"
          : "0 4px 18px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
      </motion.div>

      <Typography
        align="center"
        sx={{
          mb: 4,
          color: theme.palette.text.secondary,
          maxWidth: 620,
          mx: "auto",
        }}
      >
        Have questions, feedback, or ideas? We’d love to hear from you. Drop us a message below  -  we’re faster than a high-frequency trade!
      </Typography>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth < 600 ? "1fr" : "1fr 1fr",
          gap: "16px",
        }}
      >
        {["Name", "Email"].map((label) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <TextField
              label={label}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#121212" : "#fff",
                borderRadius: 2,
              }}
            />
          </motion.div>
        ))}

        <motion.div
          style={{ gridColumn: "1 / -1" }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TextField
            label="Message"
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            sx={{
              backgroundColor: isDark ? "#121212" : "#fff",
              borderRadius: 2,
            }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
              },
            }}
          >
            Send Message
          </Button>
        </motion.div>
      </motion.form>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                mt: 4,
                fontWeight: "bold",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🎉 Message sent successfully! We’ll be in touch soon.
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ContactForm;