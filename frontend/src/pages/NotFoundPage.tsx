import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl mt-4 text-muted">Page not found</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
