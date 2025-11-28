'use client';

import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <form
            className={styles.form}
            name="contact"
            method="POST"
            data-netlify="true"
            action="/contact/success"
        >
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
    );
}
