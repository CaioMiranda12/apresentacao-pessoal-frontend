import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


export function Technologies() {
  return (
    <section className="text-white" id="tecnologias">
      <div className="flex flex-col items-center">
        <h2 className=" font-bold text-2xl sm:text-3xl mt-8 mb-6 border-b-white border-b-2 pb-1">Tecnologias</h2>

        <div className="flex w-full flex-wrap">
          <FaReact color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <SiTypescript color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <SiNextdotjs color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <IoLogoJavascript color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <RiTailwindCssFill color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <FaHtml5 color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
          <FaCss3Alt color="#b039ff" className="flex-grow w-6 h-6 sm:w-16 sm:h-16" />
        </div>
      </div>
    </section>
  )
}