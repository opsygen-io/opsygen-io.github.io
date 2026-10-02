import React from "react";
import { Link } from "react-router-dom";
import { Activity, Workflow, Search, Sparkles } from "lucide-react";
import { PageHero, Cards, CTA } from "../Components";
export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Enterprise platforms, delivered through cloud marketplaces"
      >
        <p className="lead">
          Deploy and operate enterprise platforms through Microsoft Azure, AWS,
          and Google Cloud marketplaces.
        </p>
        <p>
          Opsygen combines managed platforms with engineering expertise to
          support deployment, integration, and ongoing operations. Marketplace
          availability varies by platform and deployment model.
        </p>
        <Link className="button" to="/Contact">
          Discuss Your Requirements
        </Link>
      </PageHero>
      <section className="section">
        <div className="container">
          <h2>Platform capabilities</h2>
          <Cards
            items={[
              {
                title: "Observability & Operational Insight",
                text: "Bring logs, metrics, and traces together to understand service health, investigate incidents, and make informed capacity decisions.",
                icon: Activity,
                wide: true,
              },
              {
                title: "Automation & Orchestration",
                text: "Coordinate workflows across applications and infrastructure. Make recurring tasks, deployment processes, and operational changes consistent and repeatable.",
                icon: Workflow,
              },
              {
                title: "Data & Search",
                text: "Build foundations for collecting, processing, and searching enterprise information, supporting operational insight and knowledge discovery.",
                icon: Search,
              },
              {
                title: "AI-Assisted Operations",
                text: "Develop practical AI assistance for investigation, decision support, and controlled automation, grounded in operational context and human oversight.",
                icon: Sparkles,
                wide: true,
              },
            ]}
          />
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <div className="section-intro">
            <h2>More than deployment</h2>
            <p>
              Reliable platforms require ongoing attention to configuration,
              security, capacity, and change. Our approach addresses the full
              platform lifecycle.
            </p>
          </div>
          <div className="two-column">
            {[
              [
                "Architecture & Implementation",
                "Define platform requirements, design the architecture, and establish repeatable deployment foundations.",
              ],
              [
                "Integration & Migration",
                "Connect platforms with existing systems and plan migrations around service dependencies and business requirements.",
              ],
              [
                "Platform Management",
                "Support platform health, configuration, upgrades, and operational improvement within an agreed service scope.",
              ],
              [
                "Training & Enablement",
                "Equip teams with the knowledge, documentation, and procedures needed to operate their platforms confidently.",
              ],
            ].map(([t, p]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container section-intro">
          <h2>Built around your environment</h2>
          <p>
            Choose a platform approach that fits your cloud strategy, security
            requirements, and operating model.
          </p>
          <p>
            We work with your teams to establish responsibilities, integrate
            with existing processes, and define how the platform will be managed
            over time.
          </p>
        </div>
      </section>
      <CTA
        title="Find the right platform foundation"
        text="Tell us what you need to deploy, connect, or improve. We’ll help identify a suitable platform and marketplace delivery path."
      />
    </>
  );
}
