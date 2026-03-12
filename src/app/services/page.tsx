import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — OpenClaw Advisors',
  description: 'Security audits, architecture review, deployment hardening, and incident response for OpenClaw deployments.',
};

const tiers = [
  {
    name: 'Security Audit',
    price: '$500 – $2K',
    color: 'border-amber-500',
    accent: 'text-amber-500',
    deliverables: [
      'Full configuration review',
      'Exposed credential scan',
      'Skill supply-chain analysis',
      'Network exposure assessment',
      'Prioritized remediation report',
      'Executive summary',
    ],
    cta: 'Book Audit',
  },
  {
    name: 'Architecture Review',
    price: '$2K – $5K',
    color: 'border-red-500',
    accent: 'text-red-500',
    popular: true,
    deliverables: [
      'Everything in Security Audit',
      'Multi-agent topology review',
      'Permission model analysis',
      'Data flow mapping',
      'Threat modeling (STRIDE)',
      'Architecture recommendations doc',
      '2 hours consultation calls',
    ],
    cta: 'Book Review',
  },
  {
    name: 'Deployment Hardening',
    price: '$5K – $10K',
    color: 'border-red-600',
    accent: 'text-red-600',
    deliverables: [
      'Everything in Architecture Review',
      'Hands-on hardening implementation',
      'Network segmentation setup',
      'Secret management configuration',
      'Monitoring & alerting setup',
      'Incident runbook creation',
      'Team training session (4 hrs)',
      '30-day post-engagement support',
    ],
    cta: 'Book Hardening',
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          From a quick security check to full deployment hardening. Every engagement is tailored to your OpenClaw setup.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {tiers.map(t => (
          <div key={t.name} className={`card border-2 ${t.color} relative flex flex-col`}>
            {t.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h3 className={`text-2xl font-bold ${t.accent}`}>{t.name}</h3>
            <p className="text-3xl font-bold font-mono mt-2 mb-6">{t.price}</p>
            <ul className="space-y-3 flex-1">
              {t.deliverables.map(d => (
                <li key={d} className="flex items-start gap-2 text-slate-300">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {d}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary text-center mt-8 block">{t.cta}</Link>
          </div>
        ))}
      </div>

      {/* Incident Response */}
      <div className="card border-2 border-red-800 bg-red-950/20">
        <div className="md:flex items-center justify-between gap-8">
          <div>
            <div className="inline-block bg-red-600/20 text-red-400 text-sm font-mono px-3 py-1 rounded-full mb-4">
              🚨 EMERGENCY
            </div>
            <h3 className="text-2xl font-bold text-red-500">Incident Response</h3>
            <p className="text-slate-400 mt-2 max-w-xl">
              Already compromised? We provide emergency incident response for OpenClaw breaches. 
              Containment, forensics, remediation, and post-incident hardening. Custom scoping — contact us immediately.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link href="/contact" className="btn-primary whitespace-nowrap">Contact Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
