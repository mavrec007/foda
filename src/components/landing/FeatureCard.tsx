import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  className?: string;
}

export const FeatureCard = ({ title, description, icon: Icon, index, className }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "glass-card p-6 group hover:shadow-glow transition-all duration-500 cursor-pointer relative overflow-hidden",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 start-0 w-full h-1 bg-gradient-primary" />
      </div>

      {/* Icon */}
      <div className="mb-4 relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-[var(--neon-glow)] transition-all duration-300">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>

      {/* Decorative element */}
      <motion.div
        className="absolute -bottom-2 -end-2 w-24 h-24 rounded-full bg-gradient-primary opacity-0 blur-2xl group-hover:opacity-10 transition-opacity duration-500"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
