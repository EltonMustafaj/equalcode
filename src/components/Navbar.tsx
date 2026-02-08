import Link from 'next/link';
import styles from './Navbar.module.css';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoItem}>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className={styles.links}>
                    <Link href="#services">SERVICES</Link>
                    <Link href="#work">WORK</Link>
                    <Link href="#contact" className={styles.contactLink}>CONTACT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
