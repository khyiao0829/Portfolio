import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 100 }}   // 아래에서 시작
      animate={{ opacity: 1, y: 0 }}     // 위로 올라옴
      exit={{ opacity: 0, y: -100 }}     // 위로 사라짐
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
