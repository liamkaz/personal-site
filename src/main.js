import './style.css';

const highlights = [
  {
    eyebrow: 'Projects',
    title: 'Focused web work',
    copy: 'A place to showcase products, experiments, and useful tools with enough context to explain why they matter.',
  },
  {
    eyebrow: 'Writing',
    title: 'Clear thinking in public',
    copy: 'Use this space for notes, essays, release updates, or any other writing that should live alongside your work.',
  },
  {
    eyebrow: 'Contact',
    title: 'Easy ways to reach you',
    copy: 'Keep a short contact section here so visitors can find email, GitHub, LinkedIn, or whatever else you want to surface.',
  },
];

const capabilities = [
  'Product direction',
  'Interface design',
  'Frontend development',
  'Static site publishing',
];

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">Personal site starter</p>
      <div class="hero-copy">
        <div>
          <h1>Build a portfolio that feels deliberate, not generic.</h1>
        </div>
        <p class="lede">
          This scaffold is ready for GitHub Pages: it builds with Vite, ships as static files,
          and gives you a flexible one-page starting point for projects, writing, and contact.
        </p>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#highlights">Explore the layout</a>
        <a class="button button-secondary" href="mailto:hello@example.com">hello@example.com</a>
      </div>
    </section>

    <section class="stack-panel" aria-label="Capabilities">
      ${capabilities.map((item) => `<span>${item}</span>`).join('')}
    </section>

    <section class="grid-section" id="highlights">
      ${highlights
        .map(
          (item) => `
            <article class="card">
              <p class="card-eyebrow">${item.eyebrow}</p>
              <h2>${item.title}</h2>
              <p>${item.copy}</p>
            </article>
          `,
        )
        .join('')}
    </section>

    <footer class="footer">
      <p>Ready for deployment on GitHub Pages.</p>
      <a href="https://github.com/" target="_blank" rel="noreferrer">Replace this link with your profile</a>
    </footer>
  </main>
`;