"use client";
export const ProductFeatures: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium text-xl">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full bg-black ring-1 ring-base-25 relative cursor-pointer">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 ring-2 ring-base-100/20 rounded-full" />
        </li>
        <li className="w-8 h-8 rounded-full bg-error ring-1 ring-base-25 relative cursor-pointer"></li>
        <li className="w-8 h-8 rounded-full bg-success ring-1 ring-base-25 relative cursor-not-allowed">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[2px] rotate-45 bg-error w-10" />
        </li>
      </ul>
      <h4 className="font-medium text-xl">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="font-medium px-6 py-2 rounded-xl bg-error ring-error cursor-pointer  text-black">
          Small
        </li>
        <li className="font-medium px-6 py-2 rounded-xl bg-transparent ring-2 ring-error text-error cursor-pointer">
          Medium
        </li>
        <li className="font-medium px-6 py-2 rounded-xl bg-error/20  text-white ring-2 ring-error/20 cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
};
