import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedPizzas from '@/components/FeaturedPizzas'
import Menu from '@/components/Menu'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedPizzas />
        <About />
        <Menu />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
