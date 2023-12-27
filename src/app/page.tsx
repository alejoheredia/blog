export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center p-6 tracking-wide font-roboto h-screen m-auto'>
      <div className='max-w-2xl flex flex-col space-between h-screen '>
        <section>
          <div className="mt-10">
            <nav className='flex flex-row items-center justify-between'>
            <a className="inline-block"> <span ><h1 className="font-bold md:text-xl text-lg">Alejandro Heredia</h1></span></a>
              <div className='flex sm:w-2/5 justify-between font-thin align-center sm:text-base gap-3'>
                <NavbarItem label='Linkedin' href='https://linkedin.com/in/alejoheredia/'/>
                <NavbarItem label='Github' href='https://github.com/alejoheredia'/>
                <NavbarItem label='Blog' href=''/> 
              </div>
            </nav>
          </div>
        </section>
        <section className="w-7/8 md:w-4/5 mt-28 flex-grow">
          <h1 className="font-bold md:text-3xl text-2xl">Hello World, I'm Alejandro Heredia</h1>
          <div className="text-justify w-10/12 mt-5 font-light">
            <span>
              Passionate about engineering, computers, open source software, data and economics. I've been coding for more than 10 years and have had experience working in roles from junior software developer to tech manager. Currently finalizing my economics major @ Universidad EAFIT. <br/>
            </span>
            <span className="inline-block mt-3">Based in Medellín, Colombia 🇨🇴.</span>
          </div>
        
          <a className="inline-block px-8 py-3 bg-[#8C8C8C] font-bold rounded mt-5 text-center hover:bg-[#706F6F]" href="https://twitter.com/messages/compose?recipient_id=531661272" target="_blank">Contact Me</a>
         
        </section>
        <footer className="h-10">
          <a className="font-thin border-b border-gray-300 transition-[border-color] hover:border-[#8C8C8C] md:text-base text-sm" target="_blank" href="https://github.com/alejoheredia/blog">Source</a>
          <a className="font-thin border-b border-gray-300 transition-[border-color] hover:border-[#8C8C8C] md:text-base text-sm float-right" target="_blank" href="https://twitter.com/alejoherediab">@alejoheredia</a>
        </footer>
      </div>
    </main>
  )
}

function NavbarItem({label, href}: {label: string, href: string}): JSX.Element{
  return <a className="border-b border-transparent hover:border-[#8C8C8C] transition-[border-color]" target="_blank" href={href}>{label}</a>
}
