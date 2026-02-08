'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(`.${styles.topBadge}`,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        )
            .fromTo(`.${styles.word}`,
                { opacity: 0, scale: 0.95, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.1 },
                "-=0.6"
            )
            .fromTo(`.${styles.wordHighlight}`,
                { width: 0, opacity: 0 },
                { width: "auto", opacity: 1, duration: 1, ease: "power4.inOut" },
                "-=0.8"
            )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.8"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.8"
            );

        // Marquee Animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 30,
            ease: "linear"
        });
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.topBadge}>
                    <span>EQUALCODE ◆ 2026</span>
                </div>

                <h1 className={styles.title} ref={titleRef}>
                    <span className={styles.word}>Engineered,</span><br />
                    <span className={styles.word}>not</span> <span className={styles.wordHighlight}>assembled</span>
                </h1>

                <p className={styles.subtitle} ref={subtitleRef}>
                    We create digital products by thinking, designing, and engineering every detail from scratch.
                </p>

                <div className={styles.actions} ref={ctaRef}>
                    <button className={styles.bookButton}>
                        Get in touch
                        <span className={styles.buttonArrow}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className={styles.marqueeWrapper}>
                <div className={styles.marquee} ref={marqueeRef}>
                    <span>APPS ◆ BRANDING ◆ MOTION ◆ WEBSITES ◆ </span>
                    <span>APPS ◆ BRANDING ◆ MOTION ◆ WEBSITES ◆ </span>
                    <span>APPS ◆ BRANDING ◆ MOTION ◆ WEBSITES ◆ </span>
                    <span>APPS ◆ BRANDING ◆ MOTION ◆ WEBSITES ◆ </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
