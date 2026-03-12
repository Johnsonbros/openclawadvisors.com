import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — OpenClaw Advisors',
  description: 'Research, analysis, and guidance on securing AI agent deployments.',
};

const posts = [
  {
    slug: '135000-openclaw-instances-wide-open',
    title: '135,000 OpenClaw Instances Are Wide Open',
    date: '2026-03-10',
    excerpt: 'We scanned the public internet and found over 135,000 OpenClaw instances with default configurations, exposed credentials, and no authentication. Here\'s what we found and why it matters.',
    tag: 'Research',
    tagColor: 'bg-red-600/20 text-red-400',
  },
  {
    slug: 'why-your-ai-agent-needs-a-firewall',
    title: 'Why Your AI Agent Needs a Firewall',
    date: '2026-03-08',
    excerpt: 'Your AI agent has more access than most employees. It reads your files, calls APIs, executes code. So why doesn\'t it have a firewall? We break down the agent security model and what\'s missing.',
    tag: 'Analysis',
    tagColor: 'bg-amber-600/20 text-amber-400',
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-slate-400 text-lg mb-12">Research, threat intelligence, and practical guidance for securing AI agent infrastructure.</p>
      <div className="space-y-8">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card block group">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${p.tagColor}`}>{p.tag}</span>
              <span className="text-sm text-slate-500">{p.date}</span>
            </div>
            <h2 className="text-2xl font-bold group-hover:text-red-400 transition-colors">{p.title}</h2>
            <p className="text-slate-400 mt-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
