'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Heart,
  User,
  ShoppingCart,
  Search,
  Menu,
  ChevronDown,
  Video,
  Globe,
  Moon,
  Sun
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  locale?: string
}

const Header = ({ locale = 'ar' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems] = useState(3) // Mock cart items
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: locale === 'ar' ? 'المنتجات' : 'Products',
      href: `/${locale}/products`,
      hasLiveBadge: false
    },
    {
      name: locale === 'ar' ? 'الحرفيين' : 'Artisans',
      href: `/${locale}/artisans`,
      hasLiveBadge: false
    },
    {
      name: locale === 'ar' ? 'ورّي الحرفة' : 'Craft Live',
      href: `/${locale}/live`,
      hasLiveBadge: true
    },
    {
      name: locale === 'ar' ? 'المحتوى' : 'Content',
      href: `/${locale}/content`,
      hasLiveBadge: false
    },
    {
      name: locale === 'ar' ? 'من نحن' : 'About',
      href: `/${locale}/about`,
      hasLiveBadge: false
    }
  ]

  const isActiveLink = (href: string) => {
    return pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-soft' 
          : 'bg-white border-b border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-heading font-bold text-primary-800"
            >
              حِرَفْنا
            </motion.div>
            <span className="mr-3 text-sm text-neutral-600 hidden sm:block font-body">
              {locale === 'ar' ? 'تراثنا هويتك' : 'Our Heritage, Your Identity'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-sharp text-sm font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? 'text-neutral-800'
                    : 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                <span className="flex items-center">
                  {item.name}
                  {item.hasLiveBadge && (
                    <div className="live-indicator mr-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  )}
                </span>
                {isActiveLink(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder={
                  locale === 'ar' 
                    ? 'ابحث عن المنتجات أو الحرفيين...'
                    : 'Search products or artisans...'
                }
                className="w-full pl-4 pr-12 py-3 border border-neutral-300 rounded-sharp focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 focus:outline-none transition-all duration-250"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Switcher */}
            <div className="relative group">
              <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200">
                <Globe className="w-5 h-5" />
              </button>
              <div className="absolute left-0 mt-2 w-32 bg-white border border-neutral-200 rounded-soft shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/en" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                  English
                </Link>
                <Link href="/ar" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
                  العربية
                </Link>
              </div>
            </div>

            {/* Wishlist */}
            <button className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200">
              <Heart className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link 
              href={`/${locale}/cart`} 
              className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary-400 text-white text-xs rounded-full flex items-center justify-center font-medium"
                >
                  {cartItems}
                </motion.span>
              )}
            </Link>

            {/* User Account */}
            <Link 
              href={`/${locale}/login`} 
              className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200"
            >
              <User className="w-5 h-5 mr-2" />
              {locale === 'ar' ? 'تسجيل الدخول' : 'Login'}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-sharp transition-all duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder={
                locale === 'ar' 
                  ? 'ابحث عن المنتجات أو الحرفيين...'
                  : 'Search products or artisans...'
              }
              className="w-full pl-4 pr-12 py-3 border border-neutral-300 rounded-sharp focus:border-primary-400 focus:ring-2 focus:ring-primary-400 focus:ring-opacity-20 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-neutral-200 bg-white"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-sharp transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? 'bg-primary-50 text-primary-800 border-r-2 border-primary-400'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.hasLiveBadge && (
                      <div className="live-indicator mr-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    )}
                  </span>
                </Link>
              ))}
              <hr className="my-4 border-neutral-200" />
              <Link
                href={`/${locale}/login`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-sharp transition-all duration-200"
              >
                <User className="w-5 h-5 mr-3" />
                {locale === 'ar' ? 'تسجيل الدخول' : 'Login'}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header