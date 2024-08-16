import Image from "next/image";
import Link from "next/link";
import { Button } from "../../button";

export const OtherCategories: React.FC = () => {
  return (
    <div className="relative w-max grid grid-cols-2 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-8">
      <div className="rounded-lg relative overflow-hidden group">
        <Image
          src={"/images/stand-01.jpg"}
          width={290}
          height={597}
          alt="Gereh Gifts"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out "
        />
        <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-info/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
      <div className="rounded-lg relative overflow-hidden group">
        <Image
          src={"/images/stand-02.jpg"}
          width={290}
          height={597}
          alt="Gereh Gifts"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out "
        />
        <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-success/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
      <div className="rounded-lg relative overflow-hidden group">
        <Image
          src={"/images/stand-03.jpg"}
          width={290}
          height={597}
          alt="Gereh Gifts"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out "
        />
        <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-warning/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
      <div className="rounded-lg relative overflow-hidden group">
        <Image
          src={"/images/stand-04.jpg"}
          width={290}
          height={597}
          alt="Gereh Gifts"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out "
        />
        <div className="absolute flex items-center justify-center flex-col top-0 left-0 w-full h-full bg-error/70 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
