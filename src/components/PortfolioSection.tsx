'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Ecommerce API",
      description: "A robust Ecommerce API built with FastAPI, Python, and PostgreSQL. Features include user authentication, product management, order processing, and comprehensive API documentation.",
      technologies: ["FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/Erishprajapati/EcommerceAPI",
      demo: "https://ecommerceapi-production-8d3a.up.railway.app/docs",
      image: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
      icon: "🛒"
    },
    {
      id: 2,
      title: "Library API",
      description: "A comprehensive Library Management API built with FastAPI and Python. Features include book management, user authentication, borrowing system, and RESTful API endpoints.",
      technologies: ["FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/Erishprajapati/LibraryAPI-Creatio",
      demo: "https://libraryapi-creatio-1.onrender.com/",
      image: "bg-gradient-to-br from-green-500 via-blue-500 to-purple-500",
      icon: "📚"
    },
    {
      id: 3,
      title: "Hospital Management System",
      description: "A fully functional Hospital Management System built with Django. Features include patient management, doctor appointments, shift management, admin dashboard, and comprehensive medical data handling.",
      technologies: ["Django", "Python", "PostgreSQL", "JavaScript"],
      github: "https://github.com/Erishprajapati/hospital-management-system1",
      demo: "https://hospital-management-system1-o63yod5j9-erishprajapatis-projects.vercel.app/api/v1/login_view",
      image: "bg-gradient-to-br from-red-500 via-pink-500 to-purple-500",
      icon: "🏥"
    }
  ]

  return (
    <section className="min-h-screen py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-indigo-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative perspective-1000"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div 
                className="rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-y-6 border border-slate-700/50 relative bg-slate-800/80 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Enhanced 3D Glow Effect */}
                <div className={`absolute inset-0 ${project.image} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Project Header */}
                <div className={`h-40 ${project.image} flex items-center justify-center relative overflow-hidden transform-gpu`}>
                  <motion.div 
                    className="text-6xl opacity-90"
                    animate={{ 
                      rotateY: hoveredProject === project.id ? 180 : 0,
                      scale: hoveredProject === project.id ? 1.2 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Enhanced Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white text-center">
                      <div className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">View Project</div>
                      <div className="text-sm opacity-80">Click to explore</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300 text-white"
                    animate={{ 
                      x: hoveredProject === project.id ? 5 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="mb-4 leading-relaxed text-sm text-gray-300">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium shadow-sm bg-purple-900/50 text-purple-300 border border-purple-700/50 backdrop-blur-sm"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  {project.github && (
                    <div className="flex gap-2">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-center shadow-lg bg-slate-700 text-white hover:bg-slate-600 transform hover:-translate-y-1"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                      {project.demo && (
                        <motion.a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center shadow-lg transform hover:-translate-y-1"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 