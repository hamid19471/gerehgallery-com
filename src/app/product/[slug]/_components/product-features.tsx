"use client";

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import { ProductQuantity } from "./product-quantity";

type ProductFeaturesProps = {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
};

export const ProductFeatures = ({
  productId,
  variants,
  productOptions,
}: ProductFeaturesProps) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const [selectedVarian, setSelectedVarian] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) {
        return false;
      }
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVarian(variant);
  }, [selectedOptions, variants]);

  const handleSelectedOption = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isValueInStock = (choices: Record<string, string>) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) {
        return false;
      }

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div
          className="flex flex-col gap-4"
          key={`product-option-${option.name}`}
        >
          <h4 className="font-medium text-xl">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((item) => {
              const disabled = !isValueInStock({
                ...selectedOptions,
                [option.name!]: item.description!,
              });
              const selected =
                selectedOptions[option.name!] === item.description;
              const clickHandler = disabled
                ? undefined
                : () => handleSelectedOption(option.name!, item.description!);
              return option.name === "Color" ? (
                <li
                  key={`color-${item.description}`}
                  className="w-8 h-8 rounded-full ring-1 ring-base-25 relative"
                  style={{
                    backgroundColor: item.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {disabled && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[2px] rotate-45 bg-error w-10" />
                  )}
                  {selected && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 ring-2 ring-base-100/20 rounded-full" />
                  )}
                </li>
              ) : (
                <li
                  key={`color-${item.description}`}
                  className={`font-medium px-6 py-2 rounded-xl ring-1 ring-error cursor-pointer ${
                    selected && "ring-0 bg-error text-black cursor-pointer"
                  } ${
                    disabled &&
                    "bg-error/20 text-black/20 ring-error/20 !cursor-not-allowed"
                  }`}
                  onClick={clickHandler}
                >
                  {item.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <ProductQuantity
        productId={productId}
        variant={selectedVarian?._id || "00000000-0000-0000-0000-000000000000"}
        stock={selectedVarian?.stock?.quantity || 0}
      />
    </div>
  );
};
