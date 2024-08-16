"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../button";

type Props = {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export const Pagination = ({ currentPage, hasNext, hasPrev }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={`flex mt-28 w-96 items-center justify-between ${
        !hasNext && !hasPrev ? "hidden" : ""
      }`}
    >
      <Button
        variant="error"
        isOutline={true}
        isDisable={!hasPrev}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        Previose
      </Button>
      <Button
        variant="error"
        isOutline={true}
        isDisable={!hasNext}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};
