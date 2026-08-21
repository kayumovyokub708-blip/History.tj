import { Link, useParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBattleBySlug } from "@/data/battles"

export default function BattlePage() {
  const { slug } = useParams()
  const item = slug ? getBattleBySlug(slug) : undefined
  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <Link to="/encyclopedia/battles" className="text-primary">← Battles</Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/battles" className="text-sm text-primary hover:underline">← Battles</Link>
      <h1 className="text-3xl font-bold mt-4">{item.nameTj}</h1>
      <p className="text-muted">{item.name}</p>
      <div className="flex gap-2 mt-3">
        <Badge variant="secondary">{item.date}</Badge>
        {item.location && <Badge variant="outline">{item.location}</Badge>}
      </div>
      <Card className="mt-8">
        <CardHeader><CardTitle>Description</CardTitle></CardHeader>
        <CardContent><p className="text-muted-foreground leading-relaxed">{item.description}</p></CardContent>
      </Card>
      {item.participants && (
        <Card className="mt-4">
          <CardHeader><CardTitle className="text-base">Participants</CardTitle></CardHeader>
          <CardContent className="text-sm space-y-1">
            {item.participants.map((p) => (
              <p key={p}>• {p}</p>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
