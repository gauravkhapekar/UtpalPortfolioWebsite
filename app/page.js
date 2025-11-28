import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import projects from '@/data/projects.json';
import Link from 'next/link';

export default function Home() {
  // Show only first 2 projects on home page
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Hero />

      <section className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem' }}>Selected Works</h2>
          <Link href="/portfolio" style={{ textDecoration: 'underline' }}>View All</Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="container" style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            I am a passionate videographer with a keen eye for detail. I love telling stories through the lens and capturing moments that last a lifetime.
          </p>
          <Link href="/about" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'var(--foreground)',
            color: 'var(--background)',
            borderRadius: '4px'
          }}>
            More About Me
          </Link>
        </div>
      </section>
    </>
  );
}
