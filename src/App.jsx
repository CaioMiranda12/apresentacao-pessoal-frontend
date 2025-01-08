import { Container } from './components/container'

import CaioImg from './assets/me.jpg'

import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Technologies } from './components/technologies';

function App() {

  return (
    <>
      <main>
        <Container>

          <div className='mt-8 text-white flex flex-col items-center sm:flex-row sm:gap-4'>

            <div className='text-center sm:text-start'>
              <span className='text-xl text-gray-400'>Olá! Me chamo <strong className='text-blue-500'>Caio Miranda</strong></span>
              <h2 className='my-3 text-3xl font-bold'>Desenvolvedor Full Stack</h2>
              <p className='text-gray-200'>
                Focado em React, com experiência desde 2022 em projetos como e-commerces, gestores financeiros e blogs, utilizando no front end principalmente tecnologias como React, TypeScript, Next.js, JavaScript, Tailwind, HTML, CSS e Git.
              </p>

              <div className='flex justify-center gap-5 mt-5 sm:justify-start'>
                <a href="https://www.linkedin.com/in/caio-miranda-ofc/" target='_blank'>
                  <FaLinkedin size={32} color='#fff' />
                </a>

                <a href='/' target='_blank'>
                  <RiInstagramFill size={32} color='#fff' />
                </a>
              </div>
            </div>

            <div className='mt-5 sm:mt-0 w-9/12 mx-auto'>
              <img src={CaioImg} alt='imagem de Caio Miranda' className='rounded-lg' />
            </div>

          </div>




          <Technologies />

        </Container>
      </main>
    </>
  );
}

export default App

