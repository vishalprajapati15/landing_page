import React from 'react'

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative"
    >
      <div>
        <p>
          Nehru Vihar, Delhi's Digital Service Hub
        </p>

        <h1 id="hero-heading">
          Digital Services & Cyber Cafe in Nehru Vihar, Delhi
        </h1>

        <p>
          MAX POINT Cyber Cafe provides reliable online and digital
          services in Nehru Vihar, Delhi. Get government and exam form
          filling, ITR filing, GST registration, AEPS, money transfer,
          printing, PDF editing, website design, WhatsApp automation
          and more.
        </p>

        <div>
          <a href="#services">
            Explore Services
          </a>

          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero