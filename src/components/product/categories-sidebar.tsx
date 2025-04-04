import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/data";
import Link from "next/link";

interface CategoriesSidebarProps {
  selectedCategory?: string;
}

export default function CategoriesSidebar({
  selectedCategory,
}: CategoriesSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-lg font-medium">Categories</h3>
        <Separator className="mb-4" />
        <div className="space-y-2">
          <Button
            variant={!selectedCategory ? "default" : "ghost"}
            asChild
            className="w-full justify-start"
          >
            <Link href="/products">All Products</Link>
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedCategory === category.name.toLowerCase()
                  ? "default"
                  : "ghost"
              }
              asChild
              className="w-full justify-start"
            >
              <Link href={`/products?category=${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-medium">Price Range</h3>
        <Separator className="mb-4" />
        <div className="space-y-2">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/products?price=low">Under ৳500</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/products?price=medium">৳500 - ৳1000</Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="/products?price=high">Above ৳1000</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
