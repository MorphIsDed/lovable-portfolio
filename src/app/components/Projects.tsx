import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  number: string;
  title: string;
  description: string;
  techStack: string[];
  status?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'ECONEXA',
    description: 'A quiz application designed to help students practice economics with an interactive leaderboard and progress tracking system.',
    techStack: ['Kotlin', 'Android', 'Firebase', 'Material Design'],
    githubUrl: 'https://github.com/MorphIsDed',
  },
  {
    number: '02',
    title: 'Flashdeck',
    description: 'A flashcard-based learning application that helps students revise notes effectively, enhanced with AI integration for smarter learning.',
    techStack: ['React', 'TypeScript', 'AI Integration', 'Tailwind CSS'],
    githubUrl: 'https://github.com/MorphIsDed',
  },
  {
    number: '03',
    title: 'Sign Language Translator',
    description: 'An innovative application that converts sign language gestures into text and speech, making communication more accessible.',
    techStack: ['Python', 'Machine Learning', 'Computer Vision', 'TensorFlow'],
    status: 'In Progress',
    githubUrl: 'https://github.com/MorphIsDed',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 text-center"
          >
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Featured Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projects
            </h2>
          </motion.div>

          {/* Projects grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="project-card group"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="text-5xl md:text-6xl font-bold gradient-text opacity-60 group-hover:opacity-100 transition-opacity">
                        {project.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.status && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30 shrink-0">
                            {project.status}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 rounded-full text-sm bg-secondary text-foreground/70 border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animated-underline"
                        >
                          <Github size={18} />
                          <span>View on GitHub</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
