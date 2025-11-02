import { durationFormat, numberFormat, PageRow } from '@/lib/mock';

export default function DataTable({ rows, title }: { rows: PageRow[]; title: string }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-subtle">
            <tr>
              <th className="text-left font-medium pb-2">Page</th>
              <th className="text-right font-medium pb-2">Views</th>
              <th className="text-right font-medium pb-2">Users</th>
              <th className="text-right font-medium pb-2">Avg. time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.path}>
                <td className="py-2 pr-4">
                  <a href={r.path} className="text-blue-400 hover:underline">{r.path}</a>
                </td>
                <td className="py-2 text-right">{numberFormat(r.views)}</td>
                <td className="py-2 text-right">{numberFormat(r.users)}</td>
                <td className="py-2 text-right">{durationFormat(r.avgTimeSeconds)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
