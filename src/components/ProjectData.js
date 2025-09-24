import { 
  SiOpenai, SiMongodb, SiExpress, SiFirebase, SiJavascript, 
  SiPython, SiPytorch, SiStreamlit, SiOpencv, SiVercel, SiMysql
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const projectData = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAIを利用した日本語ニュースコンテンツで学習できる教育用アプリです。",
    tags: [
      { name: "OpenAI API", icon: <SiOpenai className="text-purple-600" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-500" /> },
      { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
      { name: "ExpressJS", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    ],
    image: "/Newnihon.png", 
    github: "https://github.com/khyiao0829/Newnihon",
    pdf: "/nhk-learning.pdf",
  },
  {
    id: "2",
    title: "個人ポートフォリオサイト",
    description: "Reactで作成したポートフォリオサイトで、Vercelを使用して実際にユーザーがアクセス可能です。",
    tags: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
    ],
    image: "/Portfolio.png", 
    github: "https://github.com/khyiao0829/portfolio",
    demo: "https://portfolio-puce-ten-wevoujoub3.vercel.app",
  },
  {
    id: "3",
    title: "Shibuya Crowd Analytics",
    description: "YOLOv8とStreamlitを活用したリアルタイム群衆カウントプロジェクト。",
    tags: [
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "YOLOv8", icon: <SiPytorch className="text-red-500" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-pink-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-indigo-500" /> },
    ],
    image: "/shibuya_demo.png", 
    github: "https://github.com/khyiao0829/Shibuya-Crowd-Analytics",
    demoImage: "/shibuya_demo.png",
  },
  {
    id: "4",
    title: "がんばれ！JLPT -制作中-",
    description: "当初はOpenAI APIを活用し、日本語文章を自動で校正するアプリとして開発を開始しました。しかし、ユーザー層を調査した結果、JLPT試験対策を目的とする学習者が多いことが判明しました。その結果、需要に対応するためにJLPT学習用アプリへと方向性を変更し、現在はJLPTレベル別の単語帳機能を新たに実装いたしました。今後は過去問題機能や多様な学習機能の追加を予定しております。",
    tags: [
      { name: "OpenAI API", icon: <SiOpenai className="text-purple-600" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
    image: "/Jlpt.png", 
    github: "https://github.com/khyiao0829/Check_JP",
  },
  {
    id: "5",
    title: "バイトシフト調整Web/App -制作中-",
    description: "アルバイトのシフトを調整する簡単なウェブアプリです。Firebase認証を含みます。",
    tags: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    image: "/ours_shift.png", 
    github: "https://github.com/khyiao0829/shift-management-app",
  },
];

export default projectData;
