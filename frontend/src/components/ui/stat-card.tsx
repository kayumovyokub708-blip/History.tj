import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  className?: string
}

export function StatCard({ value, label, icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-5 sm:p-6 text-center",
        className
      )}
    >
      {icon && <div className="mb-2 flex justify-center text-primary">{icon}</div>}
      <div className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">{value}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  )
}
