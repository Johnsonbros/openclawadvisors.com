import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — OpenClaw Advisors',
  description: 'Book a free security assessment for your OpenClaw deployment.',
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="text-slate-400 text-lg mb-12">
        Book a free consultation to discuss your OpenClaw security posture. We&apos;ll identify your biggest risks and recommend next steps.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Book a Consultation</h2>
          <form className="space-y-5" action="https://formspree.io/f/placeholder" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-1">Name</label>
              <input type="text" id="name" name="name" required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-1">Email</label>
              <input type="email" id="email" name="email" required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm text-slate-400 mb-1">Company</label>
              <input type="text" id="company" name="company"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm text-slate-400 mb-1">Interested In</label>
              <select id="service" name="service"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors">
                <option value="audit">Security Audit ($500–$2K)</option>
                <option value="review">Architecture Review ($2K–$5K)</option>
                <option value="hardening">Deployment Hardening ($5K–$10K)</option>
                <option value="incident">Incident Response</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-1">Tell us about your setup</label>
              <textarea id="message" name="message" rows={4}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                placeholder="How many instances? What's your deployment architecture? Any known concerns?" />
            </div>
            <button type="submit" className="btn-primary w-full text-center">Book Free Assessment</button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-xl font-bold mb-3">📧 Email Us</h3>
            <a href="mailto:hello@openclawadvisors.com" className="text-red-400 hover:text-red-300 text-lg">
              hello@openclawadvisors.com
            </a>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-3">📅 Schedule a Call</h3>
            <p className="text-slate-400 mb-4">
              Prefer to talk? Book a 30-minute call to discuss your OpenClaw security needs.
            </p>
            <a href="https://calendly.com/openclawadvisors" target="_blank" rel="noopener noreferrer"
              className="btn-secondary block text-center">
              Open Calendly
            </a>
          </div>

          <div className="card bg-red-950/20 border-red-800">
            <h3 className="text-xl font-bold text-red-500 mb-3">🚨 Active Incident?</h3>
            <p className="text-slate-400">
              If you believe your OpenClaw instance has been compromised, contact us immediately. 
              We provide emergency incident response with rapid triage.
            </p>
            <a href="mailto:hello@openclawadvisors.com?subject=INCIDENT%20RESPONSE%20-%20URGENT" className="btn-primary block text-center mt-4">
              Report Incident
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
