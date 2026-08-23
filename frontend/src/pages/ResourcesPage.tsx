import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/** Base path for GitHub Pages project site */
const LEGACY = `${import.meta.env.BASE_URL}legacy`.replace(/\/+/g, "/").replace(/\/$/, "")

const legacyPages = [
  { href: `${LEGACY}/index.html`, title: "Саҳифаи асосӣ (prototype)", desc: "index.html — версияи қадимӣ" },
  { href: `${LEGACY}/heroes.html`, title: "Қаҳрамонон", desc: "heroes.html" },
  { href: `${LEGACY}/events.html`, title: "Воқеаҳо", desc: "events.html" },
  { href: `${LEGACY}/periods.html`, title: "Давраҳо", desc: "periods.html" },
  { href: `${LEGACY}/kitobho.html`, title: "Китобҳо", desc: "kitobho.html" },
  { href: `${LEGACY}/konstitutsia.html`, title: "Конститутсия", desc: "konstitutsia.html" },
  { href: `${LEGACY}/prezident.html`, title: "Президент", desc: "prezident.html" },
  { href: `${LEGACY}/surooda.html`, title: "Сурудҳо", desc: "surooda.html" },
  { href: `${LEGACY}/thelaw.html`, title: "Қонун", desc: "thelaw.html" },
  { href: `${LEGACY}/Tajikistan_map.html`, title: "Харитаи Тоҷикистон", desc: "Tajikistan_map.html" },
]

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-2">Манбаъҳо / Resources</h1>
      <p className="text-muted mb-4">
        Саҳифаҳои prototype аз папкаи <code className="text-primary">таърих</code> — ҳамагӣ дар репо нигоҳ
        дошта шудаанд. Платформаи нав (React) асосӣ боқӣ мемонад.
      </p>

      <div className="mb-6 p-4 rounded-lg border border-border bg-surface text-sm text-muted">
        PDF-ҳои папкаи <strong>китобхо</strong> дар GitHub ҳастанд:{" "}
        <a
          className="text-primary hover:underline"
          href="https://github.com/kayumovyokub708-blip/History.tj/tree/main/%D0%BA%D0%B8%D1%82%D0%BE%D0%B1%D1%85%D0%BE"
          target="_blank"
          rel="noreferrer"
        >
          кушодан дар GitHub
        </a>
        {" "}
        (файлҳои калон барои Pages ҷудогона).
      </div>

      <h2 className="text-xl font-semibold mb-4">Саҳифаҳои кӯҳна (HTML)</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {legacyPages.map((p) => (
          <a key={p.href} href={p.href} target="_blank" rel="noreferrer">
            <Card className="h-full hover:border-primary/40 transition">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted">{p.desc}</span>
                <Badge variant="secondary">HTML</Badge>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
