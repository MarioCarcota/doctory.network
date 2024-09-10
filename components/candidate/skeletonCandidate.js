import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded ${className}`}
  ></div>
);

const CandidateSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mt-8 animate-pulse">
        <Skeleton className="h-8 w-28 rounded" />{" "}
        <div className="flex flex-row flex-nowrap gap-3">
          <Skeleton className="h-12 w-40 rounded" />{" "}
          <Skeleton className="h-8 w-8 rounded-full" />{" "}
        </div>
      </div>

      <div className="min-h-screen my-4">
        <div className="mx-auto space-y-6">
          <Card className="w-full">
            <CardHeader className="bg-primary/10 border-b">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-8 w-2/3" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-1/2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[...Array(8)].map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-1/2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[...Array(5)].map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-1/2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-1/3" />
                    {[...Array(4)].map((_, index) => (
                      <Skeleton key={index} className="h-4 w-full" />
                    ))}
                    <Separator className="my-2" />
                    <Skeleton className="h-5 w-1/3" />
                    {[...Array(4)].map((_, index) => (
                      <Skeleton key={index} className="h-4 w-full" />
                    ))}
                  </div>
                  {/* Map placeholder removed as per the modified code */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSkeleton;
