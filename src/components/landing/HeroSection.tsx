import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export const HeroSection = ({ onGetStarted, onLogin }: HeroSectionProps) => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 start-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20"
          style={{ background: 'var(--gradient-primary)' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 glass-card border-primary/30"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            {t('app.tagline', { defaultValue: 'نظام إدارة الحملات الانتخابية الذكي' })}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-gradient-primary">
            {isRTL ? 'حملات أذكى.' : 'Smarter Campaigns.'}
          </span>
          <br />
          <span className="text-foreground">
            {isRTL ? 'رؤى أوضح.' : 'Clearer Insights.'}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {isRTL
            ? 'خطّط للوصول، وتتبع التبرعات، وتفاعل مع الناخبين — كل ذلك من لوحة واحدة أنيقة وحديثة.'
            : 'Plan outreach, track donations, and engage voters — all in one modern, elegant dashboard.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            'mt-10 flex items-center justify-center gap-4 flex-wrap',
            isRTL && 'flex-row-reverse'
          )}
        >
          <Button
            size="lg"
            onClick={onGetStarted}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow hover:shadow-[var(--neon-glow)] transition-all duration-300 px-8 h-12 text-base font-semibold rounded-xl group"
          >
            {isRTL ? 'ابدأ الآن' : 'Get Started'}
            <ArrowRight className={cn(
              'h-5 w-5 transition-transform group-hover:translate-x-1',
              isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2'
            )} />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={onLogin}
            className="glass-button border-border/60 hover:border-primary/50 hover:bg-primary/5 h-12 px-8 text-base font-semibold rounded-xl transition-all duration-300"
          >
            {isRTL ? 'تسجيل الدخول' : 'Log in'}
          </Button>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 start-[10%] w-20 h-20 rounded-full bg-primary/10 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 end-[15%] w-32 h-32 rounded-full bg-accent/10 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
};
