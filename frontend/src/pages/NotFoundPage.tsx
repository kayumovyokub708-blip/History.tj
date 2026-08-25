import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl mb-4">\ud83d\udd0d</p>
      <h1 className="text-3xl font-bold mb-2">{t("errors.pageNotFound")}</h1>
      <p className="text-muted mb-8 max-w-md">{t("errors.pageNotFoundDesc")}</p>
      <Link to="/">
        <Button>{t("errors.goHome")}</Button>
      </Link>
    </div>
  )
}
