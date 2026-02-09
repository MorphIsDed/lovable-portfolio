import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Kotlin', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'SQL'],
    },
    {
      title: 'Android Development',
      skills: ['Android Studio', 'XML Layouts', 'Fragments', 'Navigation Components', 'Material Design', 'Jetpack Compose'],
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Databases & Backend',
      skills: ['Firebase', 'Firestore', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'RESTful APIs'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Power BI', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
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
              Technical Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </motion.div>

          {/* Skills grid */}
          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="number-indicator">
                    0{categoryIndex + 1}<span>/</span>
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill text-foreground/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
