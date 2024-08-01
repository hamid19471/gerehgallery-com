import { ProductFeatures } from "./_components/product-features";
import { ProductImage } from "./_components/product-images";
import { ProductQuantity } from "./_components/product-quantity";

const SingleProduct = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-start justify-between gap-12 my-12">
      <div className="w-full lg:sticky top-20">
        <ProductImage />
      </div>
      <div className="w-full">
        <h1 className="font-bold text-4xl text-content mb-3">Product Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga
          earum recusandae culpa quo adipisci repellat, quos vel nisi reiciendis
          molestiae sunt sed corrupti, est mollitia reprehenderit iure, qui
          nobis?
        </p>
        <div className="flex items-center gap-4 mt-12">
          <h2 className="font-bold text-xl line-through text-black/40">59$</h2>
          <h3 className="font-bold text-xl">39$</h3>
        </div>
        <div className="h-[1px] w-full my-8 bg-black/10 " />
        <div className="flex flex-col gap-8">
          <ProductFeatures />
          <ProductQuantity />
        </div>
        <div className="h-[1px] w-full my-8 bg-black/10 " />
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-black text-xl">Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, est doloremque quibusdam at labore voluptate sint eos
              accusantium, corrupti inventore nam similique optio quo illum
              voluptatibus rerum sunt natus. Illum!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black text-xl">Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, est doloremque quibusdam at labore voluptate sint eos
              accusantium, corrupti inventore nam similique optio quo illum
              voluptatibus rerum sunt natus. Illum!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black text-xl">Title</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, est doloremque quibusdam at labore voluptate sint eos
              accusantium, corrupti inventore nam similique optio quo illum
              voluptatibus rerum sunt natus. Illum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
