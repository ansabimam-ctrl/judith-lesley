'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const LOOK_IMAGES: Record<number, string[]> = {
  0: [
    '/look1/EBI05007.jpg',
    '/look1/EBI05008.jpg',
    '/look1/EBI05009.jpg',
    '/look1/EBI05010.jpg',
    '/look1/EBI05011.jpg',
    '/look1/EBI05012.jpg',
    '/look1/EBI05013.jpg',
    '/look1/EBI05016.jpg',
    '/look1/EBI05018.jpg',
    '/look1/EBI05020.jpg',
    '/look1/EBI05021.jpg',
    '/look1/EBI05023.jpg',
    '/look1/EBI05025.jpg',
    '/look1/EBI05026.jpg',
  ],
  1: [
    '/look2/EBI05027.jpg',
    '/look2/EBI05028.jpg',
    '/look2/EBI05029.jpg',
    '/look2/EBI05030.jpg',
    '/look2/EBI05031.jpg',
    '/look2/EBI05032.jpg',
    '/look2/EBI05033.jpg',
    '/look2/EBI05034.jpg',
    '/look2/EBI05035.jpg',
    '/look2/EBI05036.jpg',
    '/look2/EBI05037.jpg',
    '/look2/EBI05038.jpg',
    '/look2/EBI05039.jpg',
  ],
  2: [
    '/look3/EBI05040.jpg',
    '/look3/EBI05041.jpg',
    '/look3/EBI05042.jpg',
    '/look3/EBI05043.jpg',
    '/look3/EBI05044.jpg',
    '/look3/EBI05045.jpg',
    '/look3/EBI05046.jpg',
    '/look3/EBI05047.jpg',
  ],
  3: [
    '/look4/a (2).jpg',
    '/look4/a (3).jpg',
    '/look4/b (1).jpg',
    '/look4/b (2).jpg',
    '/look4/c (1).jpg',
    '/look4/c (2).jpg',
    '/look4/d (1).jpg',
    '/look4/e (1).jpg',
  ],
  4: [
    '/look5/a (4).jpg',
    '/look5/b (3).jpg',
    '/look5/b (4).jpg',
    '/look5/c (3).jpg',
    '/look5/c (4).jpg',
    '/look5/d (2).jpg',
    '/look5/d (3).jpg',
    '/look5/e (2).jpg',
  ],
  5: [
    '/look6/a (5).jpg',
    '/look6/a (6).jpg',
    '/look6/b (5).jpg',
    '/look6/b (6).jpg',
    '/look6/c (5).jpg',
    '/look6/c (6).jpg',
    '/look6/c (7).jpg',
    '/look6/d (4).jpg',
    '/look6/d (5).jpg',
    '/look6/e (3).jpg',
    '/look6/e (5).jpg',
  ],
  6: [
    '/look7/a (10).jpg',
    '/look7/a (7).jpg',
    '/look7/a (8).jpg',
    '/look7/a (9).jpg',
    '/look7/b (7).jpg',
    '/look7/b (8).jpg',
    '/look7/c (8).jpg',
    '/look7/c (9).jpg',
    '/look7/d (6).jpg',
    '/look7/d (7).jpg',
    '/look7/e (6).jpg',
    '/look7/e (7).jpg',
  ],
};

const Hero = () => {
  const [currentLook, setCurrentLook] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const stats = [
    { label: 'AGE', value: '70' },
    { label: 'HEIGHT', value: "5'7\"" },
    { label: 'CHEST / WAIST', value: '34DD / 27"' },
    { label: 'HAIR', value: 'GOLDEN' },
    { label: 'EYES', value: 'HAZEL' },
    { label: 'GENDER', value: 'FEMALE' },
    { label: 'SHOE', value: '6 / 39' },
    { label: 'LOCATION', value: 'WAKEFIELD' },
    { label: 'COUNTRY', value: 'UNITED KINGDOM' },
  ];

  const looks = ['LOOK 1', 'LOOK 2', 'LOOK 3', 'LOOK 4', 'LOOK 5', 'LOOK 6', 'LOOK 7'];
  
  const currentImages = LOOK_IMAGES[currentLook] || Array(15).fill('/images/hero.png');
  const totalImages = currentImages.length;

  const handleNext = () => {
    setDirection('next');
    setCurrentImageIndex((prev) => (prev + 3) % totalImages);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentImageIndex((prev) => (prev - 3 + totalImages) % totalImages);
  };

  const handleLookClick = (index: number) => {
    setCurrentLook(index);
    setCurrentImageIndex(0);
    setDirection('next');
  };

  // Indices for the 3 images shown
  const idx1 = (currentImageIndex - 1 + totalImages) % totalImages;
  const idx2 = currentImageIndex;
  const idx3 = (currentImageIndex + 1) % totalImages;

  const formatCounter = () => {
    const start = currentImageIndex + 1;
    const end = Math.min(start + 2, totalImages);
    return `${start.toString().padStart(2, '0')}-${end.toString().padStart(2, '0')} / ${totalImages}`;
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
            <div key={`left-${idx1}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx1]} alt={`Look ${currentLook + 1} - Image ${idx1 + 1}`} fill className={styles.heroImage} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx1]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
            <div className={styles.sideOverlay}></div>
          </div>

          {/* Current Slide */}
          <div className={styles.slide}>
            <div key={`center-${idx2}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image 
                src={currentImages[idx2]} 
                alt={`Look ${currentLook + 1} - Image ${idx2 + 1}`}
                fill 
                className={styles.heroImage}
                priority
              />
              <div className={styles.reflection}>
                <Image src={currentImages[idx2]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
          </div>

          {/* Next Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`}>
            <div key={`right-${idx3}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx3]} alt={`Look ${currentLook + 1} - Image ${idx3 + 1}`} fill className={styles.heroImage} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx3]} alt="" fill className={styles.reflectImage} />
              </div>
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
