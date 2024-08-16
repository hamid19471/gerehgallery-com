import { wixClientServer } from "@/lib/wix-client-server";
import { ProductFeatures } from "./_components/product-features";
import { ProductImage } from "./_components/product-images";
import { ProductQuantity } from "./_components/product-quantity";
import { notFound } from "next/navigation";

type SingleProductProps = {
  params: {
    slug: string;
  };
};

const SingleProduct = async ({ params }: SingleProductProps) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="container flex flex-col lg:flex-row items-start justify-between gap-12 my-12">
      <div className="w-full lg:sticky top-20">
        <ProductImage images={product.media?.items} />
      </div>
      <div className="w-full">
        <h1 className="font-bold text-4xl text-content mb-3">{product.name}</h1>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: product.description as TrustedHTML,
          }}
        ></div>
        {product.price?.price === product.price?.discountedPrice ? (
          <h3 className="font-bold text-3xl my-8">{product.price?.price}$</h3>
        ) : (
          <div className="flex items-center gap-4 mt-12">
            <h3 className="font-bold text-xl">{product.price?.price}$</h3>
            <h2 className="font-bold text-xl line-through text-black/40">
              {product.price?.discountedPrice}$
            </h2>
          </div>
        )}

        <div className="h-[1px] w-full my-8 bg-black/10 " />
        <div className="flex flex-col gap-8">
          {product.variants && product.productOptions ? (
            <ProductFeatures
              productId={product._id || ""}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            <ProductQuantity
              productId={product._id || ""}
              stock={product.stock?.quantity || 0}
              variant="00000000-0000-0000-0000-000000000000"
            />
          )}
        </div>
        <div className="h-[1px] w-full my-8 bg-black/10 " />
        <div className="flex flex-col gap-4">
          {product.additionalInfoSections?.map((item) => (
            <div key={`aditional-section-${item.title}`}>
              <h3 className="font-bold text-black text-xl">{item.title}</h3>
              <p className="text-justify mt-2">{item.description}</p>
              <div className="w-full h-[1px] rounded-full mt-2 bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
