import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="font-orbitron font-bold text-xl bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent mb-2"
                 data-testid="footer-logo">
              RS.DEV
            </div>
            <p className="text-sm text-muted-foreground"
               data-testid="footer-tagline">
              Backend Developer & Security Enthusiast
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/rs3011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="footer-github"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/roshanshah-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:roshanpro3011@gmail.com"
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1"
               data-testid="footer-copyright">
              Made with <Heart className="w-4 h-4 text-neon-magenta" /> by Roshan Shah
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}