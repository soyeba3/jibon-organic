"use client";

import Cart from "@/components/cart/cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";

export default function Header() {
  // Use useState for client-side rendering to avoid hydration mismatch
  const [cartItemCount, setCartItemCount] = useState(0);
  const storeCartItemCount = useCartStore((state) => state.getTotalItems());

  // Update the cart count after hydration
  useEffect(() => {
    setCartItemCount(storeCartItemCount);
  }, [storeCartItemCount]);

  return (
    <header className="border-b bg-background w-full">
      <div className="mx-auto max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-10">
            <Logo />
            <nav className="hidden gap-6 md:flex">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <Cart />
              </SheetContent>
            </Sheet>
            <div className="block md:hidden">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
