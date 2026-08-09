import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
}

export function Avatar({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) {
  const initials = fallback
    ? fallback.slice(0, 2).toUpperCase()
    : alt?.slice(0, 2).toUpperCase() || "?"

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-surface border border-border",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="aspect-square h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-card text-muted-foreground font-medium">
          {initials}
        </div>
      )}
    </div>
  )
}
