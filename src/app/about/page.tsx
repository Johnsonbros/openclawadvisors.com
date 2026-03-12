import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — OpenClaw Advisors',
  description: 'Founded by practitioners who build on OpenClaw daily. We know the attack surface because we mapped it.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About OpenClaw Advisors</h1>
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p>
          OpenClaw Advisors was founded on a simple premise: <strong className="text-white">the people best equipped to 
          secure a platform are the ones who use it every day.</strong>
        </p>
        <p>
          We didn&apos;t start as a security consultancy. We started as OpenClaw power users — deploying agents, building skills, 
          connecting nodes, automating workflows. We pushed the platform to its limits. And in doing so, we found the cracks.
        </p>
        <p>
          135,000 exposed instances. 400+ malicious skills. Infostealers targeting config files. A supply chain with no 
          review process. These aren&apos;t theoretical vulnerabilities — they&apos;re what we found by looking.
        </p>
      </div>

      {/* Founder */}
      <div className="card mt-16">
        <div className="md:flex gap-8 items-start">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-3xl font-bold shrink-0 mb-4 md:mb-0">
            NJ
          </div>
          <div>
            <h2 className="text-2xl font-bold">Nate Johnson</h2>
            <p className="text-red-400 font-mono text-sm mb-4">Founder</p>
            <p className="text-slate-400">
              Nate has been building on OpenClaw since its early days — deploying multi-agent systems, 
              developing custom skills, and integrating AI agents into real business operations. His deep familiarity 
              with the platform&apos;s internals, combined with a security-first mindset, led him to systematically map 
              OpenClaw&apos;s attack surface. OpenClaw Advisors is the result: turning that knowledge into protection 
              for organizations that depend on AI agent infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Practitioner-First', desc: 'We use OpenClaw in production. Our recommendations come from real-world experience, not theory.' },
            { title: 'Transparent', desc: 'We publish our research. We explain our findings. No black-box assessments or vague recommendations.' },
            { title: 'Actionable', desc: 'Every engagement ends with a prioritized, step-by-step remediation plan you can execute immediately.' },
            { title: 'Ongoing', desc: 'Security isn\'t a one-time audit. We offer continuous monitoring and support to keep your deployment hardened.' },
          ].map(v => (
            <div key={v.title} className="card">
              <h3 className="text-xl font-bold text-amber-400 mb-2">{v.title}</h3>
              <p className="text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/contact" className="btn-primary text-lg">Work With Us</Link>
      </div>
    </div>
  );
}
