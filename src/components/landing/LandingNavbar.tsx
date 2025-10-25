import { motion } from 'framer-motion';
import { Moon, Sun, Globe, LogIn, LayoutDashboard, Vote, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LandingNavbarProps {
  onLogin: () => void;
  onDashboard: () => void;
}

export const LandingNavbar = ({ onLogin, onDashboard }: LandingNavbarProps) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, direction, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = direction === 'rtl';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="sticky top-0 z-50 glass-card border-x-0 border-t-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
        <div className={cn('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={cn('flex items-center gap-2 cursor-pointer', isRTL && 'flex-row-reverse')}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Vote className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              {t('app.name', { defaultValue: language === 'ar' ? 'فودا' : 'Foda' })}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={cn('hidden md:flex items-center gap-2', isRTL && 'flex-row-reverse')}>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogin}
              className="glass-button"
            >
              <LogIn className={cn('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')} />
              {isRTL ? 'تسجيل الدخول' : 'Login'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDashboard}
              className="glass-button"
            >
              <LayoutDashboard className={cn('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')} />
              {isRTL ? 'لوحة التحكم' : 'Dashboard'}
            </Button>
          </nav>

          {/* Actions */}
          <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glass-button"
              aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="glass-button">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? 'start' : 'end'} className="glass-card">
                <DropdownMenuItem
                  onClick={() => language !== 'en' && toggleLanguage()}
                  className={cn(language === 'en' && 'bg-primary/10')}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => language !== 'ar' && toggleLanguage()}
                  className={cn(language === 'ar' && 'bg-primary/10')}
                >
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden glass-button"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            <Button
              variant="ghost"
              className="w-full justify-start glass-button"
              onClick={() => {
                onLogin();
                setMobileMenuOpen(false);
              }}
            >
              <LogIn className={cn('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')} />
              {isRTL ? 'تسجيل الدخول' : 'Login'}
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start glass-button"
              onClick={() => {
                onDashboard();
                setMobileMenuOpen(false);
              }}
            >
              <LayoutDashboard className={cn('h-4 w-4', isRTL ? 'ml-2' : 'mr-2')} />
              {isRTL ? 'لوحة التحكم' : 'Dashboard'}
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
