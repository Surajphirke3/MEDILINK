"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
const data = [
  { name: "Jan", appointments: 3 },
  { name: "Feb", appointments: 5 },
  { name: "Mar", appointments: 8 },
  { name: "Apr", appointments: 4 },
  { name: "May", appointments: 6 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, Suraj 👋</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Appointments" value="12" />
        <StatCard title="Reports" value="5" />
        <StatCard title="Doctors Consulted" value="4" />
        <StatCard title="Pending Actions" value="2" />
      </div>

      {/* Appointment Trend Chart */}
      <div className="bg-white dark:bg-neutral-900 border rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Monthly Appointment Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="appointments" stroke="#4ade80" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <ActivityCard emoji="✅" text="You booked an appointment with Dr. Smith on 23rd June." />
          <ActivityCard emoji="📄" text="Report from 20th June has been added to your account." />
          <ActivityCard emoji="⏳" text="You have 2 appointments pending confirmation." />
        </ul>
      </div>
    </div>
  );
}

// function StatCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 border shadow">
//       <div className="text-sm text-gray-500">{title}</div>
//       <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
//     </div>
//   );
// }

function ActivityCard({ emoji, text }: { emoji: string; text: string }) {
  return (
    <li className="flex items-center space-x-3 bg-white dark:bg-neutral-900 border rounded-md p-4 shadow">
      <span className="text-2xl">{emoji}</span>
      <span className="text-gray-700 dark:text-white">{text}</span>
    </li>
  );
}



function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-white dark:bg-neutral-900 p-6 border shadow"
    >
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
    </motion.div>
  );
}