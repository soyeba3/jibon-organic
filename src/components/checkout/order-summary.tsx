"use client";

import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/types";
import Image from "next/image";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
}

export default function OrderSummary({
  items,
  subtotal,
  shippingCost,
}: OrderSummaryProps) {
  const total = subtotal + shippingCost;

  return (
    <div className="rounded-lg border p-6">
      <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
      {items.length === 0 ? (
        <div className="py-4 text-center text-muted-foreground">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.product.images[0] || "/images/placeholder.png"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="font-medium">{item.product.name}</span>
                  <span className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </span>
                </div>
                <div className="font-medium">
                  ৳{item.product.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>৳{shippingCost}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>৳{total}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
