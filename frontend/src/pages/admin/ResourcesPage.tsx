import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Resources</h2>
          <p className="text-muted">Books, documents, maps, videos</p>
        </div>
        <Button>+ Add Resource</Button>
      </div>

      <Card>
        <CardContent className="py-12 text-center text-muted">
          Resource management coming soon.
          <br />
          You will be able to upload books, PDFs, maps and link videos here.
        </CardContent>
      </Card>
    </div>
  )
}
