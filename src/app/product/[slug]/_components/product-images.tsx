"use client";

import Image from "next/image";
import { useState } from "react";

export const ProductImage = ({ images }: { images: any }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 w-full ">
      <div className="w-full h-[670px] relative">
        <Image
          src={images[activeImage].image?.url}
          alt={images[activeImage].title}
          fill
          sizes="50vw"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex items-center justify-start gap-3 rounded-xl w-full cursor-pointer">
        {images.map((image: any, index: number) => (
          <div
            key={`image-${image._id}`}
            onClick={() => setActiveImage(index)}
            className="overflow-hidden h-36 relative w-1/4"
          >
            <Image
              className="overflow-hidden object-cover rounded-xl"
              src={image.image?.url}
              alt={image.title}
              fill
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
