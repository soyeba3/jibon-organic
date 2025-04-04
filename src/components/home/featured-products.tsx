import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data";
import Link from "next/link";

export default function FeaturedProducts() {
  // Filter featured products
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Featured Products</h2>
          <p className="max-w-2xl text-muted-foreground">
            Explore our handpicked selection of premium organic oils and ghee,
            crafted with tradition and quality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
