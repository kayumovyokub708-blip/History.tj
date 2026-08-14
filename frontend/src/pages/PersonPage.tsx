import { Link, useParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPersonBySlug } from "@/data/people"

export default function PersonPage() {
  const { slug } = useParams()
  const person = slug ? getPersonBySlug(slug) : undefined

  if (!person) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Person not found</h1>
        <Link to="/encyclopedia/people" className="text-primary hover:underline">
          ← Back to People
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/encyclopedia/people" className="text-sm text-primary hover:underline">
        ← Шахсиятҳо
      </Link>

      <div className="mt-6 flex flex-col sm:flex-row gap-8">
        <div className="h-48 w-48 shrink-0 rounded-xl bg-surface border border-border flex items-center justify-center text-6xl opacity-50">
          👤
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{person.nameTj}</h1>
          <p className="text-xl text-muted">{person.name}</p>
          {person.title && <p className="text-primary mt-1">{person.title}</p>}
          <div className="flex flex-wrap gap-2 mt-3">
            {person.period && <Badge variant="secondary">{person.period}</Badge>}
            {person.dynasty && <Badge variant="outline">{person.dynasty}</Badge>}
            {(person.birthYear || person.deathYear) && (
              <Badge variant="outline">
                {person.birthYear}–{person.deathYear}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">{person.biography}</p>
        </CardContent>
      </Card>

      {person.achievements && person.achievements.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {person.achievements.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-primary">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {(person.birthPlace || person.deathPlace) && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Places</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted">
              {person.birthPlace && <p>Birth: {person.birthPlace}</p>}
              {person.deathPlace && <p>Death: {person.deathPlace}</p>}
            </CardContent>
          </Card>
        )}
        {person.sources && person.sources.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sources</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted">
              {person.sources.map((s, i) => (
                <p key={i}>{i + 1}. {s}</p>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
