import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { KPI, numberFormat, percentFormat } from '@/lib/mock';

export function KpiCard({ label, value, deltaPct, format = 'number' }: KPI) {
  const isUp = (deltaPct ?? 0) >= 0;
  const formattedValue = format === 'percent'
    ? percentFormat(value)
    : numberFormat(value);

  return (
    <div className="card">
      <div className="card-body">
        <div className="kpi">{formattedValue}</div>
        <div className="mt-1 kpi-label">{label}</div>
        {typeof deltaPct === 'number' && (
          <div className={`mt-3 inline-flex items-center gap-1 text-sm ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            <span>{Math.abs(deltaPct).toFixed(1)}%</span>
            <span className="text-subtle">vs. previous period</span>
          </div>
        )}
      </div>
    </div>
  );
}
