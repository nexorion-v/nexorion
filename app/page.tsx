"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X, Star, Users, Zap, Shield, CheckCircle, ChevronDown, Smartphone, Code, TrendingUp, Award, Globe, MessageCircle, Target, DollarSign, BarChart3, UserPlus, Hash, Share2, Briefcase, Send } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const changingWords = [
    "App Growth",
    "Revenue Boosting", 
    "Programmatic Advertising",
    "Lead Generation",
    "Influencer Marketing",
    "Social Media Success"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % changingWords.length);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [changingWords.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="nexorion/public/nexorionlogo.png" 
                  alt="Nexorion" 
                  className="h-10 w-auto drop-shadow-lg"
                />
              </div>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                <a href="#home" className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-semibold text-lg group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-semibold text-lg group">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#services" className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-semibold text-lg group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#contact" className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-semibold text-lg group">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-semibold text-lg overflow-hidden group">
                  <span className="relative z-10">Join Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#home" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-semibold">Home</a>
              <a href="#about" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-semibold">About Us</a>
              <a href="#services" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-semibold">Services</a>
              <a href="#contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-semibold">Contact Us</a>
              <div className="px-4 py-3">
                <button className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200/50 shadow-lg">
                🚀 Transform Your Digital Presence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Level Up Your Game with Proven Strategies for
              <span className="block mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent min-h-[1.2em] animate-in fade-in slide-in-from-right duration-500">
                {changingWords[currentWordIndex]}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              Transform your digital presence with our comprehensive suite of marketing solutions. 
              From mobile-first strategies to cutting-edge advertising, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
              <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200/50 shadow-lg mb-6">
              💫 About Nexorion
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Discover Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The team behind your digital transformation and success story
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-8">Our Story</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Nexorion was founded in 2024 with the goal of using a mobile-first strategy to upend the advertising sector. Using cutting-edge technology, it has provided growth and success to more than 250+ direct clients globally. As much as we like to think of ourselves, we are more than just a business—rather, we are a technical fusion of individuals driven by a desire to develop and make a lasting impression.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group text-center p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Users className="text-white" size={36} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">250+</h3>
                  <p className="text-gray-600 font-semibold">Happy Clients</p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-100/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Smartphone className="text-white" size={36} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">1000+</h3>
                  <p className="text-gray-600 font-semibold">Apps Delivered</p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-100/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Award className="text-white" size={36} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">98%</h3>
                  <p className="text-gray-600 font-semibold">Success Rate</p>
                </div>
              </div>
            </div>
            
            {/* Team Photo Section */}
            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-400">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 flex items-center justify-center min-h-[500px] border border-blue-100/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Users className="text-blue-600" size={64} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">Our Amazing Team</h3>
                  <p className="text-gray-600 text-lg">Upload team photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold border border-purple-200/50 shadow-lg mb-6">
              🎯 Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate the digital landscape
            </p>
          </div>

          {/* Services Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                One Stop Solution to take your brand to the 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> NEXT LEVEL.</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Forget juggling marketing, design, and tech—we're your brand's backstage crew. From crafting a captivating vision to building digital fortresses, we'll handle every facet with expert precision. You dream it, we engineer it, and you watch your brand soar. Focus on your masterpiece; leave the stagecraft to us. Unleash your potential, one seamless solution at a time.
              </p>
            </div>
            
            {/* Service Image Section */}
            <div className="animate-in fade-in slide-in-from-right duration-1000 delay-400">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 flex items-center justify-center min-h-[400px] border border-blue-100/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Code className="text-blue-600" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">Service Showcase</h3>
                  <p className="text-gray-600 text-lg">Upload service image here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-10 bg-gradient-to-br from-white to-blue-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">App Growth</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Accelerate your app's success with data-driven growth strategies and user acquisition techniques.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">User Acquisition</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">App Store Optimization</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="font-medium">Retention Strategies</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-purple-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <DollarSign className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Boosting</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Maximize your revenue potential with proven monetization strategies and conversion optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Monetization Strategy</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Conversion Optimization</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-purple-600 flex-shrink-0" />
                  <span className="font-medium">Revenue Analytics</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-green-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Programmatic Advertising</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Automate your advertising campaigns with AI-powered programmatic solutions for maximum ROI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <span className="font-medium">Real-time Bidding</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <span className="font-medium">Audience Targeting</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                  <span className="font-medium">Campaign Optimization</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-orange-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-orange-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <UserPlus className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lead Generation</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Generate high-quality leads with targeted campaigns and conversion-focused strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-orange-600 flex-shrink-0" />
                  <span className="font-medium">Lead Qualification</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-orange-600 flex-shrink-0" />
                  <span className="font-medium">Landing Page Optimization</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-orange-600 flex-shrink-0" />
                  <span className="font-medium">CRM Integration</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-pink-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-pink-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <Hash className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Influencer Marketing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with the right influencers to amplify your brand message and reach new audiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-pink-600 flex-shrink-0" />
                  <span className="font-medium">Influencer Matching</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-pink-600 flex-shrink-0" />
                  <span className="font-medium">Campaign Management</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-pink-600 flex-shrink-0" />
                  <span className="font-medium">Performance Tracking</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 bg-gradient-to-br from-white to-indigo-50 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-indigo-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <Share2 className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media Success</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Build a strong social media presence with engaging content and strategic community management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-indigo-600 flex-shrink-0" />
                  <span className="font-medium">Content Strategy</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-indigo-600 flex-shrink-0" />
                  <span className="font-medium">Community Management</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-indigo-600 flex-shrink-0" />
                  <span className="font-medium">Social Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200/50 shadow-lg mb-6">
              🤝 Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Choose Your Success Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join Nexorion's performance-driven ecosystem and unlock your potential
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Advertiser Card */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-blue-100/50 animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <Target className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Become an Advertiser</h3>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We like our advertisers to spend only based on performance.
              </p>
              <button 
                onClick={() => {
                  setFormType('advertiser');
                  setShowForm(true);
                }}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Publisher Card */}
            <div className="group bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-purple-100/50 animate-in fade-in slide-in-from-right duration-1000 delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <BarChart3 className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Become a Publisher</h3>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We feel we win only when our publishers maximize their mobile revenues.
              </p>
              <button 
                onClick={() => {
                  setFormType('publisher');
                  setShowForm(true);
                }}
                className="group w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border border-gray-100/50 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-12 text-center">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Email Us</h4>
                <p className="text-gray-600 font-medium">accounts@nexorion.co.in</p>
                <p className="text-gray-600 font-medium">hr@nexorion.co.in</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <Globe className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Office Location</h4>
                <p className="text-gray-600 font-medium">123 Innovation Street</p>
                <p className="text-gray-600 font-medium">Tech City, TC 12345</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <Users className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Business Hours</h4>
                <p className="text-gray-600 font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600 font-medium">Weekend: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Hiring Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl hover:rotate-12 transition-transform duration-500">
              <Briefcase className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're Hiring
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              Join the Pack!
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Help us redefine the Mobile Marketing. Join our team and make great things happen, together.
            </p>
            <button 
              onClick={() => {
                setFormType('career');
                setShowForm(true);
              }}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto relative overflow-hidden"
            >
              <span className="relative z-10">Join Our Team</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {formType === 'advertiser' && 'Become an Advertiser'}
                  {formType === 'publisher' && 'Become a Publisher'}
                  {formType === 'career' && 'Join Our Team'}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={28} />
                </button>
              </div>
              
              <form action="https://formsubmit.co/accounts@nexorion.co.in" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value={`New ${formType} Application`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="form_type" value={formType} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">First Name *</label>
                    <input 
                      type="text" 
                      name="first_name"
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Last Name *</label>
                    <input 
                      type="text" 
                      name="last_name"
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Company/Organization</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
                
                {formType === 'career' && (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Position of Interest</label>
                    <select 
                      name="position"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select a position</option>
                      <option value="Marketing Manager">Marketing Manager</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Sales Representative">Sales Representative</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    {formType === 'advertiser' && 'Tell us about your advertising goals'}
                    {formType === 'publisher' && 'Tell us about your mobile app/website'}
                    {formType === 'career' && 'Why do you want to join Nexorion?'}
                  </label>
                  <textarea 
                    rows={4} 
                    name="message"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg resize-none"
                  ></textarea>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Submit</span>
                    <Send size={18} className="relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Build Your Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and turn your vision into a reality. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-500 transform hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/nexorionlogo.png" 
                  alt="Nexorion" 
                  className="h-10 w-auto drop-shadow-lg"
                />
              </div>
              <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
                Transforming ideas into successful applications. We're your trusted partner in digital innovation and growth.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                  <span className="text-lg font-bold">f</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                  <span className="text-lg font-bold">t</span>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                  <span className="text-lg font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">App Growth</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Revenue Boosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Programmatic Advertising</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Lead Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Influencer Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Social Media Success</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Nexorion. All rights reserved. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
