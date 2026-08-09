export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Courses</h1>
      <p className="text-muted mb-8">Structured learning paths for history</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition"
          >
            <div className="h-40 bg-surface flex items-center justify-center text-muted">
              Course Cover
            </div>
            <div className="p-5">
              <div className="text-xs text-primary mb-1">Category</div>
              <h3 className="font-semibold text-lg">Course Title {i}</h3>
              <p className="text-sm text-muted mt-2 line-clamp-2">
                Short description of the course will appear here.
              </p>
              <div className="flex items-center justify-between mt-4 text-sm text-muted">
                <span>12 lessons</span>
                <span>Beginner</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
