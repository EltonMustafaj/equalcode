'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const works = [
    {
        title: 'Website',
        desc: 'High-performance websites built with custom code, optimized for speed, SEO, and conversions.',
        tag: 'PERFORMANCE'
    },
    {
        title: 'App',
        desc: 'Scalable web and mobile applications designed for real users and long-term growth.',
        tag: 'SCALABILITY'
    },
    {
        title: 'Systems',
        desc: 'Custom digital systems that automate processes and simplify complex workflows.',
        tag: 'AUTOMATION'
    },
];

const Work = () => {
    const sectionRef = useRef(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!listRef.current) return;

        const items = listRef.current.children;

        gsap.fromTo(items,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.work} id="work" ref={sectionRef}>
            <div id="services" style={{ position: 'absolute', top: '-100px' }}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>What we build</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.workList} ref={listRef}>
                    {works.map((item, index) => (
                        <div key={index} className={styles.workItem}>
                            <div className={styles.workLeft}>
                                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                                <h3 className={styles.workTitle}>{item.title}</h3>
                            </div>
                            <div className={styles.workRight}>
                                <div className={styles.descriptionWrapper}>
                                    <p className={styles.workDesc}>{item.desc}</p>
                                    <div className={styles.tagLine}>
                                        <span className={styles.tag}>{item.tag}</span>
                                        <span className={styles.learnMore}>LEARN MORE →</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.itemBorder}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
