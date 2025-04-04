import CategoriesSidebar from "@/components/product/categories-sidebar";
import ProductCard from "@/components/product/product-card";
import { products } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Jibon Organic",
  description: "Browse our selection of premium organic oil products.",
};

interface ProductsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;
  const price =
    typeof searchParams.price === "string" ? searchParams.price : undefined;

  // Filter products based on query parameters
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (price) {
    switch (price) {
      case "low":
        filteredProducts = filteredProducts.filter(
          (product) => product.price < 500
        );
        break;
      case "medium":
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= 500 && product.price <= 1000
        );
        break;
      case "high":
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 1000
        );
        break;
    }
  }

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center md:text-left">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <CategoriesSidebar selectedCategory={category} />
        </aside>
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
              <p className="text-muted-foreground">
                No products found. Try changing your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
