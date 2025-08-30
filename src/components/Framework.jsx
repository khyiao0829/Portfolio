import {FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiMongodb, SiFirebase } from "react-icons/si";

function Framework() {
  return (
    <div className="flex space-x-6 text-4xl text-gray-700">
        <FaReact title="React" />
        <FaNodeJs title="Node.js" />
        <SiMysql title="MySQL" />
        <SiMongodb title="MongoDB" />
        <SiFirebase title="Firebase" />
    </div>
  );
}

export default Framework;
