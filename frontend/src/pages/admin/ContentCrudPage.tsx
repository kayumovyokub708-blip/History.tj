import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { loadContent, saveContent, slugify, type ContentType } from "@/lib/contentStore"

interface Field {
  key: string
  label: string
  type?: "text" | "textarea"
}

interface Props {
  type: ContentType
  title: string
  seed: any[]
  fields: Field[]
  titleKey?: string
  titleKey2?: string
}

export default function ContentCrudPage({
  type,
  title,
  seed,
  fields,
  titleKey = "nameTj",
  titleKey2 = "name",
}: Props) {
  const { t } = useTranslation()
  const [list, setList] = useState<any[]>([])
  const [editing, setEditing] = useState<any | null>(null)
  const [form, setForm] = useState<Record<string, string>>({})

  useEffect(() => {
    setList(loadContent(type, seed))
  }, [type, seed])

  const openNew = () => {
    setEditing({ id: `new-${Date.now()}` })
    const empty: Record<string, string> = { status: "published" }
    fields.forEach((f) => (empty[f.key] = ""))
    setForm(empty)
  }

  const openEdit = (item: any) => {
    setEditing(item)
    const f: Record<string, string> = {}
    fields.forEach((field) => {
      f[field.key] = item[field.key] != null ? String(item[field.key]) : ""
    })
    f.status = item.status || "published"
    setForm(f)
  }

  const save = () => {
    if (!editing) return
    const slug =
      form.slug ||
      editing.slug ||
      slugify(form.name || form.title || form.nameTj || form.titleTj || editing.id)
    const item = {
      ...editing,
      ...form,
      id: editing.id.startsWith("new-") ? String(Date.now()) : editing.id,
      slug,
      status: form.status || "published",
    }
    const next = loadContent(type, seed)
    const idx = next.findIndex((x: any) => x.id === item.id)
    if (idx >= 0) next[idx] = item
    else next.push(item)
    saveContent(type, next)
    setList(next)
    setEditing(null)
  }

  const remove = (id: string) => {
    if (!confirm(t("admin.confirmDelete"))) return
    const next = list.filter((x) => x.id !== id)
    saveContent(type, next)
    setList(next)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted">
            {list.length} {t("admin.items")} · {t("admin.savedLocal")}
          </p>
        </div>
        <Button onClick={openNew}>+ {t("admin.addItem")}</Button>
      </div>

      {editing && (
        <Card className="p-5 space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="text-sm text-muted">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  value={form[field.key] || ""}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-surface border border-border min-h-[80px]"
                />
              ) : (
                <input
                  value={form[field.key] || ""}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full mt-1 h-10 px-3 rounded-lg bg-surface border border-border"
                />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <Button onClick={save}>{t("common.save")}</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>{t("common.cancel")}</Button>
          </div>
        </Card>
      )}

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-left">
                <th className="px-4 py-3">{t("admin.colTitle")}</th>
                <th className="px-4 py-3">{t("admin.colStatus")}</th>
                <th className="px-4 py-3">{t("admin.colActions")}</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium">{item[titleKey] || item[titleKey2]}</div>
                    <div className="text-xs text-muted">{item[titleKey2]}</div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={item.status === "published" ? "success" : "secondary"}>
                      {item.status === "draft"
                        ? t("admin.draft")
                        : item.status === "archived"
                          ? t("admin.archived")
                          : t("admin.published")}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <Button size="sm" variant="ghost" onClick={() => openEdit(item)}>{t("common.edit")}</Button>
                    <Button size="sm" variant="ghost" onClick={() => remove(item.id)}>{t("common.delete")}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
