import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Jibon Organic",
  description:
    "Learn more about Jibon Organic and our commitment to quality organic oil products.",
};

export default function AboutPage() {
  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center md:text-left">
        About Jibon Organic
      </h1>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            At Jibon Organic, we are committed to providing the purest and most
            authentic organic oil products to enhance your culinary experiences
            and promote better health. Our journey began with a simple mission:
            to preserve traditional methods of oil extraction that retain the
            natural goodness and flavors that modern processing often
            eliminates.
          </p>

          <h2 className="text-xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2018 in Dhaka, Bangladesh, Jibon Organic started as a
            small family business dedicated to producing pure cow ghee using
            time-honored techniques. As demand grew for our artisanal products,
            we expanded our range to include cold-pressed mustard oil and virgin
            coconut oil, maintaining the same commitment to quality and
            authenticity.
          </p>

          <h2 className="text-xl font-semibold">Our Values</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Quality:</span> We
              source ingredients from organic farms where animals graze freely
              and crops are grown without chemical pesticides.
            </li>
            <li>
              <span className="font-medium text-foreground">Tradition:</span> We
              employ traditional extraction methods that preserve the natural
              nutrients and flavors of our products.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Sustainability:
              </span>{" "}
              We are committed to eco-friendly practices in our production and
              packaging.
            </li>
            <li>
              <span className="font-medium text-foreground">Community:</span> We
              support local farmers and provide fair wages to all workers
              involved in our production process.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/images/about-us.jpg"
              alt="Jibon Organic production facility"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted p-6">
              <h3 className="mb-2 font-semibold">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To provide the purest organic oil products while preserving
                traditional production methods and supporting sustainable
                farming practices.
              </p>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h3 className="mb-2 font-semibold">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                To become the leading provider of authentic organic oils in
                Bangladesh and beyond, known for uncompromising quality and
                traditional excellence.
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-center font-semibold">
              Contact Information
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                info@jibonorganic.com
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span> +880
                1712-345678
              </p>
              <p>
                <span className="font-medium text-foreground">Address:</span>{" "}
                123 Organic Lane, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
