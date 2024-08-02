export type ProductCardProps = {
  _id?: string | undefined;
  name?: string;
  slug?: string;
  productType?: string;
  description?: string;
  sku?: string;
  price?: {
    currency?: string;
    price?: number;
    discountedPrice?: number;
  };
  media?: {
    mainMedia?: {
      image?: {
        url?: string;
      };
    };
  };
};
