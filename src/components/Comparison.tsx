'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Comparison.module.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
    {
        title: "Performance First",
        desc: "Custom-built solutions engineered for performance, not templates. We ensure every millisecond counts."
    },
    {
        title: "Serious Business",
        desc: "Built with modern technologies for businesses that take digital seriously and want to lead their industry."
    },
    {
        title: "Modern Stack",
        desc: "We use the latest high-performance frameworks to ensure your product is fast, secure, and future-proof."
    },
    {
        title: "No Shortcuts",
        desc: "Every line of code is written with purpose. We don't use bloated themes or restrictive page builders."
    }
];

const Comparison = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.fromTo(itemsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.comparison} ref={sectionRef} id="why-us">
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.leftCol}>
                        <h2 className={styles.title}>
                            Why our clients<br />choose us as<br />partners
                        </h2>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.featuresGrid}>
                            {featuresData.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.featureItem}
                                    ref={(el) => { if (el) itemsRef.current[index] = el; }}
                                >
                                    <div className={styles.icon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)">
                                            <rect x="2" y="2" width="9" height="9" rx="2" />
                                            <rect x="13" y="2" width="9" height="9" rx="2" />
                                            <rect x="2" y="13" width="9" height="9" rx="2" />
                                            <rect x="13" y="13" width="9" height="9" rx="2" />
                                        </svg>
                                    </div>
                                    <h3 className={styles.featureTitle}>{item.title}</h3>
                                    <p className={styles.featureDesc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
