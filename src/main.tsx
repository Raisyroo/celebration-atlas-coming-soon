import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const mapMarkers = ['Romeo', 'Traverse City', 'Mackinac', 'Detroit', 'Marquette'];

function App() {
  return (
    <main className="atlas-shell">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/festival-hero.svg"
          alt="A cinematic Michigan festival at dusk with tents, fireworks, and a ferris wheel beneath atlas constellations."
        />
        <div className="hero-shade" aria-hidden="true" />
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#hero-title">Celebration Atlas</a>
          <a href="#michigan-map">Michigan</a>
          <a href="#early-access">Access</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Michigan · celebrations · hidden atlas</p>
          <h1 id="hero-title">Discover the celebrations of Michigan.</h1>
          <p className="tagline">A dark atlas of festivals, fairs, rituals, and seasonal gatherings across the Great Lakes State.</p>
          <a className="atlas-button" href="#michigan-map">Enter the atlas</a>
        </div>

        <aside className="hero-card" aria-label="Featured celebration">
          <p>Featured coordinate</p>
          <strong>Romeo Peach Festival</strong>
          <span>Warm lights. County roads. Late-summer Michigan.</span>
        </aside>
      </section>

      <section className="map-section" id="michigan-map" aria-labelledby="map-title">
        <div className="map-copy">
          <p className="eyebrow">The Great Lakes State</p>
          <h2 id="map-title">Follow the glowing markers.</h2>
          <p>Every point opens a celebration. Every celebration reveals a place.</p>
        </div>

        <figure className="map-card">
          <img
            src="/michigan-atlas-map.svg"
            alt="Illustrated Michigan atlas map with glowing gold celebration markers across the Upper and Lower Peninsulas."
          />
          <figcaption>
            {mapMarkers.map((marker) => (
              <span key={marker}>{marker}</span>
            ))}
          </figcaption>
        </figure>
      </section>

      <section className="access-dock" id="early-access" aria-labelledby="access-title">
        <div>
          <p className="eyebrow">Invitation</p>
          <h2 id="access-title">Receive the first key.</h2>
        </div>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          <button type="submit">Request access</button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
