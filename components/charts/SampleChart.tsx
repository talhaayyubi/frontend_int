"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const data = [{name:"Mon",uv:24},{name:"Tue",uv:31},{name:"Wed",uv:28},{name:"Thu",uv:35},{name:"Fri",uv:30},{name:"Sat",uv:40},{name:"Sun",uv:38}];
export default function SampleChart() {
  return (
    <div className="rounded-2xl border border-default/20 bg-surface p-4">
      <div className="text-sm text-muted mb-2">Weekly Activity</div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1}/>
            <XAxis dataKey="name" stroke="currentColor" opacity={0.6} />
            <YAxis stroke="currentColor" opacity={0.6} />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="currentColor" dot={false} strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
