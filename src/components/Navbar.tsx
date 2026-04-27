'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">JUDITH LESLEY</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="#home">HOME</Link></li>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#profile">PROFILE</Link></li>
        <li><Link href="#work">WORK</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
