import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const artifactCards = [
  {
    label: 'Traditions',
    title: 'Inherited rituals',
    copy: 'Trace the gestures, recipes, songs, and gatherings that travel across households and generations.',
  },
  {
    label: 'Discoveries',
    title: 'Found moments',
    copy: 'Collect the unexpected places, stories, and local details that make a celebration feel grounded.',
  },
  {
    label: 'Memories',
    title: 'Living records',
    copy: 'Preserve the personal notes and sensory fragments that turn an event into a cultural artifact.',
  },
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero section-panel" aria-labelledby="hero-title">
        <div className="atlas-orbit" aria-hidden="true" />
        <p className="eyebrow">TheCelebrationAtlas.com</p>
        <h1 id="hero-title">A living atlas of how we gather, remember, and celebrate.</h1>
        <p className="hero-copy">
          Celebration Atlas is a living system of cultural artifacts built from celebrations,
          traditions, discoveries, and memories.
        </p>
        <div className="hero-actions">
          <a href="#early-access" className="button button-primary">Join early access</a>
          <a href="#michigan" className="button button-ghost">Explore the launch map</a>
        </div>
      </section>

      <section className="intro-grid" aria-label="Celebration Atlas overview">
        <article className="section-panel content-card" id="what-is">
          <p className="eyebrow">What is Celebration Atlas?</p>
          <h2>A practical field guide for meaningful occasions.</h2>
          <p>
            Celebration Atlas is being built as a cinematic, searchable home for cultural
            context: the objects on the table, the routes people travel, the local lore, and
            the small rituals that make a gathering unmistakably yours.
          </p>
        </article>

        <article className="section-panel content-card cartographer-card" id="cartographer">
          <p className="eyebrow">The Cartographer</p>
          <h2>Guided by human stories, organized like a map.</h2>
          <p>
            The Cartographer is the editorial compass of Celebration Atlas: part researcher,
            part archivist, part host. It helps transform scattered memories into useful,
            beautiful coordinates for future celebrations.
          </p>
        </article>
      </section>

      <section className="section-panel artifacts" id="artifacts" aria-labelledby="artifacts-title">
        <div className="section-heading">
          <p className="eyebrow">Artifacts</p>
          <h2 id="artifacts-title">Every celebration leaves a trail.</h2>
          <p>
            We are cataloging the traces that make culture visible, from heirloom recipes to
            neighborhood parades and the quiet objects people keep long after the lights go down.
          </p>
        </div>
        <div className="artifact-grid">
          {artifactCards.map((card) => (
            <article className="artifact-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel michigan" id="michigan" aria-labelledby="michigan-title">
        <div>
          <p className="eyebrow">Michigan Launch</p>
          <h2 id="michigan-title">Beginning where lake light meets local memory.</h2>
          <p>
            Our first coordinates are rooted in Michigan: intimate town traditions, seasonal
            festivals, family gatherings, and the cultural texture of communities shaped by water,
            winter, migration, craft, and food.
          </p>
        </div>
        <div className="map-card" aria-label="Stylized Michigan launch coordinates">
          <span className="coordinate coordinate-one">44.3148° N</span>
          <span className="coordinate coordinate-two">85.6024° W</span>
          <span className="map-pin" />
          <span className="map-route" />
        </div>
      </section>

      <section className="section-panel early-access" id="early-access" aria-labelledby="early-access-title">
        <p className="eyebrow">Join Early Access</p>
        <h2 id="early-access-title">Be first to enter the atlas.</h2>
        <p>
          Sign up for launch notes, early previews, and invitations to help shape the first
          Celebration Atlas artifact collections. No backend is connected yet; this form is a
          placeholder for the upcoming release.
        </p>
        <form className="signup-form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
            <button type="submit">Reserve my place</button>
          </div>
          <small>Coming soon. Your email will not be submitted from this temporary page.</small>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
