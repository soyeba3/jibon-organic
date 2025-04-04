"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { SHIPPING_COSTS } from "@/data";
import { submitOrder } from "@/lib/actions";
import { useCartStore } from "@/store/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import OrderSummary from "./order-summary";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(11, { message: "Please enter a valid phone number" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City is required" }),
  shippingMethod: z.enum(["inside-dhaka", "outside-dhaka"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const cartItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.getTotalAmount());
  const clearCart = useCartStore((state) => state.clearCart);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      shippingMethod: "inside-dhaka",
    },
  });

  const selectedShippingMethod = form.watch("shippingMethod");
  const shippingCost =
    selectedShippingMethod === "inside-dhaka"
      ? SHIPPING_COSTS.insideDhaka
      : SHIPPING_COSTS.outsideDhaka;

  const finalTotal = totalAmount + shippingCost;

  const onSubmit = async (values: FormValues) => {
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    try {
      const orderDetails = {
        ...values,
        items: cartItems,
        totalAmount: finalTotal,
        shippingCost,
      };

      await submitOrder(orderDetails);
      setIsSuccess(true);
      clearCart();

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
        <p className="text-muted-foreground">
          Thank you for your order. We will contact you soon with delivery
          details.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting to home page...
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator />
            <div className="space-y-3">
              <h3 className="font-medium">Shipping Method</h3>
              <FormField
                control={form.control}
                name="shippingMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <RadioGroupItem value="inside-dhaka" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <div className="flex flex-1 flex-col">
                              <span>Inside Dhaka</span>
                              <span className="text-sm text-muted-foreground">
                                Delivery within 1-2 business days
                              </span>
                            </div>
                            <div className="font-medium">
                              ৳{SHIPPING_COSTS.insideDhaka}
                            </div>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <RadioGroupItem value="outside-dhaka" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <div className="flex flex-1 flex-col">
                              <span>Outside Dhaka</span>
                              <span className="text-sm text-muted-foreground">
                                Delivery within 2-4 business days
                              </span>
                            </div>
                            <div className="font-medium">
                              ৳{SHIPPING_COSTS.outsideDhaka}
                            </div>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || cartItems.length === 0}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <OrderSummary
          items={cartItems}
          subtotal={totalAmount}
          shippingCost={shippingCost}
        />
      </div>
    </div>
  );
}
