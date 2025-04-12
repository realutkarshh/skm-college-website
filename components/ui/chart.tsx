import type React from "react"
export const ChartTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>
}

export const ChartLegend = () => {
  return <div className="text-sm text-gray-500"></div>
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-md p-2 shadow-md">
        <p className="font-semibold">{`${label}`}</p>
        {payload.map((item: any) => (
          <p key={item.dataKey} className="text-gray-700">
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    )
  }

  return null
}
