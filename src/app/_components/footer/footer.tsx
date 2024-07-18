import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 bg-footer-bg flex flex-col">
      <div className="container max-w-6xl grid lg:grid-cols-5 grid-cols-2 gap-12 px-4 lg:px-0">
        <div className="flex flex-col gap-4 col-span-2">
          <div>
            <Image
              src={"/images/logo.webp"}
              alt="Gereh Gallery"
              width={90}
              height={120}
            />
          </div>
          <p className="text-justify">
            Welcome to Gereh Gallery, your destination for exquisite handcrafted
            and decorative products. At Gereh Gallery, we celebrate the artistry
            and skill of talented artisans who pour their creativity into every
            piece. Our carefully curated collection features unique home décor
            items and accessories that seamlessly blend traditional
            craftsmanship with modern design.{" "}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl ">Categories</h3>
          <ul className="flex flex-col gap-3 mt-4">
            <li>Decorative</li>
            <li>Traditional</li>
            <li>Persian Rugs</li>
            <li>Gereh Styles</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl ">Categories</h3>
          <ul className="flex flex-col gap-3 mt-4">
            <li>Decorative</li>
            <li>Traditional</li>
            <li>Persian Rugs</li>
            <li>Gereh Styles</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl ">Contact</h3>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <span className="font-bold">Address: </span>
              Canada, Toronto
            </li>
            <li>
              <span className="font-bold">Phone: </span>
              +1-436-323-12
            </li>
            <li>
              <Image
                src={"/images/payment.png"}
                alt=""
                width={220}
                height={60}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-content text-white mt-20 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 container max-w-6xl">
          <div>Allright Reserved - 2024 | Developed by Hamid Asadi</div>
          <div>
            <ul className="flex items-center justify-center gap-6">
              <li>About</li>
              <li>Order Tracking</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
