import Stripe from 'stripe';
import { copywriting, videoEditing, webDevelopment } from '@/lib/packages';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20'
});

const allPackages = [...copywriting, ...videoEditing, ...webDevelopment];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { packageId } = req.body;
    const selected = allPackages.find((item) => item.id === packageId);
    if (!selected) return res.status(400).json({ error: 'Package not found' });

    const amount = Number(selected.price.replace('$', '')) * 100;
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: selected.title,
              description: selected.description
            },
            unit_amount: amount
          },
          quantity: 1
        }
      ],
      success_url: `${req.headers.origin}/workspace?status=success`,
      cancel_url: `${req.headers.origin}/workspace?status=cancelled`
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Stripe error' });
  }
}
