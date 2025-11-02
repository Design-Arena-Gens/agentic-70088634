"use client";
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChannelShare } from '@/lib/mock';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ channels, title }: { channels: ChannelShare[]; title: string }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="h-[260px]">
          <Pie
            data={{
              labels: channels.map(c => c.label),
              datasets: [
                {
                  data: channels.map(c => c.value),
                  backgroundColor: ['#60a5fa', '#34d399', '#fbbf24', '#a78bfa', '#f87171'],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              plugins: { legend: { labels: { color: '#e5e7eb' } } },
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
