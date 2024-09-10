import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded ${className}`}
  ></div>
);

const ProfSkeleton = () => {
  return (
    <div className="flex w-full flex-col mt-6">
      <DataTableToolbarSkeleton />
      <DataTableSkeleton />
    </div>
  );
};

export default ProfSkeleton;

const DataTableToolbarSkeleton = () => {
  return (
    <div className="flex w-full flex-col mt-6 mb-2">
      <main className="flex flex-1 flex-row gap-1">
        <div className="flex overflow-hidden rounded-md px-3 py-2 h-10 w-[200px] lg:w-[250px]">
          <Skeleton className=" w-full h-full" />
        </div>
        <div className="flex overflow-hidden rounded-md px-3 py-2 h-10 w-[100px] lg:w-[200px]">
          <Skeleton className=" w-full h-full" />
        </div>
        <div className="flex overflow-hidden rounded-md px-3 py-2 h-10 w-[100px] lg:w-[200px]">
          <Skeleton className=" w-full h-full" />
        </div>{" "}
        <div className="flex overflow-hidden rounded-md px-3 py-2 h-10 w-[100px] lg:w-[200px]">
          <Skeleton className=" w-full h-full" />
        </div>
      </main>
    </div>
  );
};

const DataTableSkeleton = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {[1, 2, 3, 4, 5].map((i) => (
              <TableHead key={i}>
                <Skeleton className="h-8 w-1/3 " />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(5)].map((_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton className="h-14 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
