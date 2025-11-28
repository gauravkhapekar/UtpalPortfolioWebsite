import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Utpal</h3>
                        <p>Capturing moments, telling stories.</p>
                    </div>
                    <div className={styles.links}>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className={styles.socials}>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Vimeo</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Utpal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
