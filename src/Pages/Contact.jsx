import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "../Components";
export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk about your platforms">
        <p className="lead">
          Whether you are adopting a platform through a cloud marketplace,
          modernizing your environment, or improving ongoing operations, we’d
          like to understand your goals.
        </p>
        <p>
          We can discuss platform requirements, marketplace delivery options,
          integration, and the operational support your teams need.
        </p>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="leadership contact-options">
            <article>
              <Mail aria-hidden="true" />
              <h2>Email</h2>
              <a href="mailto:info@opsygen.io">info@opsygen.io</a>
            </article>
            <article>
              <Phone aria-hidden="true" />
              <h2>Phone</h2>
              <a href="tel:+16475475838">+1 (647) 547-5838</a>
            </article>
            <article>
              <MapPin aria-hidden="true" />
              <h2>Based in Canada</h2>
              <p>
                Toronto, Ontario
                <br />
                Working with organizations internationally.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="container section-intro">
          <h2>Start with your requirements</h2>
          <p>
            Tell us about your environment, preferred cloud provider, and what
            you want to deploy or improve. We’ll help identify a suitable next
            step.
          </p>
          <a className="button" href="mailto:info@opsygen.io">
            Email Our Team
          </a>
        </div>
      </section>
    </>
  );
}
