import { FaPython, FaJava} from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

function TechSkills() {
  return (
    <div className="flex space-x-6 text-4xl text-gray-700">
        <SiC title="C" />
        <SiCplusplus title="C++" />
        <FaPython title="Python" />
        <FaJava title="Java" />
    </div>
  );
}

export default TechSkills;
