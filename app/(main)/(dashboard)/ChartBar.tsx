"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SquareStack } from "lucide-react";
import { useEffect, useState } from "react";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig: any = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Tickets",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#6c47ff"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#6c47ff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#6c47ff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export function ChartBar() {
  const [Chart, setChart] = useState<any>(undefined);
  useEffect(() => {
    import("react-apexcharts").then((chart) => {
      setChart(() => chart.default);
    });
  }, []);
  
  return (
    Chart && (
      <Card>
        <CardHeader
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-primary p-5 text-white">
            <SquareStack className="h-6 w-6" />
          </div>
          <div>
            <h6 color="blue-gray">Total ticket by month</h6>
          </div>
        </CardHeader>
        <CardContent className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardContent>
      </Card>
    )
  );
}

