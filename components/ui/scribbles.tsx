export function ScribbleArrow({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={`absolute w-40 opacity-70 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M10 50 C60 10, 140 10, 180 50" />
      <path d="M150 35 L180 50 L150 65" />
    </svg>
  )
}

export function ScribbleUnderline({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={`absolute w-full opacity-60 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M0 10 Q50 20, 100 10 T200 10" />
    </svg>
  )
}

export function ScribbleCircle({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute w-24 opacity-60 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M50 5 C80 5, 95 20, 95 50 C95 80, 80 95, 50 95 C20 95, 5 80, 5 50 C5 20, 20 5, 50 5 Z" />
    </svg>
  )
}