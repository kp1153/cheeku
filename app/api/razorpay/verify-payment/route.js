import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerDetails,
      items
    } = await req.json();

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      // Save order to Sanity
      const order = await client.create({
        _type: 'order',
        customerName: customerDetails.name,
        customerEmail: customerDetails.email || '',
        customerPhone: customerDetails.phone,
        customerAddress: `${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.pincode}`,
        totalAmount: totalAmount,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        status: 'completed',
        items: items,
        createdAt: new Date().toISOString()
      });

      return NextResponse.json({
        success: true,
        orderId: order._id,
        message: 'Payment verified successfully'
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid signature' 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Payment verification failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Verification failed' 
    }, { status: 500 });
  }
}