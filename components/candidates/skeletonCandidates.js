import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded ${className}`}
  ></div>
);

const CandidatesPageSkeleton = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2 mt-4 mb-32">
        {[...Array(4)].map((_, index) => (
          <Card key={index}>
            <CardHeader className="bg-gray-700 animate-pulse flex flex-row items-center justify-between text-white">
              <CardTitle className="text-xl font-bold">
                <Skeleton className="h-6 w-1/3" />
              </CardTitle>
              <Skeleton className="h-6 w-10" />
            </CardHeader>
            <Separator />
            <CardContent className="grid gap-4 md:gap-8 mt-6 pb-2">
              <div className="flex items-center gap-4">
                <div className="grid">
                  <Skeleton className="h-4 w-2/3 mb-1" />
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-8 w-24 ml-auto rounded" />
              </div>
              <div className="flex items-center gap-4">
                <div className="grid">
                  <Skeleton className="h-4 w-2/3 mb-1" />
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-8 w-24 ml-auto rounded" />
              </div>
              <Separator />
              <Skeleton className="h-10 w-full rounded mb-6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CandidatesPageSkeleton;
