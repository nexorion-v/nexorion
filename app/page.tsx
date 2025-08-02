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
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Revenue Boosting',
      description: 'Monetization strategies, conversion optimization, and revenue analytics to maximize your profits.',
      gradient: 'from-green-500 via-teal-500 to-blue-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Programmatic Advertising',
      description: 'Real-time bidding, audience targeting, and campaign optimization for maximum ROI.',
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Lead Generation',
      description: 'Quality lead acquisition, nurturing campaigns, and CRM integration for business growth.',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Influencer Marketing',
      description: 'Influencer partnerships, campaign management, and performance tracking for brand awareness.',
      gradient: 'from-pink-500 via-rose-500 to-red-500'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Success',
      description: 'Content strategy, community management, and social analytics for digital presence.',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
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
              <a href="#home" className="text-lg font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-lg font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-lg font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-lg font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/hiring" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                We're Hiring
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-lg font-medium hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#about" className="block text-lg font-medium hover:text-blue-400 transition-colors duration-300">About Us</a>
              <a href="#services" className="block text-lg font-medium hover:text-blue-400 transition-colors duration-300">Services</a>
              <a href="#contact" className="block text-lg font-medium hover:text-blue-400 transition-colors duration-300">Contact Us</a>
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
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10 mb-8">
              🚀 Transform Your Digital Presence
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-4">Level Up Your Game with</span>
            <span className="block mb-4">Proven Strategies for</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x min-h-[1.2em] block">
              {rotatingWords[currentWordIndex]}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating innovative mobile and web applications that drive business growth and maximize your digital potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => openForm('general')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
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
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Nexorion was founded in 2024 with the goal of using a mobile-first strategy to upend the advertising sector. Using cutting-edge technology, it has provided growth and success to more than 250+ direct clients globally. As much as we like to think of ourselves, we are more than just a business—rather, we are a technical fusion of individuals driven by a desire to develop and make a lasting impression.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-8 h-8 text-blue-400" />
                    <span className="text-3xl font-bold text-white">250+</span>
                  </div>
                  <p className="text-gray-300 font-medium">Happy Clients</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3 mb-3">
                    <Smartphone className="w-8 h-8 text-purple-400" />
                    <span className="text-3xl font-bold text-white">1000+</span>
                  </div>
                  <p className="text-gray-300 font-medium">Apps Delivered</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-8 h-8 text-green-400" />
                    <span className="text-3xl font-bold text-white">98%</span>
                  </div>
                  <p className="text-gray-300 font-medium">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Side - Team Photo Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-blue-500 transition-all duration-300">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg font-medium">Team Photo</p>
                    <p className="text-gray-500 text-sm mt-2">Upload your team image here</p>
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
              <h2 className="text-5xl font-bold leading-tight">
                <span className="block">One Stop Solution to take</span>
                <span className="block">your brand to the</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NEXT LEVEL.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Forget juggling marketing, design, and tech—we're your brand's backstage crew. From crafting a captivating vision to building digital fortresses, we'll handle every facet with expert precision. You dream it, we engineer it, and you watch your brand soar. Focus on your masterpiece; leave the stagecraft to us. Unleash your potential, one seamless solution at a time.
              </p>
            </div>

            {/* Right Side - Service Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-purple-500 transition-all duration-300">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg font-medium">Service Image</p>
                    <p className="text-gray-500 text-sm mt-2">Upload your service showcase image here</p>
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
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Choose your path and let's create something amazing together.
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Become an Advertiser</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We like our advertisers to spend only based on performance.
                </p>
                <button
                  onClick={() => openForm('advertiser')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Join Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Become a Publisher</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We feel we win only when our publishers maximize their mobile revenues.
                </p>
                <button
                  onClick={() => openForm('publisher')}
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">hello@nexorion.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-12 rounded-3xl border border-white/10 hover:border-green-500/30 transition-all duration-300">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              We're Hiring
            </h2>
            <h3 className="text-3xl font-bold mb-6 text-white">Join the Pack!</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Help us redefine the Mobile Marketing. Join our team and make great things happen, together.
            </p>
            <a
              href="/hiring"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
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
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your ideas into successful apps with our proven strategies and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://twitter.com" className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://instagram.com" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://youtube.com" className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="/hiring" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Nexorion. All rights reserved. Made with ❤️ for your success.
            </p>
          </div>
        </div>
      </footer>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                {formType === 'advertiser' ? 'Become an Advertiser' : 
                 formType === 'publisher' ? 'Become a Publisher' : 
                 formType === 'career' ? 'Join Our Team' : 'Get In Touch'}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
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