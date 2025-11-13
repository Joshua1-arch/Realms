"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

export const EcommerceMetrics = () => {
  const metrics = [
    {
      title: "Customers",
      value: "3,782",
      trend: "up",
      percent: "11.01%",
      icon: <FaUsers className="text-white text-2xl" />,
      color: "bg-blue-500",
    },
    {
      title: "Orders",
      value: "5,359",
      trend: "down",
      percent: "9.05%",
      icon: <FaShoppingCart className="text-white text-2xl" />,
      color: "bg-green-500",
    },
    {
      title: "Revenue",
      value: "$42,120",
      trend: "up",
      percent: "14.3%",
      icon: <FaMoneyBillWave className="text-white text-2xl" />,
      color: "bg-purple-500",
    },
    {
      title: "Growth",
      value: "24.5%",
      trend: "up",
      percent: "4.2%",
      icon: <FaChartLine className="text-white text-2xl" />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="relative overflow-hidden rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
        >
          {/* Icon */}
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${metric.color} mb-4`}>
            {metric.icon}
          </div>

          {/* Metric */}
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{metric.title}</span>
              <h4 className="mt-1 text-xl font-bold text-gray-800 dark:text-white/90">{metric.value}</h4>
            </div>

            {/* Badge */}
            <Badge color={metric.trend === "up" ? "success" : "error"}>
              {metric.trend === "up" ? "▲" : "▼"} {metric.percent}
            </Badge>
          </div>

          {/* Optional hover effect */}
          <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-10 bg-gradient-to-tr from-blue-400 to-purple-400"></div>
        </div>
      ))}
    </div>
  );
};
