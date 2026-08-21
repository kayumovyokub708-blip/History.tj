import { Link, useParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPlaceBySlug } from "@/data/places"

export default function PlacePage() {
  const { slug } = useParams()
  const place = slug ? getPlaceBySlug(slug) : undefined
  if (!place) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Not found</h1>
        <Link to="/encyclopedia/places" className="text-primary">← Places</Link>
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/encyclopedia/places" className="text-sm text-primary hover:underline">← Places</Link>
      <h1 className="text-3xl font-bold mt-4">{place.nameTj}</h1>
      <p className="text-xl text-muted">{place.name}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {place.period && <Badge variant="secondary">{place.period}</Badge>}
        {place.location && <Badge variant="outline">{place.location}</Badge>}
      </div>
      <Card className="mt-8">
        <CardHeader><CardTitle>Description</CardTitle></CardHeader>
        <CardContent><p className="text-muted-foreground leading-relaxed">{place.description}</p></CardContent>
      </Card>
      {place.coordinates && (
        <p className="text-sm text-muted mt-4">Coordinates: {place.coordinates}</p>
      )}
    </div>
  )
}
