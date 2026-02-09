'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Belgrade',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setTime(formatter.format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.gridTexture}></div>
            <div className={styles.container}>
                <div className={styles.topStatement}>
                    <p>Built with intention. Designed to last.</p>
                </div>

                <div className={styles.ctaSection}>
                    <a
                        href="https://instagram.com/equalcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mainCta}
                    >
                        START A PROJECT
                    </a>
                    <p className={styles.subText}>
                        Available for new work • Long-term partnerships
                    </p>
                </div>

                <div className={styles.presenceRow}>
                    <div className={styles.timeWrapper}>
                        <span className={styles.presenceLabel}>
                            KOSOVO / {time}
                        </span>
                        <div className={styles.tooltip}>Currently working</div>
                    </div>

                    <a
                        href="https://instagram.com/equalcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.presenceLink}
                    >
                        GET IN TOUCH
                    </a>

                    <a
                        href="https://instagram.com/equalcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.presenceLink}
                    >
                        INSTAGRAM ↗
                    </a>
                </div>

                <div className={styles.bottomDetail}>
                    <p>ENGINEERED, NOT ASSEMBLED — SINCE 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
