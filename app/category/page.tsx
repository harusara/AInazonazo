import Link from "next/link"
import { Header } from "@/components/header"
import { riddles } from "@/data/riddles"

export default function CategoryPage() {
  const categoryMap = riddles.reduce<Record<string, number>>((acc, riddle) => {
    const category = riddle.category || "未分類"
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  const categories = Object.entries(categoryMap).sort(([a], [b]) => a.localeCompare(b, "ja"))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">カテゴリ一覧</h1>
            <span className="text-sm text-muted-foreground">全{categories.length}カテゴリ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(([category, count]) => (
              <Link key={category} href={`/category/${encodeURIComponent(category)}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/10 rounded-bl-full" />
                  <div className="relative">
                    <p className="text-lg font-bold text-card-foreground mb-2">{category}</p>
                    <p className="text-sm text-muted-foreground">{count}問</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
