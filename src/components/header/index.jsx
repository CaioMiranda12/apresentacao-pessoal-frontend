

export function Header() {

  return (
    <header className="w-full bg-black">
      <div className="max-w-screen-xl mx-auto h-20 p-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">

        <div className="flex mb-3 sm:m-0">
          <h1 className="text-2xl sm:text-3xl text-white">
            <span className="font-bold">CAIO </span>
            MIRANDA
          </h1>
        </div>

        <nav className='text-white text-sm flex gap-5 sm:text-lg'>
          <a href="/" className="hover:text-purple-500 duration-300 transition-all">Inicio</a>
          <a href="#sobre" className="hover:text-purple-500 duration-300 transition-all">Sobre</a>
          <a href="#tecnologias" className="hover:text-purple-500 duration-300 transition-all">Tecnologias</a>
          <a href="#projetos" className="hover:text-purple-500 duration-300 transition-all">Projetos</a>
          <a href="#contatos" className="hover:text-purple-500 duration-300 transition-all">Contatos</a>
        </nav>

      </div>
    </header>
  )
}