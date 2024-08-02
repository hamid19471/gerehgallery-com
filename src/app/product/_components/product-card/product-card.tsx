import Image from "next/image";
import { ProductCardProps } from "./product-card.types";
import Link from "next/link";
import { Button } from "@/app/_components/button";
import { products } from "@wix/stores";

export const ProductCard: React.FC<products.Product> = ({
  name,
  slug,
  priceData,
  media,
}) => {
  return (
    <div className="flex flex-col w-full items-start justify-center">
      <Link
        href={`/product/${slug}`}
        className="flex flex-col w-full items-center justify-center"
      >
        <div className="relative w-full h-[358px] overflow-hidden">
          <Image
            src={media?.mainMedia?.image?.url || ""}
            alt="image"
            fill
            className="object-cover rounded-lg object-center absolute top-0 left-0 z-10 hover:opacity-0 transition-all duration-700 ease-in-out"
          />
          {media?.items && (
            <Image
              src={media?.items[1]?.image?.url || ""}
              alt="image"
              fill
              className="object-cover rounded-lg object-center absolute top-0 left-0 ease-in-out"
            />
          )}
        </div>
      </Link>
      <div className="flex items-center justify-between w-full gap-4 mt-3 px-3">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-lg text-content">{name}</h2>
          <div>|</div>
          <h2 className="font-semibold">${priceData?.price}</h2>
        </div>
        <Link href={"/"}>
          <Button size="small" buttonType="rounded">
            Add To Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};
