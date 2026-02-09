import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.iconWrapper}>
                <div className={styles.spinningRing}></div>
                <div className={styles.logoImageWrapper}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={styles.logoImage}
                    />
                </div>
            </div>
            <span className={styles.logoText}>Equalcode</span>
        </div>
    );
};

export default Logo;
