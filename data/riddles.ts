export interface Riddle {
  id: string
  question: string
  answer: string
  hint?: string
  category?: string
}

export const riddles: Riddle[] = [
  {
    id: "1",
    question: "パンはパンでも食べられないパンはなーんだ？",
    answer: "フライパン",
    hint: "お料理に使うよ",
    category: "定番",
  },
  {
    id: "2",
    question: "かけても割れないものはなーんだ？",
    answer: "電話",
    hint: "おしゃべりするときに使うよ",
    category: "定番",
  },
  {
    id: "3",
    question: "上は大水、下は大火事、これなーんだ？",
    answer: "お風呂",
    hint: "毎日入るところだよ",
    category: "定番",
  },
  {
    id: "4",
    question: "逆立ちすると軽くなるものはなーんだ？",
    answer: "イルカ（逆さにすると「カルイ」）",
    hint: "海の生き物だよ",
    category: "言葉遊び",
  },
  {
    id: "5",
    question: "切っても切っても切れないものはなーんだ？",
    answer: "水",
    hint: "透明で飲めるよ",
    category: "定番",
  },
  {
    id: "6",
    question: "いつも怒っている虫はなーんだ？",
    answer: "テントウムシ（怒っている）",
    hint: "赤くて黒い点々があるよ",
    category: "言葉遊び",
  },
]
