import { useNavigate } from 'react-router-dom';
import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

/**
 * Modern landing page with glassmorphism design
 * Features: Hero section, features grid, responsive navbar
 */
export const NewLanding = () => {
  const navigate = useNavigate();
  const { direction } = useLanguage();

  const handleGetStarted = () => navigate('/login');
  const handleLogin = () => navigate('/login');
  const handleDashboard = () => navigate('/dashboard');

  return (
    <div className="min-h-screen bg-background text-foreground" dir={direction}>
      <LandingNavbar onLogin={handleLogin} onDashboard={handleDashboard} />
      
      <main>
        <HeroSection onGetStarted={handleGetStarted} onLogin={handleLogin} />
        <FeaturesSection />
        
        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {direction === 'rtl' ? 'جاهز للبدء؟' : 'Ready to get started?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {direction === 'rtl'
                ? 'انضم إلى آلاف المستخدمين الذين يديرون حملاتهم بكفاءة'
                : 'Join thousands of users managing their campaigns efficiently'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-glow hover:shadow-[var(--neon-glow)] transition-all duration-300"
            >
              {direction === 'rtl' ? 'ابدأ مجانًا' : 'Start for free'}
            </motion.button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Foda. {direction === 'rtl' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLanding;
