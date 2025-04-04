import CheckoutForm from "@/components/checkout/checkout-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout | Jibon Organic",
  description: "Complete your purchase of premium organic oil products.",
};

export default function CheckoutPage() {
  return (
    <div className="container py-10 mx-auto">
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/products" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
      </div>
      <h1 className="mb-8 text-3xl font-bold text-center md:text-left">
        Checkout
      </h1>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-5xl">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
