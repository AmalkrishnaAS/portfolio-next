
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Title from '../components/Title'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className='bg-base-500 '>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>

    
      
      </div>

  )
}

export default Home
