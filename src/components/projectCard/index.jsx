import PropTypes from "prop-types"
import { FaArrowAltCircleRight } from "react-icons/fa";


export function ProjectCard({ imageSrc, description, projectLink }) {
  return (
    <a href={projectLink} target="_blank">
      <div className="p-3 rounded-lg border-purple-500 border-2 w-11/12 mx-auto">
        <img src={imageSrc} alt="imagem do projeto" className="w-full h-64 object-cover rounded-lg hover:scale-105 duration-300 transition-all" />

        <div className="flex justify-between px-1 mt-3">
          <p className="text-white w-10/12 truncate">{description}</p>
          <a href={projectLink} target="`_blank">
            <FaArrowAltCircleRight size={24} color="#a855f7" />
          </a>
        </div>
      </div>
    </a>
  )
}

ProjectCard.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string
}