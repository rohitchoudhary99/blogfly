export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--surface)] px-4 py-10 text-[var(--foreground)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-3xl border border-[var(--border-color)] bg-[var(--card)] p-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--muted)]">
            Admin control
          </p>
          <h1 className="text-2xl font-semibold text-[var(--foreground)]">
            Blogfly Private Routes
          </h1>
          <p className="text-sm text-[var(--muted)]">
            All theme and content controls are scoped under `/admin/*`. Change a
            CSS variable and both admin and public pages react instantly.
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}