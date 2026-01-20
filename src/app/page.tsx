import { Container, Heading, Paragraph, Highlight } from "@/components";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HobbiesCarousel } from "@/components/HobbiesCarousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { faReact, faNode, faJava, faJs, faHtml5, faCss3Alt, faGit, faDocker, faAws, faSalesforce } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { SiNestjs, SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiTypescript, SiJira, SiConfluence, SiSupabase } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Container className="flex items-center justify-center px-4 pt-2 lg:pt-0 pb-0 lg:pb-8 bg-black dark:bg-black min-h-screen">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center justify-items-center min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh]">
            
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
                I'm Computer Science student pationate about developing, building modern web applications with <Highlight>React, Next.js, TypeScript and Node</Highlight>. 
                Here you can find more about me, my projects and my journey with technology.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-3 lg:pt-4 justify-center lg:justify-start animate-fadeInUp-delay-3">
                <a 
                  href="#about"
                  className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base xl:text-lg"
                >
                  About Me
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 text-sm lg:text-base xl:text-lg"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-right order-1 lg:order-2 max-w-2xl lg:max-w-none animate-fadeInUp-delay-4">
              <div className="relative inline-block">
                <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 lg:-inset-20 xl:-inset-24 rounded-full border-2 border-white dark:border-gray-700 opacity-60"></div>
                <div className="absolute -inset-20 sm:-inset-28 md:-inset-32 lg:-inset-32 xl:-inset-40 rounded-full border-2 border-white dark:border-gray-700 opacity-50"></div>
                <div className="absolute -inset-28 sm:-inset-40 md:-inset-48 lg:-inset-48 xl:-inset-56 rounded-full border-2 border-white dark:border-gray-700 opacity-40"></div>

                <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full border-2 border-blue-300 dark:border-blue-700 opacity-40"></div>
                    <div className="absolute w-[110%] h-[110%] rounded-full border-2 border-blue-200 dark:border-blue-800 opacity-30"></div>
                    <div className="absolute w-[120%] h-[120%] rounded-full border-2 border-blue-100 dark:border-blue-900 opacity-20"></div>
                  </div>
                  
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 p-0">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src="/images/profile/yuri_profile.jpg"
                        alt="Yuri - Full-stack Developer"
                        width={320}
                        height={320}
                        priority
                        className="w-full h-full object-cover"
                        style={{
                          maskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 100%)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* About Section */}
      <Container id="about" className="flex items-center justify-center px-4 py-16 lg:py-20 bg-black dark:bg-black min-h-screen">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-8">
            <Heading className="text-4xl md:text-5xl font-bold text-center">
              About <Highlight variant="primary">Me</Highlight>
            </Heading>
            
            <Paragraph className="text-lg leading-relaxed text-center md:text-left">
              I'm a dedicated developer with 1+ year of professional experience in software development. 
              I have a solid foundation in object-oriented programming, with Java being my first programming language. 
              Throughout my career, I've built several projects using Spring Boot, Docker, PostgreSQL, and other technologies. 
              Currently, I work at Embraer as a Salesforce Developer, where I specialize in Apex (similar to Java) and frontend development to 
              create solutions and optimize processes in commercial aviation.
            </Paragraph>

            <Paragraph className="text-lg leading-relaxed text-center md:text-left">
              Currently, my main focus is web development, leveraging modern technologies such as React, Next.js, TypeScript, and Node.js 
              to build scalable, efficient, and impactful applications.
            </Paragraph>

            <Paragraph className="text-lg leading-relaxed text-center md:text-left">
              My journey in development has been marked by continuous learning and adaptation. Having learned to code with Java first, 
              I can confidently say that nothing can shake me anymore! I thrive in collaborative environments, enjoy mentoring others, 
              and constantly expand my skillset. Beyond coding, I'm driven by curiosity and a genuine desire to contribute meaningfully 
              to projects that make a real difference.
            </Paragraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-lg border border-white dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  <Highlight variant="primary">Core Strengths</Highlight>
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Full-stack Development</li>
                  <li>✓ Problem Solving</li>
                  <li>✓ Team Collaboration</li>
                  <li>✓ Continuous Learning</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-white dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  <Highlight variant="primary">What I Value</Highlight>
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
      <Container className="flex items-center justify-center px-4 py-16 lg:py-20 bg-black dark:bg-black min-h-screen">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-12 flex flex-col items-center text-center">
            <div>
              <Heading className="text-4xl md:text-5xl font-bold mb-4">
                <Highlight variant="primary">Technologies</Highlight> I Use
              </Heading>
              <Paragraph className="text-lg leading-relaxed max-w-3xl mx-auto">
                I'm constantly learning and expanding my skillset with modern technologies and tools. 
                Here are the technologies I actively work with and continue to master in my development journey.
              </Paragraph>
            </div>

            <div className="w-full space-y-12">
              {/* Frontend Technologies */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                  <Highlight variant="primary">Frontend</Highlight>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#61DAFB]"><FontAwesomeIcon icon={faReact} /></span>
                    <span className="text-sm font-medium text-white text-center">React</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-white"><SiNextdotjs /></span>
                    <span className="text-sm font-medium text-white text-center">Next.js</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#06B6D4]"><SiTailwindcss /></span>
                    <span className="text-sm font-medium text-white text-center">Tailwind</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#3178C6]"><SiTypescript /></span>
                    <span className="text-sm font-medium text-white text-center">TypeScript</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#F7DF1E]"><FontAwesomeIcon icon={faJs} /></span>
                    <span className="text-sm font-medium text-white text-center">JavaScript</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#E34C26]"><FontAwesomeIcon icon={faHtml5} /></span>
                    <span className="text-sm font-medium text-white text-center">HTML5</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#239120]"><FontAwesomeIcon icon={faCss3Alt} /></span>
                    <span className="text-sm font-medium text-white text-center">CSS3</span>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                  <Highlight variant="secondary">Backend</Highlight>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#339933]"><FontAwesomeIcon icon={faNode} /></span>
                    <span className="text-sm font-medium text-white text-center">Node.js</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-red-600"><SiNestjs /></span>
                    <span className="text-sm font-medium text-white text-center">Nest.js</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#13AA52]"><SiMongodb /></span>
                    <span className="text-sm font-medium text-white text-center">MongoDB</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#336791]"><SiPostgresql /></span>
                    <span className="text-sm font-medium text-white text-center">PostgreSQL</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#007396]"><FontAwesomeIcon icon={faJava} /></span>
                    <span className="text-sm font-medium text-white text-center">Java</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#00A8E1]"><FontAwesomeIcon icon={faSalesforce} /></span>
                    <span className="text-sm font-medium text-white text-center">Apex</span>
                  </div>
                </div>
              </div>

              {/* Tools & Others */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                  <Highlight variant="accent">Tools & Others</Highlight>
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#F1502F]"><FontAwesomeIcon icon={faGit} /></span>
                    <span className="text-sm font-medium text-white text-center">Git</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#2496ED]"><FontAwesomeIcon icon={faDocker} /></span>
                    <span className="text-sm font-medium text-white text-center">Docker</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#FF9900]"><FontAwesomeIcon icon={faAws} /></span>
                    <span className="text-sm font-medium text-white text-center">AWS</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#0052CC]"><SiJira /></span>
                    <span className="text-sm font-medium text-white text-center">Jira</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#172B4D]"><SiConfluence /></span>
                    <span className="text-sm font-medium text-white text-center">Confluence</span>
                  </div>
                  <div className="hover-scale-icon flex flex-col items-center gap-3 p-6 rounded-lg bg-black dark:bg-black border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 h-full transition-all">
                    <span className="text-5xl text-[#3ECF8E]"><SiSupabase /></span>
                    <span className="text-sm font-medium text-white text-center">Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Hobbies Section */}
      <Container className="flex items-center justify-center px-4 py-16 lg:py-20 bg-black dark:bg-black min-h-screen">
        <ScrollReveal className="w-full max-w-6xl lg:max-w-7xl mx-auto">
          <div className="space-y-12">
            <Heading className="text-4xl md:text-5xl font-bold text-center">
              My <Highlight variant="primary">Hobbies</Highlight>
            </Heading>

            <Paragraph className="text-lg text-center leading-relaxed">
              Beyond coding, I'm passionate about exploring various interests that fuel my creativity and keep me energized.
            </Paragraph>

            <HobbiesCarousel />
          </div>
        </ScrollReveal>
      </Container>
    </>
  );
}
