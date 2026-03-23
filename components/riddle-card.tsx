"use client"

import Link from "next/link"
import { HelpCircle, ChevronRight } from "lucide-react"
import type { Riddle } from "@/data/riddles"

interface RiddleCardProps {
  riddle: Riddle
}

export function RiddleCard({ riddle }: RiddleCardProps) {
  return (
    <Link href={`/riddle/${riddle.id}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/10 rounded-bl-full" />
        
        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            {riddle.category && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                {riddle.category}
              </span>
            )}
          </div>
          
          <p className="text-card-foreground font-medium leading-relaxed line-clamp-2 mb-4 text-balance">
            {riddle.question}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              タップして答えを見る
            </span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ChevronRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
