"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetClose, SheetTitle } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cart() {
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.getTotalAmount());
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuantityChange = (item: CartItem, change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    updateQuantity(item.product.id, newQuantity);
  };

  return (
    <div className="flex h-full flex-col px-4">
      <div className="flex items-center justify-between py-4">
        <SheetTitle className="text-lg font-semibold">Shopping Cart</SheetTitle>
      </div>
      <Separator />

      {!mounted ? (
        <div className="flex flex-1 items-center justify-center">
          <p>Loading cart...</p>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="mt-2 text-lg font-semibold">Your cart is empty</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Add items to your cart to see them here.
            </p>
          </div>
          <SheetClose asChild>
            <Link href="/products">
              <Button>Browse Products</Button>
            </Link>
          </SheetClose>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto py-6 px-2">
            {" "}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-start space-x-4 px-2"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded">
                    <Image
                      src={item.product.images[0] || "/images/placeholder.png"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ৳{item.product.price}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item, -1)}
                        className="rounded-md border p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, 1)}
                        className="rounded-md border p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 border-t px-4 py-6">
            <div className="flex items-center justify-between text-base font-medium">
              <span>Subtotal</span>
              <span>৳{totalAmount}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="space-y-2">
              <SheetClose asChild>
                <Link href="/checkout" className="w-full">
                  <Button className="w-full">Checkout</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/products" className="w-full">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
