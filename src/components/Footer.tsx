import styles from './Footer.module.css';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.links}>
                        <a href="#services">Services</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
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
