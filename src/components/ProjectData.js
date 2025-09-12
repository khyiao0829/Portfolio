import { 
  SiReact, SiFirebase, SiMongodb, SiOpenai, SiExpress, 
  SiJavascript, SiVercel, SiPython, SiPytorch, SiStreamlit, SiOpencv  
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const projects = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAIを利用した日本語ニュースコンテンツで学習できる教育用アプリです。",
    tags: [
      { name: "OpenAI API", icon: <SiOpenai size={24} className="text-purple-600" /> },
      { name: "React Native", icon: <SiReact size={24} className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
      { name: "NodeJS", icon: <FaNodeJs size={24} className="text-green-600" /> },
      { name: "ExpressJS", icon: <SiExpress size={24} className="text-gray-600" /> },
      { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" /> },
    ],
    detail: "NHKの日本語ニュースを基に、GPTの応答を受けてユーザーに合わせた学習を提供するアプリです。MongoDBデータベースとチャットUIを含みます。"
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "アルバイトのシフトを調整する簡単なウェブアプリです。Firebase認証を含みます。",
    tags: [
      { name: "React", icon: <SiReact size={24} className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
      { name: "Firebase", icon: <SiFirebase size={24} className="text-yellow-500" /> },
    ],
    detail: "チームメンバーのシフトスケジュールを調整できる簡単なカレンダー基盤のアプリです。リアルタイム反映と権限管理機能を実装しました。"
  },
  {
    id: "3",
    title: "個人ポートフォリオサイト",
    description: "Reactを使用したポートフォリオサイトで、実際にユーザーがアクセス可能です。",
    tags: [
      { name: "React", icon: <SiReact size={24} className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
      { name: "Vercel", icon: <SiVercel size={24} className="text-black" /> },
    ],
    detail: "自分のプロジェクト、技術スタック、配布済みアプリを一目で確認可能。GitHubおよびVercelの配布リンクを提供し、実務能力とコード確認が可能です。SPA構造とコンポーネント単位の設計経験も強調しています。",
  },
  {
    id: "4",
    title: "Shibuya Crowd Analytics",
    description: "YOLOv8とStreamlitを活用したリアルタイム群衆カウントプロジェクト。",
    tags: [
      { name: "Python", icon: <SiPython size={24} className="text-blue-600" /> },
      { name: "YOLOv8", icon: <SiPytorch size={24} className="text-red-500" /> },
      { name: "Streamlit", icon: <SiStreamlit size={24} className="text-red-400" /> },
      { name: "OpenCV", icon: <SiOpencv size={24} className="text-indigo-500" /> },
    ],
    detail: "渋谷スクランブル交差点のライブカメラを対象にしたリアルタイム群衆解析プロジェクトです。単純なYOLO検出から始め、遠方の人物が検出されない・夜間で精度が落ちるといった課題を確認しました。そこで入力解像度の調整、Tiling手法、Global NMS、EMAスムージング、CLAHE前処理といった段階的な改善を行い、昼夜どちらの環境でも人数カウントの精度を大幅に向上させました。最終的にはStreamlitダッシュボードで可視化し、ポートフォリオ用にまとめています。",
  },
]

export default projects;
