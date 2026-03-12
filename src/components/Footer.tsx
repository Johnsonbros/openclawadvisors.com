import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm text-slate-400">
        <div>
          <p className="text-white font-bold mb-2"><span className="text-red-500">OpenClaw</span> Advisors</p>
          <p>Security-First AI Consulting</p>
          <p className="mt-2">hello@openclawadvisors.com</p>
        </div>
        <div className="space-y-1">
          <Link href="/services" className="block hover:text-white">Services</Link>
          <Link href="/blog" className="block hover:text-white">Blog</Link>
          <Link href="/about" className="block hover:text-white">About</Link>
          <Link href="/contact" className="block hover:text-white">Contact</Link>
        </div>
        <div>
          <p className="text-slate-500">© {new Date().getFullYear()} OpenClaw Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
