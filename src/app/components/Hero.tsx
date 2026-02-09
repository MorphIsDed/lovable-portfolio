import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/1745574.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow animate-glow-pulse" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(221 83% 53% / 0.4) 0%, hsl(280 60% 60% / 0.2) 50%, transparent 70%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <p className="text-muted-foreground text-lg mb-4 tracking-wide uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Abhinay<br />
                <span className="gradient-text">Kumar Sahu</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                BCA Student | Aspiring App Developer
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8">
                Passionate about Android Development, Artificial Intelligence & Machine Learning
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <button onClick={scrollToProjects} className="btn-primary text-primary-foreground">
                View Projects
              </button>
              <button onClick={scrollToContact} className="btn-secondary text-foreground">
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start animate-fade-in-delay-2">
              <a href="https://github.com/MorphIsDed" target="_blank" rel="noopener noreferrer" 
                className="social-link text-foreground hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abhinay-sahu-677846319/" target="_blank" rel="noopener noreferrer"
                className="social-link text-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sahuabhinay317@gmail.com"
                className="social-link text-foreground hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 animate-fade-in-delay">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                style={{ background: 'linear-gradient(135deg, hsl(221 83% 53% / 0.5) 0%, hsl(280 60% 60% / 0.3) 100%)' }}
              />
              <div className="relative w-72 h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border border-border/50">
                <img 
                  src={profilePhoto} 
                  alt="Abhinay Kumar Sahu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
