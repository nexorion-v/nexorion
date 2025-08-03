'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Users, 
  DollarSign, 
  Clock, 
  Home, 
  Coffee, 
  Calendar, 
  TrendingUp,
  Award,
  Target,
  Briefcase,
  Code,
  TestTube,
  UserCheck,
  Building,
  Mail,
  ArrowRight,
  X
} from 'lucide-react';
import Image from 'next/image';

export default function Hiring() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roles = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Affiliate Marketing',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Finance Executive',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'HR & Admin',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Software Engineer',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'QA Engineer (App Tester)',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    { icon: <Clock className="w-8 h-8" />, title: 'Flexible Timings', description: 'Work at your optimal hours' },
    { icon: <Home className="w-8 h-8" />, title: 'Work from Home', description: 'Remote-first culture' },
    { icon: <Calendar className="w-8 h-8" />, title: 'Flexible Vacation', description: 'Unlimited PTO policy' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Monthly Performance Evaluation', description: 'Regular feedback and growth' },
    { icon: <Award className="w-8 h-8" />, title: 'Yearly Bonus', description: 'Performance-based rewards' },
    { icon: <Coffee className="w-8 h-8" />, title: 'Snacks & Coffee', description: 'Fully stocked pantry' },
    { icon: <UserCheck className="w-8 h-8" />, title: 'Trainings', description: 'Continuous learning opportunities' },
    { icon: <Clock className="w-8 h-8" />, title: 'Less Probation Periods', description: 'Quick integration process' },
    { icon: <Briefcase className="w-8 h-8" />, title: 'Independent Projects', description: 'Own your work and impact' },
    { icon: <Users className="w-8 h-8" />, title: 'Dedicated Teams', description: 'Collaborative environment' },
    { icon: <Target className="w-8 h-8" />, title: 'Professional Mentors', description: 'Learn from the best' },
    { icon: <Building className="w-8 h-8" />, title: 'Paid Internships', description: 'Valuable learning experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 text-gray-900 overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#fbbf24" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="10" cy="10" r="1.5" fill="#f59e0b" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="20" r="1" fill="#d97706" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-yellow-200/50 shadow-lg shadow-yellow-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <a 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Website</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/nexorionlogo.png"
                alt="Nexorion"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm rounded-full text-sm font-medium border border-green-300/30 mb-8 text-gray-700">
              🚀 Join Our Mission
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">We're Hiring</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Join the Pack!</h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're assembling a global team of wonderful, diverse people to create mobile marketing experiences with real impact.
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To learn more, here are some roles we're hiring for right now!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {roles.map((role, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-yellow-200/30"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${role.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{role.title}</h3>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 shadow-lg">
            <p className="text-lg text-gray-600 mb-6">
              Not an engineer but still keen to learn more? Shoot us a message at{' '}
              <a href="mailto:career@nexorion.com" className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                career@nexorion.com
              </a>
              . We'll be hiring for people in design, product, marketing, and ops over the next 12 months, and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Nexorion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              How is life at Nexorion?
            </h2>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Working at Nexorion would instantly make you realize one thing: you are working with the best talent around you. Not just in the role you occupy, or the team you work with but everyone you meet here. With the right company, even conversations can be rejuvenating; at Nexorion, we guarantee a good company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm p-8 rounded-3xl border border-green-200/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Hard truths:</h3>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Only when you grow we grow!</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pushing oneself comes with the role. Because we believe that's how you learn & grow.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  And we realise pushing oneself is hard work. Which is why we are always in the continuous process of building an environment that helps the team rejuvenate oneself: included but not limited to a stacked, in-house pantry, which provides all the super power you need to be the best ;)
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-700">Your work should speak for you.</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make things smoother and to make sure you spend time and energy only on the most important things, Nexorion strives to make every process transparent: there are no work timings because we do not believe in archaic methods of calculating productivity.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm p-8 rounded-3xl border border-orange-200/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">Rewards & Recognitions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trust us, we have numerous ways to express our gratitude for your contribution, ranging from appraisals to performance rewards and beyond. Your dedication and hard work are truly treasured and We value YOU!!!
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-100/80 to-yellow-100/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-200/50 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Bcuz Multitasking Ninja is not a job title</h3>
                <p className="text-gray-600 leading-relaxed">
                  There are no specific job designations because you will be expected to hold down roles that cannot be described in one word. We are in constant efforts to provide you with work which is not only fun but challenging. There's a lot to learn...so why limit yourself at one when you can be better at two! In our eyes you are a superhero!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100/80 to-orange-100/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200/50 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">Our actions are louder than words.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Since trust is a major virtue in the community we have built, all our employees get their salaries on time. A show of trust that speaks volumes because of the skin in the game.
              </p>
              <p className="text-gray-600 leading-relaxed">
                There are many more such eccentricities that make Nexorion what it is but that's for one to discover. If you feel at home reading this, get in touch:{' '}
                <a href="mailto:career@nexorion.com" className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                  career@nexorion.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Benefits
            </h2>
            <p className="text-xl text-gray-600">Perks of Joining Us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-200/50 hover:border-green-300/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-200/30"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm p-12 rounded-3xl border border-green-200/50 shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards an exciting career with Nexorion
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-yellow-200/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Image
              src="/nexorionlogo.png"
              alt="Nexorion"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-500">
            © 2024 Nexorion. All rights reserved. Made with ❤️ for your success.
          </p>
        </div>
      </footer>

      {/* Application Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-yellow-200/50 rounded-3xl p-8 w-full max-w-md transform transition-all duration-300 scale-100 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Apply for Position</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form action="https://formsubmit.co/career@nexorion.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="New Job Application" />
              <input type="hidden" name="_next" value="https://nexorion.com/thank-you" />
              <input type="hidden" name="form_type" value="career" />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>

              <div>
                <select
                  name="position"
                  required
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 focus:outline-none focus:border-green-500 transition-colors duration-300"
                >
                  <option value="" className="bg-white">Select Position</option>
                  <option value="Affiliate Marketing" className="bg-white">Affiliate Marketing</option>
                  <option value="Finance Executive" className="bg-white">Finance Executive</option>
                  <option value="HR & Admin" className="bg-white">HR & Admin</option>
                  <option value="Software Engineer" className="bg-white">Software Engineer</option>
                  <option value="QA Engineer" className="bg-white">QA Engineer (App Tester)</option>
                  <option value="Other" className="bg-white">Other</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your experience and why you want to join Nexorion..."
                  rows={4}
                  className="w-full px-4 py-3 bg-yellow-50/50 border border-yellow-200/50 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-300/30"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}