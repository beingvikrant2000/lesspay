interface StickyNoteProps {
  children: React.ReactNode
  color?: "yellow" | "pink" | "blue" | "green" | "orange"
  rotate?: string
  className?: string
}

export function StickyNote({
  children,
  color = "yellow",
  rotate = "",
  className = "",
}: StickyNoteProps) {
  return (
    <div className={`sticky-note sticky-${color} ${rotate} ${className}`}>
      <div className="tape" />
      {children}
    </div>
  )
}