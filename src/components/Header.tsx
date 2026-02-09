import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Buy', href: '/listings?type=buy' },
  { label: 'Sell', href: '/listings?type=sell' },
  { label: 'Rent', href: '/listings?type=rent' },
  { label: 'News', href: '#' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="max-w-content mx-auto px-4 md:px-8 lg:px-10 pointer-events-auto">
        <div className="flex items-center justify-between h-[85px] bg-white/95 backdrop-blur-md rounded-[32px] shadow-lg px-5 relative">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">Blue Sky</span>
            </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 rounded-2xl text-base font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Sign In */}
            <a href="/login">
              <Button variant="ghost" className="hidden sm:inline-flex px-6 py-3 rounded-xl text-base font-medium hover:bg-black/5">
                Sign in
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 text-foreground hover:bg-black/5 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border pointer-events-auto"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">Sign in</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
