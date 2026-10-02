import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const navigation = [
  ["Home", "Home"],
  ["Products", "Products & Services"],
  ["AI-Ops", "AI-Ops Vision"],
  ["About", "About"],
  ["Contact", "Contact"],
];
const metadata = {
  Home: [
    "Enterprise platforms. Built to operate.",
    "Managed enterprise platforms delivered through Azure, AWS, and Google Cloud marketplaces. Platform engineering, observability, and automation.",
  ],
  Products: [
    "Products & Services",
    "Enterprise platform capabilities and engineering services across deployment, integration, and ongoing operations.",
  ],
  "AI-Ops": [
    "AI-Ops Vision",
    "AI-assisted operations grounded in operational context, human oversight, and controlled automation.",
  ],
  About: [
    "About",
    "Opsygen Ltd. is a Canadian company focused on enterprise platforms and the operations that sustain them.",
  ],
  Contact: [
    "Contact",
    "Discuss your enterprise platform requirements and cloud marketplace delivery options with Opsygen Ltd.",
  ],
};
export default function Layout({ children, currentPageName }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const [title, description] = metadata[currentPageName] || metadata.Home;
    document.title = `${title} | Opsygen`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }, [currentPageName]);
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/Home">
            <img src="/favicon.svg" alt="" />
            Opsygen
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-navigation"
            className={open ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            {navigation.map(([path, name]) => (
              <Link
                key={path}
                to={`/${path}`}
                aria-current={currentPageName === path ? "page" : undefined}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link className="brand" to="/Home">
                <img src="/favicon.svg" alt="" />
                Opsygen Ltd.
              </Link>
              <p>
                Enterprise platforms delivered through cloud marketplaces.
                Engineering expertise across deployment, integration, and
                ongoing operations.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <Link to="/Products">Products & Services</Link>
              <Link to="/AI-Ops">AI-Ops Vision</Link>
            </div>
            <div>
              <h3>Company</h3>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </div>
            <div>
              <h3>Get in Touch</h3>
              <a href="mailto:info@opsygen.io">info@opsygen.io</a>
              <a href="tel:+16475475838">+1 (647) 547-5838</a>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Opsygen Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
