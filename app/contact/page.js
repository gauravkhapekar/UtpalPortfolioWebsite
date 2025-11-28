import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact | Utpal',
    description: 'Get in touch with Utpal.',
};

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Get in Touch</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Interested in working together? Fill out the form or send me an email.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>Email</h3>
                        <a href="mailto:hello@utpal.com" style={{ fontSize: '1.2rem' }}>hello@utpal.com</a>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>Phone</h3>
                        <a href="tel:+919876543210" style={{ fontSize: '1.2rem' }}>+91 98765 43210</a>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}
