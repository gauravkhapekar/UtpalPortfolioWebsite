'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Utpal
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.mobileNav}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
