import Image from 'next/image';
import aboutData from '@/data/about.json';

export const metadata = {
    title: 'About | Utpal',
    description: 'About Utpal, the videographer.',
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                    {aboutData.bio}
                </p>
            </div>

            <div style={{ marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {aboutData.experience.map((exp, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr',
                            gap: '2rem',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            paddingBottom: '2rem'
                        }}>
                            <div style={{ opacity: 0.6 }}>{exp.year}</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                                <div style={{ marginBottom: '0.5rem', fontWeight: '500' }}>{exp.company}</div>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Moments</h2>
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    overflowX: 'auto',
                    paddingBottom: '1rem',
                    scrollSnapType: 'x mandatory'
                }}>
                    {aboutData.moments.map((url, index) => (
                        <div key={index} style={{
                            flex: '0 0 300px',
                            aspectRatio: '3/4',
                            position: 'relative',
                            scrollSnapAlign: 'start',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            background: '#f0f0f0'
                        }}>
                            <Image
                                src={url}
                                alt={`Moment ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
