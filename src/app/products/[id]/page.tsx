import ProductDetails from "@/components/product/product-details";
import { Button } from "@/components/ui/button";
import { products } from "@/data";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found | Jibon Organic",
    };
  }

  return {
    title: `${product.name} | Jibon Organic`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-10 mx-auto">
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/products" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-5xl">
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}
