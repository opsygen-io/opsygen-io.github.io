import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CTA, Cards, capabilities, PlatformVisual } from "../Components";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">
                Cloud marketplaces · Enterprise operations
              </span>
              <h1>
                Enterprise platforms.
                <br />
                <span>Built to operate.</span>
              </h1>
              <p className="lead">
                Managed platforms delivered through cloud marketplaces—Microsoft
                Azure, AWS, and Google Cloud.
              </p>
              <p>
                Opsygen helps organizations deploy and operate enterprise
                platforms through their preferred cloud marketplace. We bring
                platform engineering, observability, and automation together to
                support reliable services—from initial deployment through
                ongoing operations.
              </p>
              <div className="actions">
                <Link className="button" to="/Products">
                  Explore Our Capabilities
                  <ArrowUpRight size={17} />
                </Link>
                <Link className="button secondary" to="/Contact">
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <PlatformVisual />
          </div>
          <div className="marketplace-strip">
            <span>Delivered through cloud marketplaces</span>
            <strong>Microsoft Azure</strong>
            <strong>AWS</strong>
            <strong>Google Cloud</strong>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Marketplace delivery</span>
            <h2>Your cloud. A simpler path to enterprise platforms.</h2>
            <p>
              Cloud marketplaces provide a familiar route to discover and
              procure platforms within your cloud ecosystem.
            </p>
            <p>
              Our approach combines marketplace delivery with repeatable
              deployment, integration, and lifecycle management, helping your
              teams adopt platforms that fit their environment and operational
              requirements.
            </p>
            <p className="note">
              Availability depends on the platform and deployment model.
            </p>
          </div>
          <Cards items={capabilities} />
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <span className="eyebrow">Enterprise by design</span>
          <h2>Designed for enterprise realities.</h2>
          <div className="principles">
            {[
              [
                "Fit your environment",
                "Integrate with existing infrastructure, tools, and processes while supporting your modernization goals.",
              ],
              [
                "Make operations repeatable",
                "Use reusable configurations, automated workflows, and clear procedures to improve consistency across teams.",
              ],
              [
                "Build governance into delivery",
                "Incorporate access controls, change management, and auditability into platform design and operations.",
              ],
              [
                "Prepare for what comes next",
                "Create foundations that support new workloads, growing demand, and evolving operational capabilities.",
              ],
            ].map(([title, text], i) => (
              <article key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container section-intro">
          <span className="eyebrow">The full lifecycle</span>
          <h2>From architecture to ongoing operations</h2>
          <p>
            We work with your teams to understand requirements, establish the
            right platform foundations, and improve how services are delivered
            and operated.
          </p>
          <p>
            Our approach connects design, implementation, enablement, and
            ongoing management throughout the platform lifecycle.
          </p>
        </div>
      </section>
      <CTA text="Whether you are modernizing an existing environment or building a new platform, start with a conversation about your operational goals." />
    </>
  );
}
