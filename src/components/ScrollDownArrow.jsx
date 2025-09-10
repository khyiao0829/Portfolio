import { motion } from "framer-motion";

export default function ScrollDownArrow() {
  return (
    <motion.div
      className="mt-20"
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
      title="下にスクロールして履歴書を見る"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white mx-auto"
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
