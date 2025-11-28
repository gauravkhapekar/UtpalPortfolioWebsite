'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        const data = {
            'form-name': 'contact',
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString(),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setStatus(null)} className={styles.submitBtn} style={{ marginTop: '1rem' }}>
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />

            <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required disabled={status === 'submitting'} />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required disabled={status === 'submitting'} />
            </div>

            <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required disabled={status === 'submitting'}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
                <p style={{ color: 'red', marginTop: '1rem' }}>Something went wrong. Please try again.</p>
            )}
        </form>
    );
}
