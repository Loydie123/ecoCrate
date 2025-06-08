"use client";

import Image from "next/image";
import Link from "next/link";
import { features } from "@/constants";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sustainable Living,{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Delivered to Your Door
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Join thousands of eco-conscious consumers making a difference. 
                Shop our curated selection of sustainable products and help create 
                a greener future.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/store"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-lg font-medium"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors text-lg font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411"
                alt="Eco-friendly home products"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose EcoCrate?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re committed to making sustainable living accessible and convenient for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyLTJjLTcuNzMyIDAtMTQgNi4yNjgtMTQgMTRzNi4yNjggMTQgMTQgMTQgMTQtNi4yNjggMTQtMTQtNi4yNjgtMTQtMTQtMTR6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Make a{' '}
                <span className="relative">
                  <span className="relative z-10">Difference?</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-emerald-400/30 -rotate-2"></span>
                </span>
              </h2>
              <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                Join thousands of eco-conscious consumers who are already making an impact. 
                Start your sustainable journey today and help create a greener tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-600 hover:bg-emerald-50 transition-all transform hover:scale-105 hover:shadow-lg text-lg font-medium group"
                >
                  Get Started Now
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105 text-lg font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -right-8 -top-8 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -right-8 -bottom-8 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Join Our Community</h3>
                    <p className="text-emerald-50 text-sm">Connect with like-minded people</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-emerald-50">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Access exclusive eco-friendly products</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Get sustainable living tips</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Track your environmental impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
