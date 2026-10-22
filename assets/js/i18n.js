'use strict';

/*
  FRENCH / ENGLISH SWITCH
  -----------------------
  The site is written in English in index.html. When the visitor clicks the French flag,
  every English text listed below is replaced by its French version (and back again with the US flag).

  HOW TO EDIT:
  - To change a French translation: change the text on the RIGHT of the colon.
  - If you change an English text in index.html, change the same text on the LEFT here too,
    otherwise that sentence simply stays in English when French is selected.
  - To add a new sentence: add a new line  "English text": "Texte français",
  - The English text must match exactly what is on the page (spaces and line breaks don't matter).
  - For one specific element that needs a different translation, add data-fr="..." to it in index.html.
*/

const FR = {

  /* ---------- page title ---------- */
  "Ahmed Amine Ouqlani | Engineering ePortfolio": "Ahmed Amine Ouqlani | ePortfolio d'ingénieur",

  /* ---------- sidebar ---------- */
  "Engineering Student | ENSEEIHT": "Élève ingénieur | ENSEEIHT",
  "Show Contacts": "Afficher les contacts",
  "School email": "E-mail école",
  "Personal email": "E-mail personnel",
  "Location": "Localisation",

  /* ---------- tabs ---------- */
  "Welcome": "Accueil",
  "Engineering Courses": "Cours d'ingénierie",
  "Courses": "Cours",
  "Civic Engagement": "Engagement civique",
  "Civic": "Civique",
  "Mobility": "Mobilité",
  "Careers": "Carrière",
  "Sports & Interests": "Sports & centres d'intérêt",
  "Sports": "Sports",

  /* ---------- WELCOME ---------- */
  "I am a first-year engineering student at ENSEEIHT (Toulouse INP), specializing in Electrical Engineering, Energy and Automatic Control (3EA). My path began with the Moroccan scientific preparatory classes (CPGE), where I studied mathematics and physics.":
    "Je suis élève ingénieur en première année à l'ENSEEIHT (Toulouse INP), dans la filière Électronique, Énergie Électrique et Automatique (3EA). Mon parcours a commencé dans les classes préparatoires scientifiques marocaines (CPGE), où j'ai étudié les mathématiques et la physique.",
  "I am interested in programming, electronics, mathematics and automatic control, and I like applying theory to concrete engineering problems. Alongside my studies, I build programming and electronics projects and create LaTeX mathematics resources for CPGE students.":
    "Je m'intéresse à la programmation, à l'électronique, aux mathématiques et à l'automatique, et j'aime appliquer la théorie à des problèmes d'ingénierie concrets. En parallèle de mes études, je réalise des projets de programmation et d'électronique et je crée des ressources de mathématiques en LaTeX pour les élèves de CPGE.",
  "Looking ahead, I want to build my career in electrical energy and control systems, in fields such as aerospace embedded systems or power networks. I am using my first year to explore these paths by talking with engineers, so that I can choose my third-year specialization, an internship or a work-study programme, and possibly a thesis, with a clear goal in mind.":
    "Pour la suite, je souhaite construire ma carrière dans l'énergie électrique et les systèmes de commande, dans des domaines comme les systèmes embarqués aéronautiques ou les réseaux électriques. Je profite de ma première année pour explorer ces voies en échangeant avec des ingénieurs, afin de choisir ma spécialisation de troisième année, un stage ou une alternance, et peut-être une thèse, avec un objectif clair.",
  "What I work on": "Ce sur quoi je travaille",
  "Programming & Software": "Programmation & logiciel",
  "C and Python, with a focus on structured problem-solving and clear, working code.":
    "C et Python, avec une approche structurée de la résolution de problèmes et un code clair qui fonctionne.",
  "Educational Books": "Livres pédagogiques",
  "I write revision books that are easy to understand, mainly for CPGE students.":
    "J'écris des livres de révision faciles à comprendre, principalement pour les élèves de CPGE.",
  "Control & Embedded Systems": "Automatique & systèmes embarqués",
  "Automatic control and embedded electronics, from my 3EA track and my TIPE on drone attitude stabilization with Arduino and sensors.":
    "Automatique et électronique embarquée, à travers ma filière 3EA et mon TIPE sur la stabilisation de l'attitude d'un drone avec Arduino et des capteurs.",
  "Education": "Formation",
  "2026 — Present": "2026 — Aujourd'hui",
  "First-year engineering student, specializing in Electrical Engineering, Energy and Automatic Control (3EA).":
    "Élève ingénieur en première année, filière Électronique, Énergie Électrique et Automatique (3EA).",
  "CPGE MPSI, then MP": "CPGE MPSI, puis MP",
  "Preparatory classes in mathematics and physics, Rabat, Morocco: Lycée Moulay Youssef (MPSI), then Lycée Zahrawi (MP).":
    "Classes préparatoires en mathématiques et physique, Rabat, Maroc : Lycée Moulay Youssef (MPSI), puis Lycée Zahrawi (MP).",
  "Baccalauréat, Mathematical Sciences A": "Baccalauréat, Sciences Mathématiques A",
  "Groupe Scolaire Atlas, Rabat, Morocco. Graduated with the \"Très Bien\" distinction (18.25/20).":
    "Groupe Scolaire Atlas, Rabat, Maroc. Obtenu avec la mention « Très Bien » (18,25/20).",
  "Achievements": "Distinctions",
  "Academic Results": "Résultats académiques",
  "Ranked 92nd out of 3,096 in the Concours National Commun (Morocco), 2026. First physics prize at the Groupe Scolaire Atlas open-day contests, 2024.":
    "Classé 92e sur 3 096 au Concours National Commun (Maroc), 2026. Premier prix de physique aux concours des journées portes ouvertes du Groupe Scolaire Atlas, 2024.",
  "MMC2026 — Mathematics Event, Morocco": "MMC2026 — Événement de mathématiques, Maroc",
  "2026 · Organized by Maths Maroc": "2026 · Organisé par Maths Maroc",
  "Took part in MMC2026, a major mathematics event in Morocco organized by Maths Maroc, after passing a selection test.":
    "Participation à MMC2026, un grand événement de mathématiques au Maroc organisé par Maths Maroc, après avoir réussi un test de sélection.",
  "Get in touch": "Me contacter",
  "The quickest way to reach me is by email.": "Le plus simple pour me joindre est de m'écrire par e-mail.",

  /* ---------- ENGINEERING COURSES ---------- */
  "Engineering Courses & Projects": "Cours & projets d'ingénierie",
  "Projects & Achievements": "Projets & réalisations",
  "iMSA Challenge Winner — IA for Impact Hackathon 2026": "Lauréat du défi iMSA — Hackathon IA for Impact 2026",
  "October 2026 · La Mêlée, Toulouse INP – ENSEEIHT": "Octobre 2026 · La Mêlée, Toulouse INP – ENSEEIHT",
  "Team project iMSA Sentinel, a tool that helps check health invoices by comparing the scanned form with the electronic invoice and flagging discrepancies with their evidence. Built with Python, FastAPI and React, with image reading (OCR) and fully local processing.":
    "Projet d'équipe iMSA Sentinel, un outil d'aide au contrôle des factures de santé qui compare le formulaire scanné à la facture électronique et signale les écarts avec leurs preuves. Réalisé avec Python, FastAPI et React, avec lecture d'image (OCR) et un traitement entièrement local.",
  "View the team submission on GitHub": "Voir le rendu de l'équipe sur GitHub",
  "TIPE: Drone Attitude Stabilization": "TIPE : stabilisation de l'attitude d'un drone",
  "Automatic control · Arduino · Sensors": "Automatique · Arduino · Capteurs",
  "Design and comparison of several control architectures for stabilizing the attitude of a drone, with Arduino, sensors and gyroscope measurements.":
    "Conception et comparaison de plusieurs architectures de commande pour stabiliser l'attitude d'un drone, avec Arduino, des capteurs et des mesures gyroscopiques.",
  "Read the TIPE presentation (PDF, in French)": "Lire la présentation du TIPE (PDF, en français)",
  "Le Collé: CPGE Revision Books": "Le Collé : livres de révision pour la CPGE",
  "LaTeX · Five books": "LaTeX · Cinq livres",
  "Author of five revision books for CPGE students (chemistry, first- and second-year mathematics, computer science, and a mathematics summary), written in LaTeX and available online.":
    "Auteur de cinq livres de révision pour les élèves de CPGE (chimie, mathématiques de première et deuxième année, informatique, et un résumé de mathématiques), rédigés en LaTeX et disponibles en ligne.",
  "Read the books (PDF):": "Lire les livres (PDF) :",
  "ENSEEIHT course project": "Projet de cours ENSEEIHT",
  "To complete": "À compléter",
  "2026 — 2027 · Course name": "2026 — 2027 · Nom du cours",
  "Project done in an ENSEEIHT 3EA course: goal, what you built or measured, tools used, and the result.":
    "Projet réalisé dans un cours 3EA de l'ENSEEIHT : objectif, ce qui a été construit ou mesuré, outils utilisés et résultat.",
  "Project Gallery": "Galerie de projets",
  "Programming": "Programmation",
  "Control & embedded systems": "Automatique & systèmes embarqués",
  "Le Collé: series of 5 revision books": "Le Collé : série de 5 livres de révision",
  "Skills": "Compétences",
  "C programming": "Programmation en C",
  "LaTeX and technical documentation": "LaTeX et documentation technique",
  "Git and GitHub (basics)": "Git et GitHub (bases)",
  "Arduino and sensors": "Arduino et capteurs",

  /* ---------- CIVIC ENGAGEMENT ---------- */
  "Engagements": "Engagements",
  "Le Collé: free revision books for CPGE students": "Le Collé : livres de révision gratuits pour les élèves de CPGE",
  "Author · Free to download on GitHub": "Auteur · Téléchargement gratuit sur GitHub",
  "I wrote five revision books for CPGE students (chemistry, first- and second-year mathematics, computer science, and a mathematics summary) and share them for free on GitHub, so that any student can use them to prepare for the competitive exams, whatever their means.":
    "J'ai écrit cinq livres de révision pour les élèves de CPGE (chimie, mathématiques de première et deuxième année, informatique, et un résumé de mathématiques) et je les partage gratuitement sur GitHub, pour que tout élève puisse s'en servir pour préparer les concours, quels que soient ses moyens.",
  "Organization / association": "Organisation / association",
  "Dates · Your role": "Dates · Votre rôle",
  "What the organization does, what you did there, and what it taught you.":
    "Ce que fait l'organisation, ce que vous y avez fait, et ce que cela vous a appris.",

  /* ---------- MOBILITY ---------- */
  "My international mobility projects": "Mes projets de mobilité internationale",
  "Project 1 · linked to role model 1": "Projet 1 · lié au modèle 1",
  "Project 2 · linked to role model 2": "Projet 2 · lié au modèle 2",
  "Project 3 · linked to role model 3": "Projet 3 · lié au modèle 3",
  "Destination: city, country": "Destination : ville, pays",
  "Host": "Établissement d'accueil",
  "University, lab or company": "Université, laboratoire ou entreprise",
  "Type": "Type",
  "Exchange semester, double degree, internship or gap year": "Semestre d'échange, double diplôme, stage ou année de césure",
  "When": "Quand",
  "Year of study / period": "Année d'études / période",
  "Why it fits": "Pourquoi ce choix",
  "How it matches role model 1's path and my career goal": "En quoi il rejoint le parcours du modèle 1 et mon projet professionnel",
  "How it matches role model 2's path and my career goal": "En quoi il rejoint le parcours du modèle 2 et mon projet professionnel",
  "How it matches role model 3's path and my career goal": "En quoi il rejoint le parcours du modèle 3 et mon projet professionnel",
  "Languages": "Langues",
  "French": "Français",
  "Fluent (DALF C1)": "Courant (DALF C1)",
  "Arabic": "Arabe",
  "Native": "Langue maternelle",
  "English": "Anglais",
  "German": "Allemand",
  "Beginner": "Débutant",

  /* ---------- CAREERS ---------- */
  "Elevator pitch": "Elevator pitch",
  "Elevator pitch video coming soon": "Vidéo d'elevator pitch bientôt disponible",
  "2–3 minute Unique Value Proposition, in English": "Proposition de valeur unique de 2 à 3 minutes, en anglais",
  "Unique Value Proposition, in English: who I am today, a brief look at my path, and where I am heading.":
    "Proposition de valeur unique, en anglais : qui je suis aujourd'hui, un bref retour sur mon parcours, et où je veux aller.",
  "CV & LinkedIn": "CV & LinkedIn",
  "CV (French)": "CV (français)",
  "CV (English)": "CV (anglais)",
  "Role models": "Modèles professionnels",
  "Role model 1 · My Job Glasses": "Modèle 1 · My Job Glasses",
  "Role model 2 · My Job Glasses": "Modèle 2 · My Job Glasses",
  "Role model 3 · LinkedIn": "Modèle 3 · LinkedIn",
  "Company": "Entreprise",
  "Path": "Parcours",
  "Met through": "Rencontré via",
  "What I gained": "Ce que j'en retiens",

  "Pascal — Embedded Systems Engineer & Architect, Airbus (retired)":
    "Pascal — Ingénieur et architecte systèmes embarqués, Airbus (retraité)",
  "Airbus, aeronautics and space industry, Toulouse, France": "Airbus, industrie aéronautique et spatiale, Toulouse, France",
  "ENSEEIHT engineering degree (1981), then a doctor-engineer degree at INP Toulouse (1983), with a thesis at LAAS and time at UCLA. Whole career at Airbus in embedded systems design: took part in designing the A320 fly-by-wire flight controls, worked on the safety, architecture and certification of embedded systems and on the A380 final assembly line, and moved through team management, project management, expert and architect roles. Last role before retiring in 2023: helping define and apply Airbus's innovation strategy for autonomy technologies.":
    "Diplôme d'ingénieur de l'ENSEEIHT (1981), puis docteur-ingénieur à l'INP Toulouse (1983), avec une thèse au LAAS et un passage à UCLA. Toute sa carrière chez Airbus dans la conception de systèmes embarqués : participation à la conception des commandes de vol électriques de l'A320, travail sur la sécurité, l'architecture et la certification des systèmes embarqués ainsi que sur la chaîne d'assemblage de l'A380, avec des postes de management d'équipes, de chef de projet, d'expert et d'architecte. Dernier poste avant sa retraite en 2023 : contribuer à définir et mettre en œuvre la stratégie d'innovation d'Airbus pour les technologies liées à l'autonomie.",
  "He showed me how much a PhD can bring to an engineering career, and explained the difference between a CIFRE thesis, carried out with a company, and an academic thesis. His long and varied career really opened my mind about the working world, and his work at Airbus is exactly the kind of field that interests me.":
    "Il m'a montré tout ce qu'une thèse peut apporter à une carrière d'ingénieur, et m'a expliqué la différence entre une thèse CIFRE, réalisée avec une entreprise, et une thèse universitaire. Son parcours riche et varié m'a vraiment ouvert l'esprit sur le monde du travail, et son travail chez Airbus correspond exactement au type de domaine qui m'intéresse.",

  "Mathilde Thenaisie — Digital Electronics Engineer (FPGA), Astek":
    "Mathilde Thenaisie — Ingénieure en électronique numérique (FPGA), Astek",
  "Astek, engineering consulting, Rennes, France": "Astek, conseil en ingénierie, Rennes, France",
  "Scientific baccalauréat (2016), DUT in Physical Measurements at IUT de Rouen (2018), then ENSEEIHT in the same 3EA track as me (2021), completed as a work-study apprentice at EREMS. She then worked as an FPGA developer in the space sector at EREMS, as an FPGA and SoC engineer on defence projects at ARELIS, and is now a consultant in FPGA physical verification at Astek.":
    "Baccalauréat scientifique (2016), DUT Mesures Physiques à l'IUT de Rouen (2018), puis l'ENSEEIHT dans la même filière 3EA que moi (2021), suivie en alternance chez EREMS. Elle a ensuite été développeuse FPGA dans le spatial chez EREMS, ingénieure FPGA et SoC sur des projets de défense chez ARELIS, et elle est aujourd'hui consultante en vérification physique de FPGA chez Astek.",
  "She explained how a work-study programme (alternance) works and gave me a lot of advice on how to make the most of my engineering studies starting now. Hearing about her current job, which I found very interesting, gave me ideas for choosing my third-year specialization.":
    "Elle m'a expliqué le fonctionnement de l'alternance et m'a donné beaucoup de conseils pour tirer le meilleur de mes études d'ingénieur dès maintenant. Son métier actuel, que j'ai trouvé très intéressant, m'a donné des idées pour choisir ma spécialisation de troisième année.",

  "Maxime Careil — Deputy Head of Intervention Agency, Enedis":
    "Maxime Careil — Adjoint au chef d'agence d'intervention, Enedis",
  "Enedis, electricity distribution network, Charleville-Mézières, France":
    "Enedis, réseau de distribution d'électricité, Charleville-Mézières, France",
  "Engineering degree from École Polytechnique (physics, mechanics and energy transition, GPA 3.87/4) and a double degree at ENSEEIHT in the 3EA track (energy conversion and power grids). Student projects and internships with SCLE (smart grids and railway networks), Airbus (modelling an aircraft synchronous-motor drive in Matlab/Simulink) and SKF (robust control with MPC and reinforcement learning). He then spent 10 months teaching science, English and computing to more than 1,000 pupils in South India through a Service Civique with Objectif France Inde, before joining Enedis. He also volunteered as a mentor with AFEV.":
    "Diplôme d'ingénieur de l'École Polytechnique (physique, mécanique et transition énergétique, GPA 3,87/4) et double diplôme à l'ENSEEIHT dans la filière 3EA (conversion d'énergie et réseaux électriques). Projets étudiants et stages avec la SCLE (smart grids et réseaux ferroviaires), Airbus (modélisation d'une chaîne de traction aéronautique à moteur synchrone sous Matlab/Simulink) et SKF (commande robuste par MPC et apprentissage par renforcement). Il a ensuite passé 10 mois à enseigner les sciences, l'anglais et l'informatique à plus de 1 000 élèves en Inde du Sud dans le cadre d'un Service Civique avec Objectif France Inde, avant de rejoindre Enedis. Il a aussi été mentor bénévole à l'AFEV.",
  "His academic path is excellent, and his job is one I would like to have in the future. He encouraged me to volunteer and to get involved in things outside my professional path. I want to be able to follow the same kind of path he did.":
    "Son parcours académique est excellent, et son métier est un poste que j'aimerais occuper plus tard. Il m'a encouragé à faire du bénévolat et à m'engager dans des activités en dehors de mon parcours professionnel. Je veux pouvoir suivre le même type de parcours que lui.",

  /* ---------- SPORTS & INTERESTS ---------- */
  "Interests": "Centres d'intérêt",
  "Electronics": "Électronique",
  "Mathematics": "Mathématiques",
  "Automatic control": "Automatique",
  "Writing revision books (LaTeX)": "Écriture de livres de révision (LaTeX)",
  "Sport": "Sport",
  "Football & Basketball": "Football & basket-ball",
  "How often": "Fréquence",
  "Football every week with friends, basketball from time to time": "Football chaque semaine avec des amis, basket-ball de temps en temps",
  "What it brings me": "Ce que ça m'apporte",
  "Fun, and a good way to do sport while enjoying myself and getting together with friends, in a place full of joy, away from the stress of the world.":
    "Du plaisir, et une bonne façon de faire du sport tout en m'amusant et en retrouvant mes amis, dans un lieu plein de joie, loin du stress du monde.",
  "Hobbies": "Loisirs",
  "Hobby": "Loisir",
  "Writing books & small projects": "Écriture de livres & petits projets",
  "About it": "En quelques mots",
  "I like working on my books and on small projects that leave a trace of me out there and can help others.":
    "J'aime travailler sur mes livres et sur de petits projets qui laissent une trace de moi et peuvent aider les autres.",

  /* ---------- Le Collé window ---------- */
  "5 free revision books for CPGE students. Click a cover to open the PDF.":
    "5 livres de révision gratuits pour les élèves de CPGE. Cliquez sur une couverture pour ouvrir le PDF.",

  /* ---------- image descriptions and button labels (read by screen readers) ---------- */
  "Portrait of Ahmed Amine Ouqlani": "Portrait d'Ahmed Amine Ouqlani",
  "GitHub profile of Ahmed Amine Ouqlani": "Profil GitHub d'Ahmed Amine Ouqlani",
  "LinkedIn profile of Ahmed Amine Ouqlani": "Profil LinkedIn d'Ahmed Amine Ouqlani",
  "Group photo at MMC2026, organized by Maths Maroc": "Photo de groupe à MMC2026, organisé par Maths Maroc",
  "Our team at the IA for Impact hackathon, La Mêlée, Toulouse": "Notre équipe au hackathon IA for Impact, La Mêlée, Toulouse",
  "Screenshot of iMSA Sentinel, the health invoice checking tool built at the IA for Impact hackathon":
    "Capture d'écran d'iMSA Sentinel, l'outil de contrôle des factures de santé créé au hackathon IA for Impact",
  "Diagram from the TIPE: forces acting on a tilted drone, showing why attitude control is needed for stability":
    "Schéma du TIPE : forces s'exerçant sur un drone incliné, montrant pourquoi le contrôle de l'attitude est nécessaire à la stabilité",
  "Covers of the five Le Collé revision books: Chimie, Mathsup, Mathspé, Info and Maths – Résumé":
    "Couvertures des cinq livres de révision Le Collé : Chimie, Mathsup, Mathspé, Info et Maths – Résumé",
  "Close": "Fermer",
  "Cover of Le Collé Chimie": "Couverture de Le Collé Chimie",
  "Cover of Le Collé Mathsup": "Couverture de Le Collé Mathsup",
  "Cover of Le Collé Mathspé": "Couverture de Le Collé Mathspé",
  "Cover of Le Collé Info": "Couverture de Le Collé Info",
  "Cover of Le Collé Maths – Résumé": "Couverture de Le Collé Maths – Résumé",
  "Elevator pitch of Ahmed Amine Ouqlani": "Elevator pitch d'Ahmed Amine Ouqlani",
  "Show the site in French": "Afficher le site en français",
  "Show the site in English": "Afficher le site en anglais",
  "Language": "Langue"
};


/* ======================= engine — no need to edit below ======================= */

(function () {

  const norm = function (t) { return t.replace(/\s+/g, ' ').trim(); };
  const ATTRS = ['alt', 'aria-label', 'title'];
  const STORE_KEY = 'site-lang';

  // original English, remembered the first time a text is translated
  const originalText = new WeakMap();   // text node -> English string
  const originalAttr = new WeakMap();   // element -> { attr: English string }
  let originalTitle = null;

  function translateString(english) {
    const key = norm(english);
    return Object.prototype.hasOwnProperty.call(FR, key) ? FR[key] : null;
  }

  // keep the spaces around a text so inline links stay correctly spaced
  function withSameSpacing(source, replacement) {
    const lead = source.match(/^\s*/)[0];
    const trail = source.match(/\s*$/)[0];
    return (lead ? ' ' : '') + replacement + (trail ? ' ' : '');
  }

  function textNodes(root) {
    const list = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        const parent = n.parentElement;
        if (!parent || /^(SCRIPT|STYLE)$/.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
        return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let n;
    while ((n = walker.nextNode())) list.push(n);
    return list;
  }

  function apply(lang) {
    const fr = lang === 'fr';
    document.documentElement.lang = fr ? 'fr' : 'en';

    // page title
    if (originalTitle === null) originalTitle = document.title;
    document.title = fr ? (translateString(originalTitle) || originalTitle) : originalTitle;

    // elements with their own French version: data-fr="..."
    document.querySelectorAll('[data-fr]').forEach(function (el) {
      if (!el.hasAttribute('data-en')) el.setAttribute('data-en', el.textContent);
      el.textContent = fr ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });

    // all other texts
    textNodes(document.body).forEach(function (node) {
      if (node.parentElement.closest('[data-fr]')) return;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const english = originalText.get(node);
      const french = translateString(english);
      node.nodeValue = (fr && french !== null) ? withSameSpacing(english, french) : english;
    });

    // image descriptions, button labels
    document.querySelectorAll('[alt],[aria-label],[title]').forEach(function (el) {
      if (el.closest('[data-no-translate]')) return;
      if (!originalAttr.has(el)) {
        const saved = {};
        ATTRS.forEach(function (a) { if (el.hasAttribute(a)) saved[a] = el.getAttribute(a); });
        originalAttr.set(el, saved);
      }
      const saved = originalAttr.get(el);
      Object.keys(saved).forEach(function (a) {
        const french = translateString(saved[a]);
        el.setAttribute(a, (fr && french !== null) ? french : saved[a]);
      });
    });

    // buttons state
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      const on = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* private mode: ignore */ }
  }

  // public, so other scripts can re-run it
  window.setSiteLanguage = apply;

  // the switch is written once (Welcome tab); copy it to the top right of every other tab
  const firstSwitch = document.querySelector('.lang-switch');
  if (firstSwitch) {
    document.querySelectorAll('article > header').forEach(function (header) {
      if (!header.querySelector('.lang-switch')) header.appendChild(firstSwitch.cloneNode(true));
    });
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { apply(btn.getAttribute('data-set-lang')); });
  });

  // starting language: ?lang=fr in the address, else the visitor's last choice, else English
  let start = 'en';
  try { start = localStorage.getItem(STORE_KEY) || 'en'; } catch (e) { /* ignore */ }
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'fr' || param === 'en') start = param;
  if (start !== 'en') apply(start); else apply('en');

})();
