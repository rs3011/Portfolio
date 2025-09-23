import { motion } from "framer-motion";
import { useState } from "react";
import HologramCard from "./HologramCard";
import NeonButton from "./NeonButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 127, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 127, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px'
             }} 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-amber bg-clip-text text-transparent"
              data-testid="heading-contact">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-amber mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"
             data-testid="text-contact-description">
            Ready to discuss your next project? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HologramCard className="p-8" glowColor="green" testId="card-contact-form">
              <h3 className="text-2xl font-orbitron font-semibold mb-6 text-neon-green"
                  data-testid="heading-send-message">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-secondary/30 border-secondary/50 focus:border-neon-green transition-colors"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/30 border-secondary/50 focus:border-neon-green transition-colors"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/30 border-secondary/50 focus:border-neon-green transition-colors"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-secondary/30 border-secondary/50 focus:border-neon-green transition-colors resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-white border-0 shadow-lg shadow-neon-cyan/25 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/40 disabled:opacity-50"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="inline w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </HologramCard>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact details */}
            <HologramCard className="p-6" glowColor="cyan" testId="card-contact-info">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-neon-cyan"
                  data-testid="heading-contact-info">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-email">roshanpro3011@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Email me anytime</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-green/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-phone">+91 8777547938</p>
                    <p className="text-sm text-muted-foreground">Available for calls</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-amber/20 to-neon-amber/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-neon-amber" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-location">Kolkata, West Bengal</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </HologramCard>

            {/* Social links */}
            <HologramCard className="p-6" glowColor="magenta" testId="card-social-links">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-neon-magenta"
                  data-testid="heading-social">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/rs3011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/20 transition-colors group"
                  whileHover={{ x: 5 }}
                  data-testid="link-github-contact"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-500/10 flex items-center justify-center group-hover:from-gray-400/30 group-hover:to-gray-400/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@rs3011</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/roshanshah-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/20 transition-colors group"
                  whileHover={{ x: 5 }}
                  data-testid="link-linkedin-contact"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-blue-400/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">@roshanshah-cs</p>
                  </div>
                </motion.a>
              </div>
            </HologramCard>

            {/* Availability */}
            <HologramCard className="p-6" glowColor="green" testId="card-availability">
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-neon-green"
                  data-testid="heading-availability">
                Availability
              </h3>
              <p className="text-muted-foreground mb-4">
                Currently open to new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm font-medium text-neon-green"
                      data-testid="status-available">
                  Available for new projects
                </span>
              </div>
            </HologramCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}