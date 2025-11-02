"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ labels, values, title }: { labels: string[]; values: number[]; title: string }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: title,
                data: values,
                backgroundColor: '#22c55e',
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { ticks: { color: '#9CA3AF' }, grid: { display: false } },
              y: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            },
          }}
          height={260}
        />
      </div>
    </div>
  );
}
