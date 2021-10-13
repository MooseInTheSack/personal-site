import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/tk.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tyler Kirkpatrick</h2>
        <p><a href="mailto:tkirkpatrick@smu.edu">tkirkpatrick@smu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Tyler. I like building things.
        I am an SMU Computer Science graduate, Texas A&M MBA graduate, and
        currently a Senior Software Developer at <a href="https://kirkpatrickbank.com">Kirkpatrick Bank</a>. Before that I was
        a Software Developer at <a href="https://walmart.com">Walmart</a>
        , and a Software Developer Intern at <a href="https://www.amerch.com/">Anderson Merchandisers</a>
        .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
