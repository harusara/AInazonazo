import { notFound } from "next/navigation"
import { riddles } from "@/data/riddles"
import { RiddleDetail } from "@/components/riddle-detail"
import type { Metadata } from "next"

interface RiddlePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: RiddlePageProps): Promise<Metadata> {
  const { id } = await params
  const riddle = riddles.find((r) => r.id === id)

  if (!riddle) {
    return {
      title: "なぞなぞが見つかりません",
    }
  }

  return {
    title: `${riddle.question.slice(0, 30)}... | なぞなぞアプリ`,
    description: `このなぞなぞの答えは？ヒント：${riddle.hint || "考えてみよう！"}`,
  }
}

export function generateStaticParams() {
  return riddles.map((riddle) => ({
    id: riddle.id,
  }))
}

export default async function RiddlePage({ params }: RiddlePageProps) {
  const { id } = await params
  const riddle = riddles.find((r) => r.id === id)

  if (!riddle) {
    notFound()
  }

  return <RiddleDetail riddle={riddle} />
}
