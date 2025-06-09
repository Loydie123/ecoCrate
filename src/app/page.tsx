"use client";

import Image from "next/image";
import Link from "next/link";
import { features } from "@/constants";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, ScaleUp, SlideInRight, StaggerContainer, StaggerItem } from "@/components/animations/motion-components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.2}>
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  <FadeIn delay={0.4}>
                    Sustainable Living,{' '}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      Delivered to Your Door
                    </span>
                  </FadeIn>
                </h1>
                <FadeIn delay={0.6}>
                  <p className="mt-6 text-lg text-gray-600">
                    Join thousands of eco-conscious consumers making a difference. 
                    Shop our curated selection of sustainable products and help create 
                    a greener future.
                  </p>
                </FadeIn>
                <StaggerContainer delayChildren={0.8} staggerDelay={0.1}>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <StaggerItem>
                      <Link
                        href="/shop"
                        className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-lg font-medium"
                      >
                        Shop Now
                      </Link>
                    </StaggerItem>
                    <StaggerItem>
                      <Link
                        href="/about"
                        className="inline-flex justify-center items-center px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors text-lg font-medium"
                      >
                        Learn More
                      </Link>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </FadeUp>
            <ScaleUp delay={0.4}>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                  alt="Eco-friendly sustainable products including reusable items and natural materials"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent"></div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose EcoCrate?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We&apos;re committed to making sustainable living accessible and convenient for everyone.
              </p>
            </div>
          </FadeUp>
          <StaggerContainer delayChildren={0.3} staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index} className="h-full">
                  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-200 transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-[#1B4D3E] to-[#2D8B72]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <StaggerContainer delayChildren={0.2} staggerDelay={0.1}>
              {[
                { width: 200, height: 200, left: '10%', top: '20%', duration: '20s' },
                { width: 300, height: 300, left: '60%', top: '10%', duration: '25s' },
                { width: 250, height: 250, left: '30%', top: '50%', duration: '22s' },
                { width: 180, height: 180, left: '70%', top: '60%', duration: '28s' },
                { width: 220, height: 220, left: '20%', top: '80%', duration: '24s' },
                { width: 280, height: 280, left: '80%', top: '30%', duration: '26s' }
              ].map((shape, i) => (
                <StaggerItem key={i}>
                  <div
                    className="absolute transform rotate-45 bg-white/5 rounded-full"
                    style={{
                      width: `${shape.width}px`,
                      height: `${shape.height}px`,
                      left: shape.left,
                      top: shape.top,
                      animation: `float ${shape.duration} infinite linear`
                    }}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp delay={0.2}>
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Create
                  <span className="block mt-2">Lasting Change?</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  Join our community of change-makers. Together, we&apos;re building a more sustainable future, one conscious choice at a time.
                </p>
                <StaggerContainer delayChildren={0.4} staggerDelay={0.1}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <StaggerItem>
                      <button className="group relative px-6 py-3 bg-white text-[#1B4D3E] font-medium rounded-lg overflow-hidden transition-transform hover:scale-105">
                        <span className="relative z-10 flex items-center justify-center">
                          Get Started
                          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </StaggerItem>
                    <StaggerItem>
                      <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                        Learn More
                      </button>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </FadeUp>

            <SlideInRight delay={0.4}>
              <div className="relative">
                <StaggerContainer delayChildren={0.6} staggerDelay={0.1}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <StaggerItem>
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-white font-medium">Eco Products</h3>
                              <p className="text-white/70 text-sm">Curated sustainable items</p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-white font-medium">Impact Tracking</h3>
                              <p className="text-white/70 text-sm">Monitor your footprint</p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    </div>
                    <div className="space-y-4 mt-8">
                      <StaggerItem>
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-white font-medium">Rewards</h3>
                              <p className="text-white/70 text-sm">Earn eco-points</p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-white font-medium">Community</h3>
                              <p className="text-white/70 text-sm">Join eco-warriors</p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    </div>
                  </div>
                </StaggerContainer>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
