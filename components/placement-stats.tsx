"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartLegend, ChartTitle } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts"

const placementData = {
  "2024": {
    totalStudents: 120,
    placedStudents: 108,
    placementRate: 90,
    averageSalary: 4.8,
    topSalary: 8.5,
    sectorWisePlacement: [
      { name: "Government Hospitals", value: 35 },
      { name: "Private Hospitals", value: 45 },
      { name: "Clinics", value: 10 },
      { name: "Research", value: 5 },
      { name: "Higher Studies", value: 15 },
      { name: "Others", value: 10 },
    ],
    salaryRanges: [
      { range: "3-4 LPA", count: 25 },
      { range: "4-5 LPA", count: 40 },
      { range: "5-6 LPA", count: 30 },
      { range: "6-7 LPA", count: 10 },
      { range: "7+ LPA", count: 3 },
    ],
  },
  "2023": {
    totalStudents: 115,
    placedStudents: 100,
    placementRate: 87,
    averageSalary: 4.5,
    topSalary: 7.8,
    sectorWisePlacement: [
      { name: "Government Hospitals", value: 30 },
      { name: "Private Hospitals", value: 48 },
      { name: "Clinics", value: 8 },
      { name: "Research", value: 4 },
      { name: "Higher Studies", value: 12 },
      { name: "Others", value: 13 },
    ],
    salaryRanges: [
      { range: "3-4 LPA", count: 30 },
      { range: "4-5 LPA", count: 38 },
      { range: "5-6 LPA", count: 25 },
      { range: "6-7 LPA", count: 5 },
      { range: "7+ LPA", count: 2 },
    ],
  },
  "2022": {
    totalStudents: 110,
    placedStudents: 92,
    placementRate: 84,
    averageSalary: 4.2,
    topSalary: 7.2,
    sectorWisePlacement: [
      { name: "Government Hospitals", value: 28 },
      { name: "Private Hospitals", value: 45 },
      { name: "Clinics", value: 10 },
      { name: "Research", value: 3 },
      { name: "Higher Studies", value: 10 },
      { name: "Others", value: 14 },
    ],
    salaryRanges: [
      { range: "3-4 LPA", count: 35 },
      { range: "4-5 LPA", count: 35 },
      { range: "5-6 LPA", count: 18 },
      { range: "6-7 LPA", count: 3 },
      { range: "7+ LPA", count: 1 },
    ],
  },
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

export default function PlacementStats() {
  const [activeYear, setActiveYear] = useState("2024")
  const yearData = placementData[activeYear as keyof typeof placementData]

  return (
    <div className="mt-16">
      <Tabs defaultValue="2024" onValueChange={setActiveYear}>
        <TabsList className="mb-6 grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="2024">2024 Batch</TabsTrigger>
          <TabsTrigger value="2023">2023 Batch</TabsTrigger>
          <TabsTrigger value="2022">2022 Batch</TabsTrigger>
        </TabsList>

        <TabsContent value={activeYear} className="mt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Students</CardDescription>
                <CardTitle className="text-3xl">{yearData.totalStudents}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Placed Students</CardDescription>
                <CardTitle className="text-3xl">{yearData.placedStudents}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Placement Rate</CardDescription>
                <CardTitle className="text-3xl">{yearData.placementRate}%</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Average Package</CardDescription>
                <CardTitle className="text-3xl">₹{yearData.averageSalary} LPA</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sector-wise Placement</CardTitle>
                <CardDescription>Distribution of placements across different sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer>
                    <ChartTitle>Sector-wise Placement Distribution</ChartTitle>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={yearData.sectorWisePlacement}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {yearData.sectorWisePlacement.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltip />} />
                        <Legend layout="vertical" verticalAlign="middle" align="right" />
                      </PieChart>
                    </ResponsiveContainer>
                    <ChartLegend />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salary Distribution</CardTitle>
                <CardDescription>Number of students in different salary ranges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer>
                    <ChartTitle>Salary Range Distribution</ChartTitle>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={yearData.salaryRanges}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="range" />
                        <YAxis />
                        <Tooltip content={<ChartTooltip />} />
                        <Bar dataKey="count" name="Number of Students" fill="#0088FE" />
                      </BarChart>
                    </ResponsiveContainer>
                    <ChartLegend />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
