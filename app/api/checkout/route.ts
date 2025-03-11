// api/payments/create-checkout-session/route.ts
 
// import getCurrentUser from "@/lib/getCurrentUser";
// import { stripe } from "@/lib/getStripe";
import getCurrentUser from "@/lib/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const stripe = require('stripe')('sk_test_51QyBKCGzlIKL2AK0R2ke86rWVbEMQJyIKwDtWYThZHfBV8iWJXXLTnElayip4sSDbd8hNojfeypUTxJIhcVHosb900vBnIjAZB');
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
 
export async function POST(req: NextRequest) {
  const { priceId } = await req.json();
  const user = await getCurrentUser();
  const userId = user.id;
  const email = user.email;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, email, priceId },
      mode: "subscription",
      customer_email: email,
      billing_address_collection: "auto",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&&userId=${userId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      
      //tral settings

      // subscription_data: {
      //   trial_settings: {
      //     end_behavior: {
      //       missing_payment_method: "cancel",
      //     },
      //   },
      //   trial_period_days: 7,
      // },
    });
 
    return NextResponse.json({ sessionId: session.id });
    // return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error });
  }
}