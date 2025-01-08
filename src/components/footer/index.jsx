import { FaGithub, FaLinkedin } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="mt-14 bg-purple-950 text-white h-40 flex flex-col items-center justify-center text-xl" id="contatos">
      <h2><span className="font-bold">CAIO</span> MIRANDA</h2>
      <strong>Desenvolvedor Full Stack</strong>

      <div className='flex justify-center gap-5 mt-5 sm:justify-start'>
        <a href="https://www.linkedin.com/in/caio-miranda-ofc/" target='_blank'>
          <FaLinkedin size={32} color='#fff' />
        </a>

        <a href='/' target='_blank'>
          <FaGithub size={32} color='#fff' />
        </a>
      </div>

    </footer>
  )
}