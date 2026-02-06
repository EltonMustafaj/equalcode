'use client';

import Image from 'next/image';
import styles from './FAQ.module.css';

const TeamSection = () => {
    return (
        <section className={styles.teamSection} id="about-us">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Get to know us a little more
                    </h2>
                    <div className={styles.description}>
                        <p>
                            We understand the business, engineer the solution, and build for scale.
                        </p>
                        <p>
                            At equalcode, we combine advanced engineering with user-centric design to
                            build products that people love to use and businesses rely on.
                        </p>
                    </div>
                </div>

                <div className={styles.teamCard}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/hero-vision.png"
                            alt="Our Vision"
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitle}>Architecting the future</h3>
                        <p className={styles.infoText}>
                            We don't just write code; we architect systems and design experiences that
                            define industries. Every project at equalcode is treated as a unique piece
                            of engineering art.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
