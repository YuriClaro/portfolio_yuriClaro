import { Container, Heading, Paragraph, Highlight } from "@/components";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container className="flex items-center justify-center px-4 py-6 lg:py-8 bg-zinc-50 dark:bg-black min-h-screen">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center justify-items-center min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh]">
            
            {/* Hero Content - Left Side */}
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-left order-2 lg:order-1 max-w-2xl lg:max-w-none animate-fadeInUp">
              <div className="space-y-2 lg:space-y-3 animate-fadeInUp-delay-1">
                <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Hi, I'm <Highlight variant="primary">Yuri</Highlight>
                </Heading>
                <Heading as="h2" className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 font-normal">
                  Full-stack Developer
                </Heading>
              </div>

              <Paragraph className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp-delay-2">
                I'm a passionate full-stack developer building modern web applications with <Highlight>React, Next.js, TypeScript and Node</Highlight>. 
                I love creating beautiful and functional digital experiences.
              </Paragraph>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-3 lg:pt-4 justify-center lg:justify-start animate-fadeInUp-delay-3">
                <Link 
                  href="#about"
                  className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base xl:text-lg"
                >
                  About Me
                </Link>
                <Link 
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 text-sm lg:text-base xl:text-lg"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Profile Card - Right Side */}
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-right order-1 lg:order-2 max-w-2xl lg:max-w-none animate-fadeInUp-delay-4">
              <div className="relative group hover:shadow-2xl hover:shadow-blue-500/[0.1] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 w-auto h-auto rounded-xl p-4 lg:p-5 xl:p-6 transition-all duration-300 inline-block">
                <div className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                    <div className="text-gray-400 dark:text-gray-600 text-center">
                      <svg className="w-20 h-20 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">Add your photo here</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-neutral-500 text-xs sm:text-sm lg:text-xs xl:text-sm mt-3 lg:mt-4 dark:text-neutral-300 text-center">
                    Yuri - Full-stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* About Section */}
      <Container className="flex items-center justify-center px-4 py-16 lg:py-20 bg-white dark:bg-gray-950 min-h-screen" id="about">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-8">
            <Heading className="text-4xl md:text-5xl font-bold text-center">
              About <Highlight variant="primary">Me</Highlight>
            </Heading>
            
            <Paragraph className="text-lg leading-relaxed text-center md:text-left">
              I'm a passionate developer with a strong commitment to creating elegant solutions to complex problems. 
              With expertise in full-stack development, I combine technical knowledge with a user-centric approach to build 
              applications that not only work well but also provide exceptional user experiences.
            </Paragraph>

            <Paragraph className="text-lg leading-relaxed text-center md:text-left">
              My journey in development has been marked by continuous learning and adaptation. I thrive in collaborative environments 
              and enjoy mentoring others while expanding my own skillset. Beyond coding, I'm driven by curiosity and a desire to contribute 
              meaningfully to projects that make a difference.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  <Highlight variant="secondary">Core Strengths</Highlight>
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Full-stack Development</li>
                  <li>✓ Problem Solving</li>
                  <li>✓ Team Collaboration</li>
                  <li>✓ Continuous Learning</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  <Highlight variant="secondary">What I Value</Highlight>
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Code Quality & Clean Architecture</li>
                  <li>✓ User Experience</li>
                  <li>✓ Innovative Solutions</li>
                  <li>✓ Continuous Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Technologies Section */}
      <Container className="flex items-center justify-center px-4 py-16 lg:py-20 bg-gray-50 dark:bg-black min-h-screen">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-12">
            <Heading className="text-4xl md:text-5xl font-bold text-center">
              <Highlight variant="primary">Technologies</Highlight> I Use
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="p-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  <Highlight variant="primary">Frontend</Highlight>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">⚛️</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">▲</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🎨</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">📘</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="p-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  <Highlight variant="secondary">Backend</Highlight>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🟩</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🦅</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Express</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🍃</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🐘</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">PostgreSQL</span>
                  </div>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="p-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow md:col-span-2">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  <Highlight variant="accent">Tools & Others</Highlight>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🐙</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Git</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">📦</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">npm</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">🧪</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Testing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <span className="text-2xl">☁️</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Hobbies Section */}
      <Container className="flex items-center justify-center px-4 py-16 lg:py-20 bg-white dark:bg-gray-950 min-h-screen">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-12">
            <Heading className="text-4xl md:text-5xl font-bold text-center">
              My <Highlight variant="primary">Hobbies</Highlight>
            </Heading>

            <Paragraph className="text-lg text-center leading-relaxed">
              Beyond coding, I'm passionate about exploring various interests that fuel my creativity and keep me energized.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border border-blue-200 dark:border-blue-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gaming</h3>
                <p className="text-gray-700 dark:text-gray-300">I enjoy various games that challenge my strategic thinking</p>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 border border-purple-200 dark:border-purple-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Reading</h3>
                <p className="text-gray-700 dark:text-gray-300">Exploring different genres from fiction to tech articles</p>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 border border-pink-200 dark:border-pink-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Music</h3>
                <p className="text-gray-700 dark:text-gray-300">Listening to various genres and discovering new artists</p>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border border-green-200 dark:border-green-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🚴</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sports</h3>
                <p className="text-gray-700 dark:text-gray-300">Staying active with cycling and other physical activities</p>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 border border-yellow-200 dark:border-yellow-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Traveling</h3>
                <p className="text-gray-700 dark:text-gray-300">Exploring new places and experiencing different cultures</p>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 border border-indigo-200 dark:border-indigo-700 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Photography</h3>
                <p className="text-gray-700 dark:text-gray-300">Capturing moments and expressing creativity visually</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </>
  );
}
