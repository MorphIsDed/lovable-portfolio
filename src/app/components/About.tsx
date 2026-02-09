import { Brain, Code2, Dumbbell, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const traits = [
    { icon: Code2, label: 'App Developer' },
    { icon: Brain, label: 'AI/ML Enthusiast' },
    { icon: Lightbulb, label: 'Quick Learner' },
    { icon: Dumbbell, label: 'Sporty & Energetic' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16"
          >
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              More About Myself
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A curious mind with a <span className="gradient-text">passion for building</span>
            </h2>
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I'm a Bachelor of Computer Application student at{' '}
                <span className="text-foreground font-medium">CHRIST University Pune Lavasa Campus</span>,
                currently in my 2nd year, driven by a deep curiosity for technology and innovation.
              </p>
              <p>
                My goal is to become a skilled app developer, creating solutions that make a real 
                difference. I'm particularly fascinated by{' '}
                <span className="text-foreground font-medium">Artificial Intelligence</span>,{' '}
                <span className="text-foreground font-medium">Machine Learning</span>, and the 
                beautiful logic of <span className="text-foreground font-medium">Mathematics</span>.
              </p>
              <p>
                Beyond coding, I'm energetic and sporty—always ready to take on new challenges 
                and learn from every experience. I believe in continuous growth and pushing 
                boundaries.
              </p>
            </motion.div>

            {/* Traits grid */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div 
                  key={trait.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <trait.icon className="text-primary" size={24} />
                  </div>
                  <p className="font-medium text-foreground">{trait.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
