import { Button } from "@/app/_components/button";
import { Filter } from "@/app/_components/filter/filter";
import { ProductList } from "@/app/product/_components";
import { wixClientServer } from "@/lib/wix-client-server";
import { Suspense } from "react";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const allProducts = await wixClient.collections.getCollectionBySlug(
    params.slug || "all-products"
  );

  console.log(allProducts);

  return (
    <div className="container flex flex-col gap-12 mt-12">
      <div className="bg-info w-full rounded-2xl flex items-center justify-between px-12 py-16">
        <div className="w-full flex flex-col items-start gap-2 ">
          <h2 className="text-5xl font-bold text-black">
            {allProducts.collection?.name}
          </h2>
          <p className="font-light w-max">
            We have off every day and after signup in our newsletter we will
            notif you every day
          </p>
          <Button size="large" buttonType="rounded">
            Signup Now
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <Filter />
      </div>
      <div className="my-12">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            categoryId={
              allProducts.collection?._id ||
              "00000000-000000-000000-000000000001"
            }
          />
        </Suspense>
      </div>
    </div>
  );
};
export default CategoryPage;
