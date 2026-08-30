import React from 'react';
import { Terminal, Shield, Cpu, GitBranch, Server, ExternalLink, Mail, Award, CheckCircle2 } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-mono text-cyan-400 font-bold">
            <Terminal className="w-5 h-5" />
            <span>yohanes.devops</span>
          </div>
          <div className="flex space-x-6 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#certifications" className="hover:text-cyan-400 transition">Certifications</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Security Engineer transitioning to DevOps & AI Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Yohanes Satria Pamungkas</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Computer Science graduate and Security Engineer bridging the gap between operations and security. Specialized in DevSecOps, supply chain security, and AI infrastructure pipelines.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition flex items-center space-x-2">
              <Server className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 transition flex items-center space-x-2">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <Award className="w-6 h-6 text-cyan-400" />
              <span>Certifications & Expertise</span>
            </h2>
            <p className="text-slate-400 text-sm">Validated skills across infrastructure security, DevSecOps, and AI systems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">Certified AI Security Professional (CAISP)</span>
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400">Practical DevSecOps • Securing modern AI workloads, LLM pipelines, and model deployments.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">Certified DevSecOps Professional (CDP)</span>
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400">Practical DevSecOps • Automated pipeline security, SAST/DAST, and supply chain integrity.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">CCNAv7: Introduction to Networks</span>
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400">Cisco Networking Academy • Strong foundation in networking, routing, and protocols.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">Python 101 for Data Science & Automation</span>
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400">IBM / Dicoding • Scripting, automation, and tooling fundamentals.</p>
            </div>
          </div>
        </section>

        {/* Projects Section (Highlighting Portfolio CI/CD) */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <GitBranch className="w-6 h-6 text-cyan-400" />
              <span>DevOps Showcase Project</span>
            </h2>
            <p className="text-slate-400 text-sm">Demonstrating deployment and infrastructure automation principles.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-cyan-300">This Portfolio App & Automated CI/CD Pipeline</h3>
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono self-start">Active Production</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              A modern, highly performant React application designed to exhibit a professional transition into DevOps. Built with container readiness in mind, integrated with automated build hooks, and managed via version control workflows.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">React & Tailwind</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">GitHub Actions</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">Automated Deployment</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">Shift-Left Security</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6 text-center pb-12">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Looking for a dedicated engineer ready to tackle DevOps, pipeline security, and infrastructure roles? Drop me a message.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:yohanesstrp@gmail.com" className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500 transition flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>yohanesstrp@gmail.com</span>
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Yohanes Satria Pamungkas. Built with resilience and automation.
      </footer>
    </div>
  );
}