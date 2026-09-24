/* =========================================================
   DATA — edit these arrays/objects to update site content.
   In a production build this would come from a CMS or JSON files;
   here it's inline so the whole site stays plain HTML/CSS/JS.
========================================================= */

const SKILLS = [
  { group: "Languages", items: ["C#", "JavaScript", "TypeScript", "SQL"] },
  { group: "Frontend", items: ["Bootstrap", , "HTML"] },
  { group: "Backend", items: [".ASP.NET Core", "Node.js", "Express", "Nextjs", "Django", "REST APIs"] },
  { group: "Databases", items: ["MSSQL", "MySQL", "MongoDB", "Redis"] },
  { group: "Cloud & DevOps", items: [ "Kubernetes","Jenkins", "GitHub" ,"Actions","Jenkins", "CI/CD"] },
  { group: "Architecture", items: ["Microservices", "Event-driven design", "Distributed systems", "Domain-driven design", "System design"] },
];

const EXPERIENCE = [
  {
    role: "Senior Software Developer",
    org: "SWift Technology private ltd.",
    date: "2025 — Present",
    points: [
      "Designed and built scalable backend services handling thousands of daily requests",
      "Mentored junior developers through code review and pairing",
      "Designed REST  APIs consumed by web and mobile clients",
      // "Implemented CI/CD pipelines cutting deploy time from hours to minutes",
    ],
    metrics: ["-99.99% API response time", "Weekly → multiple deploys/day", "Serves 10M+ requests/month"],
  },
  {
    role: "Software Developer",
    org: "IME Digital Solution private ltd.",
    date: "2019 — 2025",
    points: [
      "Senior roles responsible for writing high-performance, multithreaded TCP/IP or REST sockets to handle high-volume card transactions.",
      "Solution Architect (ISO8583 Digital Payments)",
      "APi integration with third-party payment gateways and financial institutions.",
      "Web application development using .NET Core, C#, and SQL Server.",

    ],
    metrics: ["99% service uptime"],
  },
  {
    role: "Backend Engineer",
    org: "Nimble Infosys",
    date: "NOv 2018 — Feb 2019",
    points: [
       "Web application development using .NET Core, C#, and SQL Server.",
    ],
     metrics: [],//["First engineering hire", "Shipped v1 in 4 months"],
  },
];

const PROJECTS = [
     {
     title: "Japan Remittance",
     desc: "A secure remittance platform for processing and managing international money transfers to Japan, with API integrations, transaction processing, beneficiary management, and banking-system communication.",
     tags: ["C#", ".net" "Javascript"],
     cats: ["web","Api"],
     highlights: ["Adopted across 12 product teams", "Automated visual regression tests"],
    // github: "https://github.com/alexrivera/design-dashboard",
    demo: "#",},
  {
    title: "IME Pay (wallet)",
    desc: "A scalable analytics platform designed to process large volumes of real-time transactions  .",
    tags: ["C#","ISO8583",".netcore", "Mssql", "Redis"],
    cats: ["backend", "infra","fintech","web"],
    highlights: ["Event-driven architecture", "Horizontal scaling", "Real-time processing", "Distributed caching"],
   // github: "https://github.com/alexrivera/analytics-platform",
    demo: "#",
  },
  {
    title: "HR Management System",
    desc: "A web-based HR management system for employee data, leave management, and payroll processing.",
    tags: ["c#", ".net", "Gitlab", "mssql","javascript", "jquery", "bootstrap"],
    cats: ["backend", "web"],
    highlights: ["Idempotent payment flows", "Blue/green deploys", "Zero-downtime schema migrations"],
    //github: "https://github.com/alexrivera/checkout-service",
    demo: "#"
  },
  {
    title: "Hotel Booking System",
    desc: "online hotel booking system with payment gateway integration.",
    tags: ["C#", ".netcore", "Mssql", "javascript", "bootstrap", "jquery", "github"],
    cats: ["backend","web"],
    highlights: ["Used by 40+ teams internally", "Plugin architecture", "CI-friendly diff output"],
    // github: "https://github.com/alexrivera/openapi-lint",
    demo: "#",
  },
  {
    title: "Restaurant Management System",
    desc: "A web-based restaurant management system for order processing, inventory management, and reporting.",
      tags: ["C#", ".netcore", "Mssql", "javascript", "bootstrap", "jquery" ,"github"],
    cats: ["ai", "backend"],
    highlights: ["Cut first-response time by a third", "Retrieval-augmented routing", "Human-in-the-loop review"],
  //  github: "https://github.com/alexrivera/ticket-summarizer",
    demo: "#",
  },
  // {
  //   title: "Design System Dashboard",
  //   desc: "A component and usage-analytics dashboard for a shared design system.",
  //   tags: ["React", "Next.js", "Tailwind CSS"],
  //   cats: ["web"],
  //   highlights: ["Adopted across 12 product teams", "Automated visual regression tests"],
  //   github: "https://github.com/alexrivera/design-dashboard",
  //   demo: "#",
  // },
  // {
  //   title: "Infra-as-Code Starter Kit",
  //   desc: "A Terraform + GitHub Actions template for standing up a production-ready AWS environment.",
  //   tags: ["Terraform", "AWS", "GitHub Actions"],
  //   cats: ["infra", "opensource"],
  //   highlights: ["Used as the team's default bootstrap", "Bakes in least-privilege IAM"],
  //   github: "https://github.com/alexrivera/infra-starter",
  //   demo: "#",
  // },
];

// const REPOS = [
//   { name: "openapi-lint", desc: "CLI that catches breaking OpenAPI changes before they ship.", lang: "TypeScript", stars: "1.2k", forks: 84 },
//   { name: "infra-starter", desc: "Terraform + GitHub Actions starter kit for AWS.", lang: "HCL", stars: "640", forks: 51 },
//   { name: "pg-ledger", desc: "Lightweight double-entry ledger primitives for Postgres.", lang: "Go", stars: "410", forks: 33 },
// ];

const POSTS = [
  {
    slug: "designing-scalable-apis",
    title: "Designing Scalable APIs: Lessons From Production",
    sub: "A practical guide to building APIs that remain reliable as traffic grows.",
    excerpt: "Most API design advice stops at REST verbs and status codes. Here's what actually matters once you're serving real traffic.",
    category: "Software Architecture",
    tags: ["typescript", "architecture", "apis"],
    date: "2026-06-02",
    updated: "2026-07-14",
    readingTime: "9 min",
    featured: true,
    content: `
      <p>Most API design advice stops at REST verbs and status codes. That's fine for a tutorial, but it doesn't cover what actually breaks once real traffic hits the system: pagination that falls over past a million rows, retries that quietly double-charge a customer, and versioning strategies nobody agreed on in advance.</p>
      <h2>Start with the failure modes</h2>
      <p>Before naming a single endpoint, I write down how each operation fails: what happens on a timeout, a duplicate request, a partial write. Idempotency keys and clear retry semantics come from this exercise, not from a style guide.</p>
      <pre><code>POST /payments
Idempotency-Key: 7c1b2e...
{
  "amount": 4200,
  "currency": "usd"
}</code></pre>
      <h2>Version for your consumers, not your convenience</h2>
      <p>Path-based versioning is easy to implement and painful to deprecate. I've had better luck with additive changes plus a documented deprecation window, reserving a breaking version bump for when it's genuinely unavoidable.</p>
      <blockquote>The API you ship is a contract. Every field you add is easy to keep; every field you remove is a migration project for someone else's team.</blockquote>
      <h2>Measure the boring things</h2>
      <p>p99 latency gets the attention, but error budget burn during deploys and retry amplification during partial outages are usually what pages someone at 3am. Instrument those before you need them.</p>
    `,
  },
  {
    slug: "postgres-connection-pooling",
    title: "The Connection Pool Mistake That Took Down Checkout",
    sub: "A postmortem-shaped walkthrough of a pooling misconfiguration and what fixed it.",
    excerpt: "A single default pool size setting was quietly capping our checkout throughput at 15% of what the database could handle.",
    category: "Backend Development",
    tags: ["postgresql", "backend", "incident"],
    date: "2026-05-18",
    updated: "2026-05-18",
    readingTime: "6 min",
    featured: false,
    content: `
      <p>The database wasn't the bottleneck. Our connection pool was — and it took a graph of queued queries during a traffic spike to notice.</p>
      <h2>What we saw</h2>
      <p>Checkout latency climbed steadily during a promotional spike, even though CPU and I/O on the database instance stayed comfortably under load. That mismatch was the first clue.</p>
      <h2>The root cause</h2>
      <p>Our pool size had been left at a framework default sized for a single small service, not the dozen replicas we were now running. Every replica was capping out well below what Postgres could actually serve.</p>
      <h2>The fix, and the guardrail</h2>
      <p>We recalculated pool size from replica count and per-connection cost, then added an alert on pool queue depth so this class of problem shows up long before checkout does.</p>
    `,
  },
  {
    slug: "ci-cd-multiple-deploys-a-day",
    title: "Getting to Multiple Deploys a Day Without More Incidents",
    sub: "The pipeline and process changes that made frequent deploys boring instead of risky.",
    excerpt: "Deploying more often didn't cause more incidents for us — it caused fewer, once we changed how we shipped.",
    category: "DevOps",
    tags: ["cicd", "devops", "reliability"],
    date: "2026-04-09",
    updated: "2026-04-09",
    readingTime: "7 min",
    featured: false,
    content: `
      <p>Going from weekly releases to several a day sounds like it should increase risk. In practice, it lowered ours — because each deploy became small enough to reason about.</p>
      <h2>Smaller batches, smaller blast radius</h2>
      <p>A deploy containing one week of changes is hard to bisect when something breaks. A deploy containing one merged PR usually isn't.</p>
      <h2>Automated rollback, not manual heroics</h2>
      <p>We wired error-rate and latency thresholds directly into the pipeline so a bad deploy rolls itself back before an on-call engineer even gets paged.</p>
      <h2>Feature flags decoupled deploy from release</h2>
      <p>Shipping code and turning on a feature became two separate, much lower-risk decisions.</p>
    `,
  },
  {
    slug: "system-design-interview-notes",
    title: "What I Actually Look For in System Design Interviews",
    sub: "Notes from the interviewer's side of the table, after a few hundred of these.",
    excerpt: "It's rarely about landing on the 'correct' architecture — it's about how someone reasons under uncertainty.",
    category: "System Design",
    tags: ["career", "system-design", "interviewing"],
    date: "2026-03-22",
    updated: "2026-03-22",
    readingTime: "5 min",
    featured: false,
    content: `
      <p>Candidates often assume there's a single correct architecture I'm waiting for them to guess. There isn't. What I'm actually watching for is how someone handles ambiguity.</p>
      <h2>Ask about scale before designing for it</h2>
      <p>Designing for a million users when the real number is a thousand is a red flag as much as under-designing is.</p>
      <h2>Trade-offs out loud</h2>
      <p>Naming the trade-off of a choice — consistency versus availability, cost versus latency — tells me far more than the choice itself.</p>
    `,
  },
  {
    slug: "automating-the-boring-parts",
    title: "Automate the Parts of the Job Nobody Wants to Do",
    sub: "Small internal tools compound faster than most feature work.",
    excerpt: "The highest-leverage code I've written this year isn't customer-facing at all.",
    category: "Developer Productivity",
    tags: ["automation", "tooling", "productivity"],
    date: "2026-02-11",
    updated: "2026-02-11",
    readingTime: "4 min",
    featured: false,
    content: `
      <p>The highest-leverage code I wrote this year never shipped to a customer. It's a script that generates changelog entries from merged PRs, and it saves the whole team a genuinely tedious hour every release.</p>
      <h2>Look for the recurring five-minute task</h2>
      <p>Anything a team does by hand more than a few times a month is worth automating, even imperfectly.</p>
      <h2>Ship it rough, then iterate</h2>
      <p>An internal tool doesn't need the polish of a product feature. Get it working, get it adopted, refine later.</p>
    `,
  },
];

/* =========================================================
   THEME
========================================================= */
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.setAttribute("data-theme", prefersLight ? "light" : "dark");
  }
})();

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

/* =========================================================
   MOBILE NAV
========================================================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  hamburger.classList.toggle("is-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  })
);

/* =========================================================
   HERO TERMINAL TYPING
========================================================= */
(function typeTerminal() {
  const el = document.getElementById("terminal-body");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = [
    { prompt: "$ whoami", out: "senior-software-developer" },
    { prompt: "$ focus", out: "scalable systems\nclean architecture\ndeveloper experience" },
    { prompt: "$ status", out: "building..." },
  ];

  if (reduce) {
    el.innerHTML = lines
      .map((l) => `<span class="tk-prompt">${l.prompt}</span>\n<span class="tk-out">${l.out}</span>`)
      .join("\n\n");
    return;
  }

  let out = "";
  let li = 0;
  function typeLine() {
    if (li >= lines.length) {
      el.innerHTML = out + '<span class="cursor"></span>';
      return;
    }
    const line = lines[li];
    let i = 0;
    const promptText = line.prompt;
    const typing = setInterval(() => {
      i++;
      el.innerHTML = out + `<span class="tk-prompt">${promptText.slice(0, i)}</span><span class="cursor"></span>`;
      if (i >= promptText.length) {
        clearInterval(typing);
        setTimeout(() => {
          out += `<span class="tk-prompt">${promptText}</span>\n<span class="tk-out">${line.out}</span>\n\n`;
          li++;
          setTimeout(typeLine, 260);
        }, 180);
      }
    }, 28);
  }
  typeLine();
})();

/* =========================================================
   SKILLS
========================================================= */
(function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILLS.map(
    (g) => `
    <div class="skill-group">
      <h3>${g.group}</h3>
      <div class="skill-badges">
        ${g.items.map((i) => `<span class="skill-badge">${i}</span>`).join("")}
      </div>
    </div>`
  ).join("");
})();

/* =========================================================
   EXPERIENCE
========================================================= */
(function renderExperience() {
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map(
    (job) => `
    <li class="timeline-item">
      <div class="timeline-head">
        <span class="timeline-role">${job.role}</span>
        <span class="timeline-date">${job.date}</span>
      </div>
      <span class="timeline-org">${job.org}</span>
      <ul class="timeline-list">
        ${job.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
      <div class="timeline-metrics">
        ${job.metrics.map((m) => `<span class="metric-pill">${m}</span>`).join("")}
      </div>
    </li>`
  ).join("");
})();

/* =========================================================
   PROJECTS
========================================================= */
function renderProjects(filter) {
  const grid = document.getElementById("project-grid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(filter));
  grid.innerHTML = list
    .map(
      (p, idx) => `
    <article class="project-card" data-idx="${idx}">
      <h3>${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <ul class="project-highlights">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      <div class="project-actions">
        <button class="btn btn-outline btn-sm js-toggle-case">View case study</button>
        <a class="btn btn-ghost btn-sm" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-ghost btn-sm" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".js-toggle-case").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      const open = card.classList.toggle("is-open");
      e.target.textContent = open ? "Hide case study" : "View case study";
    })
  );
}
renderProjects("all");

document.getElementById("project-filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll("#project-filters .filter-btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProjects(btn.dataset.filter);
});

/* =========================================================
   OPEN SOURCE REPOS
   To use live data: fetch(`https://api.github.com/users/alexrivera/repos?sort=updated`)
   and map the response into the same card markup below.
========================================================= */
(function renderRepos() {
  const grid = document.getElementById("repo-grid");
  grid.innerHTML = REPOS.map(
    (r) => `
    <div class="repo-card">
      <span class="repo-name">${r.name}</span>
      <p class="repo-desc">${r.desc}</p>
      <div class="repo-meta">
        <span>● ${r.lang}</span>
        <span>★ ${r.stars}</span>
        <span>⑂ ${r.forks}</span>
      </div>
    </div>`
  ).join("");
})();

/* =========================================================
   BLOG — categories, search, featured post, article overlay
========================================================= */
const categories = ["all", ...new Set(POSTS.map((p) => p.category))];
document.getElementById("blog-categories").innerHTML = categories
  .map((c, i) => `<button class="filter-btn ${i === 0 ? "is-active" : ""}" data-cat="${c}">${c === "all" ? "All" : c}</button>`)
  .join("");

let activeCategory = "all";
let searchTerm = "";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function renderFeatured() {
  const featured = POSTS.find((p) => p.featured);
  if (!featured) return;
  const el = document.getElementById("featured-post");
  el.innerHTML = `
    <div class="fp-visual"><span>Featured</span></div>
    <div class="fp-copy">
      <div class="fp-meta"><span>${featured.category}</span><span>${formatDate(featured.date)}</span><span>${featured.readingTime}</span></div>
      <h3>${featured.title}</h3>
      <p>${featured.excerpt}</p>
    </div>`;
  el.addEventListener("click", () => openArticle(featured.slug));
}
renderFeatured();

function renderPosts() {
  const grid = document.getElementById("post-grid");
  const empty = document.getElementById("blog-empty");
  const q = searchTerm.trim().toLowerCase();

  const list = POSTS.filter((p) => {
    if (p.featured) return false;
    const catMatch = activeCategory === "all" || p.category === activeCategory;
    const text = `${p.title} ${p.excerpt} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
    const searchMatch = q === "" || text.includes(q);
    return catMatch && searchMatch;
  });

  grid.style.display = list.length ? "" : "none";
  empty.hidden = list.length !== 0;

  grid.innerHTML = list
    .map(
      (p) => `
    <article class="post-card" data-slug="${p.slug}">
      <span class="post-cat">${p.category}</span>
      <h3>${p.title}</h3>
      <p class="post-excerpt">${p.excerpt}</p>
      <div class="post-meta"><span>${formatDate(p.date)}</span><span>${p.readingTime}</span></div>
      <div class="post-tags">${p.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}</div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".post-card").forEach((card) =>
    card.addEventListener("click", () => openArticle(card.dataset.slug))
  );
}
renderPosts();

document.getElementById("blog-categories").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll("#blog-categories .filter-btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  activeCategory = btn.dataset.cat;
  renderPosts();
});

document.getElementById("blog-search").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderPosts();
});

// const overlay = document.getElementById("article-overlay");
// const articleContent = document.getElementById("article-content");

// function openArticle(slug) {
//   const post = POSTS.find((p) => p.slug === slug);
//   if (!post) return;
//   articleContent.innerHTML = `
//     <div class="a-meta">
//       <span>${post.category}</span>
//       <span>Published ${formatDate(post.date)}</span>
//       ${post.updated !== post.date ? `<span>Updated ${formatDate(post.updated)}</span>` : ""}
//       <span>${post.readingTime} read</span>
//     </div>
//     <h1 id="article-title">${post.title}</h1>
//     <p class="a-sub">${post.sub}</p>
//     ${post.content}
//     <div class="a-tags">${post.tags.map((t) => `<span class="tag">#${t}</span>`).join("")}</div>
//   `;
//   overlay.hidden = false;
//   document.body.style.overflow = "hidden";
//   document.getElementById("article-close").focus();
// }

function closeArticle() {
  overlay.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("article-close").addEventListener("click", closeArticle);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeArticle(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) closeArticle(); });

/* =========================================================
   NEWSLETTER FORM (client-side demo — wire to a real
   provider such as Mailchimp/Buttondown via their API for production)
========================================================= */
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const note = document.getElementById("newsletter-note");
  const email = document.getElementById("newsletter-email").value;
  note.textContent = `Thanks — a confirmation would be sent to ${email} once this form is connected to an email provider.`;
  e.target.reset();
});

/* =========================================================
   CONTACT FORM — validation + honeypot spam guard.
   Submission is a client-side demo; connect to a form backend
   (e.g. an API route or a service like Formspree) to send real email.
========================================================= */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const note = document.getElementById("contact-note");

  if (form.company.value !== "") return; // honeypot triggered — silently drop

  let valid = true;
  form.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));

  const fields = [
    { id: "cf-name", label: "Name" },
    { id: "cf-email", label: "Email" },
    { id: "cf-subject", label: "Subject" },
    { id: "cf-message", label: "Message" },
  ];

  fields.forEach(({ id, label }) => {
    const input = document.getElementById(id);
    const errorEl = form.querySelector(`.field-error[data-for="${id}"]`);
    if (!input.value.trim()) {
      errorEl.textContent = `${label} is required.`;
      valid = false;
    } else if (id === "cf-email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      errorEl.textContent = "Enter a valid email address.";
      valid = false;
    }
  });

  if (!valid) return;

  note.textContent = "Message captured — connect this form to a backend or service (e.g. Formspree) to deliver it by email.";
  form.reset();
});
