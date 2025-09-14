import { motion } from "framer-motion";

export default function ScrollDownArrow() {
  const handleClick = () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;
    //const windowHeight = window.innerHeight;

    // 현재 스크롤 위치 + 약간의 오차(50px) 고려
    const currentPos = scrollY + 50;

    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;

      // 현재 위치보다 아래에 있는 첫 번째 섹션으로 이동
      if (sectionTop > currentPos) {
        sections[i].scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  return (
    <motion.div
      className="mt-20 cursor-pointer"
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: [0, 10, 0],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      title="次のセクションへ移動"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-black mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
