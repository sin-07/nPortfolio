import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Page() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 min-h-screen">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
