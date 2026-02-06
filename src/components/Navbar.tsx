import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoItem}>
                    <Image
                        src="/logo.png"
                        alt="EC Logo"
                        width={44}
                        height={44}
                        className={styles.logoImage}
                    />
                </div>

                <div className={styles.links}>
                    <Link href="#services">SERVICES</Link>
                    <Link href="#work">WORK</Link>
                    <Link href="#about">ABOUT</Link>
                    <Link href="#contact" className={styles.contactLink}>CONTACT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
