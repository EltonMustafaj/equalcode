import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logo}>equalcode</div>
                    <div className={styles.links}>
                        <a href="#why-us">Why Us</a>
                        <a href="#about-us">About Us</a>
                        <a href="#portfolio">Portfolio</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} equalcode. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
