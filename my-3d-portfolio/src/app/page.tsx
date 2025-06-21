'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Scene from '@/components/Scene'
import PortfolioSection from '@/components/PortfolioSection'

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const handleResumeDownload = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a')
    link.href = '/internship_cv.pdf'
    link.download = 'Irish_Prajapati_Resume.pdf'
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Original 3D Scene Section */}
      <section id="scene" className="min-h-screen">
        <Scene />
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center space-y-8 px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:irishmjn@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                irishmjn@gmail.com
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.linkedin.com/in/eris-prajapati-a744ba259/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Erishprajapati"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="pt-4">
            <button 
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mx-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
