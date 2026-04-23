const projects = [
  {
    type: 'Game Development',
    badge: 'Bug / Strategy',
    attack: 'TURN-BASED NETWORKING',
    title: 'Turn Based RPG Prototype',
    summary:
      'Designed and developed a 2–4 player multiplayer turn-based RPG prototype in Roblox Studio using Lua, created to explore scalable client-server networking and modular game architecture while establishing a fun experience to play with friends or other community members.',
    stack: ['Lua', 'Roblox Studio'],
    impact: '99.95% session uptime across semester demos',
  },
  {
    type: 'Software Product Development',
    badge: 'Steel / Support',
    attack: 'INTELLIGENT WORKFLOW ANALYSIS',
    title: 'AI-Powered Food Pantry Inventory & Management Platform',
    summary:
      'Designed an analysis pipeline that flags risky diffs, labels security concerns, and generates actionable feedback for student teams.',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'Docker'],
    impact: 'Reduced manual review time by 42%',
  },
  {
    type: 'Class Project',
    badge: 'Electric / Systems',
    attack: 'GRAPH TRAVERSAL OPTIMIZATION',
    title: 'Weighted Graph CLI Route Planner in C++',
    summary:
      'Designed and implemented a weighted graph data structure in C++ to support efficient pathfinding and real-world route-planning experiments, using unordered_map for average O(1) vertex and edge lookup. ',
    stack: ['C++', 'Linux'],
    impact: '3.2x faster pipeline execution on average',
  },
];

const skills = [
  'Algorithms and Data Structures',
  'Agile Software Development',
  'Secure Coding Practices',
  'Observability and Monitoring',
  'Technical Writing',
];

const timeline = [
  {
    period: 'Now',
    role: 'Computer Science New Grad',
    details: 'Focusing on personal projects and self-taught learning to deepen practical CS skills.',
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

const stats = [
  { label: 'Problem Solving', value: 88 },
  { label: 'Backend Systems', value: 84 },
  { label: 'Frontend Craft', value: 76 },
  { label: 'DevOps', value: 72 },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page-shell" aria-label="Computer Science Portfolio">
    <header class="masthead reveal">
      <p class="game-title">Software Battle Arena</p>
      <p class="game-subtitle">Trainer: Liam Kaznelson | Class: Computer Science New Grad</p>
    </header>

    <section class="battlefield reveal" aria-label="Battle Style Intro">
      <article class="status-card status-opponent">
        <p class="status-name">Portfolio Challenge</p>
        <p class="status-level">LV. 24</p>
        <div class="hp-wrap" role="presentation">
          <span>HP</span>
          <div class="hp-meter"><i style="width: 82%"></i></div>
        </div>
      </article>

      <div class="arena">
        <img
          class="sprite sprite-opponent sprite-art"
          src="./images/pokemon-sprites/bug_sprite.png"
          alt=""
          aria-hidden="true"
        />
        <div class="sprite sprite-player" aria-hidden="true"></div>
      </div>

      <article class="status-card status-player">
        <p class="status-name">Liam.dev</p>
        <p class="status-level">LV. 22</p>
        <div class="hp-wrap" role="presentation">
          <span>HP</span>
          <div class="hp-meter"><i style="width: 96%"></i></div>
        </div>
        <p class="exp-label">XP to next level: 120</p>
      </article>

      <div class="dialogue-box">
        <p><span class="battle-name">Liam.dev</span> used <span class="attack-name">BUILD RELIABLE SYSTEMS</span>. It's super effective.</p>
        <div class="command-grid">
          <a class="command-btn command-btn-primary" href="#projects">Attack</a>
          <a class="command-btn" href="#moves">Skills</a>
          <a class="command-btn" href="#journey">Journey</a>
          <a class="command-btn" href="#contact">Contact</a>
        </div>
      </div>
    </section>

    <section class="moves-panel reveal" id="moves" aria-label="Core Moves">
      <p class="panel-title">Moveset</p>
      <div class="moves-grid">
        ${skills
          .map(
            (item, idx) => `
              <article class="move-card">
                <p class="move-name">${item}</p>
                <p class="move-type">Type ${idx % 2 === 0 ? 'Logic' : 'Build'}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section-head reveal" id="projects">
      <p class="eyebrow">Pokedex: Selected Builds</p>
      <h2>Each project entry includes stack, behavior, and measurable impact.</h2>
    </section>

    <section class="projects-grid reveal">
      ${projects
        .map(
          (item) => `
            <article class="card">
              <div class="card-meta">
                <p class="card-eyebrow">${item.type}</p>
                <span class="type-badge">${item.badge}</span>
              </div>
              <h2>${item.title}</h2>
              <p class="attack-line">${item.attack}</p>
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

    <section class="trainer-grid">
      <article class="stats-panel reveal">
        <p class="panel-title">Trainer Stats</p>
        <ul>
          ${stats
            .map(
              (stat) => `
                <li>
                  <p>${stat.label}</p>
                  <div class="stat-meter"><i style="width: ${stat.value}%"></i></div>
                </li>
              `,
            )
            .join('')}
        </ul>
      </article>

      <article class="timeline-panel reveal" id="journey">
        <p class="panel-title">Trainer Log</p>
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

    <section class="contact-banner reveal" id="contact">
      <p>Open to internships and junior software engineering roles.</p>
      <a href="mailto:hello@example.com">Send challenge request</a>
    </section>

    <footer class="footer reveal" id="contact">
      <div>
        <p class="eyebrow">Trainer Network</p>
        <p>Let us build resilient products and playful experiences together.</p>
      </div>
      <div class="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@example.com">Email</a>
      </div>
    </footer>
  </main>
`;