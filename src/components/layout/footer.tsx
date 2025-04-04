import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t w-full">
      <div className="mx-auto max-w-screen-2xl w-full px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                Jibon Organic provides premium quality organic oil products. Our
                mission is to deliver the purest and most authentic cooking oils
                and ghee to your kitchen.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/products?category=ghee"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Ghee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=oils"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Oils
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?category=spices"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Spices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  Email: info@jibonorganic.com
                </li>
                <li className="text-muted-foreground">
                  Phone: +880 1712-345678
                </li>
                <li className="text-muted-foreground">
                  Address: Dhaka, Bangladesh
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jibon Organic. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
