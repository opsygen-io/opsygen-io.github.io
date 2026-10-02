import React from "react";
import { PageHero, CTA } from "../Components";
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Opsygen"
        title="Built on engineering. Focused on operations."
      >
        <p className="lead">
          Opsygen Ltd. is a Canadian company focused on enterprise platforms and
          the operations that sustain them.
        </p>
        <p>
          We bring platform engineering, observability, and automation together
          to help organizations deploy, manage, and evolve the foundations
          behind their digital services.
        </p>
      </PageHero>
      <section className="section">
        <div className="container section-intro">
          <h2>Our mission</h2>
          <p className="lead">
            Make enterprise platforms easier to adopt and operate.
          </p>
          <p>
            We combine delivery through Microsoft Azure, AWS, and Google Cloud
            marketplaces with engineering expertise across the platform
            lifecycle—from architecture and integration to ongoing management
            and improvement.
          </p>
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <h2>Our approach</h2>
          <div className="two-column">
            {[
              [
                "Design for operations",
                "Consider reliability, security, visibility, and maintainability from the beginning.",
              ],
              [
                "Make delivery repeatable",
                "Build reusable foundations and automated workflows that improve consistency across environments.",
              ],
              [
                "Work with your teams",
                "Connect platform capabilities with existing systems, responsibilities, and business requirements.",
              ],
              [
                "Advance AI with purpose",
                "Develop AI assistance around practical operational needs, supporting evidence, and accountable human oversight.",
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
        <div className="container">
          <h2>Leadership</h2>
          <div className="leadership">
            {[
              ["Kumar Ratnam", "CEO & Co-Founder"],
              ["Gagandeep Singh Grewal", "CTO & Co-Founder"],
              [
                "Vladimir Tcherkacheninov",
                "Head of Architecture and AI Research",
              ],
            ].map(([name, role]) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Let’s build the right foundations"
        text="Whether you are adopting a new platform or improving an existing environment, we welcome a conversation about your goals."
      />
    </>
  );
}
