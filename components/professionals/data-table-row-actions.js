"use client";

import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";

export function DataTableRowActions({ row }) {
  return (
    <Link
      href={`/professionals/${row.original.npi}`}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "w-full h-full flex justify-between items-center"
      )}
    >
      View Profile <ArrowTopRightIcon fontSize={24} />
    </Link>
  );
}
