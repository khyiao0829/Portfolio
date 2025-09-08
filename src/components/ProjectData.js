import { SiPython, SiReact, SiFirebase, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const projects = [
  {
    id: "1",
    title: "生成型AIを活用したNHK学習アプリ",
    description: "OpenAI 기반 일본어 뉴스 콘텐츠로 학습할 수 있는 교육용 앱입니다。",
    tags: [
      { name: "React Native", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "NodeJS", icon: <FaNodeJs size={24} color="#339933" /> },
      { name: "MongoDB", icon: <SiMongodb size={24} color="#47A248" /> },
    ],
    detail: "일본어 뉴스(NHK)를 기반으로 GPT 응답을 받아 사용자 맞춤 학습을 제공하는 앱입니다. MongoDB 데이터베이스와 챗 UI 포함."
  },
  {
    id: "2",
    title: "バイトシフト調整Web/アプリサイト",
    description: "알바 스케줄 조정을 위한 간단한 웹앱입니다。Firebase 인증 포함。",
    tags: [
      { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
      { name: "Firebase", icon: <SiFirebase size={24} color="#FFCA28" /> },
    ],
    detail: "팀원들의 시프트 일정을 조정할 수 있는 간단한 캘린더 기반 앱입니다. 실시간 반영 및 권한 관리 기능 구현."
  },
  {
    id: "3",
    title: "繊維会社のサイト制作中",
    description: "섬유 기업을 위한 홈페이지 제작 프로젝트 진행 중입니다。",
    tags: [
      { name: "HTML", icon: <SiHtml5 size={24} color="#E34F26" /> },
      { name: "CSS", icon: <SiCss3 size={24} color="#1572B6" /> },
      { name: "React", icon: <SiReact size={24} color="#61DAFB" /> },
    ],
    detail: "기업의 브랜드 컬러에 맞춘 반응형 웹사이트. 소개, 제품 리스트, 문의 폼 페이지 구현 중."
  },
];

export default projects;
