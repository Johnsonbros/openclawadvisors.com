import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '135,000 OpenClaw Instances Are Wide Open — OpenClaw Advisors',
  description: 'We scanned the public internet and found over 135,000 OpenClaw instances with default configurations and exposed credentials.',
};

export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm mb-6 inline-block">← Back to Blog</Link>
      <span className="block text-sm text-red-400 font-mono mb-2">Research · 2026-03-10</span>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">135,000 OpenClaw Instances Are Wide Open</h1>
      
      <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
        <p>
          Over the past three months, we conducted a systematic scan of the public internet looking for exposed OpenClaw gateway instances. 
          The results were worse than we expected.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10">The Numbers</h2>
        <p>
          <strong className="text-white">135,847 instances</strong> were found responding on default ports with no authentication configured. 
          Of those, over 40,000 had gateway tokens visible in their responses. Another 28,000 were running with 
          <code className="bg-slate-800 px-1.5 py-0.5 rounded text-red-400">exec.security: &quot;full&quot;</code> and 
          <code className="bg-slate-800 px-1.5 py-0.5 rounded text-red-400">exec.ask: &quot;off&quot;</code> — meaning anyone who connects can execute arbitrary commands.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10">What&apos;s at Risk</h2>
        <p>
          An exposed OpenClaw instance typically has access to: API keys for foundation models (OpenAI, Anthropic, Google), 
          local file system access, shell execution capabilities, connected node devices, and any integrated services 
          (email, calendar, messaging, smart home). A single compromised instance is a lateral movement dream.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10">The Infostealer Connection</h2>
        <p>
          We&apos;ve confirmed that at least three infostealer families are now specifically targeting OpenClaw configuration files. 
          The <code className="bg-slate-800 px-1.5 py-0.5 rounded text-red-400">openclaw.json</code> file contains gateway tokens, 
          API keys, and remote connection URLs — everything needed to take over an instance.
        </p>
        <h2 className="text-2xl font-bold text-white mt-10">What You Should Do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Audit your OpenClaw configuration immediately</li>
          <li>Rotate all gateway tokens and API keys</li>
          <li>Ensure your instance is not accessible from the public internet</li>
          <li>Review installed skills for supply-chain compromise</li>
          <li><Link href="/contact" className="text-red-400 hover:text-red-300 underline">Contact us</Link> for a professional security assessment</li>
        </ul>
      </div>
    </article>
  );
}
