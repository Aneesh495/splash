import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is PricedIn and why should I care?",
    answer:
      "Think of PricedIn as your personal trading assistant  -  minus the coffee addiction. We combine AI-powered insights, clean UX, and real-time due diligence tools to help traders like you make faster, smarter, sharper decisions. Whether you're a weekend warrior or full-time investor, you'll find an edge with us.",
  },
  {
    question: "How is PricedIn different from other trading platforms?",
    answer:
      "We’re not just a dashboard of charts and buzzwords. PricedIn distills massive market noise into bite-sized, actionable signals  -  like having a quant analyst whispering in your ear (but less creepy). Plus, we focus on clarity, not clutter. Clean design meets clean data.",
  },
  {
    question: "Can a total beginner use PricedIn?",
    answer:
      "Absolutely. We believe powerful tools should be user-friendly. No PhD in finance required. If you can open a meme stock chart, you can use PricedIn. And if you *do* have a PhD  -  awesome, our features will still impress you.",
  },
  {
    question: "Is my data safe with PricedIn?",
    answer:
      "Yes. We take data security seriously. Like military-grade seriously. All your personal data is encrypted, and we do not sell or share it with 3rd parties. ",
  },
  {
    question: "What if I have zero time to research trades?",
    answer:
      "That's exactly why we exist. PricedIn surfaces the key details and red flags so you can evaluate trades in minutes  -  not hours. Think of it as SparkNotes for the stock market, but actually useful.",
  },
  {
    question: "How much does PricedIn cost?",
    answer:
      "We have pricing tiers for all levels: Free trials for explorers, mid-tier plans for weekend warriors, and Pro plans for full-time strategists.",
  },
  {
    question: "Can I use PricedIn on my phone?",
    answer:
      "Yes, our platform is fully responsive and mobile-optimized. Whether you’re on the subway or in bed pretending to sleep, PricedIn is there for you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just hit that big shiny 'Get Started' button, sign up in 60 seconds, and boom  -  you're in. No jargon. No contracts. No catch. Just smarter trading, instantly.",
  },
];
const FAQSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box
        className="faq-glow"
        id="faq"
        sx={{
          maxWidth: "900px",
          mx: "auto",
          py: 10,
          px: 4,
        }}
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
            mb: 6,
          }}
        >
          🤔 Frequently Asked Questions
        </Typography>

        {faqData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Accordion
              sx={{
                mb: 2,
                borderRadius: 2,
                background: isDark
                  ? "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.03))"
                  : "linear-gradient(to right, #ffffff, #f2f2ff)",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.1)" : "#ccc"
                }`,
                boxShadow: isDark
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 2px 10px rgba(0,0,0,0.05)",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                  borderColor: "#a17eff",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: isDark ? "#a17eff" : "#6a11cb",
                    }}
                  />
                }
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(to right, #43cea2, #185a9d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(245, 245, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: theme.palette.text.primary,
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default FAQSection;