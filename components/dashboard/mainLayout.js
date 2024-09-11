"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseMedical,
  CheckCircle,
  MailOpen,
  MapPin,
  Pin,
  Stethoscope,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { useState } from "react";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import { Button } from "../ui/Button";
import { dataDoctory } from "@/public/data/dataFile";

export function DashboardLayout() {
  //FAKE RETRIEVING OF THE DATA
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: "New Professionals",
      description: "+20% from last month",
      icon: Stethoscope,
      value: 140,
    },
    {
      id: 2,
      title: "Waiting for your reply",
      icon: MailOpen,
      value: 23,
    },
    {
      id: 3,
      title: "Accepted Offers",
      description: "-10% from last month",
      icon: CheckCircle,
      value: 1,
    },
  ]);

  //FAKE RETRIEVING OF THE ALGORITHM DATA
  const dataBestUsers = dataDoctory.slice(0, 4);

  return (
    <div className="flex w-full flex-col mt-6">
      <main className="flex flex-1 flex-col gap-4 md:gap-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {cardsData.map((card) => (
            <Card key={card.id} x-chunk={`dashboard-01-chunk-${card.id - 1}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <card.icon size={20} className="text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                {card.description && (
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
          <Card
            x-chunk="dashboard-01-chunk-3"
            className={
              "md:flex hidden  bg-primary/20  justify-between flex-col"
            }
          >
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-sembold ">
                Get quick access to the terminal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base font-light ">
                Press{" "}
                <kbd className="text-sm pointer-events-none inline-flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono font-medium text-muted-foreground opacity-100">
                  <span>⌘</span>K
                </kbd>{" "}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <MainChartDashboard />
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Perfect New Candidates For You</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {dataBestUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="grid">
                    <p className="text-sm mb-1 font-medium leading-none">
                      {user.full_name}
                    </p>
                    <p className="flex gap-1 items-center  text-sm text-muted-foreground">
                      <div>
                        <BriefcaseMedical className="h-4 w-4" />
                      </div>
                      <span className="line-clamp-1 text-ellipsis">
                        {user.nucc_classification}
                      </span>
                    </p>
                    <p className="flex gap-1 items-center text-sm text-muted-foreground">
                      <div>
                        <MapPin className="h-4 w-4" />
                      </div>
                      {user.individual_place}
                    </p>
                  </div>
                  <Button asChild size="sm" className="ml-auto gap-1">
                    <Link href={`/professionals/${user.npi}`}>
                      Discover Profile
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function MainChartDashboard() {
  const chartData = [
    { date: "2024-03-01", accepted: 0, rejected: 15 },
    { date: "2024-04-01", accepted: 16, rejected: 22 },
    { date: "2024-05-01", accepted: 3, rejected: 20 },
    { date: "2024-06-01", accepted: 24, rejected: 46 },
    { date: "2024-07-01", accepted: 5, rejected: 34 },
    { date: "2024-08-01", accepted: 47, rejected: 139 },
    { date: "2024-09-01", accepted: 1, rejected: 19 },
  ];

  const chartConfig = {
    views: {
      label: "N. of candidates",
    },
    accepted: {
      label: "accepted",
      color: "hsl(var(--chart-1))",
    },
    rejected: {
      label: "rejected",
      color: "hsl(var(--chart-2))",
    },
  };

  const [activeChart, setActiveChart] = useState("accepted");

  const total = React.useMemo(
    () => ({
      accepted: chartData.reduce((acc, curr) => acc + curr.accepted, 0),
      rejected: chartData.reduce((acc, curr) => acc + curr.rejected, 0),
    }),
    []
  );

  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Offers to your candidates</CardTitle>
          <CardDescription>
            Showing the accepted and rejected offers to your candidates
          </CardDescription>
        </div>
        <div className="flex">
          {["accepted", "rejected"].map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
