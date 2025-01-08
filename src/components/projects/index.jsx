import { ProjectCard } from '../projectCard'
import BrabosBurger from '../../assets/brabosburger.png'
import DiariosImg from '../../assets/diario-de-treinos.jfif'
import SpaceGames from '../../assets/spacegames.png'
import DevMotors from '../../assets/devmotors.png'

export function Projects() {
  return (
    <section className="w-full px-8" id='projetos'>
      <div className="flex flex-col items-center">

        <h2 className=" font-bold text-white text-2xl sm:text-3xl mt-10 mb-6 border-b-white border-b-2 pb-1">Projetos</h2>

        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ProjectCard imageSrc={DiariosImg} description={'Blog de diário de treinos'} />
          <ProjectCard imageSrc={BrabosBurger} description={'Sistema de restaurante completo'} />
          <ProjectCard imageSrc={SpaceGames} description={'Página de jogos completa'} />
          <ProjectCard imageSrc={DevMotors} description={'Sistema de automóveis com CRM completo'} />
        </div>

      </div>
    </section>
  )
}