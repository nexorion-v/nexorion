'use client';

import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <a 
                href="/"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Privacy Policy</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          
          <div className="text-sm text-gray-400">
            Last updated: January 2024
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and other contact information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information about your use of our services, including your IP address, browser type, operating system, referring URLs, and pages visited.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking</h3>
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To communicate with you about our services, updates, and promotional offers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To personalize your experience and provide relevant content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To analyze usage patterns and improve our services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Information Sharing</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                    <p className="leading-relaxed">
                      We may share information with trusted third-party service providers who assist us in operating our services, conducting business, or serving you.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                    <p className="leading-relaxed">
                      We may disclose information when required by law, court order, or government request, or to protect our rights and safety.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                    <p className="leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Security</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access controls and authentication measures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Employee training on data protection practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Your Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  You have certain rights regarding your personal information, including:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to access and receive a copy of your personal information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to rectify inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to restrict or object to processing of your information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The right to data portability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Contact Us</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>Email: privacy@nexorion.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>General inquiries: hello@nexorion.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Updates to This Policy</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>
                
                <p className="leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Image
              src="/nexorionlogo.png"
              alt="Nexorion"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-400">
            © 2024 Nexorion. All rights reserved. Made with ❤️ for your success.
          </p>
        </div>
      </footer>
    </div>
  );
}