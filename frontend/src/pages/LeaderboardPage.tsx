export default function LeaderboardPage() {
  const leaders = [
    { rank: 1, name: "Абдулло...", xp: 2488 },
    { rank: 2, name: "Муҳаммад...", xp: 2410 },
    { rank: 3, name: "Фаридун...", xp: 2356 },
    { rank: 4, name: "Нигина...", xp: 2280 },
    { rank: 5, name: "Саид...", xp: 2195 },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
      <p className="text-muted mb-8">Top learners this month</p>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm text-muted border-b border-border">
          <div className="col-span-2">#</div>
          <div className="col-span-7">User</div>
          <div className="col-span-3 text-right">XP</div>
        </div>
        {leaders.map((user) => (
          <div
            key={user.rank}
            className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-border last:border-0 hover:bg-surface/50 transition"
          >
            <div className="col-span-2 font-bold text-primary">{user.rank}</div>
            <div className="col-span-7 font-medium">{user.name}</div>
            <div className="col-span-3 text-right font-semibold">{user.xp.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
