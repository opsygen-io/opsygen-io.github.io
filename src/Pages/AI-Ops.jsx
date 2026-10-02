import React from "react";
import { PageHero, CTA } from "../Components";
export default function AIOps() {
  return (
    <>
      <PageHero
        eyebrow="AI-Ops Vision"
        title="From operational visibility to intelligent action"
      >
        <p className="lead">
          Our vision is to make enterprise operations more informed, responsive,
          and consistent through AI assistance grounded in real operational
          context.
        </p>
        <p>
          Managed platforms provide the foundation. Observability supplies the
          evidence. Automation creates a controlled path to action.
        </p>
      </PageHero>
      <section className="section">
        <div className="container section-intro">
          <h2>Intelligence needs context</h2>
          <p>
            Useful operational AI needs more than documentation. It needs to
            understand service dependencies, ownership, configuration, recent
            changes, and the procedures teams use to operate their systems.
          </p>
          <p>
            Our direction brings these sources together so AI can help teams
            investigate issues, assess options, and act within established
            controls.
          </p>
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <h2>Our path forward</h2>
          <div className="two-column">
            {[
              [
                "Understand",
                "Connect operational signals with platform configuration, service relationships, and enterprise knowledge.",
              ],
              [
                "Assist",
                "Help teams investigate incidents, identify possible causes, and recommend next steps with supporting evidence.",
              ],
              [
                "Act with control",
                "Connect AI assistance to approved workflows, with defined permissions, human approval where required, and an audit trail.",
              ],
              [
                "Learn and improve",
                "Use operational outcomes to refine procedures, strengthen automation, and identify opportunities to prevent recurring issues.",
              ],
            ].map(([t, p], i) => (
              <article key={t}>
                <div className="roadmap-heading">
                  <span className="roadmap-number">{i + 1}</span>
                  <h3>{t}</h3>
                </div>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-column">
          <article>
            <h2>Human oversight by design</h2>
            <p>
              The level of autonomy should reflect the impact of an action and
              the confidence in the evidence behind it.
            </p>
            <p>
              Our approach emphasizes clear boundaries, accountable ownership,
              and reviewable decisions—especially for changes that affect
              critical services.
            </p>
          </article>
          <article>
            <h2>Built on enterprise platforms</h2>
            <p>
              We see AI assistance becoming part of how platforms are deployed,
              managed, and improved throughout their lifecycle.
            </p>
            <p>
              Platforms delivered through Microsoft Azure, AWS, and Google Cloud
              marketplaces provide a foundation for this evolution, with
              capabilities introduced according to platform readiness and
              customer requirements.
            </p>
          </article>
        </div>
      </section>
      <CTA
        title="Shape the next stage of your operations"
        text="Talk to us about your operational challenges and where AI assistance could deliver practical value."
        label="Discuss Your AI Operations Goals"
      />
    </>
  );
}
