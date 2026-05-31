import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const beacons = [
  { className: 'beacon-one', label: 'Romeo Peach Festival' },
  { className: 'beacon-two', label: 'Harbor Lanterns' },
  { className: 'beacon-three', label: 'Forest Gathering' },
  { className: 'beacon-four', label: 'County Fair' },
  { className: 'beacon-five', label: 'Winter Table' },
  { className: 'beacon-six', label: 'Lake Parade' },
];

const routes = ['route-one', 'route-two', 'route-three', 'route-four'];

function App() {
  return (
    <main className="atlas-shell">
      <section className="atlas-frame" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#hero-title">Atlas</a>
          <a href="#coordinates">Events</a>
          <a href="#early-access">Enter</a>
        </nav>

        <div className="compass compass-north" aria-hidden="true" />
        <div className="compass compass-south" aria-hidden="true" />
        <div className="constellation-field" aria-hidden="true" />
        <div className="storm-light" aria-hidden="true" />

        <div className="map-stage" aria-hidden="true">
          <span className="water wake-a" />
          <span className="water wake-b" />
          <span className="island island-upper" />
          <span className="island island-lower" />
          <span className="island island-east" />
          <span className="harbor harbor-one" />
          <span className="harbor harbor-two" />
          <span className="harbor harbor-three" />
          {routes.map((route) => <span className={`route ${route}`} key={route} />)}
          {beacons.map((beacon) => (
            <span className={`beacon ${beacon.className}`} key={beacon.className}>
              <span>{beacon.label}</span>
            </span>
          ))}
        </div>

        <div className="hero-panel">
          <p className="eyebrow">Michigan Editions · hidden atlas</p>
          <h1 id="hero-title">Celebration Atlas</h1>
          <p className="tagline">Explore. Discover. Celebrate.</p>
          <a className="enter-button" href="#early-access" aria-label="Enter Celebration Atlas early access">
            <span>Enter the map</span>
          </a>
        </div>

        <aside className="featured-card" id="coordinates" aria-label="Featured celebration">
          <p className="eyebrow">Featured coordinate</p>
          <h2>Romeo Peach Festival</h2>
          <p>August 15–18 · warm lights, sweet air, county-road memory.</p>
        </aside>

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
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
