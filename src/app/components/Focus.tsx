import { Sparkles, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Focus = () => {
  const focusAreas = [
    {
      icon: Sparkles,
      title: 'Learning & Growth',
      description: 'Continuously expanding my knowledge in Android development, AI/ML, and modern web technologies.',
    },
    {
      icon: BookOpen,
      title: 'Open to Internships',
      description: 'Seeking opportunities to apply my skills in real-world projects and learn from industry professionals.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excited to work with like-minded individuals on innovative projects that push boundaries.',
    },
  ];

  return (
    <section id="focus" className="py-24 md:py-32">
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
              What I'm Up To
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Current Focus
            </h2>
          </motion.div>

          {/* Focus grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
