import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const countries = [
  { flag: "🇹🇯", name: "Tajikistan", desc: "History, culture and heroes of the Tajik people" },
  { flag: "🇺🇿", name: "Uzbekistan", desc: "Shared heritage of Central Asia" },
  { flag: "🇰🇿", name: "Kazakhstan", desc: "Steppe empires and modern history" },
  { flag: "🇰🇬", name: "Kyrgyzstan", desc: "Nomadic traditions and mountain history" },
  { flag: "🇦🇫", name: "Afghanistan", desc: "Crossroads of civilizations" },
  { flag: "🇷🇺", name: "Russia", desc: "Imperial and Soviet periods" },
]

export default function CountriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Countries</h1>
      <p className="text-muted mb-8">Explore history across the region</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((c) => (
          <Card key={c.name} className="hover:border-primary/40 transition cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{c.flag}</span>
                <CardTitle>{c.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">{c.desc}</p>
              <div className="mt-4">
                <Badge variant="secondary">Coming soon</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
