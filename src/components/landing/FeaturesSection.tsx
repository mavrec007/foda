import { motion } from 'framer-motion';
import { BarChart3, Users, Globe, Zap, Shield, Smartphone } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';

export const FeaturesSection = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const features = [
    {
      icon: BarChart3,
      title: isRTL ? 'تحليلات الناخبين في منصة موحدة' : 'Unified voter analytics',
      description: isRTL
        ? 'احصل على رؤى شاملة حول تفضيلات الناخبين وسلوكياتهم في مكان واحد'
        : 'Get comprehensive insights into voter preferences and behaviors in one place'
    },
    {
      icon: Users,
      title: isRTL ? 'تعاون الفريق والصلاحيات' : 'Team collaboration & roles',
      description: isRTL
        ? 'إدارة الفريق بسهولة مع صلاحيات مخصصة لكل عضو'
        : 'Manage teams effortlessly with custom permissions for each member'
    },
    {
      icon: Zap,
      title: isRTL ? 'تتبّع التبرعات لحظيًا' : 'Real-time donation tracking',
      description: isRTL
        ? 'راقب التبرعات والمساهمات في الوقت الفعلي'
        : 'Monitor donations and contributions in real-time'
    },
    {
      icon: Globe,
      title: isRTL ? 'دعم متعدد اللغات' : 'Multi-language support',
      description: isRTL
        ? 'واجهة تدعم العربية والإنجليزية مع دعم كامل للاتجاهين'
        : 'Interface supporting Arabic and English with full RTL/LTR support'
    },
    {
      icon: Shield,
      title: isRTL ? 'أمان على مستوى المؤسسات' : 'Enterprise-grade security',
      description: isRTL
        ? 'حماية بياناتك مع أعلى معايير الأمان والخصوصية'
        : 'Protect your data with the highest security and privacy standards'
    },
    {
      icon: Smartphone,
      title: isRTL ? 'تصميم متجاوب' : 'Responsive design',
      description: isRTL
        ? 'استخدم النظام من أي جهاز - حاسوب، لوحي، أو هاتف'
        : 'Use the system from any device - desktop, tablet, or mobile'
    }
  ];

  return (
    <section className="relative py-20 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 end-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">
              {isRTL ? 'لماذا فودا؟' : 'Why Foda?'}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL
              ? 'منصة متكاملة لإدارة الحملات الانتخابية بكفاءة واحترافية'
              : 'A complete platform to manage electoral campaigns efficiently and professionally'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
