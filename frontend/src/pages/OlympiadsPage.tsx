export default function OlympiadsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Olympiads</h1>
      <p className="text-muted mb-8">Compete at the highest level</p>

      <div className="bg-card border border-border rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-sm text-primary font-medium mb-1">🏆 Upcoming</div>
            <h2 className="text-2xl font-bold">National History Olympiad</h2>
            <p className="text-muted mt-2">Starts: 12 August 2026 · Participants: 1,248</p>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
            View Olympiad
          </button>
        </div>
      </div>

      <p className="text-center text-muted py-12">More olympiads coming soon...</p>
    </div>
  )
}
