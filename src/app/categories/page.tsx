import Image from "next/image";
import { Button } from "../_components/button";
import { wixClientServer } from "@/lib/wix-client-server";
import Link from "next/link";

const CategoriesPage = async () => {
  const wixClient = await wixClientServer();
  const allCategories = await wixClient.collections.queryCollections().find();
  return (
    <div className="container flex flex-col gap-12 mt-12">
      <div className="bg-error w-full rounded-2xl flex items-center justify-between px-12 py-16">
        <div className="w-full flex flex-col items-start gap-2 ">
          <h2 className="text-5xl font-bold text-black">Get off every day</h2>
          <p className="font-light w-max">
            We have off every day and after signup in our newsletter we will
            notif you every day
          </p>
          <Button size="large" buttonType="rounded">
            Signup Now
          </Button>
        </div>
        <div className="relative h-full w-full mb-14 hidden lg:block">
          <Image
            src={"/images/dummy-image/image-04.png"}
            alt=""
            width={350}
            height={120}
            className="object-cover absolute top-0 right-0 -translate-y-36"
          />
        </div>
      </div>
      <div className="my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12 container">
          {allCategories.items
            .map((item) => (
              <Link key={item._id} href={`/categories/${item.slug}`}>
                <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg ">
                  <Image
                    src={item.media?.mainMedia?.image?.url || ""}
                    alt={`${item.name}`}
                    width={347}
                    height={323}
                    className="object-cover group-hover:scale-105 transition-all duration-300 w-full h-64 overflow-hidden"
                  />
                  <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))
            .slice(1, 1000)}
        </div>
      </div>
    </div>
  );
};
export default CategoriesPage;
