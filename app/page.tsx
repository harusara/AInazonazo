import { Header } from "@/components/header"
import { RiddleList } from "@/components/riddle-list"
import { riddles } from "@/data/riddles"
import { Sparkles, Brain, Trophy } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>脳トレに最適</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              楽しいなぞなぞで
              <br />
              <span className="text-primary">頭の体操</span>をしよう
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              たくさんのなぞなぞを解いて脳を鍛えよう！ヒントも用意しているので、
              じっくり考えて答えを見つけてね。
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{riddles.length}</p>
                  <p className="text-sm text-muted-foreground">なぞなぞ</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">カテゴリ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                なぞなぞ一覧
              </h2>
              <span className="text-sm text-muted-foreground">
                全{riddles.length}問
              </span>
            </div>
            
            <RiddleList riddles={riddles} />
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            なぞなぞアプリ - 楽しく脳トレ
          </p>
        </div>
      </footer>
    </div>
  )
}
