"use server";

import { OrderDetails } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitOrder(orderDetails: OrderDetails) {
  try {
    // Email to admin with order details
    await resend.emails.send({
      from: "orders@jibonorganic.com",
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      subject: "New Order Received",
      html: generateOrderEmail(orderDetails),
    });

    // You can add database storage code here if needed

    return { success: true };
  } catch (error) {
    console.error("Error sending order email:", error);
    throw new Error("Failed to submit order");
  }
}

function generateOrderEmail(order: OrderDetails) {
  const itemsList = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.product.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">৳${item.product.price}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">৳${item.product.price * item.quantity}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; padding-bottom: 10px; border-bottom: 1px solid #eee;">New Order Received</h2>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #555;">Customer Information</h3>
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>City:</strong> ${order.city}</p>
        <p><strong>Shipping Method:</strong> ${order.shippingMethod === "inside-dhaka" ? "Inside Dhaka" : "Outside Dhaka"}</p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #555;">Order Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f9f9f9;">
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Product</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Qty</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Price</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #eee;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right; border-top: 1px solid #eee;"><strong>Subtotal:</strong></td>
              <td style="padding: 10px; border-top: 1px solid #eee;">৳${order.totalAmount - order.shippingCost}</td>
            </tr>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Shipping:</strong></td>
              <td style="padding: 10px;">৳${order.shippingCost}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Total:</strong></td>
              <td style="padding: 10px;"><strong>৳${order.totalAmount}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `;
}
