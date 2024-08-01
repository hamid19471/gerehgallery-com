import Link from "next/link";
import { Button } from "./_components/button";
import { Divider } from "./_components/divider";
import { Slider } from "./_components/slider";
import { ShopSection, TopCategorySection } from "./_components/home-sections";
import { OtherCategories } from "./_components/home-sections/other-categories/other-categories";
import { ProductList } from "./product/_components";
import { wixClientServer } from "@/lib/wix-client-server";

const HomePage = async () => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().find();

  return (
    <div>
      <Slider />
      <Divider />
      <div className="container flex items-center justify-between w-full mb-12">
        <h1 className="font-bold text-4xl">Gereh Gallery Shop</h1>
        <Link href={"/shop"}>
          <Button size="large">View Shop</Button>
        </Link>
      </div>
      <div className="mb-28">
        <ShopSection />
      </div>
      <div className="container flex items-center justify-between w-full mb-12">
        <h1 className="font-bold text-4xl">Top Categories</h1>
        <Link href={"/categories"}>
          <Button size="large">View All Categories</Button>
        </Link>
      </div>
      <div>
        <TopCategorySection />
      </div>
      <div className="container mt-28">
        <OtherCategories />
      </div>
      <div className="container mt-28">
        <div className="flex items-center w-full justify-between gap-3 mb-8">
          <h3 className="font-bold text-4xl w-max">Top Products </h3>
          <Link href={"/categories"}>
            <Button size="large">View All</Button>
          </Link>
        </div>
        <ProductList />
      </div>
      <div className="mt-28 mb-12">
        <Divider />
      </div>
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-3 mb-12">
        <div className="bg-black/10 w-full py-4 px-8 rounded-lg inline-flex justify-center gap-2 shadow-lg">
          <h4>Worldwide Shipping</h4>
        </div>
        <div className="bg-black/10 w-full py-4 px-8 rounded-lg inline-flex justify-center gap-2 shadow-lg">
          <h4>10 Days Return Policy</h4>
        </div>
        <div className="bg-black/10 w-full py-4 px-8 rounded-lg inline-flex justify-center gap-2 shadow-lg">
          <h4>Original Product</h4>
        </div>
        <div className="bg-black/10 w-full py-4 px-8 rounded-lg inline-flex justify-center gap-2 shadow-lg">
          <h4>Secure Payment</h4>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
