'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
const [isScrolled, setIsScrolled] = useState(false)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [isDarkMode, setIsDarkMode] = useState(false)

useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 50)
}

window.addEventListener('scroll', handleScroll)
return () => window.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
// Apply dark mode to document
if (isDarkMode) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}
}, [isDarkMode])

const navItems = [
{ name: 'Home', href: '#hero' },
{ name: 'Experience', href: '#scene' },
{ name: 'Projects', href: '#portfolio' },
{ name: 'Contact', href: '#contact' }
]

const scrollToSection = (href: string) => {
const element = document.querySelector(href)
if (element) {
element.scrollIntoView({ behavior: 'smooth' })
}
setIsMobileMenuOpen(false)
}

const toggleDarkMode = () => {
setIsDarkMode(!isDarkMode)
}

return (
<motion.nav
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cursor-grab active:cursor-grabbing ${
isScrolled 
    ? isDarkMode
        ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-purple-500/20'
        : 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-purple-200/20'
    : 'bg-transparent'
}`}
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
    {/* Logo */}
    <motion.div
    className="flex items-center space-x-2 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollToSection('#hero')}
    >
    <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg">IP</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50"></div>
    </div>
    <motion.span 
        className={`font-bold text-xl ${
        isScrolled 
            ? isDarkMode ? 'text-white' : 'text-slate-900'
            : 'text-white'
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
    >
        Portfolio
    </motion.span>
    </motion.div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-6">
    {navItems.map((item, index) => (
        <motion.button
        key={item.name}
        onClick={() => scrollToSection(item.href)}
        className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
            isScrolled 
            ? isDarkMode
                ? 'text-white/90 hover:text-purple-400'
                : 'text-slate-700 hover:text-purple-600'
            : 'text-white/90 hover:text-white'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        >
        <span className="relative z-10">{item.name}</span>
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100"
            initial={false}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        />
        </motion.button>
    ))}
    
    {/* Dark Mode Toggle */}
    <motion.button
        onClick={toggleDarkMode}
        className={`relative p-2 rounded-lg transition-all duration-300 ${
        isScrolled
            ? isDarkMode
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
        }`}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
    >
        {isDarkMode ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
        ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        )}
    </motion.button>
    
    {/* Download Resume Button */}
    <motion.button
        onClick={() => {
        const link = document.createElement('a')
        link.href = '/internship_cv.pdf'
        link.download = 'Irish_Prajapati_Resume.pdf'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        }}
        className={`relative px-6 py-2 rounded-xl font-semibold transition-all duration-300 overflow-hidden group ${
        isScrolled
            ? isDarkMode
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
    >
        <span className="relative z-10 flex items-center space-x-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Resume</span>
        </span>
        <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
        />
    </motion.button>
    </div>

    {/* Mobile Menu Button */}
    <motion.button
    className="md:hidden p-2 rounded-lg"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    whileTap={{ scale: 0.95 }}
    >
    <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
        <motion.span
        className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            isScrolled 
            ? isDarkMode ? 'bg-white' : 'bg-slate-900'
            : 'bg-white'
        }`}
        animate={{
            rotate: isMobileMenuOpen ? 45 : 0,
            y: isMobileMenuOpen ? 6 : 0
        }}
        />
        <motion.span
        className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            isScrolled 
            ? isDarkMode ? 'bg-white' : 'bg-slate-900'
            : 'bg-white'
        }`}
        animate={{
            opacity: isMobileMenuOpen ? 0 : 1
        }}
        />
        <motion.span
        className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
            isScrolled 
            ? isDarkMode ? 'bg-white' : 'bg-slate-900'
            : 'bg-white'
        }`}
        animate={{
            rotate: isMobileMenuOpen ? -45 : 0,
            y: isMobileMenuOpen ? -6 : 0
        }}
        />
    </div>
    </motion.button>
</div>

{/* Mobile Menu */}
<AnimatePresence>
    {isMobileMenuOpen && (
    <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div className={`py-4 space-y-2 border-t ${
            isScrolled 
            ? isDarkMode ? 'border-purple-500/20' : 'border-purple-200/20'
            : 'border-white/20'
        }`}>
        {navItems.map((item, index) => (
            <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                ? isDarkMode
                    ? 'text-white/90 hover:bg-slate-800 hover:text-purple-400'
                    : 'text-slate-700 hover:bg-purple-50 hover:text-purple-600'
                : 'text-white/90 hover:bg-white/10 hover:text-white'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            >
            {item.name}
            </motion.button>
        ))}
        
        {/* Mobile Dark Mode Toggle */}
        <motion.button
            onClick={toggleDarkMode}
            className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                isScrolled
                    ? isDarkMode
                        ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ x: 5 }}
        >
            <span>Dark Mode</span>
            {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            )}
        </motion.button>
        
        {/* Mobile Resume Button */}
        <motion.button
            onClick={() => {
            const link = document.createElement('a')
            link.href = '/internship_cv.pdf'
            link.download = 'Irish_Prajapati_Resume.pdf'
            link.target = '_blank'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            setIsMobileMenuOpen(false)
            }}
            className={`w-full mt-4 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            isScrolled
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume</span>
            </span>
        </motion.button>
        </div>
    </motion.div>
    )}
</AnimatePresence>
</div>
</motion.nav>
)
}