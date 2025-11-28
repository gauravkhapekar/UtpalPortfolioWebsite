import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Utpal | Videographer Portfolio',
  description: 'Portfolio of Utpal, a professional videographer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
