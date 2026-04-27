'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentLook, setCurrentLook] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(6); // Starting at 7 (index 6) to match screenshot

  const stats = [
    { label: 'AGE', value: '70' },
    { label: 'HEIGHT', value: "5'2\"" },
    { label: 'CHEST / WAIST', value: '42" / 40"' },
    { label: 'HAIR', value: 'DARK BROWN' },
    { label: 'EYES', value: 'BLUE' },
    { label: 'GENDER', value: 'FEMALE' },
    { label: 'SHOE', value: '4 / 37' },
    { label: 'LOCATION', value: 'BOLTON' },
    { label: 'COUNTRY', value: 'UNITED KINGDOM' },
  ];

  const looks = ['LOOK 1', 'LOOK 2', 'LOOK 3', 'LOOK 4', 'LOOK 5', 'LOOK 6', 'LOOK 7'];
  const TOTAL_IMAGES_PER_LOOK = 15;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 3) % TOTAL_IMAGES_PER_LOOK);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 3 + TOTAL_IMAGES_PER_LOOK) % TOTAL_IMAGES_PER_LOOK);
  };

  const handleLookClick = (index: number) => {
    setCurrentLook(index);
    setCurrentImageIndex(0);
  };

  // Indices for the 3 images shown
  const idx1 = (currentImageIndex - 1 + TOTAL_IMAGES_PER_LOOK) % TOTAL_IMAGES_PER_LOOK;
  const idx2 = currentImageIndex;
  const idx3 = (currentImageIndex + 1) % TOTAL_IMAGES_PER_LOOK;

  const formatCounter = () => {
    const start = currentImageIndex + 1;
    const end = Math.min(start + 2, TOTAL_IMAGES_PER_LOOK);
    return `${start.toString().padStart(2, '0')}-${end.toString().padStart(2, '0')} / ${TOTAL_IMAGES_PER_LOOK}`;
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.carouselContainer}>
        <div className={styles.statsOverlay}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statTag}>
              {stat.label} {stat.value}
            </div>
          ))}
        </div>

        <div className={styles.slideTrack}>
          {/* Previous Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`}>
            <Image src="/images/hero.png" alt={`Look ${currentLook + 1} - Image ${idx1 + 1}`} fill className={styles.heroImage} />
            <div className={styles.reflection}>
              <Image src="/images/hero.png" alt="" fill className={styles.reflectImage} />
            </div>
            <div className={styles.sideOverlay}></div>
          </div>

          {/* Current Slide */}
          <div className={styles.slide}>
            <Image 
              src="/images/hero.png" 
              alt={`Look ${currentLook + 1} - Image ${idx2 + 1}`}
              fill 
              className={styles.heroImage}
              priority
            />
            <div className={styles.reflection}>
              <Image src="/images/hero.png" alt="" fill className={styles.reflectImage} />
            </div>
          </div>

          {/* Next Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`}>
            <Image src="/images/hero.png" alt={`Look ${currentLook + 1} - Image ${idx3 + 1}`} fill className={styles.heroImage} />
            <div className={styles.reflection}>
              <Image src="/images/hero.png" alt="" fill className={styles.reflectImage} />
            </div>
            <div className={styles.sideOverlay}></div>
          </div>
        </div>

        <div className={styles.navbarPadding}></div>

        <div className={styles.blurBand}></div>

        <div className={styles.bottomControls}>
          <div className={styles.navigation}>
            <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous images group">
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <div className={styles.counter}>{formatCounter()}</div>
            <button onClick={handleNext} className={styles.navBtn} aria-label="Next images group">
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>

          <div className={styles.looksPagination}>
            {looks.map((look, index) => (
              <button 
                key={index} 
                onClick={() => handleLookClick(index)}
                className={`${styles.lookLink} ${index === currentLook ? styles.activeLook : ''}`}
              >
                {look}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
