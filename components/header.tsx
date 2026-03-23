"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Header() {
  const showPreparingPopup = () => {
    window.alert("準備中")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            なぞなぞアプリ
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ホーム
          </Link>
          <button
            type="button"
            onClick={showPreparingPopup}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            カテゴリ
          </button>
          <button
            type="button"
            onClick={showPreparingPopup}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ランキング
          </button>
        </nav>
      </div>
    </header>
  )
}
