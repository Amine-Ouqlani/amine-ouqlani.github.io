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
  "School email": "E-mail de l'école",
  "Personal email": "E-mail personnel",
  "Location": "Ville",

  /* ---------- tabs ---------- */
  "Welcome": "Accueil",
  "Engineering Courses": "Cursus ingénieur",
  "Courses": "Cours",
  "Civic Engagement": "Engagement civique",
  "Civic": "Civique",
  "Mobility": "Mobilité",
  "Careers": "Carrière",
  "Sports & Interests": "Sports & centres d'intérêt",
  "Sports": "Sports",

  /* ---------- WELCOME ---------- */
  "I am a first-year engineering student at ENSEEIHT (Toulouse INP), specializing in Electronics, Electrical Energy and Automatic Control (3EA). My path began with the Moroccan scientific preparatory classes (CPGE), where I studied mathematics and physics.":
    "Je suis élève ingénieur en première année à l'ENSEEIHT (Toulouse INP), dans la filière électronique, énergie électrique et automatique (3EA). Mon parcours a commencé dans les classes préparatoires scientifiques marocaines (CPGE), où j'ai étudié les mathématiques et la physique.",
  "I am interested in programming, electronics, mathematics and automatic control, and I like applying theory to concrete engineering problems. Alongside my studies, I build programming and electronics projects and create LaTeX mathematics resources for CPGE students.":
    "Je m'intéresse à la programmation, à l'électronique, aux mathématiques et à l'automatique, et j'aime appliquer la théorie à des problèmes d'ingénierie concrets. En parallèle de mes études, je réalise des projets de programmation et d'électronique et je crée des ressources de mathématiques en LaTeX pour les élèves de CPGE.",
  "Looking ahead, I want to build my career in control and embedded systems, in fields such as aerospace, mechatronics or digital electronics. I am using my first year to explore these paths by talking with engineers, so that I can choose my third-year specialization, an internship or a work-study program, and possibly a thesis, with a clear goal in mind.":
    "Pour la suite, je veux construire ma carrière dans l'automatique et les systèmes embarqués, dans des domaines comme l'aéronautique, la mécatronique ou l'électronique numérique. Je profite de ma première année pour explorer ces voies en échangeant avec des ingénieurs, afin de choisir ma spécialisation de troisième année, un stage ou une alternance, et peut-être une thèse, avec un objectif clair.",
  "What I work on": "Ce que je fais",
  "Programming & Software": "Programmation & logiciel",
  "C and Python, with a focus on structured problem-solving and clear, working code.":
    "C et Python, avec une approche structurée de la résolution de problèmes et un code clair qui fonctionne.",
  "Educational Books": "Livres pédagogiques",
  "I write revision books that are easy to understand, mainly for CPGE students.":
    "J'écris des livres de révision faciles à comprendre, principalement pour les élèves de CPGE.",
  "Control & Embedded Systems": "Automatique & systèmes embarqués",
  "Automatic control and embedded electronics, from my 3EA track and my TIPE (a research project done in preparatory classes) on drone attitude stabilization with Arduino and sensors.":
    "Automatique et électronique embarquée, à travers ma filière 3EA et mon TIPE (travaux d'initiative personnelle encadrés, réalisé en classes préparatoires) sur la stabilisation de l'attitude d'un drone avec Arduino et des capteurs.",
  "Education": "Formation",
  "2026 — Present": "2026 — Aujourd'hui",
  "First-year engineering student, specializing in Electronics, Electrical Energy and Automatic Control (3EA).":
    "Élève ingénieur en première année, filière électronique, énergie électrique et automatique (3EA).",
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
  "Engineering Courses & Projects": "Cursus ingénieur & projets",
  "Projects & Achievements": "Projets & réalisations",
  "iMSA Challenge Winner — IA for Impact Hackathon 2026": "Lauréat du défi iMSA — Hackathon IA for Impact 2026",
  "October 2026 · La Mêlée, Toulouse INP – ENSEEIHT": "Octobre 2026 · La Mêlée, Toulouse INP – ENSEEIHT",
  "Team project iMSA Sentinel, a tool that helps check health invoices by comparing the scanned form with the electronic invoice and flagging discrepancies with their evidence. Built with Python, FastAPI and React, with image reading (OCR) and fully local processing.":
    "Projet d'équipe iMSA Sentinel, un outil d'aide au contrôle des factures de santé qui compare le formulaire scanné à la facture électronique et signale les écarts avec leurs preuves. Réalisé avec Python, FastAPI et React, avec lecture d'images (OCR) et un traitement entièrement local.",
  "View the team submission on GitHub": "Voir le rendu de l'équipe sur GitHub",
  "TIPE: Drone Attitude Stabilization": "TIPE : stabilisation de l'attitude d'un drone",
  "Automatic control · Arduino · Sensors": "Automatique · Arduino · Capteurs",
  "My preparatory-class research project (TIPE): design and comparison of several control architectures for stabilizing the attitude of a drone, with Arduino, sensors and gyroscope measurements.":
    "Mon TIPE (travaux d'initiative personnelle encadrés) : conception et comparaison de plusieurs architectures de commande pour stabiliser l'attitude d'un drone, avec Arduino, des capteurs et des mesures gyroscopiques.",
  "Read the TIPE presentation (PDF, in French)": "Lire la présentation du TIPE (PDF, en français)",
  "Le Collé: CPGE Revision Books": "Le Collé : livres de révision pour les classes prépa",
  "LaTeX · Five books": "LaTeX · Cinq livres",
  "Author of five revision books for CPGE students (chemistry, first- and second-year mathematics, computer science, and a mathematics summary), written in LaTeX and available online.":
    "Auteur de cinq livres de révision pour les élèves de CPGE (chimie, mathématiques de première et deuxième année, informatique, et un résumé de mathématiques), rédigés en LaTeX et disponibles en ligne.",
  "Read the books (PDF):": "Lire les livres (PDF) :",
  "To complete": "À compléter",
  "Project Gallery": "Galerie de projets",
  "Programming": "Programmation",
  "Control & embedded systems": "Automatique & systèmes embarqués",
  "Le Collé: Series of 5 Revision Books": "Le Collé : série de 5 livres de révision",
  "Skills": "Compétences",
  "C programming": "Programmation en C",
  "LaTeX and technical documentation": "LaTeX et documentation technique",
  "Git and GitHub (basics)": "Git et GitHub (bases)",
  "Arduino and sensors": "Arduino et capteurs",
  "Drone Attitude Lab: Interactive Control Simulator": "Labo d'attitude du drone : simulateur interactif de commande",
  "October 2026 · Web app · Control theory": "Octobre 2026 · Application web · Automatique",
  "A web simulator of a drone holding its roll angle, built from my TIPE. You tune a PID or cascade controller, add wind, gusts, sensor noise or a sensor dropout, and compare the result with the Bode plot, margins and poles computed live. It rebuilds the four architectures and the S1 to S4 scenarios of my TIPE, works in English and French, and is checked by 20 automated tests.":
    "Un simulateur web d'un drone qui maintient son angle de roulis, issu de mon TIPE. On règle un correcteur PID ou en cascade, on ajoute du vent, des rafales, du bruit ou la perte d'un capteur, et on compare le résultat au diagramme de Bode, aux marges et aux pôles calculés en direct. Il reconstruit les quatre architectures et les scénarios S1 à S4 de mon TIPE, fonctionne en français et en anglais, et est vérifié par 20 tests automatiques.",
  "Open the simulator": "Ouvrir le simulateur",
  "Source on GitHub": "Code source sur GitHub",
  "Drone Attitude Lab (Simulator)": "Labo d'attitude du drone (simulateur)",
  "DC-DC Converter Lab: Buck and Boost Simulator": "Labo des convertisseurs DC-DC : simulateur de hacheurs buck et boost",
  "October 2026 · Web app · Power electronics": "Octobre 2026 · Application web · Électronique de puissance",
  "A web simulator of the buck and boost converters, the basic circuits of static power conversion. You watch them switch period by period on an oscilloscope view, push them into discontinuous conduction, follow the losses and the efficiency, and close a voltage loop whose gain is tuned automatically from the circuit. Every measurement is compared with the textbook formula, and 20 automated tests check the simulation against the theory.":
    "Un simulateur web des hacheurs série (buck) et parallèle (boost), les circuits de base de la conversion statique. On les regarde commuter période après période sur une vue d'oscilloscope, on les fait passer en conduction discontinue, on suit les pertes et le rendement, et on ferme une boucle de tension dont le gain est réglé automatiquement à partir du circuit. Chaque mesure est comparée à la formule du cours, et 20 tests automatiques confrontent la simulation à la théorie.",
  "DC-DC Converter Lab (Simulator)": "Labo des convertisseurs DC-DC (simulateur)",
  "Power electronics": "Électronique de puissance",
  "DC-DC Converter Lab: oscilloscope view of a buck converter in discontinuous conduction":
    "Labo des convertisseurs DC-DC : vue d'oscilloscope d'un hacheur buck en conduction discontinue",
  "Drone Attitude Lab: a drone tilting in the wind under its bank scale, with its target angle shown as a dashed line":
    "Labo d'attitude du drone : un drone incliné par le vent sous son échelle d'inclinaison, avec sa consigne en pointillés",

  /* ---------- CIVIC ENGAGEMENT ---------- */
  "Engagements": "Engagements",
  "Le Collé: Free Revision Books for CPGE Students": "Le Collé : livres de révision gratuits pour les élèves de CPGE",
  "Author · Free to download on GitHub": "Auteur · Téléchargement gratuit sur GitHub",
  "I wrote five revision books for CPGE students (chemistry, first- and second-year mathematics, computer science, and a mathematics summary) and share them for free on GitHub, so that any student can use them to prepare for the competitive exams, whatever their means.":
    "J'ai écrit cinq livres de révision pour les élèves de CPGE (chimie, mathématiques de première et deuxième année, informatique, et un résumé de mathématiques) et je les partage gratuitement sur GitHub, pour que tout élève puisse s'en servir pour préparer les concours, quels que soient ses moyens.",
  "Organization / association": "Organisation / association",
  "Clean Walk in Toulouse": "Clean Walk à Toulouse",
  "4 September 2026 · ENSEEIHT integration week": "4 septembre 2026 · Semaine d'intégration de l'ENSEEIHT",
  "During my first week at ENSEEIHT, as part of the integration week, I took part in a Clean Walk: for three hours we walked around Toulouse collecting litter. It was also a way to meet the other new students and get to know each other.":
    "Lors de ma première semaine à l'ENSEEIHT, pendant la semaine d'intégration, j'ai participé à une Clean Walk : trois heures à parcourir Toulouse pour ramasser des déchets. C'était aussi l'occasion de rencontrer les autres nouveaux étudiants et de faire connaissance.",
  "Dates · Your role": "Dates · Votre rôle",
  "What the organization does, what you did there, and what it taught you.":
    "Ce que fait l'organisation, ce que vous y avez fait, et ce que cela vous a appris.",

  "Sustainability & Civic Engagement": "Développement durable & engagement civique",
  "International Mobility": "Mobilité internationale",
  "Career Development": "Développement de carrière",
  "Sport & Other Activities": "Sport & autres activités",
  "What I Work On": "Ce que je fais",
  "Get in Touch": "Me contacter",
  "My International Mobility Projects": "Mes projets de mobilité internationale",
  "Elevator Pitch": "Elevator pitch",
  "Role Models": "Modèles professionnels",
  "Pascal, Airbus: Munich is one of Europe's aerospace hubs, and TUM's control and embedded systems courses lead to the flight-control work he did on the A320.": "Pascal, Airbus : Munich est l'un des pôles aéronautiques d'Europe, et les cours d'automatique et de systèmes embarqués de la TUM mènent au type de travail qu'il a fait sur les commandes de vol de l'A320.",
  "Maxime Careil: his internships on an aircraft motor drive at Airbus and on robust control at SKF are mechatronics, the field of my Plan B.": "Maxime Careil : ses stages sur une chaîne de traction aéronautique chez Airbus et sur la commande robuste chez SKF relèvent de la mécatronique, le domaine de mon plan B.",
  "Mathilde Thenaisie, Astek: imec and KU Leuven's electronics courses are close to her work on FPGA and chip design.": "Mathilde Thenaisie, Astek : l'imec et les cours d'électronique de la KU Leuven sont proches de son travail sur les FPGA et la conception de puces.",
  "Mathilde Thenaisie, Astek: the student space clubs connect to her FPGA work in the space sector, and the robotics clubs to my mechatronics plan.": "Mathilde Thenaisie, Astek : les clubs étudiants spatiaux rejoignent son travail sur les FPGA dans le secteur spatial, et les clubs de robotique mon projet en mécatronique.",
  "Linked role model": "Modèle professionnel associé",
  "All": "Tous",
  "Select category": "Choisir une catégorie",
  "Watch my elevator pitch": "Voir mon elevator pitch",
  "My Career Plan": "Mon projet professionnel",
  "Three paths, each linked to one role model and one mobility project. My first internship will help me choose.": "Trois voies, chacune liée à un modèle professionnel et à un projet de mobilité. Mon premier stage m'aidera à choisir.",
  "Plan A": "Plan A",
  "Plan B": "Plan B",
  "Plan C": "Plan C",
  "Aerospace embedded systems & control": "Systèmes embarqués & automatique pour l'aéronautique",
  "Mechatronics": "Mécatronique",
  "Digital electronics & FPGA": "Électronique numérique & FPGA",
  "Role model": "Modèle professionnel",
  "Why": "Pourquoi",
  "Pascal, Airbus": "Pascal, Airbus",
  "Maxime Careil, Enedis": "Maxime Careil, Enedis",
  "Mathilde Thenaisie, Astek": "Mathilde Thenaisie, Astek",
  "TU Munich": "TU Munich",
  "RWTH Aachen": "RWTH Aachen",
  "KU Leuven": "KU Leuven",
  "My TIPE and my Drone Attitude Lab are already about keeping an aircraft stable. A CIFRE PhD, done with a company, is an option.": "Mon TIPE et mon labo d'attitude du drone portent déjà sur la stabilité d'un engin volant. Une thèse CIFRE, réalisée avec une entreprise, est une option.",
  "Robots, drones and electric vehicles combine electronics, control and mechanics: everything I enjoy, in one system.": "Robots, drones et véhicules électriques réunissent électronique, automatique et mécanique : tout ce que j'aime, dans un seul système.",
  "From my 3EA electronics courses to chip design, possibly through a work-study program like hers.": "Des cours d'électronique de la 3EA jusqu'à la conception de puces, peut-être en alternance, comme elle.",
  "Near future": "Court terme",
  "Mid term": "Moyen terme",
  "Long term": "Long terme",
  "My first internship, to test one of these paths in a company, while I keep building projects.": "Mon premier stage, pour tester l'une de ces voies en entreprise, tout en continuant mes projets.",
  "Choose my third-year specialization and spend a semester abroad.": "Choisir ma spécialisation de troisième année et partir un semestre à l'étranger.",
  "Become the engineer who makes complex systems reliable, from aircraft to robots.": "Devenir l'ingénieur qui rend les systèmes complexes fiables, de l'avion au robot.",
  /* ---------- MOBILITY ---------- */
  "My international mobility projects": "Mes projets de mobilité internationale",
  "Choice 1": "Choix 1",
  "Choice 2": "Choix 2",
  "Choice 3": "Choix 3",
  "Choice 4": "Choix 4",
  "Munich, Germany": "Munich, Allemagne",
  "Aachen, Germany": "Aix-la-Chapelle, Allemagne",
  "Leuven, Belgium": "Louvain, Belgique",
  "Warsaw, Poland": "Varsovie, Pologne",
  "Host": "Établissement d'accueil",
  "Field": "Domaine",
  "Why I want it": "Pourquoi ce choix",
  "Technical University of Munich (TUM)": "Université technique de Munich (TUM)",
  "RWTH Aachen University": "RWTH Aachen (Aix-la-Chapelle)",
  "KU Leuven, Faculty of Engineering Technology": "KU Leuven, faculté de technologie de l'ingénieur",
  "Warsaw University of Technology": "École polytechnique de Varsovie",
  "Electricity & energy": "Électricité & énergie",
  "Electronics & automation": "Électronique & automatique",
  "Engineering technology": "Technologie de l'ingénieur",
  "Electronics & automation, electricity & energy": "Électronique & automatique, électricité & énergie",
  "TUM is ranked 22nd in the world (QS World University Rankings 2026) and is one of Germany's leading technical universities. Its electrical engineering school is strong in power electronics, electrical drives and automatic control, the fields of my drone TIPE and my DC-DC converter project. The Munich area is home to Siemens, BMW, Infineon and Airbus Defence and Space, so I would be studying at the heart of the industries I want to work in.":
    "La TUM est classée 22e mondiale (QS World University Rankings 2026) et compte parmi les meilleures universités techniques d'Allemagne. Son école de génie électrique est reconnue en électronique de puissance, en entraînements électriques et en automatique, les domaines de mon TIPE sur le drone et de mon projet de convertisseurs DC-DC. La région de Munich accueille Siemens, BMW, Infineon et Airbus Defence and Space : j'étudierais au cœur des industries dans lesquelles je veux travailler.",
  "RWTH is one of Germany's largest technical universities, a member of the TU9 alliance, and one of Europe's leading schools in mechanical engineering and automation. Its Institute for Power Electronics and Electrical Drives (ISEA) works on the electric drives at the heart of mechatronic systems, close to my DC-DC converter lab. Its engineering teaching is known for close ties with industry and a lot of hands-on lab work.":
    "La RWTH est l'une des plus grandes universités techniques d'Allemagne, membre de l'alliance TU9, et l'une des meilleures écoles d'Europe en génie mécanique et en automatisation. Son institut d'électronique de puissance et d'entraînements électriques (ISEA) travaille sur les entraînements électriques, au cœur des systèmes mécatroniques, dans la continuité de mon labo de convertisseurs DC-DC. Son enseignement est réputé pour ses liens étroits avec l'industrie et la place importante des travaux pratiques.",
  "KU Leuven is Belgium's top-ranked university (60th in the world, QS 2026). Its Faculty of Engineering Technology trains applied engineers in electromechanics, electronics and energy through projects and lab work. Leuven is also home to imec, a world-leading research center in nanoelectronics and chip design, which matches my interest in embedded electronics.":
    "La KU Leuven est l'université la mieux classée de Belgique (60e mondiale, QS 2026). Sa faculté de technologie de l'ingénieur forme des ingénieurs de terrain en électromécanique, électronique et énergie, par projets et en laboratoire. Louvain accueille aussi l'imec, centre de recherche de rang mondial en nanoélectronique et conception de puces, ce qui rejoint mon intérêt pour l'électronique embarquée.",
  "One of the largest and oldest technical universities in Poland. Its agreement with ENSEEIHT covers both electronics & automation and electricity & energy, so I could combine control, electronics and power courses in one exchange. It also has very active student clubs in robotics and space engineering, where I could keep building projects like my drone lab.":
    "L'une des plus grandes et des plus anciennes universités techniques de Pologne. Son accord avec l'ENSEEIHT couvre à la fois l'électronique et l'automatique, et l'électricité et l'énergie : je pourrais combiner des cours d'automatique, d'électronique et d'énergie dans un même échange. Elle compte aussi des clubs étudiants très actifs en robotique et en ingénierie spatiale, où je pourrais continuer à construire des projets comme mon labo de drone.",
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
  "Elevator pitch video coming soon": "Vidéo de mon elevator pitch bientôt disponible",
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
  "Scientific baccalauréat (2016), DUT in Physical Measurements at IUT de Rouen (2018), then ENSEEIHT in the same 3EA track as me (2021), completed as a work-study apprentice at EREMS. She then worked as an FPGA developer in the space sector at EREMS, as an FPGA and SoC engineer on defense projects at ARELIS, and is now a consultant in FPGA physical verification at Astek.":
    "Baccalauréat scientifique (2016), DUT Mesures Physiques à l'IUT de Rouen (2018), puis diplômée de l'ENSEEIHT en 2021, dans la même filière 3EA que moi, en alternance chez EREMS. Elle a ensuite été développeuse FPGA dans le spatial chez EREMS, ingénieure FPGA et SoC sur des projets de défense chez ARELIS, et elle est aujourd'hui consultante en vérification physique de FPGA chez Astek.",
  "She explained how a work-study program (alternance) works and gave me a lot of advice on how to make the most of my engineering studies starting now. Hearing about her current job, which I found very interesting, gave me ideas for choosing my third-year specialization.":
    "Elle m'a expliqué le fonctionnement de l'alternance et m'a donné beaucoup de conseils pour tirer le meilleur de mes études d'ingénieur dès maintenant. Son métier actuel, que j'ai trouvé très intéressant, m'a donné des idées pour choisir ma spécialisation de troisième année.",

  "Maxime Careil — Deputy Head of Intervention Agency, Enedis":
    "Maxime Careil — Adjoint au chef d'agence d'intervention, Enedis",
  "Enedis, electricity distribution network, Charleville-Mézières, France":
    "Enedis, réseau de distribution d'électricité, Charleville-Mézières, France",
  "Engineering degree from École Polytechnique (physics, mechanics and energy transition, GPA 3.87/4) and a double degree at ENSEEIHT in the 3EA track (energy conversion and power grids). Student projects and internships with SCLE (smart grids and railway networks), Airbus (modeling an aircraft synchronous-motor drive in Matlab/Simulink) and SKF (robust control with MPC and reinforcement learning). He then spent 10 months teaching science, English and computing to more than 1,000 pupils in South India through a Service Civique with Objectif France Inde, before joining Enedis. He also volunteered as a mentor with AFEV.":
    "Diplôme d'ingénieur de l'École Polytechnique (physique, mécanique et transition énergétique, GPA 3,87/4) et double diplôme à l'ENSEEIHT dans la filière 3EA (conversion d'énergie et réseaux électriques). Projets étudiants et stages avec la SCLE (smart grids et réseaux ferroviaires), Airbus (modélisation d'une chaîne de traction aéronautique à moteur synchrone sous Matlab/Simulink) et SKF (commande robuste par MPC et apprentissage par renforcement). Il a ensuite passé 10 mois à enseigner les sciences, l'anglais et l'informatique à plus de 1 000 élèves en Inde du Sud dans le cadre d'un Service Civique avec Objectif France Inde, avant de rejoindre Enedis. Il a aussi été mentor bénévole à l'AFEV.",
  "His academic path is excellent, and his job is one I would like to have in the future. He encouraged me to volunteer and to get involved in things outside my professional path. I want to be able to follow the same kind of path he did.":
    "Son parcours académique est excellent, et son métier est le type de poste que j'aimerais occuper plus tard. Il m'a encouragé à faire du bénévolat et à m'engager dans des activités en dehors de mon parcours professionnel. Je veux pouvoir suivre le même type de parcours que lui.",

  /* ---------- SPORTS & INTERESTS ---------- */
  "Interests": "Centres d'intérêt",
  "Electronics": "Électronique",
  "Mathematics": "Mathématiques",
  "Automatic control": "Automatique",
  "Writing revision books (LaTeX)": "Écriture de livres de révision (LaTeX)",
  "Sport": "Sport",
  "Football & Basketball": "Football & basket",
  "How often": "Fréquence",
  "Football every week with friends, basketball from time to time": "Football chaque semaine avec des amis, basket de temps en temps",
  "What it brings me": "Ce que cela m'apporte",
  "Fun, team spirit and a break from the pressure of studies: it is my favorite way to stay active while spending time with friends.":
    "Du plaisir, de l'esprit d'équipe et une pause loin de la pression des études : c'est ma façon préférée de rester actif tout en passant du temps avec mes amis.",
  "Hobbies": "Loisirs",
  "Hobby": "Loisir",
  "Writing books & small projects": "Écriture de livres & petits projets",
  "About it": "En quelques mots",
  "I enjoy working on my books and on small projects that leave something useful behind and can help others.":
    "J'aime travailler sur mes livres et sur de petits projets qui laissent quelque chose d'utile derrière moi et peuvent aider les autres.",

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

  // French punctuation: a non-breaking space before : ; ! ? and inside « », so they never start a new line
  function frenchSpacing(text) {
    return text
      .replace(/ ([:;!?»])/g, '\u00a0$1')
      .replace(/« /g, '«\u00a0');
  }

  function translateString(english) {
    const key = norm(english);
    return Object.prototype.hasOwnProperty.call(FR, key) ? frenchSpacing(FR[key]) : null;
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

    // links with a French address: data-href-fr="..."
    document.querySelectorAll('[data-href-fr]').forEach(function (a) {
      if (!a.hasAttribute('data-href-en')) a.setAttribute('data-href-en', a.getAttribute('href'));
      a.setAttribute('href', fr ? a.getAttribute('data-href-fr') : a.getAttribute('data-href-en'));
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
