"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleChangeValues = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-2">
      <div className="flex items-center gap-3">
        <div>
          <h4>Sort by Price:</h4>
        </div>
        <input
          onChange={handleChangeValues}
          type="text"
          name="min"
          placeholder="Min Price"
          className="px-3 py-1 bg-black/10 text-black font-bold border-none outline-none rounded-xl"
        />
        <input
          onChange={handleChangeValues}
          type="text"
          name="max"
          placeholder="Max Price"
          className="px-3 py-1 bg-black/10 text-black font-bold border-none outline-none rounded-xl"
        />
      </div>
      <div className="flex items-center gap-3">
        <h4>Sort Products: </h4>
        <select
          name="sort"
          className="px-8 py-1 bg-black/10 border-none outline-none rounded-xl"
          onChange={handleChangeValues}
        >
          <option>Sort By</option>
          <option value="asc price">Lowest Price</option>
          <option value="desc price">Highest Price</option>
          <option value="asc lastUpdated">Latest</option>
          <option value="desc lastUpdated">Earliest</option>
        </select>
      </div>
    </div>
  );
};
