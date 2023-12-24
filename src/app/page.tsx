export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center p-4 tracking-wide font-roboto h-screen'>
      <div className='w-1/2 flex flex-col space-between h-screen'>
        <section>
          <div className="mt-10">
            <nav className='flex flex-row items-center justify-between'>
            <a className="inline-block"> <span ><h1 className="font-bold text-xl">Alejandro Heredia</h1></span></a>
              <div className='flex space-x-4 w-1/2 justify-between font-thin align-center'>
                <NavbarItem label='Linkedin' href=''/>
                <NavbarItem label='Github' href=''/>
                <NavbarItem label='Twitter' href=''/>
                <NavbarItem label='Blog' href=''/> 
              </div>
            </nav>
          </div>
        </section>
        <section className="w-4/5 mt-20 flex-grow">
          <h1 className="font-bold text-3xl">Hello World, I'm Alejandro Heredia</h1>
          <div className="text-justify w-10/12 mt-5 font-light">
            <span>
              Passionate about engineering, computers, open source software, data and economics. I've been coding for more than 10 years and have had experience working from junior software developer to tech manager. Currently finalizing my economics major @ Universidad EAFIT. <br/>
            </span>
            <span className="inline-block mt-3">Based in Medellín, Colombia 🇨🇴.</span>
          </div>
          <button className="w-36 h-12 bg-[#8C8C8C] font-bold rounded mt-5">Contact Me</button>
        </section>
        <footer className="h-10">
          <a className="font-thin border-b border-gray-300 transition-[border-color] hover:border-[#8C8C8C]" target="_blank">Source</a>
        </footer>
      </div>
    </main>
  )
}

function NavbarItem({label, href}: {label: string, href: string}): JSX.Element{
  return <a className="border-b border-transparent hover:border-[#8C8C8C] transition-[border-color]" target="_blank" href={href}>{label}</a>
}
