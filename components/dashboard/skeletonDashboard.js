import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/Card";

const Skeleton = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded ${className}`}
  ></div>
);

const DashboardSkeleton = () => {
  return (
    <div className="flex w-full flex-col mt-6">
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-1/3 mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-1/3" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-2/3" />
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="grid flex-1">
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-3 w-2/3" />
                    <Skeleton className="h-3 w-1/3 mt-1" />
                  </div>
                  <Skeleton className="h-8 w-24" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardSkeleton;
