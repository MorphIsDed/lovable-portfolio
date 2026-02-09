import { useState } from 'react';
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:sahuabhinay317@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
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
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Want to discuss a project, collaboration, or just say hello? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border ${
                        errors.name ? 'border-destructive' : 'border-border'
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                      maxLength={100}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border ${
                        errors.email ? 'border-destructive' : 'border-border'
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                      maxLength={255}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${
                      errors.message ? 'border-destructive' : 'border-border'
                    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                    maxLength={1000}
                  />
                  <div className="flex justify-between mt-2">
                    {errors.message ? (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : submitSuccess ? (
                    <>
                      <span>Opening Email Client</span>
                      <Send size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <p className="text-center text-sm text-primary animate-fade-in">
                    Your email client should open shortly. Thank you for reaching out!
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Email section */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-3xl p-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  Email Directly
                </h3>
                <a 
                  href="mailto:sahuabhinay317@gmail.com"
                  className="text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors animated-underline inline-block break-all"
                >
                  sahuabhinay317@gmail.com
                </a>
                <p className="text-muted-foreground mt-4">
                  I typically respond within 24-48 hours.
                </p>
              </motion.div>

              {/* Social links */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card rounded-3xl p-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Follow Me
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://github.com/MorphIsDed" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github size={20} className="text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">@MorphIsDed</p>
                    </div>
                    <Send size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/abhinay-sahu-677846319/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin size={20} className="text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Abhinay Sahu</p>
                    </div>
                    <Send size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
