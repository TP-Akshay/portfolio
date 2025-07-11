import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Zap, Palette, Menu, X, ArrowUpRight, Circle, Square } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xl font-bold tracking-wider">AKSHAY</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'home', label: '01 HOME' },
                { name: 'about', label: '02 ABOUT' },
                { name: 'skills', label: '03 SKILLS' },
                { name: 'projects', label: '04 WORK' },
                { name: 'contact', label: '05 CONTACT' }
              ].map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.name)}
                  className={`text-sm font-bold tracking-wider transition-all duration-200 hover:text-white ${
                    activeSection === section.name ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-white/20 py-6">
              {[
                { name: 'home', label: '01 HOME' },
                { name: 'about', label: '02 ABOUT' },
                { name: 'skills', label: '03 SKILLS' },
                { name: 'projects', label: '04 WORK' },
                { name: 'contact', label: '05 CONTACT' }
              ].map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.name)}
                  className="block w-full text-left py-3 text-sm font-bold tracking-wider hover:text-white text-white/60"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-white/10 rotate-45"></div>
        
        <div className="text-center max-w-5xl mx-auto">
          
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
            AKSHAY T P
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-white"></div>
            <Circle size={8} className="text-white" />
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 font-bold tracking-widest">
            FULL STACK DEVELOPER, MCA Grad.
          </p>
          
          <p className="text-lg mb-16 text-white/70 max-w-2xl mx-auto font-mono leading-relaxed">
            Building digital products with precision engineering and bold design. 
            Every line of code matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black px-8 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              VIEW WORK
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="border-2 border-white px-8 py-4 font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center gap-2">
              DOWNLOAD CV
              <Download size={20} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-12">
            {[
              { icon: Github, label: 'GITHUB' },
              { icon: Linkedin, label: 'LINKEDIN' },
              { icon: Mail, label: 'EMAIL' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <social.icon size={24} />
                <span className="text-xs font-bold tracking-wider">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-sm font-bold tracking-wider text-black/60">02 ABOUT</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2">
                  CRAFTING
                  <br />
                  DIGITAL
                  <br />
                  EXPERIENCES
                </h2>
              </div>
              
              <div className="space-y-6 text-lg font-mono leading-relaxed">
                <p className="text-black/80">
                  I'm a developer who believes in the power of clean code and 
                  intentional design. Every project is an opportunity to push 
                  boundaries and create something meaningful.
                </p>
                
                <p className="text-black/80">
                  With 5+ years of experience, I've worked with startups and 
                  established companies, always focusing on delivering products 
                  that users love and businesses depend on.
                </p>
              </div>
              
              <div className="mt-12 space-y-4">
                {[
                  { metric: '05+', label: 'YEARS EXPERIENCE' },
                  { metric: '50+', label: 'PROJECTS COMPLETED' },
                  { metric: '∞', label: 'PASSION FOR CODE' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 py-2 border-b border-black/10">
                    <span className="text-2xl font-black tracking-wider">{item.metric}</span>
                    <span className="text-sm font-bold tracking-wider text-black/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code size={80} className="mx-auto mb-4" />
                    <div className="text-sm font-bold tracking-wider">DEVELOPER</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-bold tracking-wider text-white/60">03 SKILLS</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2">
              TECHNICAL
              <br />
              EXPERTISE
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Code,
                title: 'FRONTEND',
                skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
                symbol: '▲'
              },
              {
                icon: Zap,
                title: 'BACKEND',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
                symbol: '●'
              },
              {
                icon: Palette,
                title: 'DESIGN',
                skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch'],
                symbol: '■'
              }
            ].map((category, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-2xl font-black">{category.symbol}</span>
                  <h3 className="text-xl font-black tracking-wider">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-4 py-2 border-b border-white/10">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-mono text-white/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-bold tracking-wider text-black/60">04 WORK</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2">
              SELECTED
              <br />
              PROJECTS
            </h2>
          </div>
          
          <div className="space-y-16">
            {[
              {
                number: '01',
                title: 'E-COMMERCE PLATFORM',
                description: 'Full-stack e-commerce solution with modern architecture, payment integration, and seamless user experience',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                year: '2024'
              },
              {
                number: '02',
                title: 'TASK MANAGEMENT APP',
                description: 'Collaborative project management tool with real-time updates, team collaboration, and intuitive interface',
                tech: ['Vue.js', 'Firebase', 'Vuetify'],
                year: '2023'
              },
              {
                number: '03',
                title: 'WEATHER DASHBOARD',
                description: 'Beautiful weather application with location-based forecasts, data visualization, and responsive design',
                tech: ['React', 'OpenWeather API', 'Chart.js'],
                year: '2023'
              }
            ].map((project, index) => (
              <div key={index} className="border-b border-black/10 pb-16 group">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-black text-black/20">{project.number}</span>
                      <span className="text-sm font-bold tracking-wider text-black/60">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-4">{project.title}</h3>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-black/60 hover:text-black transition-colors font-mono text-sm">
                        <Github size={16} />
                        CODE
                      </button>
                      <button className="flex items-center gap-2 text-black/60 hover:text-black transition-colors font-mono text-sm">
                        <ExternalLink size={16} />
                        LIVE
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-lg font-mono text-black/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 border border-black/20 text-sm font-bold tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-sm font-bold tracking-wider text-white/60">05 CONTACT</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              TOGETHER
            </h2>
          </div>
          
          <p className="text-xl font-mono text-white/80 mb-16 leading-relaxed">
            Ready to start your next project? Let's discuss how we can create 
            something exceptional together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { icon: Mail, label: 'EMAIL', value: 'akshay@example.com' },
              { icon: Linkedin, label: 'LINKEDIN', value: '@akshaykumar' },
              { icon: Github, label: 'GITHUB', value: '@akshaykumar' }
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <contact.icon size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold tracking-wider mb-2">{contact.label}</h3>
                <p className="text-white/60 font-mono">{contact.value}</p>
              </div>
            ))}
          </div>
          
          <button className="bg-white text-black px-12 py-4 font-bold tracking-wider hover:bg-white/90 transition-all duration-200">
            START A PROJECT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="font-bold tracking-wider">AKSHAY KUMAR</span>
          </div>
          <p className="text-white/60 font-mono text-sm">
            © 2024 — DESIGNED & DEVELOPED WITH PRECISION
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;