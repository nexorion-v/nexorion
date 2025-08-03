'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  Target,
  DollarSign,
  Zap,
  UserPlus,
  Share2,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const rotatingWords = [
    'App Growth',
    'Revenue Boosting',
    'Programmatic Advertising',
    'Lead Generation',
    'Influencer Marketing',
    'Social Media Success'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openForm = (type: string) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Growth',
      description: 'User acquisition strategies, ASO optimization, and retention campaigns to scale your mobile app.',
      gradient: 'from-yellow-400 via-orange-400 to-red-400'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Revenue Boosting',
      description: 'Monetization strategies, conversion optimization, and revenue analytics to maximize your profits.',
      gradient: 'from-amber-400 via-yellow-400 to-orange-400'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Programmatic Advertising',
      description: 'Real-time bidding, audience targeting, and campaign optimization for maximum ROI.',
      gradient: 'from-orange-400 via-amber-400 to-yellow-400'
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Lead Generation',
      description: 'Quality lead acquisition, nurturing campaigns, and CRM integration for business growth.',
      gradient: 'from-yellow-500 via-amber-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Influencer Marketing',
      description: 'Influencer partnerships, campaign management, and performance tracking for brand awareness.',
      gradient: 'from-amber-500 via-yellow-500 to-orange-500'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Success',
      description: 'Content strategy, community management, and social analytics for digital presence.',
      gradient: 'from-orange-500 via-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 text-gray-900 overflow-x-hidden relative">
      {/* Aesthetic Moving Dots Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dotGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="dotGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="dotGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          
          {/* Moving Dots with Connections */}
          <g>
            {/* Dot 1 */}
            <circle r="4" fill="url(#dotGradient1)" opacity="0.8">
              <animateMotion dur="20s" repeatCount="indefinite">
                <path d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,100 T900,100 Q1000,50 1100,100 T1300,100 Q1200,150 1100,200 T900,200 Q800,250 700,200 T500,200 Q400,150 300,200 T100,200 Q50,150 100,100" />
              </animateMotion>
            </circle>
            
            {/* Dot 2 */}
            <circle r="3" fill="url(#dotGradient2)" opacity="0.7">
              <animateMotion dur="25s" repeatCount="indefinite">
                <path d="M200,150 Q300,100 400,150 T600,150 Q700,200 800,150 T1000,150 Q1100,100 1200,150 T1400,150 Q1300,200 1200,250 T1000,250 Q900,300 800,250 T600,250 Q500,200 400,250 T200,250 Q150,200 200,150" />
              </animateMotion>
            </circle>
            
            {/* Dot 3 */}
            <circle r="2.5" fill="url(#dotGradient3)" opacity="0.6">
              <animateMotion dur="30s" repeatCount="indefinite">
                <path d="M150,200 Q250,150 350,200 T550,200 Q650,250 750,200 T950,200 Q1050,150 1150,200 T1350,200 Q1250,250 1150,300 T950,300 Q850,350 750,300 T550,300 Q450,250 350,300 T150,300 Q100,250 150,200" />
              </animateMotion>
            </circle>
            
            {/* Dot 4 */}
            <circle r="3.5" fill="url(#dotGradient1)" opacity="0.5">
              <animateMotion dur="18s" repeatCount="indefinite">
                <path d="M300,80 Q400,30 500,80 T700,80 Q800,130 900,80 T1100,80 Q1200,30 1300,80 T1500,80 Q1400,130 1300,180 T1100,180 Q1000,230 900,180 T700,180 Q600,130 500,180 T300,180 Q250,130 300,80" />
              </animateMotion>
            </circle>
            
            {/* Dot 5 */}
            <circle r="2" fill="url(#dotGradient2)" opacity="0.4">
              <animateMotion dur="35s" repeatCount="indefinite">
                <path d="M80,300 Q180,250 280,300 T480,300 Q580,350 680,300 T880,300 Q980,250 1080,300 T1280,300 Q1180,350 1080,400 T880,400 Q780,450 680,400 T480,400 Q380,350 280,400 T80,400 Q30,350 80,300" />
              </animateMotion>
            </circle>
            
            {/* Connection Lines */}
            <g stroke="url(#dotGradient1)" strokeWidth="0.5" fill="none" opacity="0.3">
              <line x1="100" y1="100" x2="200" y2="150">
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="150" x2="150" y2="200">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="200" x2="300" y2="80">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="80" x2="80" y2="300">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" />
              </line>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-orange-300/20 to-amber-300/20 rounded-full blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-yellow-200/50 shadow-lg shadow-yellow-100/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/nexorionlogo.png"
                alt="Nexorion"
                width={180}
                height={40}
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-lg font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-lg font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-lg font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/hiring" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                We're Hiring
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-yellow-100/80 backdrop-blur-sm hover:bg-yellow-200/80 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-yellow-200/50">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-300">Home</a>
              <a href="#about" className="block text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-300">About Us</a>
              <a href="#services" className="block text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-300">Services</a>
              <a href="#contact" className="block text-lg font-medium text-gray-700 hover:text-yellow-600 transition-colors duration-300">Contact Us</a>
              <a href="/hiring" className="block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-center">
                We're Hiring
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-300/30 mb-8 text-gray-700">
              🚀 Transform Your Digital Presence
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
            <span className="block mb-3 text-3xl sm:text-4xl lg:text-6xl">Level Up Your Game with</span>
            <span className="block mb-3 text-3xl sm:text-4xl lg:text-6xl">Proven Strategies for</span>
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-gradient-x min-h-[1.2em] block">
              {rotatingWords[currentWordIndex]}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating innovative mobile and web applications that drive business growth and maximize your digital potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => openForm('general')}
              className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Story */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nexorion was founded in 2024 with the goal of using a mobile-first strategy to upend the advertising sector. Using cutting-edge technology, it has provided growth and success to more than 250+ direct clients globally. As much as we like to think of ourselves, we are more than just a business—rather, we are a technical fusion of individuals driven by a desire to develop and make a lasting impression.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-yellow-200/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-8 h-8 text-yellow-600" />
                    <span className="text-2xl font-bold text-gray-800">250+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Happy Clients</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-orange-200/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Smartphone className="w-8 h-8 text-orange-600" />
                    <span className="text-2xl font-bold text-gray-800">1000+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Apps Delivered</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-100/80 to-yellow-100/80 backdrop-blur-sm p-6 rounded-2xl border border-amber-200/50 hover:border-amber-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-amber-200/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-8 h-8 text-amber-600" />
                    <span className="text-2xl font-bold text-gray-800">98%</span>
                  </div>
                  <p className="text-gray-600 font-medium">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Side - Team Photo Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-400 hover:border-yellow-500 transition-all duration-300">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">Team Photo</p>
                    <p className="text-gray-400 text-sm mt-2">Upload your team image here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                <span className="block">One Stop Solution to take</span>
                <span className="block">your brand to the</span>
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">NEXT LEVEL.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Forget juggling marketing, design, and tech—we're your brand's backstage crew. From crafting a captivating vision to building digital fortresses, we'll handle every facet with expert precision. You dream it, we engineer it, and you watch your brand soar. Focus on your masterpiece; leave the stagecraft to us. Unleash your potential, one seamless solution at a time.
              </p>
            </div>

            {/* Right Side - Service Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-400 hover:border-orange-500 transition-all duration-300">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-medium">Service Image</p>
                    <p className="text-gray-400 text-sm mt-2">Upload your service showcase image here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-yellow-200/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Choose your path and let's create something amazing together.
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-yellow-200/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Become an Advertiser</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We like our advertisers to spend only based on performance.
                </p>
                <button
                  onClick={() => openForm('advertiser')}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-300/30"
                >
                  Join Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100/80 to-yellow-100/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-200/50 hover:border-amber-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-amber-200/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Become a Publisher</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We feel we win only when our publishers maximize their mobile revenues.
                </p>
                <button
                  onClick={() => openForm('publisher')}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-300/30"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600">hello@nexorion.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Visit Us</h3>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm p-12 rounded-3xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300 shadow-lg hover:shadow-green-200/30">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              We're Hiring
            </h2>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Join the Pack!</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Help us redefine the Mobile Marketing. Join our team and make great things happen, together.
            </p>
            <a
              href="/hiring"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-yellow-200/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/nexorionlogo.png"
                alt="Nexorion"
                width={180}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-600 mb-6 max-w-md">
                Transform your ideas into successful apps with our proven strategies and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://twitter.com" className="w-10 h-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://instagram.com" className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://youtube.com" className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-4 text-gray-800">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-600 hover:text-yellow-600 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="/hiring" className="text-gray-600 hover:text-green-600 transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-200/50 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2024 Nexorion. All rights reserved. Made with ❤️ for your success.
            </p>
          </div>
        </div>
      </footer>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-yellow-200/50 rounded-3xl p-8 w-full max-w-md transform transition-all duration-300 scale-100 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {formType === 'advertiser' ? 'Become an Advertiser' : 
                 formType === 'publisher' ? 'Become a Publisher' : 
                 formType === 'career' ? 'Join Our Team' : 'Get In Touch'}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form action="https://formsubmit.co/hello@nexorion.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value={`New ${formType} Application`} />
              <input type="hidden" name="_next" value="https://nexorion.com/thank-you" />
              <input type="hidden" name="form_type" value={formType} />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-300/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}