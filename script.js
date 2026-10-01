const contactEndpoint = `https://formsubmit.co/ajax/${atob("YXZhbG91aXNlbGl1QGdtYWlsLmNvbQ==")}`;

const experienceTimeline = [
  {
    role: "Biomedical Specialist",
    organization: "Cedars-Sinai Biomanufacturing Center",
    location: "West Hollywood, CA",
    dates: "Dec 2022 - Present",
    bullets: [
      "Leads a cGMP training program for 20 interns and 60+ employees, coordinating trainers and producing self-paced videos to reduce training time and improve retention.",
      "Modernizes gowning and aseptic technique qualifications from paper records to InstantGMP to improve efficiency, visibility, traceability, and compliance.",
      "Co-leads four iPSC-based programs, building Smartsheet task and readiness tracking, timelines, integrated calendars, and meeting minutes for daily alignment, cross-project scheduling, and management reporting.",
      "Represents Manufacturing in cross-functional quality investigations, contributing to record review, root cause analysis, investigation drafting, and product-impact assessment.",
      "Identifies and mitigates execution risks involving documentation discrepancies, data integrity, and manufacturing readiness to reduce rework and protect data quality.",
      "Authors and routes master production records, SOPs, and material specifications per cGMP/FDA expectations; reviews and approves executed batch records with cross-functional teams.",
      "Standardizes documentation, labels, trackers, and calculation templates to reduce variability and strengthen documentation consistency.",
    ],
  },
  {
    role: "PD Senior Research Associate",
    organization: "Scorpion Biological Services",
    location: "San Antonio, TX",
    dates: "Jan 2022 - Dec 2022",
    bullets: [
      "Owned the startup EHS program by training employees, closing compliance gaps, and authoring OSHA-aligned SOPs.",
      "Executed DOE studies with Ambr bioreactors to optimize process conditions and support scale-up decisions.",
      "Supported pre-clinical and clinical process development for 2D, 3D, adherent mammalian, and mAb programs.",
      "Collaborated with cross-functional teams and clients to troubleshoot, present results, and drive next-step decisions.",
    ],
  },
  {
    role: "Associate Scientist - Operations",
    organization: "GenCure",
    location: "San Antonio, TX",
    dates: "Oct 2020 - Jan 2022",
    bullets: [
      "Owned GMP equipment calibration, maintenance, and performance qualifications; reviewed and approved calibration documents before archival with QA in MasterControl.",
      "Worked as a cleanroom GMP operator for pre-clinical and clinical manufacturing events up to 80L.",
      "Trained and qualified 20-plus employees on gowning, aseptic technique, BSC disinfection, and material transfer.",
      "Performed cleanroom environmental monitoring at 128 locations on weekly and biweekly schedules and supported scheduled cGMP cleanroom cleaning.",
    ],
  },
];

const projectThemes = [
  {
    title: "Training Systems",
    description:
      "Coordinates trainers and produces self-paced videos for a cGMP training program serving 20 interns and 60+ employees, reducing training time and improving retention.",
  },
  {
    title: "iPSC Program Operations",
    description:
      "Co-leads four iPSC-based programs with Smartsheet readiness tracking, timelines, integrated calendars, and meeting minutes for team alignment and management reporting.",
  },
  {
    title: "Documentation Modernization",
    description:
      "Modernizes gowning and aseptic technique qualifications in InstantGMP and standardizes documentation, labels, trackers, and calculation templates.",
  },
  {
    title: "Quality Investigations",
    description:
      "Represents Manufacturing in record review, root cause analysis, investigation drafting, and product-impact assessment while addressing documentation and data-integrity risks.",
  },
  {
    title: "Scale-Up and Process Development",
    description:
      "Supports DOE studies, bioreactor work, and manufacturing decisions across cell therapy and biologics programs.",
  },
];

const introDescription = [
  "I'm a cGMP biomanufacturing professional with nearly 6 years of experience across GMP operations, process development, and project execution, currently at Cedars-Sinai's Biomanufacturing Center. I lead cross-functional workstreams, build scalable training and execution systems, and strengthen QMS workflows to reduce operational risk.",
  "I lead a training program for 20 interns and 60+ employees, coordinate trainers, and produce self-paced training videos. I'm also modernizing gowning and aseptic technique qualifications from paper records to InstantGMP. As a co-lead for four iPSC-based programs, I build Smartsheet dashboards, readiness tracking, timelines, and integrated calendars that support daily alignment and cross-project scheduling.",
  "My work also connects Manufacturing with cross-functional quality investigations, from record review and root cause analysis to product-impact assessment. I focus on documentation consistency, data integrity, and manufacturing readiness to help teams execute reliably in regulated environments.",
];

const introHighlights = [
  "Nearly 6 years across GMP operations and process development",
  "Training systems and execution tracking for four iPSC-based programs",
  "Quality investigations, QMS workflows, and operational risk reduction",
];

const educationHistory = [
  {
    school: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    program: "Bachelor of Science, Biological Sciences",
    supporting: "Minors in Chemistry and Exercise Science",
    dates: "August 2020",
  },
];

const introSkills = [
  {
    label: "cGMP",
    detail: "operations",
    tone: "#6c855d",
    icon: "shield",
  },
  {
    label: "QMS",
    detail: "documentation",
    tone: "#708f85",
    icon: "clipboard",
  },
  {
    label: "Smartsheet",
    detail: "tracking",
    tone: "#137f63",
    mark: "SS",
  },
  {
    label: "InstantGMP",
    detail: "eQMS",
    tone: "#8a775d",
    mark: "IG",
  },
  {
    label: "MasterControl",
    detail: "quality",
    tone: "#7d8d7a",
    mark: "MC",
  },
  {
    label: "Cell culture",
    detail: "programs",
    tone: "#ba8a52",
    icon: "cell",
  },
  {
    label: "Training",
    detail: "systems",
    tone: "#6e7f88",
    icon: "play",
  },
  {
    label: "Batch review",
    detail: "records",
    tone: "#7a6d59",
    icon: "document",
  },
  {
    label: "Quality investigations",
    detail: "root cause analysis",
    tone: "#708f85",
    icon: "clipboard",
  },
  {
    label: "Project scheduling",
    detail: "timelines and dependencies",
    tone: "#6e7f88",
    icon: "document",
  },
];

const skillGroups = [
  {
    title: "Systems and tools",
    description: "Excel, PowerPoint, Word, SharePoint/OneDrive, Smartsheet, Adobe Acrobat, MasterControl, InstantGMP, LabArchives, SciNote.",
  },
  {
    title: "Project management",
    description: "Dashboards, project scheduling, timeline and dependency management, meeting minutes, action logs, resource coordination, training deployment, process improvement.",
  },
  {
    title: "Quality and documentation",
    description: "SOPs and MPRs, batch record review, material specifications, deviations and CAPA, change controls, risk assessments, quality investigations, root cause analysis.",
  },
  {
    title: "Cell culture",
    description: "iPSCs, MSCs, mAb, 2D adherent and 3D suspension culture; cell counting with NC-200/202, MoxiGO II, hemocytometer, and Cellometer.",
  },
];

const projectCapabilities = [
  "Training deployment",
  "Program readiness tracking",
  "Batch record authoring",
  "Quality investigations and risk assessment",
  "Cell processing support",
];

function renderSkillIcon(skill) {
  if (skill.mark) {
    return `<span class="skill-chip-mark">${skill.mark}</span>`;
  }

  if (skill.icon === "shield") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 18 5.5v5.8c0 4.1-2.3 7.3-6 9.2-3.7-1.9-6-5.1-6-9.2V5.5L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        <path d="m8.8 12 2.1 2.1 4.3-4.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
  }

  if (skill.icon === "clipboard") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="5" width="12" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <rect x="9" y="3.5" width="6" height="3.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <path d="M9 10h6M9 14h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    `;
  }

  if (skill.icon === "cell") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4.5c4.8 0 7.5 3 7.5 7.4 0 4.6-3.1 7.6-7.5 7.6-4.5 0-7.5-3-7.5-7.6 0-4.4 2.8-7.4 7.5-7.4Z" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="15.8" cy="9" r="0.9" fill="currentColor" />
      </svg>
    `;
  }

  if (skill.icon === "play") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6.5v11l8-5.5-8-5.5Z" fill="currentColor" />
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h8l3 3V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
      <path d="M15 4.5v3h3M9 12h6M9 15.5h4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function renderIntroLinks() {
  return `
    <div class="inline-links intro-links">
      <a class="contact-link linkedin-link" href="https://www.linkedin.com/in/liuava/" target="_blank" rel="noreferrer">
        <span class="contact-link-icon" aria-hidden="true">in</span>
        <span>LinkedIn</span>
      </a>
      <a
        class="contact-link csbio-link csbio-logo-link"
        href="https://csbiomfg.com/about-us/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Cedars-Sinai Biomanufacturing Center page"
      >
        <img
          class="cedars-logo-image"
          src="./cedars-sinai%20biomanufactuing%20center%20logo.png"
          alt="Cedars-Sinai Biomanufacturing Center"
        />
      </a>
    </div>
  `;
}

function renderSkillsSection() {
  return `
    <section class="skills-section content-fade" aria-labelledby="skillsHeading">
      <h2 id="skillsHeading">Skills</h2>
      <div class="skills-grid" aria-label="Skills">
        ${introSkills
          .map(
            (skill) => `
              <article class="skill-chip">
                <span class="skill-chip-icon" style="--skill-tone: ${skill.tone};">
                  ${renderSkillIcon(skill)}
                </span>
                <span class="skill-chip-label">
                  <strong>${skill.label}</strong>
                  <span>${skill.detail}</span>
                </span>
              </article>
            `,
          )
          .join("")}
      </div>
      <dl class="skill-details">
        ${skillGroups.map((group) => `
          <div>
            <dt>${group.title}</dt>
            <dd>${group.description}</dd>
          </div>
        `).join("")}
      </dl>
    </section>
  `;
}

function renderEducationSection() {
  return `
    <section class="education-section content-fade" aria-labelledby="educationHeading">
      <h2 id="educationHeading">Education</h2>
      <div class="education-list">
        ${educationHistory
          .map(
            (entry) => `
              <article class="education-entry">
                <div class="education-head">
                  <strong>${entry.school}</strong>
                  <span>${entry.location}</span>
                </div>
                <p>${entry.program}</p>
                <p>${entry.supporting}</p>
                <p class="education-dates">${entry.dates}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

const sections = [
  {
    id: "intro",
    label: "Intro",
    rotorLabel: "Intro",
    tone: {
      color: "#6c855d",
      light: "#a5bb95",
    },
    title: "Ava Liu",
    mainContent() {
      return `
        <div class="minimal-block content-fade intro-content">
          ${introDescription.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${renderIntroLinks()}
          ${renderSkillsSection()}
        </div>
      `;
    },
    sideContent() {
      return `
        <div class="intro-side content-fade">
          <figure class="profile-figure">
            <img class="profile-image" src="./ava-liu.jpg" alt="Ava Liu" width="1984" height="2976" />
          </figure>
          <section class="intro-focus" aria-labelledby="focusHeading">
            <h2 id="focusHeading">Focus</h2>
            <ul class="simple-list simple-list-tight">
              ${introHighlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>
      `;
    },
  },
  {
    id: "experience",
    label: "Experience",
    rotorLabel: "Experience",
    tone: {
      color: "#708f85",
      light: "#a9c4ba",
    },
    title: "Experience",
    mainContent() {
      return `
        <a class="resume-download" href="./Ava-Liu-Resume-2026.docx" download="Ava-Liu-Resume-2026.docx">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
          </svg>
          <span>Download resume <span class="resume-format">(DOCX)</span></span>
        </a>
        <div class="timeline-list content-fade">
          ${experienceTimeline
            .map(
              (entry) => `
                <article class="timeline-entry">
                  <div class="timeline-head">
                    <div>
                      <strong>${entry.role}</strong>
                      <p>${entry.organization}</p>
                    </div>
                    <span>${entry.dates}</span>
                  </div>
                  <p class="timeline-meta">${entry.location}</p>
                  <ul class="simple-list simple-list-tight">
                    ${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                </article>
              `,
            )
            .join("")}
        </div>
      `;
    },
    sideContent() {
      return `
        ${renderEducationSection()}
        <section class="awards-section minimal-block content-fade" aria-labelledby="awardsHeading">
          <h2 id="awardsHeading">Awards and Recognition</h2>
          <ul class="simple-list">
            <li>Employee of the Month</li>
            <li>Aspire Award</li>
            <li>Train the Trainer (T3) Program</li>
          </ul>
        </section>
      `;
    },
  },
  {
    id: "projects",
    label: "Projects",
    rotorLabel: "Projects",
    tone: {
      color: "#ba8a52",
      light: "#deb180",
    },
    title: "Projects",
    mainContent() {
      return `
        <div class="minimal-block content-fade">
          <ul class="project-list">
            ${projectThemes
              .map(
                (project) => `
                  <li>
                    <strong>${project.title}</strong>
                    ${project.description}
                  </li>
                `,
              )
              .join("")}
          </ul>
        </div>
      `;
    },
    sideContent() {
      return `
        <div class="minimal-block content-fade">
          <strong>Capabilities</strong>
          <ul class="simple-list">
            ${projectCapabilities.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    },
  },
  {
    id: "contact",
    label: "Contact",
    rotorLabel: "Contact",
    tone: {
      color: "#8c9385",
      light: "#c9cfc3",
    },
    title: "Contact",
    mainContent() {
      return `
        <div class="minimal-block content-fade contact-brief">
          <p>Send a note directly to Ava.</p>
          <p>Use the form to get in touch.</p>
        </div>
      `;
    },
    sideContent() {
      return `
        <form class="contact-form content-fade" id="contactForm">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Company</span>
            <input type="text" name="company" placeholder="Where you are reaching out from" />
          </label>
          <label class="contact-full">
            <span>Subject</span>
            <input type="text" name="subject" placeholder="What is this about?" required />
          </label>
          <label class="contact-full">
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Write your message here." required></textarea>
          </label>
          <div class="contact-actions">
            <button type="submit" class="launch-button contact-submit">Send message</button>
          </div>
          <p class="contact-status" id="contactStatus" aria-live="polite"></p>
        </form>
      `;
    },
  },
];

const labWorld = document.getElementById("labWorld");
const rotor = document.getElementById("rotor");
const sectionTitle = document.getElementById("sectionTitle");
const mainContent = document.getElementById("mainContent");
const sideContent = document.getElementById("sideContent");
const launchButton = document.getElementById("launchButton");

let hasStarted = false;
let isTransitioning = false;
let activeIndex = 0;
let swapTimer = 0;
const hashId = window.location.hash.replace("#", "").toLowerCase();
const hashIndex = sections.findIndex((section) => section.id === hashId);
const shouldAutoOpen = new URLSearchParams(window.location.search).get("open") === "1" || hashIndex >= 0;

if (hashIndex >= 0) {
  activeIndex = hashIndex;
}

function rotorRotationFor(index) {
  return -90 * index;
}

function buildRotor() {
  rotor.innerHTML = sections
    .map(
      (section, index) => `
        <button
          type="button"
          class="tube${index === activeIndex ? " is-active" : ""}"
          data-index="${index}"
          style="
            --tube-angle: ${index * 90}deg;
            --tube-color: ${section.tone.color};
            --tube-color-light: ${section.tone.light};
          "
          aria-label="Open ${section.label}"
        >
          <span class="tube-visual">
            <span class="tube-cap"></span>
            <span class="tube-glass">
              <span class="tube-liquid"></span>
              <span class="tube-tag">${section.rotorLabel}</span>
            </span>
          </span>
        </button>
      `,
    )
    .join("");

  rotor.querySelectorAll(".tube").forEach((tube) => {
    tube.addEventListener("click", () => {
      if (!hasStarted || isTransitioning) {
        return;
      }

      const nextIndex = Number(tube.dataset.index);
      if (!Number.isNaN(nextIndex)) {
        setActiveSection(nextIndex);
      }
    });
  });
}

function setRotorState(index) {
  const rotation = rotorRotationFor(index);
  rotor.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  rotor.style.setProperty("--rotor-rotation", `${rotation}deg`);

  rotor.querySelectorAll(".tube").forEach((tube) => {
    tube.classList.toggle("is-active", Number(tube.dataset.index) === index);
  });
}

function initializeContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending...";

    const formData = new FormData(form);
    formData.append("_subject", formData.get("subject"));
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to send the message right now.");
      }

      form.reset();
      status.textContent = "Message sent successfully.";
    } catch (error) {
      status.textContent =
        error instanceof Error ? error.message : "Something went wrong while trying to send the message.";
    }
  });
}

function renderSection(index) {
  const section = sections[index];
  sectionTitle.textContent = section.title;
  mainContent.innerHTML = section.mainContent();
  sideContent.innerHTML = section.sideContent();
  labWorld.dataset.section = section.id;

  if (section.id === "contact") {
    initializeContactForm();
  }
}

function fadeTargets(isSwapping) {
  [sectionTitle, mainContent, sideContent].forEach((target) => {
    target.classList.toggle("is-swapping", isSwapping);
  });
}

function setActiveSection(index) {
  if (index < 0 || index >= sections.length || index === activeIndex) {
    return;
  }

  isTransitioning = true;
  fadeTargets(true);
  setRotorState(index);

  window.clearTimeout(swapTimer);
  swapTimer = window.setTimeout(() => {
    activeIndex = index;
    renderSection(activeIndex);
    fadeTargets(false);
    isTransitioning = false;
  }, 220);
}

function startExperience() {
  if (hasStarted) {
    return;
  }

  hasStarted = true;
  labWorld.dataset.state = "entering";

  window.setTimeout(() => {
    labWorld.classList.add("is-open");
    labWorld.dataset.state = "open";
    renderSection(activeIndex);
    setRotorState(activeIndex);
  }, 760);
}

buildRotor();
renderSection(activeIndex);
setRotorState(activeIndex);

launchButton.addEventListener("click", startExperience);

if (shouldAutoOpen) {
  window.requestAnimationFrame(() => {
    startExperience();
  });
}

window.addEventListener("keydown", (event) => {
  if (!hasStarted || isTransitioning) {
    return;
  }

  if (event.target instanceof HTMLElement) {
    const interactive = event.target.closest("button, a, input, textarea");
    if (interactive) {
      return;
    }
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "PageDown") {
    event.preventDefault();
    setActiveSection(Math.min(sections.length - 1, activeIndex + 1));
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "PageUp") {
    event.preventDefault();
    setActiveSection(Math.max(0, activeIndex - 1));
  }

  if (event.key === "Home") {
    event.preventDefault();
    setActiveSection(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    setActiveSection(sections.length - 1);
  }
});
