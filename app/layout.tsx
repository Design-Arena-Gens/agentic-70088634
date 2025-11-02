import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'Google Analytics-like dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="container max-w-7xl py-8">
          <header className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
            <div className="flex items-center gap-3 text-sm text-subtle">
              <span>Last 30 days</span>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
