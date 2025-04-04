import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative flex h-[500px] flex-col md:h-[600px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner/banner.png"
            alt="Organic Oils and Ghee"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-1 flex-col items-center justify-center text-center mx-auto">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Pure &amp; Organic Oil Products
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Premium quality ghee, mustard oil, and coconut oil made with
              traditional methods to preserve authentic taste and nutritional
              benefits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="font-medium">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/30 font-medium text-white hover:bg-white/40"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
