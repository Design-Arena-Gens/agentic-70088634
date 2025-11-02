import { KpiCard } from '@/components/KpiCard';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import DataTable from '@/components/DataTable';
import { generateChannels, generateKPIs, generateTimeSeries, generateTopPages } from '@/lib/mock';

export default function Page() {
  const kpis = generateKPIs();
  const series = generateTimeSeries();
  const channels = generateChannels();
  const topPages = generateTopPages();

  return (
    <main className="space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LineChart data={series} label="Users" />
        </div>
        <PieChart channels={channels} title="Traffic channels" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DataTable rows={topPages} title="Top pages" />
        </div>
        <BarChart
          labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          values={[3200, 4100, 3800, 4500, 5200, 2800, 2600]}
          title="Weekly sessions"
        />
      </section>
    </main>
  );
}
