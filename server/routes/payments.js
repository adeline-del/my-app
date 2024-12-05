import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Process credit card payment
router.post('/card', async (req, res) => {
  try {
    const { amount, token } = req.body;
    
    const payment = await stripe.charges.create({
      // Convert to cents
      amount: amount * 100, 
      currency: 'ghs',
      source: token,
      description: 'Solar Incubator Purchase'
    });

    res.json({ success: true, payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Process mobile money payment
router.post('/mobile-money', async (req, res) => {
  try {
    const { amount, provider, phoneNumber } = req.body;
    
    // Here you would integrate with mobile money providers
    // This is a placeholder response
    const payment = {
      id: Date.now(),
      amount,
      provider,
      phoneNumber,
      status: 'pending'
    };

    res.json({ success: true, payment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const paymentRouter = router;