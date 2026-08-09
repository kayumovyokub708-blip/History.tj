function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="text-primary">History</span>.tj
        </h1>
        <p className="text-xl text-muted-foreground">
          Educational Platform for Tajikistan
        </p>
        <p className="text-muted">
          Learn → Practice → Compete → Win
        </p>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold text-primary">01</div>
            <div className="mt-2 text-sm text-muted">Foundation</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 opacity-50">
            <div className="text-3xl font-bold">02</div>
            <div className="mt-2 text-sm text-muted">Design System</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 opacity-50">
            <div className="text-3xl font-bold">03</div>
            <div className="mt-2 text-sm text-muted">Authentication</div>
          </div>
        </div>

        <p className="text-sm text-muted pt-8">
          Milestone 1 — Architecture in progress
        </p>
      </div>
    </div>
  )
}

export default App
