import { resume } from "./resume-data.js";

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

const icons = {
  Email: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  GitHub: '<path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-10-4 14"/>',
  LinkedIn: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M8 10v6m0-8v.01M12 16v-6m0 3c0-1.7 1.1-3 2.6-3 1.4 0 2.4 1.1 2.4 3v3"/>',
  Web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'
};

const icon = (label) =>
  `<span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[label]}</svg></span>`;

const link = (item) =>
  `<a href="${escapeHtml(item.href)}" aria-label="${escapeHtml(item.label)}: ${escapeHtml(item.value)}" title="${escapeHtml(item.label)}"${item.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${icon(item.label)}<span class="contact-label">${escapeHtml(item.label)}</span><span class="contact-value">${escapeHtml(item.value)}</span></a>`;

const experienceMarkup = (item, index, interactive) => {
  const content = `
    <div class="experience-head">
      <div><h3>${escapeHtml(item.role)}</h3><p class="organization">${escapeHtml(item.organization)}</p></div>
      <p class="meta">${escapeHtml(item.dates)}<br><span>${escapeHtml(item.location)}</span></p>
    </div>
    <ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`;

  if (!interactive) {
    return `<article class="experience-item" data-index="${index}">${content}</article>`;
  }

  return `<details class="experience-item"${index < 2 ? " open" : ""}>
    <summary><span><strong>${escapeHtml(item.role)}</strong><small>${escapeHtml(item.organization)} · ${escapeHtml(item.dates)}</small></span><span class="details-icon" aria-hidden="true">+</span></summary>
    <div class="details-content">${content}</div>
  </details>`;
};

const highlightMarkup = (item, interactive) => {
  if (!interactive) {
    return `<article><strong>${escapeHtml(item.title)}</strong></article>`;
  }

  return `<details class="highlight-card">
    <summary>
      <strong>${escapeHtml(item.title)}</strong>
      <span class="details-icon" aria-hidden="true">+</span>
    </summary>
    <div class="highlight-detail"><ul>${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul></div>
  </details>`;
};

function render() {
  const root = document.querySelector("#resume");
  const theme = document.body.dataset.theme;
  const interactive = theme === "minimal";

  root.innerHTML = `
    <header class="hero" id="top">
      <div class="hero-kicker">Computational science · Engineering software</div>
      <div class="hero-grid">
        <div>
          <h1>${escapeHtml(resume.name)}</h1>
          <p class="role">${escapeHtml(resume.role)}</p>
        </div>
        <p class="availability">${escapeHtml(resume.availability)}</p>
      </div>
      <p class="summary">${escapeHtml(resume.summary)}</p>
      <ul class="contact-list" aria-label="Contact links">${resume.contacts.map((item) => `<li>${link(item)}</li>`).join("")}</ul>
    </header>

    <section class="highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title" class="visually-hidden">Career highlights</h2>
      ${resume.highlights.map((item) => highlightMarkup(item, interactive)).join("")}
    </section>

    <div class="resume-grid">
      <main>
        <section id="experience">
          <div class="section-heading"><p class="section-number">01</p><h2>Experience</h2></div>
          <div class="experience-list">${resume.experience.map((item, index) => experienceMarkup(item, index, interactive)).join("")}</div>
        </section>

        <section id="writing">
          <div class="section-heading"><p class="section-number">04</p><h2>Selected writing</h2><a href="${resume.scholar}" target="_blank" rel="noreferrer">Google Scholar ↗</a></div>
          <ol class="publication-list">${resume.publications.map((item) => `<li><a href="${item.href}" target="_blank" rel="noreferrer"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.venue)}</span></a></li>`).join("")}</ol>
        </section>
      </main>

      <aside>
        <section id="skills">
          <div class="section-heading"><p class="section-number">02</p><h2>Capabilities</h2></div>
          <div class="skill-groups">${resume.skillGroups.map((group) => `<article><h3>${escapeHtml(group.name)}</h3><ul class="tag-list">${group.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul></article>`).join("")}</div>
        </section>

        <section id="education">
          <div class="section-heading"><p class="section-number">03</p><h2>Education</h2></div>
          <div class="education-list">${resume.education.map((item) => `<article class="education-item"><h3>${escapeHtml(item.degree)}</h3><p>${escapeHtml(item.school)}</p><p class="meta">${escapeHtml(item.dates)}</p></article>`).join("")}</div>
        </section>

        <section class="award" aria-labelledby="award-title">
          <p class="award-mark">✦</p>
          <h2 id="award-title">${escapeHtml(resume.award.title)}</h2>
          <p><strong>${escapeHtml(resume.award.organization)} · ${escapeHtml(resume.award.date)}</strong></p>
          <p>${escapeHtml(resume.award.detail)}</p>
        </section>

        <section class="patent" aria-labelledby="patent-title">
          <div class="section-heading"><p class="section-number">05</p><h2 id="patent-title">Patent</h2></div>
          <a href="${resume.patent.href}" target="_blank" rel="noreferrer"><strong>${escapeHtml(resume.patent.title)}</strong><span>${escapeHtml(resume.patent.number)} ↗</span></a>
        </section>
      </aside>
    </div>
  `;

  document.querySelector("[data-print]")?.addEventListener("click", () => window.print());

  if (interactive) {
    document.querySelectorAll("details").forEach((details) => {
      details.addEventListener("toggle", () => {
        details.querySelector(".details-icon").textContent = details.open ? "−" : "+";
      });
      details.querySelector(".details-icon").textContent = details.open ? "−" : "+";
    });
  }
}

render();
