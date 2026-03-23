import { RiddleCard } from "./riddle-card"
import type { Riddle } from "@/data/riddles"

interface RiddleListProps {
  riddles: Riddle[]
}

export function RiddleList({ riddles }: RiddleListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {riddles.map((riddle) => (
        <RiddleCard key={riddle.id} riddle={riddle} />
      ))}
    </div>
  )
}
