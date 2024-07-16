import Link from "next/link";
import { Button } from "../../button";
import Image from "next/image";

export const ShopSection: React.FC = () => {
  return (
    <div className="container w-full flex flex-col xl:flex-row items-start justify-between gap-8">
      <div className="relative w-full  grid gap-4 grid-cols-1 lg:grid-cols-2 ">
        <div className="rounded-lg relative overflow-hidden group">
          <Image
            src={"/images/dummy-image/image-01.jpg"}
            width={750}
            height={750}
            alt="Gereh Gifts"
            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-light">Collections of</p>
            <h2 className="text-white text-4xl font-bold tracking-widest mb-11 uppercase">
              Gereh Gifts
            </h2>
            <Link href={"/"}>
              <Button buttonType="rounded" size="large">
                View Products
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden group rounded-lg">
          <Image
            src={"/images/dummy-image/image-01.jpg"}
            width={750}
            height={750}
            alt="Gereh Gifts"
            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-light">Collections of</p>
            <h2 className="text-white text-4xl font-bold tracking-widest mb-11 uppercase">
              Gereh Gifts
            </h2>
            <Link href={"/"}>
              <Button buttonType="rounded" size="large">
                View Products
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden group rounded-lg">
          <Image
            src={"/images/dummy-image/image-01.jpg"}
            width={750}
            height={750}
            alt="Gereh Gifts"
            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-light">Collections of</p>
            <h2 className="text-white text-4xl font-bold tracking-widest mb-11 uppercase">
              Gereh Gifts
            </h2>
            <Link href={"/"}>
              <Button buttonType="rounded" size="large">
                View Products
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden group rounded-lg">
          <Image
            src={"/images/dummy-image/image-01.jpg"}
            width={750}
            height={750}
            alt="Gereh Gifts"
            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-light">Collections of</p>
            <h2 className="text-white text-4xl font-bold tracking-widest mb-11 uppercase">
              Gereh Gifts
            </h2>
            <Link href={"/"}>
              <Button buttonType="rounded" size="large">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden group rounded-lg">
        <Image
          src={"/images/dummy-image/image-01.jpg"}
          width={750}
          height={750}
          alt="Gereh Gifts"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-light">Collections of</p>
          <h2 className="text-white text-4xl font-bold tracking-widest mb-11 uppercase">
            Gereh Gifts
          </h2>
          <Link href={"/"}>
            <Button buttonType="rounded" size="large">
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
