import React from 'react';
import 'aos/dist/aos.css';
import './Pricing.css';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material';

const tiers = [
    {
      title: 'Pricedin',
      price: '$10/month',
      features: ['Hot Options', 'Wendy AI - Trading Assistant', 'Portfolio Analysis', 'Market Sentiment'],
    },
    {
      title: 'Pricedin +',
      price: '$50/month',
      features: ['Hot Options', 'Wendy AI - Trading Assistant', 'Portfolio Analysis', 'Market Sentiment'],
    },
    {
      title: 'Pricedin Pro',
      price: '$100/month',
      features: ['Hot Options', 'Wendy AI - Trading Assistant', 'Portfolio Analysis', 'Market Sentiment'],
    },
  ];

const Pricing2: React.FC = () => {
    return (
      <Box className="pricing-section" data-aos="fade-up">
        <Grid container spacing={3} justifyContent="center">
          {tiers.map((tier, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} component="div">
              <Card className="pricing-card glass-card" data-aos="zoom-in" data-aos-delay={index * 150}>
                <CardContent>
                  <Chip label="Test Mode" color="warning" size="small" sx={{ mb: 1 }} />
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.imgur.com/doesnotexist.png"
                    alt="Subscription"
                    sx={{ objectFit: 'cover', mb: 1 }}
                  />
                  <Typography variant="h6">{tier.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Get access to Priced In, the world’s least regarded trading tool.
                  </Typography>
                  <Typography variant="h6" sx={{ my: 1 }}>{tier.price}</Typography>
                  <Button variant="contained" fullWidth color="primary">Subscribe</Button>
                  <ul style={{ paddingLeft: '1rem', marginTop: '1rem' }}>
                    {tier.features.map((feature, i) => (
                      <li key={i}>
                        <Typography variant="body2" color="success.main">✅ {feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  export default Pricing2;