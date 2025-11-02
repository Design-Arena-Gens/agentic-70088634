"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TimeSeriesPoint } from '@/lib/mock';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend);

export default function LineChart({ data, label }: { data: TimeSeriesPoint[]; label: string }) {
  const labels = data.map(d => d.date.slice(5));
  const values = data.map(d => d.value);

  return (
    <div className="card">
      <div className="card-header">{label}</div>
      <div className="card-body">
        <Line
          data={{
            labels,
            datasets: [
              {
                label,
                data: values,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                fill: true,
                tension: 0.35,
                pointRadius: 0,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                ticks: { color: '#9CA3AF', maxTicksLimit: 8 },
                grid: { color: 'rgba(255,255,255,0.05)' },
              },
              y: {
                ticks: { color: '#9CA3AF' },
                grid: { color: 'rgba(255,255,255,0.05)' },
              },
            },
          }}
          height={260}
        />
      </div>
    </div>
  );
}
