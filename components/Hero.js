'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.title}
                >
                    Visual Storyteller
                    <br />
                    <span className={styles.subtitle}>Based in India</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={styles.description}
                >
                    Capturing life's fleeting moments with cinematic precision.
                </motion.p>
            </div>
        </section>
    );
}
