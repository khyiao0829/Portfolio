import { SiReact, SiFirebase, SiMongodb, SiOpenai, SiExpress, SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const projects = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAIを利用した日本語ニュースコンテンツで学習できる教育用アプリです。",
    tags: [
      { name: "OpenAI API", icon: <SiOpenai className="text-purple-600" />},
      { name: "React Native", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
      { name: "NodeJS", icon: <FaNodeJs size={24} color="#339933" /> },
      { name: "ExpressJS",icon: <SiExpress className="text-gray-700" />},
      { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
    ],
    detail: "NHKの日本語ニュースを基に、GPTの応答を受けてユーザーに合わせた学習を提供するアプリです。MongoDBデータベースとチャットUIを含みます。"
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "アルバイトのシフトを調整する簡単なウェブアプリです。Firebase認証を含みます。",
    tags: [
      { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
      { name: "Firebase", icon: <SiFirebase size={24} color="#FFCA28" /> },
    ],
    detail: "チームメンバーのシフトスケジュールを調整できる簡単なカレンダー基盤のアプリです。リアルタイム反映と権限管理機能を実装しました。"
  },
  {
    id: "3",
    title: "個人ポートフォリオサイト",
    description: "Reactを使用したポートフォリオサイトで、実際にユーザーがアクセス可能です。",
    tags: [
      { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
    ],
    detail: "自分のプロジェクト、技術スタック、配布済みアプリを一目で確認可能。GitHubおよびVercelの配布リンクを提供し、実務能力とコード確認が可能です。SPA構造とコンポーネント単位の設計経験も強調しています。",
  },
]

export default projects;
