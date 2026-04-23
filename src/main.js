import './style.css';

const projects = [
  {
    type: 'Distributed Systems',
    title: 'Realtime Collaboration Engine',
    summary:
      'Built a conflict-free collaborative editor with optimistic updates, eventual consistency, and resilient websocket reconnection.',
    stack: ['TypeScript', 'WebSocket', 'Redis', 'PostgreSQL'],
    impact: '99.95% session uptime across semester demos',
  },
  {
    type: 'AI Tooling',
    title: 'Code Review Assistant',
    summary:
      'Designed an analysis pipeline that flags risky diffs, labels security concerns, and generates actionable feedback for student teams.',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'Docker'],
    impact: 'Reduced manual review time by 42%',
  },
  {
    type: 'Systems Programming',
    title: 'Lightweight CI Runner',
    summary:
      'Implemented a minimal build orchestrator with isolated job execution, artifact caching, and log streaming for classroom deployments.',
    stack: ['Go', 'Linux', 'GitHub Actions', 'SQLite'],
    impact: '3.2x faster pipeline execution on average',
  },
];

const skills = [
  'Algorithms and Data Structures',
  'Backend API Design',
  'Cloud and DevOps Automation',
  'Secure Coding Practices',
  'Database Performance Tuning',
  'Observability and Monitoring',
  'Test-Driven Development',
  'Technical Writing',
];

const timeline = [
  {
    period: 'Now',
    role: 'Software Engineering Student',
    details: 'Building production-style projects, with emphasis on systems reliability and developer experience.',
  },
  {
    period: 'Recent',
    role: 'Engineering Intern',
    details: 'Shipped internal tooling for release automation and performance diagnostics.',
  },
  {
    period: 'Earlier',
    role: 'CS Project Lead',
    details: 'Led a 5-person team on architecture, sprint planning, and API contract design.',
  },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page-shell" aria-label="Computer Science Portfolio">
    <section class="hero reveal">
      <p class="eyebrow">Computer Science + Software Engineering</p>
      <div class="hero-copy">
        <div>
          <h1>Engineering software that is fast, stable, and human-centered.</h1>
        </div>
        <p class="lede">
          I design and build dependable systems across the stack, from algorithmic problem solving
          to deploy-ready web platforms. This portfolio highlights projects where architecture,
          performance, and product clarity intersect.
        </p>
      </div>
      <div class="hero-meta">
        <p><span>Focus</span> Backend systems, full-stack apps, developer tooling</p>
        <p><span>Location</span> Replace with your city or remote preference</p>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#projects">View projects</a>
        <a class="button button-secondary" href="mailto:hello@example.com">hello@example.com</a>
      </div>
    </section>

    <section class="signal-panel reveal" aria-label="Engineering Snapshot">
      <article>
        <p class="signal-label">Primary Languages</p>
        <p class="signal-value">TypeScript, Python, Go, Java</p>
      </article>
      <article>
        <p class="signal-label">Current Interest</p>
        <p class="signal-value">Reliable distributed application design</p>
      </article>
      <article>
        <p class="signal-label">Availability</p>
        <p class="signal-value">Open to internships and junior SWE roles</p>
      </article>
    </section>

    <section class="section-head reveal" id="projects">
      <p class="eyebrow">Selected Work</p>
      <h2>Projects with measurable engineering outcomes.</h2>
    </section>

    <section class="projects-grid">
      ${projects
        .map(
          (item) => `
            <article class="card reveal">
              <p class="card-eyebrow">${item.type}</p>
              <h2>${item.title}</h2>
              <p>${item.summary}</p>
              <ul class="chip-list" aria-label="Tech stack for ${item.title}">
                ${item.stack.map((tool) => `<li>${tool}</li>`).join('')}
              </ul>
              <p class="impact">${item.impact}</p>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="skills-timeline">
      <article class="skills-panel reveal">
        <p class="eyebrow">Core Strengths</p>
        <h2>Practical CS foundations applied to real products.</h2>
        <div class="skill-cloud" aria-label="Skills">
          ${skills.map((item) => `<span>${item}</span>`).join('')}
        </div>
      </article>

      <article class="timeline-panel reveal">
        <p class="eyebrow">Engineering Journey</p>
        <ul>
          ${timeline
            .map(
              (entry) => `
                <li>
                  <p class="period">${entry.period}</p>
                  <h3>${entry.role}</h3>
                  <p>${entry.details}</p>
                </li>
              `,
            )
            .join('')}
        </ul>
      </article>
    </section>

    <footer class="footer reveal" id="contact">
      <div>
        <p class="eyebrow">Contact</p>
        <p>Interested in collaborating on systems, tooling, or full-stack products.</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@example.com">Email</a>
      </div>
    </footer>
  </main>
`;