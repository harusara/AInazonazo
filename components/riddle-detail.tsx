"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Lightbulb, Eye, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Riddle } from "@/data/riddles"

interface RiddleDetailProps {
  riddle: Riddle
}

export function RiddleDetail({ riddle }: RiddleDetailProps) {
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [imageExtensionIndex, setImageExtensionIndex] = useState(0)

  const localImageExtensions = ["webp", "png", "jpg", "jpeg", "gif"]
  const isUsingLocalImage = imageExtensionIndex < localImageExtensions.length
  const imageSrc = isUsingLocalImage
    ? `/riddle-images/${riddle.id}.${localImageExtensions[imageExtensionIndex]}`
    : "/riddle-images/answer.png"

  useEffect(() => {
    try {
      const viewKey = `riddle_views_${riddle.id}`
      const currentViews = Number(localStorage.getItem(viewKey) || "0")
      localStorage.setItem(viewKey, String(currentViews + 1))
    } catch {
      // localStorage が使えない環境ではカウントしない
    }
  }, [riddle.id])

  useEffect(() => {
    if (showAnswer) {
      // 答え表示を開いたタイミングでローカル画像探索を最初からやり直す
      setImageExtensionIndex(0)
    }
  }, [riddle.id, showAnswer])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>一覧に戻る</span>
        </Link>

        <div className="bg-card rounded-3xl shadow-lg border border-border overflow-hidden">
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary p-8">
            <div className="absolute top-4 right-4">
              {riddle.category && (
                <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-card/80 backdrop-blur-sm text-card-foreground">
                  {riddle.category}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-card-foreground">なぞなぞ</h1>
            </div>
          </div>

          <div className="p-8">
            <p className="text-xl md:text-2xl font-medium text-card-foreground leading-relaxed text-balance mb-8">
              {riddle.question}
            </p>

            {riddle.hint && (
              <div className="mb-6">
                {!showHint ? (
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(true)}
                    className="rounded-full gap-2"
                  >
                    <Lightbulb className="w-4 h-4" />
                    ヒントを見る
                  </Button>
                ) : (
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-accent/20 border border-accent/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Lightbulb className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-accent-foreground">{riddle.hint}</p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-6 border-t border-border">
              {!showAnswer ? (
                <Button
                  size="lg"
                  onClick={() => setShowAnswer(true)}
                  className="w-full rounded-full gap-2 h-14 text-base font-medium bg-primary hover:bg-primary/90"
                >
                  <Eye className="w-5 h-5" />
                  答えを見る
                </Button>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-muted">
                    <Image
                      src={imageSrc}
                      alt={riddle.answer}
                      fill
                      className="object-cover"
                      onError={() => {
                        if (isUsingLocalImage) {
                          setImageExtensionIndex((prev) => prev + 1)
                        }
                      }}
                    />
                  </div>
                  
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <p className="text-sm text-muted-foreground mb-2">答え</p>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      {riddle.answer}
                    </p>
                    {riddle.message && (
                      <p className="mt-4 text-sm text-muted-foreground">{riddle.message}</p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowAnswer(false)
                        setShowHint(false)
                      }}
                      className="flex-1 rounded-full"
                    >
                      もう一度考える
                    </Button>
                    <Link href="/" className="flex-1">
                      <Button className="w-full rounded-full">
                        次のなぞなぞへ
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
