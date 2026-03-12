import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your AI Agent Needs a Firewall — OpenClaw Advisors',
  description: 'Your AI agent has more access than most employees. So why doesn\'t it have a firewall?',
};

export default function Post() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-20">
      <Link href="/blog" className="text-slate-500 hover:text-slate-300 text-sm mb-6 inline-block">← Back to Blog</Link>
      <span className="block text-sm text-amber-400 font-mono mb-2">Analysis · 2026-03-08</span>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Why Your AI Agent Needs a Firewall</h1>
      
      <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">
        <p>
          Think about what your AI agent can do. It reads your files. It sends emails on your behalf. It executes shell commands. 
          It has API keys to your cloud infrastructure. It connects to your smart home. In most deployments, 
          an AI agent has more access than any single employee in the organization.
        </p>
        <p>Now ask yourself: does it have a firewall?</p>

        <h2 className="text-2xl font-bold text-white mt-10">The Access Problem</h2>
        <p>
          Traditional security models are built around humans. Authentication, authorization, audit trails — all designed for 
          people who click buttons and fill out forms. AI agents don&apos;t work that way. They operate through tool calls, 
          skill installations, and automated workflows that bypass traditional security controls.
        </p>
        <p>
          OpenClaw&apos;s skill system is particularly interesting. Skills are essentially plugins that extend an agent&apos;s capabilities. 
          They can execute code, access the filesystem, make network requests, and interact with external services. 
          The public skill registry has no security review process. Anyone can publish a skill, and any agent can install it.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">What an Agent Firewall Looks Like</h2>
        <p>An effective agent security layer needs to address three domains:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Network boundaries</strong> — What can the agent connect to? What can connect to it? Default should be deny-all with explicit allowlists.</li>
          <li><strong className="text-white">Execution boundaries</strong> — What commands, tools, and skills can execute? With what permissions? Under what conditions?</li>
          <li><strong className="text-white">Data boundaries</strong> — What data can the agent read, write, and transmit? Where can it send information?</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10">The 400 Malicious Skills Problem</h2>
        <p>
          We&apos;ve identified over 400 skills in public registries that exhibit malicious behavior — from credential harvesting 
          to reverse shells to data exfiltration. Many are typosquats of popular legitimate skills. Others look benign 
          but contain obfuscated payloads that activate after installation.
        </p>
        <p>
          Without a firewall — without boundaries on what skills can do after installation — every skill install is a trust decision 
          with the blast radius of full system access.
        </p>

        <h2 className="text-2xl font-bold text-white mt-10">Start Now</h2>
        <p>
          You don&apos;t need to wait for OpenClaw to build agent firewalling into the platform. There are steps you can take today 
          to reduce your attack surface. <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">Book an assessment</Link> and 
          we&apos;ll show you exactly where your boundaries should be.
        </p>
      </div>
    </article>
  );
}
