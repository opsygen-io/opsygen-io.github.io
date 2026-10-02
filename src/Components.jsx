import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Layers,
  Activity,
  Workflow,
  Sparkles,
} from "lucide-react";
export function CTA({
  title = "Let’s strengthen your platform foundations.",
  text = "Start with a conversation about your operational goals.",
  label = "Talk to Our Team",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="button" to="/Contact">
            {label}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <div className="hero-copy">{children}</div>
      </div>
    </section>
  );
}
export function Cards({ items }) {
  return (
    <div className="cards">
      {items.map(({ title, text, icon: Icon = Layers, wide = false }) => (
        <article className={`capability ${wide ? "wide" : ""}`} key={title}>
          <Icon size={26} aria-hidden="true" />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
export const capabilities = [
  {
    title: "Platform Engineering",
    text: "Build consistent foundations for enterprise applications across cloud, hybrid, and Kubernetes environments.",
    icon: Layers,
    wide: true,
  },
  {
    title: "Observability & Operational Insight",
    text: "Connect logs, metrics, and traces to understand service health, investigate issues, and inform capacity decisions.",
    icon: Activity,
  },
  {
    title: "Automation & Orchestration",
    text: "Standardize deployment and operational workflows to reduce manual effort and make change more predictable.",
    icon: Workflow,
  },
  {
    title: "AI-Assisted Operations",
    text: "Build toward practical AI assistance grounded in operational context, with human oversight and controlled execution.",
    icon: Sparkles,
    wide: true,
  },
];
export function PlatformVisual() {
  return (
    <div
      className="platform-visual"
      aria-label="Marketplace delivery and managed platform capabilities"
    >
      <span className="diagram-label">From marketplace to operations</span>
      <div className="clouds">
        <span>Azure</span>
        <span>AWS</span>
        <span>Google Cloud</span>
      </div>
      <div className="connector" />
      <div className="platform-core">
        <strong>Managed platforms</strong>
        <span>Deploy · Integrate · Operate · Evolve</span>
      </div>
      <div className="connector" />
      <div className="platform-layers">
        {[
          [Activity, "Observability"],
          [Workflow, "Automation"],
          [Sparkles, "AI assistance"],
        ].map(([Icon, label]) => (
          <div key={label}>
            <Icon size={20} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="governance">Security · Governance · Human oversight</p>
    </div>
  );
}
