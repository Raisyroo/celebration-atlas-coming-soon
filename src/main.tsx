import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const atlasCards = [
  {
    eyebrow: 'Field Guide I',
    title: 'The Cartographer',
    copy: 'A quiet editorial compass for turning scattered lore, routes, recipes, and recollections into coordinates future gatherings can follow.',
  },
  {
    eyebrow: 'Field Guide II',
    title: 'Artifacts',
    copy: 'Heirloom menus, festival tokens, porch-light songs, handwritten notes, and the objects people keep after the last candle burns low.',
  },
  {
    eyebrow: 'Field Guide III',
    title: 'Michigan Launch',
    copy: 'Our first map opens beneath Great Lakes night skies, tracing town rituals, lake-season traditions, winter tables, craft, food, and memory.',
  },
];

const mapLabels = ['Harbor lights', 'Family tables', 'Winter rites', 'County fairs'];

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-map" aria-hidden="true">
          <span className="lake lake-superior" />
          <span className="lake lake-michigan" />
          <span className="lake lake-huron" />
          <span className="route route-one" />
          <span className="route route-two" />
          <span className="route route-three" />
          <span className="map-glow" />
        </div>
        <div className="constellation" aria-hidden="true">
          <span className="star star-one" />
          <span className="star star-two" />
          <span className="star star-three" />
          <span className="star star-four" />
        </div>
        <div className="fireflies" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="hero-content">
          <p className="eyebrow">TheCelebrationAtlas.com</p>
          <h1 id="hero-title" className="brand-title">Celebration Atlas</h1>
          <p className="hero-subtitle">
            A living atlas of celebrations, traditions, discoveries, and memories.
          </p>
          <p className="hero-copy">
            An enchanted Michigan-first archive for the rituals, keepsakes, places, and
            personal legends that make gathering feel storied, local, and alive.
          </p>
          <div className="hero-actions">
            <a href="#early-access" className="button button-primary">Join Early Access</a>
            <a href="#atlas-cards" className="button button-ghost">Open the field notes</a>
          </div>
        </div>
      </section>

      <section className="section-panel prologue" aria-label="Celebration Atlas introduction">
        <div>
          <p className="eyebrow">Dark atlas / living archive</p>
          <h2>Where memory becomes a map.</h2>
        </div>
        <p>
          Celebration Atlas is being shaped as a cinematic home for cultural context: the
          lake-road routes, seasonal gatherings, inherited recipes, local discoveries, and
          tactile artifacts that turn an occasion into a place you can return to.
        </p>
      </section>

      <section className="atlas-card-grid" id="atlas-cards" aria-label="Celebration Atlas features">
        {atlasCards.map((card) => (
          <article className="atlas-card" key={card.title}>
            <div className="card-plate" aria-hidden="true" />
            <p className="eyebrow">{card.eyebrow}</p>
            <h2>{card.title}</h2>
            <p>{card.copy}</p>
          </article>
        ))}
      </section>

      <section className="section-panel michigan" aria-labelledby="michigan-title">
        <div className="michigan-copy">
          <p className="eyebrow">Michigan night map</p>
          <h2 id="michigan-title">Launching under Great Lakes stars.</h2>
          <p>
            The first coordinates begin in Michigan, where lake light, immigrant tables,
            county fairgrounds, winter lanterns, harvest weekends, and neighborhood lore
            create a constellation of celebrations worth preserving.
          </p>
          <div className="label-row" aria-label="Launch themes">
            {mapLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
        <div className="map-card" aria-label="Stylized Michigan launch coordinates">
          <span className="coordinate coordinate-one">44.3148° N</span>
          <span className="coordinate coordinate-two">85.6024° W</span>
          <span className="map-title">Michigan Launch</span>
          <span className="michigan-shape" />
          <span className="map-pin pin-one" />
          <span className="map-pin pin-two" />
          <span className="map-route" />
        </div>
      </section>

      <section className="section-panel early-access" id="early-access" aria-labelledby="early-access-title">
        <div className="seal" aria-hidden="true">CA</div>
        <p className="eyebrow">Join Early Access</p>
        <h2 id="early-access-title">Be first to enter the atlas.</h2>
        <p>
          Sign up for launch notes, early previews, and invitations to help shape the first
          artifact collections. This email form is a placeholder only and is not connected
          to a backend yet.
        </p>
        <form className="signup-form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
          <label htmlFor="email">Email address</label>
          <div className="form-row">
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
            <button type="submit">Join Early Access</button>
          </div>
          <small>Placeholder form for the upcoming release. Nothing is submitted from this page.</small>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
