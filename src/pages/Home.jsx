import React from 'react'
import WelcomeSection from '../components/home/WelcomeSection'
import News from '../components/home/News'
import Projects from '../components/home/Project'
import Channels from '../components/home/Channels'
import Hero from '../components/home/Hero'

function Home() {
  return (
    <div>
        <Hero />
        <section className="py-8 bg-white">
        <div className="container mx-auto">
          <blockquote className="text-center text-xl font-semibold italic text-gray-900">
            "Every journey begins with just one step. Let's take that first step
            toward your new home together."
          </blockquote>
        </div>
      </section>
      <WelcomeSection />
      <News />
      <Projects />
      <Channels />
    </div>
  )
}

export default Home