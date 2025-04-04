"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Logo() {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary/10">
        {!imgError ? (
          <Image
            src="/images/jo_logo.png"
            alt="Jibon Organic"
            fill
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-primary font-bold">
            JO
          </div>
        )}
      </div>
      <span className="text-xl font-bold">Jibon Organic</span>
    </Link>
  );
}
