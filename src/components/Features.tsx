'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Features.module.css';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    }
                }
            );
        });
    }, []);

    const services = [
        { name: 'Website', style: 'black' },
        { name: 'App', style: 'outline' },
        { name: 'Systems', style: 'black' },
        { name: 'e-Commerce', style: 'outline' },
        { name: 'SaaS', style: 'outline' },
        { name: 'Automation', style: 'black' },
    ];

    return (
        <section className={styles.features} id="services" ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.bentoGrid}>
                    {/* Left Tall Card - Services */}
                    <div
                        className={`${styles.card} ${styles.servicesCard}`}
                        ref={(el) => { if (el) cardsRef.current[0] = el; }}
                    >
                        <h3 className={styles.cardHeader}>What we do best</h3>
                        <div className={styles.tagCloud}>
                            {services.map((service, i) => (
                                <span key={i} className={`${styles.tag} ${styles[service.style]}`}>
                                    {service.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        {/* Website Stat - Black Card */}
                        <div
                            className={`${styles.card} ${styles.statCard} ${styles.black}`}
                            ref={(el) => { if (el) cardsRef.current[1] = el; }}
                        >
                            <h2 className={styles.statValue}>Website</h2>
                            <p className={styles.statLabel}>High-performance websites built with custom code, optimized for speed, SEO, and conversions.</p>
                        </div>

                        {/* App Stat */}
                        <div
                            className={`${styles.card} ${styles.statCard}`}
                            ref={(el) => { if (el) cardsRef.current[2] = el; }}
                        >
                            <h2 className={styles.statValue}>App</h2>
                            <p className={styles.statLabel}>Scalable web and mobile applications designed for real users and long-term growth.</p>
                        </div>

                        {/* Systems Stat */}
                        <div
                            className={`${styles.card} ${styles.statCard} ${styles.black}`}
                            ref={(el) => { if (el) cardsRef.current[3] = el; }}
                        >
                            <h2 className={styles.statValue}>Systems</h2>
                            <p className={styles.statLabel}>Custom digital systems that automate processes and simplify complex workflows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
