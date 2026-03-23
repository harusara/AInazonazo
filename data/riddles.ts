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
    hint: "キャンセルしないでね",
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
  {
    id: "7",
    question: "いつもは黒いのに、使うと赤くなるものってなに？",
    answer: "炭",
    hint: "火を使うよ",
    category: "定番",
  },
  {
    id: "8",
    question: "逆さにすると軽くなる食べ物ってなに？",
    answer: "パン（逆さにすると「ンパ」→軽い音のイメージ）",
    hint: "カタカナで考えてみよう",
    category: "言葉遊び",
  },
  {
    id: "9",
    question: "切っても切ってもなくならないものってなに？",
    answer: "空気",
    hint: "目には見えないよ",
    category: "定番",
  },
  {
    id: "10",
    question: "飲むと怒られる飲み物ってなに？",
    answer: "コーラ（授業中に飲むと怒られる）",
    hint: "学校でよく言われる",
    category: "ひっかけ",
  },
  {
    id: "11",
    question: "いつも走っているのに疲れないものってなに？",
    answer: "時計",
    hint: "時間に関係ある",
    category: "定番",
  },
  {
    id: "12",
    question: "叩くと増えるものってなに？",
    answer: "音",
    hint: "拍手する時を想像して",
    category: "定番",
  },
  {
    id: "13",
    question: "上に行けば行くほど低くなるものってなに？",
    answer: "気温",
    hint: "階段じゃないよ",
    category: "ひっかけ",
  },
  {
    id: "14",
    question: "口はあるのに食べられないものってなに？",
    answer: "コップ",
    hint: "毎日使うもの",
    category: "定番",
  },
  {
    id: "15",
    question: "入るときは1人、出るときは2人になる場所ってどこ？",
    answer: "結婚式場",
    hint: "ちょっとロマンある",
    category: "ひっかけ",
  },
  {
    id: "16",
    question: "押しても引いても開かないのに、入れるものってなに？",
    answer: "パスワード",
    hint: "スマホでも使う",
    category: "ひっかけ",
  },
]
