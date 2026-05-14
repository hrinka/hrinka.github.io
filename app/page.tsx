import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Works />
      <Marquee />
      <About />
      <Contact />
    </main>
  )
}
