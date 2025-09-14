import { 
  SiOpenai, SiMongodb, SiExpress, SiFirebase, SiJavascript, 
  SiPython, SiPytorch, SiStreamlit, SiOpencv, SiVercel 
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
    github: "https://github.com/khyiao0829/Newnihon",
    pdf: "/nhk-learning.pdf",
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "アルバイトのシフトを調整する簡単なウェブアプリです。Firebase認証を含みます。",
    tags: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    github: "https://github.com/khyiao0829/shift-management-app",
  },
  {
    id: "3",
    title: "個人ポートフォリオサイト",
    description: "Reactで作成したポートフォリオサイトで、Vercelを使用して実際にユーザーがアクセス可能です。",
    tags: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
    ],
    github: "https://github.com/khyiao0829/portfolio",
    demo: "https://portfolio-puce-ten-wevoujoub3.vercel.app",
  },
  {
    id: "4",
    title: "Shibuya Crowd Analytics",
    description: "YOLOv8とStreamlitを活用したリアルタイム群衆カウントプロジェクト。",
    tags: [
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "YOLOv8", icon: <SiPytorch className="text-red-500" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-pink-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-indigo-500" /> },
    ],
    github: "https://github.com/khyiao0829/Shibuya-Crowd-Analytics",
    demoImage: "/shibuya_demo.png",
  },
];

export default projectData;
