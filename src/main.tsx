import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="poster-page" aria-labelledby="hero-title">
      <img
        className="poster-background"
        src="/festival-hero.svg"
        alt="A cinematic Michigan festival at dusk with tents, fireworks, and a ferris wheel beneath atlas constellations."
      />
      <div className="poster-overlay" aria-hidden="true" />

      <section className="poster-content">
        <p className="kicker">Coming soon to Michigan.</p>
        <h1 id="hero-title">Celebration Atlas</h1>
        <p className="subtitle">A living atlas of celebrations, traditions, discoveries, and memories.</p>

        <form className="access-form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
          <label htmlFor="email">Request Access</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="Email address" autoComplete="email" required />
            <button type="submit">Request Access</button>
          </div>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
