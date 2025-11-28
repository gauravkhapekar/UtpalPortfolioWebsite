import ProjectGrid from '@/components/ProjectGrid';
import projects from '@/data/projects.json';

export const metadata = {
    title: 'Portfolio | Utpal',
    description: 'Selected works of Utpal.',
};

export default function PortfolioPage() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>All Works</h1>
            <ProjectGrid projects={projects} />
        </div>
    );
}
