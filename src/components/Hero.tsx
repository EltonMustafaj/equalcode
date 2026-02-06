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
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.5 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.8"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.6"
            );

        // Marquee Animation
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear"
        });
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.topBadge}>
                    <span>Engineering with purpose</span>
                </div>

                <h1 className={styles.title} ref={titleRef}>
                    Custom-built digital products.<br />
                    No templates. No shortcuts.
                </h1>

                <p className={styles.subtitle} ref={subtitleRef}>
                    Websites, applications and systems engineered for growth.
                </p>

                <div className={styles.actions} ref={ctaRef}>
                    <button className={styles.bookButton}>
                        Let’s build something serious.
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
