import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-1/2'>
        <section>
          <div style={{marginTop: '40px'}}>
            <nav className='flex flex-row items-center justify-between'>
            <a style={{display: 'inline-block'}}> <span ><h1>Alejandro Heredia</h1></span></a>
              <div className='flex space-x-4'>
                <a>Linkedin</a>
                <a>Github</a>
                <a>Twitter</a>
                <a>Blog</a>
              </div>
            </nav>
          </div>
        </section>
        <section>
          <h1>Hello World, I'm Alejandro Heredia</h1>
          <div>Passionate about engineering, computers, open source software, data and economics. I've been coding for more than 10 years and have had experience working from junior software developer to tech manager. Currently finalizing my economics major @ Universidad EAFIT.</div>
          <div>Based in Medellín, Colombia 🇨🇴.</div>
        </section>
        <footer>
          <a>Source</a>
        </footer>
      </div>
    </main>
  )
}
