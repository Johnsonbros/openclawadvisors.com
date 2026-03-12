import Link from 'next/link';

const stats = [
  { number: '135K+', label: 'Exposed OpenClaw instances', icon: '🔓' },
  { number: '400+', label: 'Malicious skills in registries', icon: '☠️' },
  { number: '24/7', label: 'Data exfiltration risk', icon: '🚨' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 relative">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1 text-red-400 text-sm font-mono mb-6">
            ⚠ CRITICAL EXPOSURE DETECTED
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Your AI Systems Are{' '}
            <span className="text-red-500">Exposed</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl">
            We scanned the internet and found 135,000+ OpenClaw instances wide open — credentials exposed, 
            skills compromised, configs leaking to infostealers. If you run OpenClaw, you&apos;re probably one of them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-lg">Book Free Assessment</Link>
            <Link href="/services" className="btn-secondary text-lg">View Services</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="stat-number">{s.number}</div>
              <p className="mt-2 text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why This Matters</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          OpenClaw connects to your foundation models, your data, your infrastructure. 
          A compromised instance isn&apos;t just a security incident — it&apos;s a skeleton key to everything your AI touches.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Credential Theft',
              desc: 'Infostealers are actively harvesting OpenClaw configs with API keys, tokens, and connection strings.',
              color: 'text-red-500',
            },
            {
              title: 'Malicious Skills',
              desc: '400+ trojanized skills in public registries. One install, full system access. No review process stops them.',
              color: 'text-amber-500',
            },
            {
              title: 'Foundation Model Risk',
              desc: 'Peter Steinberger\'s OpenAI connection means OpenClaw vulnerabilities cascade into foundation model security.',
              color: 'text-red-500',
            },
          ].map(item => (
            <div key={item.title} className="card">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value prop */}
      <section className="border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We Use OpenClaw. We Found the Vulnerabilities. We Fix Them.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            OpenClaw Advisors was founded by practitioners who build on OpenClaw daily. We don&apos;t just read CVEs — 
            we discovered the attack surface. That&apos;s why companies trust us to secure their AI infrastructure.
          </p>
          <Link href="/contact" className="btn-primary text-lg">Get Your Audit</Link>
        </div>
      </section>
    </>
  );
}
