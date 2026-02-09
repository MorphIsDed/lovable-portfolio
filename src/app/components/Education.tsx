import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 text-center"
          >
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Academic Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Education
            </h2>
          </motion.div>

          {/* Education card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card rounded-3xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, hsl(221 83% 53% / 0.2) 0%, hsl(280 60% 60% / 0.1) 100%)' }}>
                <GraduationCap className="text-primary" size={32} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Bachelor of Computer Application
                </h3>
                <p className="text-xl text-primary mb-6">
                  CHRIST University Pune Lavasa Campus
                </p>

                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary/70" />
                    <span>Currently in 2nd Year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary/70" />
                    <span>Lavasa, Pune, India</span>
                  </div>
                </div>

                {/* Course highlights */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    Areas of Focus
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Computer Science', 'Mathematics', 'Data Structures', 'Web Development', 'Mobile Apps'].map((area) => (
                      <span key={area} className="skill-pill text-foreground/80">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
