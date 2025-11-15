"use client";

import Image from "next/image";

interface ProductCardProps {
  image: any;
  alt?: string;
}

export default function ProductCard({ image, alt = "" }: ProductCardProps) {
  return (
    <div className="w-[180px] h-[245px] rounded-xl overflow-hidden relative">
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );
}
