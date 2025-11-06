import React from 'react'
import { Button } from './ui/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { APP_NAME, APP_TAGLINE, BACKGROUND_IMAGES } from '@/constants'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section 
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(140, 110, 74, 0.7), rgba(106, 124, 85, 0.8)), url(${BACKGROUND_IMAGES.HERO})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGES.PATTERN})`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold font-cairo mb-4 leading-tight">
            {APP_NAME}
          </h1>
          <p className="text-xl md:text-2xl font-almarai text-[#C8A97E] mb-2">
            {APP_TAGLINE}
          </p>
          <p className="text-lg md:text-xl font-almarai opacity-90 max-w-2xl mx-auto">
            اكتشف جمال الحرف اليدوية التقليدية العربية واحصل على منتجات أصلية من أفضل الحرفيين
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-[#C8A97E] hover:bg-[#B8956B] text-white border-none px-8 py-4 text-lg"
            asChild
          >
            <a href="/products">
              <span>تسوق الآن</span>
              <ArrowLeft className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="group border-2 border-white text-white hover:bg-white hover:text-[#6A7C55] px-8 py-4 text-lg"
            asChild
          >
            <a href="/artisans">
              <span>تعرف على الحرفيين</span>
              <ArrowRight className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#C8A97E]">850+</div>
            <div className="text-sm opacity-90 font-almarai">حرفي محترف</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#C8A97E]">12,000+</div>
            <div className="text-sm opacity-90 font-almarai">منتج أصلي</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#C8A97E]">25+</div>
            <div className="text-sm opacity-90 font-almarai">مدينة مصرية</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl md:text-3xl font-bold text-[#C8A97E]">5★</div>
            <div className="text-sm opacity-90 font-almarai">تقييم العملاء</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowLeft className="h-6 w-6 text-white opacity-50 rotate-90" />
        </div>
      </div>
    </section>
  )
}