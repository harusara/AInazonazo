import { Header } from "@/components/header"
import { RiddleList } from "@/components/riddle-list"
import { riddles } from "@/data/riddles"

interface CategoryDetailPageProps {
  params: Promise<{ category: string }>
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const filteredRiddles = riddles.filter((riddle) => (riddle.category || "未分類") === decodedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{decodedCategory}</h1>
            <span className="text-sm text-muted-foreground">全{filteredRiddles.length}問</span>
          </div>

          {filteredRiddles.length === 0 ? (
            <div className="rounded-2xl bg-card p-8 shadow-sm border border-border text-center text-muted-foreground">
              問題がありません
            </div>
          ) : (
            <RiddleList riddles={filteredRiddles} />
          )}
        </div>
      </main>
    </div>
  )
}
