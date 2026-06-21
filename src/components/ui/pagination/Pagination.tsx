"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { generatePaginationNumbers } from "@/utils/generatePaginationNumbers";
import { cn } from "@/lib/utils";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? "1";
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (totalPages <= 1) return null;

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === "...") return `${pathname}?${params.toString()}`;
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const baseItem =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors";

  return (
    <nav aria-label="Paginación" className="mt-12 flex justify-center">
      <ul className="flex items-center gap-1.5">
        <li>
          {currentPage <= 1 ? (
            <span
              aria-disabled
              className={cn(baseItem, "cursor-not-allowed text-muted-foreground/40")}
            >
              <CaretLeft size={18} weight="bold" />
            </span>
          ) : (
            <Link
              href={createPageUrl(currentPage - 1)}
              aria-label="Página anterior"
              className={cn(baseItem, "text-foreground hover:bg-muted")}
            >
              <CaretLeft size={18} weight="bold" />
            </Link>
          )}
        </li>

        {allPages.map((page, index) =>
          page === "..." ? (
            <li key={`dots-${index}`}>
              <span className={cn(baseItem, "text-muted-foreground")}>…</span>
            </li>
          ) : (
            <li key={page}>
              <Link
                href={createPageUrl(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                  baseItem,
                  page === currentPage
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {page}
              </Link>
            </li>
          )
        )}

        <li>
          {currentPage >= totalPages ? (
            <span
              aria-disabled
              className={cn(baseItem, "cursor-not-allowed text-muted-foreground/40")}
            >
              <CaretRight size={18} weight="bold" />
            </span>
          ) : (
            <Link
              href={createPageUrl(currentPage + 1)}
              aria-label="Página siguiente"
              className={cn(baseItem, "text-foreground hover:bg-muted")}
            >
              <CaretRight size={18} weight="bold" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
