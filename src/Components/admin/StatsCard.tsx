import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend,
  trendDirection = 'up',
  className = "",
  iconBg = "bg-blue-500"
}) {
  return (
    <Card className={`relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      <div className={`absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6 ${iconBg} rounded-full opacity-5`} />
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {value}
            </div>
            {trend && (
              <div className={`flex items-center text-sm ${
                trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trendDirection === 'up' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                <span className="font-medium">{trend}</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-xl ${iconBg} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${iconBg.replace('bg-', 'text-')}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}