'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'

interface Testimonial {
  _id: string
  name: string
  category: 'parent' | 'student' | 'other'
  content: string
  image?: {
    asset: {
      url: string
    }
  }
  studentName?: string
  formation?: 'pass' | 'las' | 'other'
  year?: number
  isFeatured: boolean
  order: number
}

interface TestimonialsSectionProps {
  initialTestimonials?: Testimonial[]
}

export default function TestimonialsSection({ initialTestimonials = [] }: TestimonialsSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [loading, setLoading] = useState(false)
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<string>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  // Positions fixes pour éviter les problèmes d'hydration
  const fixedPositions = [
    { x: 100, y: 150, scale: 0.8, duration: 4, delay: 0 },
    { x: 300, y: 250, scale: 1.2, duration: 5, delay: 0.5 },
    { x: 500, y: 100, scale: 0.6, duration: 3.5, delay: 1 },
    { x: 750, y: 200, scale: 1.0, duration: 4.5, delay: 1.5 },
    { x: 950, y: 300, scale: 0.9, duration: 3.8, delay: 0.3 },
    { x: 200, y: 400, scale: 1.1, duration: 4.2, delay: 0.8 },
    { x: 650, y: 450, scale: 0.7, duration: 3.3, delay: 1.2 },
    { x: 850, y: 50, scale: 1.3, duration: 5.5, delay: 0.2 }
  ]
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 })
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    setIsClient(true)
  }, [])


  // Gestion des dimensions de la fenêtre et items par page
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowDimensions({
        width,
        height: window.innerHeight
      })
      
      // Définir le nombre d'items par page selon la taille d'écran
      if (width < 640) { // mobile
        setItemsPerPage(1)
      } else if (width < 1024) { // tablet
        setItemsPerPage(2)
      } else { // desktop
        setItemsPerPage(3)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Auto-play carrousel (6 secondes) - Mode infini sans saut
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= itemsPerPage) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
        return (prev + 1) % (maxIndex + 1)
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length, isAutoPlaying, itemsPerPage])

  const toggleTestimonial = (testimonialId: string) => {
    setExpandedTestimonials(prev => {
      const newSet = new Set(prev)
      if (newSet.has(testimonialId)) {
        newSet.delete(testimonialId)
      } else {
        newSet.add(testimonialId)
      }
      return newSet
    })
  }

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text
    
    // Trouver le dernier espace avant la limite pour éviter de couper un mot
    const truncatedIndex = text.lastIndexOf(' ', maxLength)
    const finalIndex = truncatedIndex > 0 ? truncatedIndex : maxLength
    
    return text.substring(0, finalIndex).trim() + '...'
  }

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
      return prev === 0 ? maxIndex : prev - 1
    })
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => {
      const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
      return (prev + 1) % (maxIndex + 1)
    })
    setTimeout(() => setIsAutoPlaying(true), 6000)
  }

  if (loading) {
    return (
      <section className="py-20 section-bg-light relative overflow-hidden">
        <div className="section-container">
          <div className="text-center relative z-10">
            <div className="relative inline-block">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-prepa-blue border-r-prepa-blue/60 mx-auto"></div>
              <div className="absolute inset-2 animate-pulse rounded-full border-2 border-prepa-blue/20"></div>
            </div>
            <p className="mt-6 text-prepa-gray font-medium">Chargement des témoignages...</p>
          </div>
        </div>
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-prepa-blue/20 rounded-full"
              initial={{ 
                x: fixedPositions[i % fixedPositions.length].x, 
                y: fixedPositions[i % fixedPositions.length].y,
                scale: 0 
              }}
              animate={{ 
                y: [null, -100],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: fixedPositions[i % fixedPositions.length].duration,
                repeat: Infinity,
                delay: fixedPositions[i % fixedPositions.length].delay
              }}
            />
          ))}
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  const showNavigation = testimonials.length > itemsPerPage
  const displayTestimonials = showNavigation ? testimonials : testimonials.slice(0, itemsPerPage)

  return (
    <section className="py-20 section-bg-light relative overflow-hidden">
      {/* Arrière-plan magique avec particules et dégradés */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: fixedPositions[i % fixedPositions.length].x + 50, 
              y: fixedPositions[i % fixedPositions.length].y + 50,
            }}
            animate={{ 
              y: [null, -50, null],
              x: [null, (i % 2 === 0 ? 25 : -25), null],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: fixedPositions[i % fixedPositions.length].duration + 3,
              repeat: Infinity,
              delay: fixedPositions[i % fixedPositions.length].delay + 1,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-blue-300/40" />
          </motion.div>
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Header - comme avant */}
        <AnimatedSection direction="up">
          <div className="section-header">
            <p className="section-eyebrow">Nos témoignages</p>
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-subtitle">
              Découvrez les retours d'expérience de nos élèves et leurs parents. 
              Des témoignages authentiques qui reflètent notre engagement pour votre réussite.
            </p>
          </div>
        </AnimatedSection>

        {/* Carrousel de témoignages */}
        <div className="relative">
          {/* Navigation avec effet glassmorphism */}
          {showNavigation && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-2 lg:left-0 lg:-translate-x-8 top-1/2 -translate-y-1/2 z-20 backdrop-blur-xl bg-white/90 shadow-2xl rounded-2xl p-3 lg:p-5 transition-all duration-500 group border border-white/50 hover:shadow-blue-500/25 hover:shadow-2xl hover:scale-110 hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7 text-gray-600 group-hover:text-prepa-blue transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 lg:right-0 lg:translate-x-8 top-1/2 -translate-y-1/2 z-20 backdrop-blur-xl bg-white/90 shadow-2xl rounded-2xl p-3 lg:p-5 transition-all duration-500 group border border-white/50 hover:shadow-blue-500/25 hover:shadow-2xl hover:scale-110 hover:bg-white"
              >
                <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 text-gray-600 group-hover:text-prepa-blue transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </>
          )}

          {/* Container principal - TOUJOURS centré */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-7xl">
              {showNavigation ? (
                /* Mode carrousel */
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(${-currentIndex * (100 / itemsPerPage)}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={testimonial._id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4 lg:px-5">
                        <TestimonialCard 
                          testimonial={testimonial} 
                          index={index}
                          expandedTestimonials={expandedTestimonials}
                          toggleTestimonial={toggleTestimonial}
                          truncateText={truncateText}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Mode grid - Cards centrées */
                <div className="flex justify-center">
                  <div className={`grid gap-6 md:gap-10 ${
                    displayTestimonials.length === 1 ? 'grid-cols-1 max-w-lg' :
                    displayTestimonials.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl'
                  }`}>
                    {displayTestimonials.map((testimonial, index) => (
                      <TestimonialCard 
                        key={testimonial._id}
                        testimonial={testimonial} 
                        index={index}
                        expandedTestimonials={expandedTestimonials}
                        toggleTestimonial={toggleTestimonial}
                        truncateText={truncateText}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Indicateurs de pagination magiques */}
          {showNavigation && (
            <div className="flex justify-center mt-8 md:mt-16 gap-2 md:gap-4">
              {Array.from({ length: Math.max(1, testimonials.length - itemsPerPage + 1) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 6000)
                  }}
                  className={`relative h-2 md:h-3 rounded-full transition-all duration-500 overflow-hidden ${
                    i === currentIndex 
                      ? 'bg-gradient-to-r from-prepa-blue to-purple-500 w-8 md:w-12 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 w-2 md:w-3 hover:w-4 md:hover:w-6'
                  }`}
                >
                  {i === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Composant Card avec effet WOW
function TestimonialCard({ 
  testimonial, 
  index, 
  expandedTestimonials, 
  toggleTestimonial, 
  truncateText 
}: {
  testimonial: Testimonial
  index: number
  expandedTestimonials: Set<string>
  toggleTestimonial: (id: string) => void
  truncateText: (text: string, maxLength?: number) => string
}) {
  const isExpanded = expandedTestimonials.has(testimonial._id)
  const needsTruncation = testimonial.content.length > 200

  return (
    <AnimatedSection direction="up" delay={0.1 + index * 0.15}>
      <motion.div 
        className="group relative h-full"
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Effet de halo subtil */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Effet glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 rounded-3xl opacity-90 group-hover:opacity-100 transition-all duration-300"></div>
        
        {/* Card principale avec glassmorphism */}
        <div className="relative backdrop-blur-sm bg-white/80 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-9 border border-white/50 group-hover:border-blue-200/70 h-full flex flex-col">
          
          {/* Décoration lumineuse en haut */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icône décorative subtile */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-all duration-300">
            <Quote className="w-4 md:w-5 h-4 md:h-5 text-blue-400/60" />
          </div>
          

          {/* Contenu du témoignage */}
          <div className="flex-1 mb-6 md:mb-8">
            <div className="relative">
              {/* Guillemets magiques */}
              <div className="absolute -top-2 md:-top-3 -left-2 md:-left-3 text-4xl md:text-6xl text-blue-200/60 font-serif leading-none select-none pointer-events-none">"</div>
              
              <div 
                className="relative z-10 text-gray-800 leading-relaxed text-base md:text-lg font-medium pl-4 md:pl-6 pr-4 md:pr-6"
                style={{ 
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                <p className="italic">
                  {isExpanded ? testimonial.content : truncateText(testimonial.content)}
                </p>
              </div>
              
              <div className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-3 text-4xl md:text-6xl text-blue-200/60 font-serif leading-none rotate-180 select-none pointer-events-none">"</div>
            </div>
          </div>

          {/* Footer avec effets magiques */}
          <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent relative">
            
            {/* Bouton Lire plus avec effet néon */}
            <div>
              {needsTruncation && (
                <button
                  onClick={() => toggleTestimonial(testimonial._id)}
                  className="relative inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 text-prepa-blue hover:text-white font-semibold text-xs md:text-sm transition-all duration-500 group/btn rounded-xl overflow-hidden hover:scale-105"
                >
                  {/* Fond animé */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-20 blur-xl transition-all duration-500"></div>
                  
                  <span className="relative z-10">
                    {isExpanded ? 'Voir moins' : 'Lire plus'}
                  </span>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
                  </div>
                </button>
              )}
            </div>
            
            {/* Nom avec effet de signature lumineuse */}
            <div className="text-right">
              <div className="relative group/name">
                <div className="text-prepa-blue font-bold text-sm md:text-lg italic relative group-hover/name:text-purple-600 transition-colors duration-500">
                  <span className="relative z-10">
                    — {testimonial.name}
                    {testimonial.category === 'parent' && (
                      <span className="text-xs md:text-sm font-normal text-prepa-gray ml-2">
                        (Parent d'élève)
                      </span>
                    )}
                    {testimonial.category === 'student' && (
                      <span className="text-xs md:text-sm font-normal text-prepa-gray ml-2">
                        (Élève)
                      </span>
                    )}
                  </span>
                  
                  {/* Effet de surbrillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-pink-500/10 rounded-lg transform scale-x-0 group-hover/name:scale-x-100 transition-transform duration-500 origin-right -mx-2 -my-1"></div>
                  
                  {/* Particules sur le nom */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover/name:opacity-100 transition-opacity duration-500">
                    <Star className="w-2 md:w-3 h-2 md:h-3 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}