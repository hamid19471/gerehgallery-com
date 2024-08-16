import Image from "next/image";

export const TopCategorySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12 container">
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-01.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-02.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-03.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-04.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-05.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-06.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-07.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center group overflow-hidden w-full rounded-lg">
        <Image
          src={"/images/home-08.webp"}
          alt=""
          width={347}
          height={323}
          className="object-cover group-hover:scale-105 transition-all duration-300 w-full"
        />
        <h3 className="font-bold text-xl bg-white text-base-100 p-4 w-full text-center z-20 cursor-pointer">
          Kitchen
        </h3>
      </div>
    </div>
  );
};
