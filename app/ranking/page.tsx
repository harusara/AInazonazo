"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { RiddleCard } from "@/components/riddle-card"
import { riddles } from "@/data/riddles"

type RankedRiddle = {
  riddle: (typeof riddles)[number]
  views: number
}

export default function RankingPage() {
  const [topRiddles, setTopRiddles] = useState<RankedRiddle[]>([])

  useEffect(() => {
    try {
      const ranked = riddles
        .map((riddle) => ({
          riddle,
          views: Number(localStorage.getItem(`riddle_views_${riddle.id}`) || "0"),
        }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 50)

      setTopRiddles(ranked)
    } catch {
      setTopRiddles(
        riddles.slice(0, 50).map((riddle) => ({
          riddle,
          views: 0,
        })),
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              AIなぞなぞで遊ぼう｜ちょっとイラっとする問題たち
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 text-pretty">
            一見簡単。でも答えを見ると「は？」ってなる問題もあるかも。イラっとしながら楽しむ脳トレなぞなぞ集。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topRiddles.map(({ riddle }, index) => (
              <div key={riddle.id} className="space-y-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-bold text-foreground">{index + 1}位</span>
                </div>
                <RiddleCard riddle={riddle} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
