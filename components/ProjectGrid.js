'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectGrid.module.css';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectGrid({ projects }) {
    return (
        <div className={styles.grid}>
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={styles.card}
                >
                    <Link href={project.videoUrl} target="_blank" className={styles.link}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.viewBtn}>View Project</span>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <span className={styles.category}>{project.category}</span>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
