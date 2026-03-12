import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'OpenClaw Advisors — Security-First AI Consulting',
  description: 'We found 135,000+ exposed OpenClaw instances. We know how to fix them. Security audits, architecture review, and deployment hardening for AI agent systems.',
  keywords: ['OpenClaw', 'AI security', 'agent security', 'AI consulting', 'deployment hardening'],
  openGraph: {
    title: 'OpenClaw Advisors — Security-First AI Consulting',
    description: 'Your AI systems are exposed. We can fix that.',
    type: 'website',
    url: 'https://openclawadvisors.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'OpenClaw Advisors',
              description: 'Security-First AI Consulting for OpenClaw deployments',
              url: 'https://openclawadvisors.com',
              email: 'hello@openclawadvisors.com',
              areaServed: 'Worldwide',
              serviceType: ['AI Security Audit', 'Architecture Review', 'Deployment Hardening', 'Incident Response'],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
