import Image from "next/image";
import { ProductList } from "../product/_components";
import { Button } from "../_components/button";

const ShopPage = () => {
  return (
    <div className="container flex flex-col gap-12 mt-12">
      <div className="bg-success w-full rounded-2xl flex items-center justify-between px-12 py-16">
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
        <ProductList />
      </div>
    </div>
  );
};

export default ShopPage;
