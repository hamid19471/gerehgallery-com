"use client";

import Image from "next/image";
import { useState } from "react";

const ImageGallery = [
  {
    id: 1,
    image: "/images/dummy-image/image-01.jpg",
  },
  {
    id: 2,
    image: "/images/dummy-image/image-02.jpg",
  },
  {
    id: 3,
    image: "/images/dummy-image/image-03.webp",
  },
  {
    id: 4,
    image: "/images/dummy-image/image-04.png",
  },
];
export const ProductImage: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 w-full ">
      <div className="w-full h-[500px] relative">
        <Image
          src={ImageGallery[activeImage].image}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-xl w-full cursor-pointer">
        {ImageGallery.map((image, index) => (
          <div
            key={`image-${image.id}`}
            onClick={() => setActiveImage(index)}
            className="overflow-hidden h-36 relative w-1/4"
          >
            <Image
              className="overflow-hidden object-cover rounded-xl"
              src={image.image}
              alt=""
              fill
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
