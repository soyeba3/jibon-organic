"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addItem);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={product.images[0] || "/images/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-2xl font-bold text-primary">
            ৳{product.price}
          </p>
        </div>
        <Separator />
        <div className="space-y-2">
          <h3 className="font-medium">Description</h3>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Category</h3>
          <p className="capitalize text-muted-foreground">{product.category}</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Availability</h3>
          <p className="text-muted-foreground">
            {product.stock > 0
              ? `In Stock (${product.stock} available)`
              : "Out of Stock"}
          </p>
        </div>
        <Separator />
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <h3 className="font-medium">Quantity</h3>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            className="w-full md:w-auto"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
