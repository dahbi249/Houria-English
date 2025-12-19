document.addEventListener('DOMContentLoaded', () => {

    // --- Embedded Translations Object to avoid local fetch CORS issues ---
    const translations = {
        "en": {
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_courses": "Courses",
            "nav_contact": "Contact Us",
            "hero_badge": "🚀 Master English, Conquer Your Future",
            "hero_title": "Break Barriers with <span class='text-brandRed'>Confident</span> English.",
            "hero_subtitle": "Whether you are preparing for IELTS or aiming for professional fluency, Houria English provides the tools and guidance to help you succeed globally.",
            "btn_explore": "Explore Our Courses",
            "btn_join": "Join Your Free Session",
            "about_heading": "About <span class='text-brandRed'>Houria English</span>",
            "about_text": "Founded by experts with a passion for linguistics, Houria English is more than just a school. We focus on real-world application, cultural nuance, and the psychological confidence needed to speak a second language natively.",
            "about_tailored_title": "Tailored Learning",
            "about_tailored_desc": "Your goals are unique, and your learning path should be too.",
            "about_global_title": "Global Standards",
            "about_global_desc": "Curriculums designed based on international CEFR levels.",
            "about_supportive_title": "Supportive Environment",
            "about_supportive_desc": "Learn in a space that encourages growth and celebrates every mistake as a lesson.",
            "courses_heading": "Our Specialized <span class='text-brandRed'>Courses</span>",
            "courses_sub": "Designed for rapid progress and lasting results.",
            "btn_seemore": "See More Courses",
            "btn_see_more": "See More",
            "btn_details": "See Details",
            "footer_desc": "Empowering professionals and students to conquer the world through language mastery.",
            "rights": "© 2024 Houria English. All rights reserved.",

            "btn_register": "Register",
            "taught_by": "Taught by Houria",
            "most_popular": "Most Popular",
            "quick_links": "Quick Links",
            "connect": "Connect",
            "privacy": "Privacy Policy",
            "terms": "Terms of Service",

            "catalog_title": "Our Complete Course Catalog",
            "catalog_subtitle": "Find the perfect path to English mastery.",

            "card_title_speaking": "Speaking Courses",
            "card_desc_speaking": "Comprehensive preparation for Academic and General modules connecting you to global opportunities.",
            "card_title_international": "International Exams",
            "card_desc_international": "Master negotiation, presentations, and professional email etiquette for the corporate world.",
            "card_title_esp": "ESP Courses",
            "card_desc_esp": "Build natural confidence for daily conversations, travel, and social interactions.",
            "card_title_private": "Private Coaching",
            "card_desc_private": "Personalized attention for specialized goals and rapid improvement.",
            "card_title_toefl": "TOEFL Prep",
            "card_desc_toefl": "Targeted strategies for the TOEFL iBT exam success.",
            "card_title_kids": "Kids English",
            "card_desc_kids": "Fun, interactive lessons designed for young learners aged 6-12.",

            "reviews_heading": "Success Stories",
            "review_1_text": "\"Thank you for a very thoughtful and well-conducted session. <span class='text-white font-bold'>Your clear explanations, supportive approach, and genuine interest in our learning made it a really positive experience</span> I appreciate the time and effort you put into preparing and delivering the session, and I found it both engaging and valuable. Thank you for your guidance and for creating such a comfortable learning environment Love u miss Houria.\"",
            "review_1_role": "Speaking Course Student",
            "review_2_text": "\"It was really beneficial for me to start such a learning journey with you,<span class='text-white font-bold'> i've learned many things in writing and speaking in order to prepare for my IELTS exam.</span> thank you so much for your effort and all what you have done to make the sessions as helpful as possible.\"",
            "review_2_role": "IELTS Student",

            "faq_heading": "Frequently Asked Questions",
            "faq_1_q": "How do the online classes work?",
            "faq_1_a": "We use Zoom with interactive whiteboards and shared digital materials. Classes are recorded so you can review them later, and you'll have 24/7 access to our learning portal.",
            "faq_2_q": "What does the free assessment include?",
            "faq_2_a": "The 20-minute session includes a speaking evaluation, a quick grammar check, and a personalized roadmap suggesting which course and timeline fits your goals.",
            "faq_3_q": "Are materials included in the price?",
            "faq_3_a": "Yes, all digital textbooks, worksheets, and practice exams are included. You don't need to purchase anything else.",

            "detail_ielts_title": "IELTS Mastery",
            "detail_ielts_desc": "Our IELTS Mastery course is an intensive program designed to help you achieve Band 7.0+ score. We cover all four modules: Listening, Reading, Writing, and Speaking with personalized feedback.",
            "detail_ielts_duration": "12 Weeks",
            "detail_ielts_level": "Intermediate to Advanced",
            "detail_ielts_schedule": "Mon/Wed/Fri - 6:00 PM EST",

            "exams_intro_title": "Why Take International Exams?",
            "exams_intro_desc": "Global certification proves your English proficiency to universities, employers, and immigration authorities worldwide. It is your key to international opportunities.",
            "btn_compare": "Compare Exams",
            "compare_page_title": "IELTS vs TOEFL Comparison",
            "compare_head_feature": "Feature",
            "compare_head_ielts": "IELTS",
            "compare_head_toefl": "TOEFL",
            "comp_purpose": "Purpose",
            "comp_purpose_ielts": "Study, Work, Migration (UK, AU, CA, NZ)",
            "comp_purpose_toefl": "Academic Study (USA, Canada, etc.)",
            "comp_format": "Format",
            "comp_format_ielts": "Paper-based or Computer-delivered",
            "comp_format_toefl": "Internet-based Test (iBT)",
            "comp_speaking": "Speaking",
            "comp_speaking_ielts": "Face-to-face with examiner",
            "comp_speaking_toefl": "Microphone recording",
            "comp_scoring": "Scoring",
            "comp_scoring_ielts": "0-9 Band Score",
            "comp_scoring_toefl": "0-120 Points",

            "compare_head_pte": "PTE Academic",
            "compare_head_cambridge": "Cambridge (CAE)",
            "comp_purpose_pte": "Study, Migration (Global)",
            "comp_purpose_cambridge": "Study, Work (Lifetime validity)",
            "comp_format_pte": "Computer-based only",
            "comp_format_cambridge": "Paper or Computer",
            "comp_speaking_pte": "Microphone recording (AI scored)",
            "comp_speaking_cambridge": "Face-to-face (2 candidates)",
            "comp_scoring_pte": "10-90 Scholastic",
            "comp_scoring_cambridge": "160-210 Scale",

            "card_title_pte": "PTE Academic",
            "card_desc_pte": "Fast, computer-based English test for study abroad and immigration.",
            "card_title_cambridge": "Cambridge C1 Advanced",
            "card_desc_cambridge": "High-level qualification proving language skills employers seek.",

            "card_title_public": "Public Speaking",
            "card_desc_public": "Conquer stage fright and deliver powerful speeches.",
            "card_title_interview": "Job Interview Prep",
            "card_desc_interview": "Master common questions and behavioral interview techniques.",

            "card_title_medical": "Medical English",
            "card_desc_medical": "For healthcare professionals working in international settings.",
            "card_title_tourism": "English for Tourism",
            "card_desc_tourism": "Essential language skills for hospitality and travel industries.",
            "card_title_it": "English for IT",
            "card_desc_it": "Technical vocabulary for software and engineering professionals.",

            "detail_pte_title": "PTE Academic Info",
            "detail_pte_desc": "A fully computer-based exam trusted by universities worldwide. Fast results in typically 48 hours.",
            "detail_pte_duration": "4 Weeks",
            "detail_pte_level": "Intermediate",
            "detail_pte_schedule": "Tue/Thu - 7:00 PM EST",

            "detail_cambridge_title": "Cambridge C1 Advanced",
            "detail_cambridge_desc": "A rigorous exam for high achievers. Unlike others, this certificate does not expire.",
            "detail_cambridge_duration": "14 Weeks",
            "detail_cambridge_level": "Advanced",
            "detail_cambridge_schedule": "Sat/Sun - 10:00 AM EST",

            "detail_public_title": "Public Speaking Mastery",
            "detail_public_desc": "Learn to structure your speech, control your voice, and engage your audience with confidence.",
            "detail_public_duration": "6 Weeks",
            "detail_public_level": "All Levels",
            "detail_public_schedule": "Fri - 5:00 PM EST",

            "detail_interview_title": "Interview Success",
            "detail_interview_desc": "Mock interviews, resume review, and answer structuring (STAR method).",
            "detail_interview_duration": "4 Weeks",
            "detail_interview_level": "Intermediate+",
            "detail_interview_schedule": "Wed - 8:00 PM EST",

            "detail_medical_title": "English for Healthcare",
            "detail_medical_desc": "Focus on patient interaction, medical terminology, and hospital procedures.",
            "detail_medical_duration": "10 Weeks",
            "detail_medical_level": "Intermediate",
            "detail_medical_schedule": "Tue/Thu - 6:00 PM EST",

            "detail_tourism_title": "Hospitality English",
            "detail_tourism_desc": "Customer service excellence for hotels, airlines, and travel agencies.",
            "detail_tourism_duration": "8 Weeks",
            "detail_tourism_level": "Beginner to Intermediate",
            "detail_tourism_schedule": "Mon/Wed - 9:00 AM EST",

            "detail_it_title": "Technical English for IT",
            "detail_it_desc": "Communicate effectively in agile teams, write technical docs, and discuss code.",
            "detail_it_duration": "12 Weeks",
            "detail_it_level": "Intermediate",
            "detail_it_schedule": "Sat - 2:00 PM EST",

            "detail_business_title": "Business English",
            "detail_business_desc": "Master the language of global business. Learn to write effective emails, lead meetings, negotiate with confidence, and deliver impactful presentations.",
            "detail_business_duration": "8 Weeks",
            "detail_business_level": "Intermediate",
            "detail_business_schedule": "Tue/Thu - 7:00 PM EST",

            "detail_general_title": "General Fluency",
            "detail_general_desc": "Improve your daily conversation skills, expand your vocabulary, and gain the confidence to speak in any social situation.",
            "detail_general_duration": "10 Weeks",
            "detail_general_level": "All Levels",
            "detail_general_schedule": "Mon/Wed - 5:00 PM EST",

            "course_details": {
                "ielts": {
                    "title": "IELTS Mastery",
                    "description": "Our IELTS Mastery course is an intensive program designed to help you achieve Band 7.0+ score. We cover all four modules: Listening, Reading, Writing, and Speaking with personalized feedback.",
                    "duration": "12 Weeks",
                    "level": "Intermediate to Advanced",
                    "schedule": "Mon/Wed/Fri - 6:00 PM EST"
                },
                "business": {
                    "title": "Business English",
                    "description": "Master the language of global business. Learn to write effective emails, lead meetings, negotiate with confidence, and deliver impactful presentations.",
                    "duration": "8 Weeks",
                    "level": "Intermediate",
                    "schedule": "Tue/Thu - 7:00 PM EST"
                },
                "general": {
                    "title": "General Fluency",
                    "description": "Improve your daily conversation skills, expand your vocabulary, and gain the confidence to speak in any social situation.",
                    "duration": "10 Weeks",
                    "level": "All Levels",
                    "schedule": "Mon/Wed - 5:00 PM EST"
                },
                "private": {
                    "title": "Private Coaching",
                    "description": "One-on-one sessions tailored specifically to your goals. Whether it's accent reduction, interview prep, or specific industry terminology.",
                    "duration": "Flexible",
                    "level": "All Levels",
                    "schedule": "By Appointment"
                },
                "toefl": {
                    "title": "TOEFL Prep",
                    "description": "Strategic preparation for the TOEFL iBT. We focus on the specific skills needed to succeed in the academic environment.",
                    "duration": "12 Weeks",
                    "level": "Intermediate to Advanced",
                    "schedule": "Tue/Thu - 6:00 PM EST"
                },
                "kids": {
                    "title": "Kids English",
                    "description": "Fun and engaging lessons for children aged 6-12. We use games, stories, and songs to make learning English an adventure.",
                    "duration": "Ongoing",
                    "level": "Beginner",
                    "schedule": "Sat/Sun - 10:00 AM EST"
                }
            },
            "modal_duration": "Duration",
            "modal_level": "Level",
            "modal_schedule": "Schedule",
            "modal_close": "Close"
        },
        "fr": {
            "nav_home": "Accueil",
            "nav_about": "À Propos",
            "nav_courses": "Cours",
            "nav_contact": "Contact",
            "hero_badge": "🚀 Maîtrisez l'anglais, Conquérez votre avenir",
            "hero_title": "Brisez les barrières, parlez avec <span class='text-brandRed'>Confiance</span>.",
            "hero_subtitle": "Que vous prépariez l'IELTS ou visiez la fluidité professionnelle, Houria English vous donne les outils pour réussir à l'international.",
            "btn_explore": "Découvrir nos cours",
            "btn_join": "Séance Gratuite",
            "about_heading": "À Propos de <span class='text-brandRed'>Houria English</span>",
            "about_text": "Fondée par des experts passionnés, Houria English est plus qu'une école. Nous nous concentrons sur l'application réelle, les nuances culturelles et la confiance psychologique.",
            "about_tailored_title": "Apprentissage sur mesure",
            "about_tailored_desc": "Vos objectifs sont uniques, et votre parcours d'apprentissage doit l'être aussi.",
            "about_global_title": "Standards mondiaux",
            "about_global_desc": "Des programmes conçus selon les niveaux internationaux du CECRL (Cadre Européen Commun de Référence pour les Langues).",
            "about_sportive_title": "Environnement bienveillant",
            "about_sportive_desc": "Apprenez dans un espace qui encourage la croissance et célèbre chaque erreur comme une leçon.",
            "courses_heading": "Nos Cours <span class='text-brandRed'>Spécialisés</span>",
            "courses_sub": "Conçus pour des progrès rapides et durables.",
            "btn_seemore": "Voir plus de cours",
            "btn_see_more": "Voir plus",
            "btn_details": "Voir les détails",
            "footer_desc": "Donner aux professionnels et étudiants le pouvoir de conquérir le monde par la maîtrise de la langue.",
            "rights": "© 2024 Houria English. Tous droits réservés.",

            "btn_register": "S'inscrire",
            "taught_by": "Enseigné par Houria",
            "most_popular": "Le Plus Populaire",
            "quick_links": "Liens Rapides",
            "connect": "Connexion",
            "privacy": "Politique de Confidentialité",
            "terms": "Conditions d'Utilisation",

            "catalog_title": "Notre Catalogue Complet",
            "catalog_subtitle": "Trouvez le chemin idéal vers la maîtrise de l'anglais.",

            "card_title_ielts": "Maîtrise IELTS",
            "card_desc_ielts": "Préparation complète aux modules académique et général pour vos opportunités mondiales.",
            "card_title_business": "Anglais des Affaires",
            "card_desc_business": "Maîtrisez la négociation, les présentations et l'étiquette des e-mails professionnels.",
            "card_title_general": "Fluidité Générale",
            "card_desc_general": "Développez une confiance naturelle pour les conversations quotidiennes et les voyages.",
            "card_title_private": "Coaching Privé",
            "card_desc_private": "Attention personnalisée pour des objectifs spécialisés et une progression rapide.",
            "card_title_toefl": "Préparation TOEFL",
            "card_desc_toefl": "Stratégies ciblées pour la réussite à l'examen TOEFL iBT.",
            "card_title_kids": "Anglais pour Enfants",
            "card_desc_kids": "Leçons amusantes et interactives conçues pour les jeunes apprenants de 6 à 12 ans.",

            "reviews_heading": "Histoires de Réussite",
            "review_1_text": "\"Merci beaucoup pour cette séance si enrichissante et si bien menée. <span class='text-white font-bold'>Tes explications claires, ton approche bienveillante et ton intérêt sincère pour notre apprentissage ont rendu cette expérience vraiment positive. J'apprécie le temps et les efforts que tu as consacrés à la préparation et à l'animation de cette session ; je l'ai trouvée à la fois captivante et précieuse. </span> Merci pour tes conseils et pour avoir créé un environnement d'apprentissage aussi agréable. Je t'aime Mademoiselle Houria.\"",
            "review_1_role": "Étudiant Maîtrise IELTS",
            "review_2_text": "\"C'était vraiment bénéfique pour moi de commencer ce parcours d'apprentissage à tes côtés. <span class='text-white font-bold'> J'ai énormément appris, tant à l'écrit qu'à l'oral, pour préparer mon examen de l'IELTS. </span>Merci infiniment pour tes efforts et pour tout ce que tu as fait afin de rendre ces sessions aussi utiles que possible.\"",
            "review_2_role": "Étudiante Anglais des Affaires",

            "faq_heading": "Foire Aux Questions",
            "faq_1_q": "Comment fonctionnent les cours en ligne ?",
            "faq_1_a": "Nous utilisons Zoom avec des tableaux blancs interactifs. Les cours sont enregistrés pour révision et vous avez accès 24/7 au portail d'apprentissage.",
            "faq_2_q": "Que comprend l'évaluation gratuite ?",
            "faq_2_a": "La session de 20 minutes comprend une évaluation orale, un contrôle grammatical rapide et une feuille de route personnalisée.",
            "faq_3_q": "Le matériel est-il inclus dans le prix ?",
            "faq_3_a": "Oui, tous les manuels numériques, fiches d'exercices et examens blancs sont inclus. Vous n'avez rien d'autre à acheter.",

            "detail_ielts_title": "Maîtrise IELTS",
            "detail_ielts_desc": "Notre cours de maîtrise IELTS est un programme intensif conçu pour vous aider à atteindre un score de 7.0+. Nous couvrons les quatre modules : Écoute, Lecture, Écriture et Expression orale.",
            "detail_ielts_duration": "12 Semaines",
            "detail_ielts_level": "Intermédiaire à Avancé",
            "detail_ielts_schedule": "Lun/Mer/Ven - 18h00 EST",

            "exams_intro_title": "Pourquoi les examens internationaux ?",
            "exams_intro_desc": "La certification mondiale prouve votre maîtrise de l'anglais aux universités, employeurs et autorités d'immigration du monde entier. C'est votre clé vers des opportunités internationales.",
            "btn_compare": "Comparer les examens",
            "compare_page_title": "Comparaison IELTS vs TOEFL",
            "compare_head_feature": "Caractéristique",
            "compare_head_ielts": "IELTS",
            "compare_head_toefl": "TOEFL",
            "comp_purpose": "Objectif",
            "comp_purpose_ielts": "Études, Travail, Migration (UK, AU, CA, NZ)",
            "comp_purpose_toefl": "Études universitaires (USA, Canada, etc.)",
            "comp_format": "Format",
            "comp_format_ielts": "Papier ou Ordinateur",
            "comp_format_toefl": "Test basé sur Internet (iBT)",
            "comp_speaking": "Expression orale",
            "comp_speaking_ielts": "Face-à-face avec un examinateur",
            "comp_speaking_toefl": "Enregistrement par microphone",
            "comp_scoring": "Score",
            "comp_scoring_ielts": "De 0 à 9",
            "comp_scoring_toefl": "De 0 à 120 points",

            "compare_head_pte": "PTE Academic",
            "compare_head_cambridge": "Cambridge (CAE)",
            "comp_purpose_pte": "Études, Migration (Mondial)",
            "comp_purpose_cambridge": "Études, Travail (Validité à vie)",
            "comp_format_pte": "Sur ordinateur uniquement",
            "comp_format_cambridge": "Papier ou Ordinateur",
            "comp_speaking_pte": "Enregistrement micro (IA)",
            "comp_speaking_cambridge": "Face-à-face (2 candidats)",
            "comp_scoring_pte": "10-90 Scolaire",
            "comp_scoring_cambridge": "Échelle 160-210",

            "card_title_pte": "PTE Academic",
            "card_desc_pte": "Test rapide sur ordinateur pour les études et l'immigration.",
            "card_title_cambridge": "Cambridge C1 Advanced",
            "card_desc_cambridge": "Qualification de haut niveau recherchée par les employeurs.",

            "card_title_public": "Prise de parole en public",
            "card_desc_public": "Vainquez le trac et prononcez des discours puissants.",
            "card_title_interview": "Préparation aux entretiens",
            "card_desc_interview": "Maîtrisez les questions courantes et les techniques d'entretien.",

            "card_title_medical": "Anglais médical",
            "card_desc_medical": "Pour les professionnels de santé en contexte international.",
            "card_title_tourism": "Anglais du tourisme",
            "card_desc_tourism": "Compétences essentielles pour l'hôtellerie et les voyages.",
            "card_title_it": "Anglais pour l'IT",
            "card_desc_it": "Vocabulaire technique pour les ingénieurs et développeurs.",

            "detail_pte_title": "Info PTE Academic",
            "detail_pte_desc": "Test entièrement informatisé reconnu mondialement. Résultats en 48h.",
            "detail_pte_duration": "4 Semaines",
            "detail_pte_level": "Intermédiaire",
            "detail_pte_schedule": "Mar/Jeu - 19h00 EST",

            "detail_cambridge_title": "Cambridge C1 Advanced",
            "detail_cambridge_desc": "Examen rigoureux pour l'élite. Certificat valable à vie.",
            "detail_cambridge_duration": "14 Semaines",
            "detail_cambridge_level": "Avancé",
            "detail_cambridge_schedule": "Sam/Dim - 10h00 EST",

            "detail_public_title": "Maîtrise oratoire",
            "detail_public_desc": "Structurez votre discours, contrôlez votre voix et captivez l'auditoire.",
            "detail_public_duration": "6 Semaines",
            "detail_public_level": "Tous niveaux",
            "detail_public_schedule": "Ven - 17h00 EST",

            "detail_interview_title": "Succès en entretien",
            "detail_interview_desc": "Simulation d'entretiens, revue de CV et méthode STAR.",
            "detail_interview_duration": "4 Semaines",
            "detail_interview_level": "Intermédiaire+",
            "detail_interview_schedule": "Mer - 20h00 EST",

            "detail_medical_title": "Anglais de la santé",
            "detail_medical_desc": "Interaction patient, terminologie médicale et procédures.",
            "detail_medical_duration": "10 Semaines",
            "detail_medical_level": "Intermédiaire",
            "detail_medical_schedule": "Mar/Jeu - 18h00 EST",

            "detail_tourism_title": "Anglais hôtelier",
            "detail_tourism_desc": "Excellence du service client pour hôtels et agences.",
            "detail_tourism_duration": "8 Semaines",
            "detail_tourism_level": "Débutant à Intermédiaire",
            "detail_tourism_schedule": "Lun/Mer - 9h00 EST",

            "detail_it_title": "Anglais technique IT",
            "detail_it_desc": "Communication efficace pour équipes agiles et documentation.",
            "detail_it_duration": "12 Semaines",
            "detail_it_level": "Intermédiaire",
            "detail_it_schedule": "Sam - 14h00 EST",

            "detail_business_title": "Anglais des Affaires",
            "detail_business_desc": "Maîtrisez la langue des affaires mondiales. Apprenez à rédiger des e-mails efficaces, à diriger des réunions et à négocier avec confiance.",
            "detail_business_duration": "8 Semaines",
            "detail_business_level": "Intermédiaire",
            "detail_business_schedule": "Mar/Jeu - 19h00 EST",

            "detail_general_title": "Fluidité Générale",
            "detail_general_desc": "Améliorez vos compétences de conversation quotidienne, enrichissez votre vocabulaire et gagnez la confiance nécessaire pour parler dans toute situation sociale.",
            "detail_general_duration": "10 Semaines",
            "detail_general_level": "Tous Niveaux",
            "detail_general_schedule": "Lun/Mer - 17h00 EST",

            "course_details": {
                "ielts": {
                    "title": "Maîtrise IELTS",
                    "description": "Notre cours de maîtrise IELTS est un programme intensif conçu pour vous aider à atteindre un score de 7.0+. Nous couvrons les quatre modules : Écoute, Lecture, Écriture et Expression orale.",
                    "duration": "12 Semaines",
                    "level": "Intermédiaire à Avancé",
                    "schedule": "Lun/Mer/Ven - 18h00 EST"
                },
                "business": {
                    "title": "Anglais des Affaires",
                    "description": "Maîtrisez la langue des affaires mondiales. Apprenez à rédiger des e-mails efficaces, à diriger des réunions et à négocier avec confiance.",
                    "duration": "8 Semaines",
                    "level": "Intermédiaire",
                    "schedule": "Mar/Jeu - 19h00 EST"
                },
                "general": {
                    "title": "Fluidité Générale",
                    "description": "Améliorez vos compétences de conversation quotidienne, enrichissez votre vocabulaire et gagnez la confiance nécessaire pour parler dans toute situation sociale.",
                    "duration": "10 Semaines",
                    "level": "Tous Niveaux",
                    "schedule": "Lun/Mer - 17h00 EST"
                },
                "private": {
                    "title": "Coaching Privé",
                    "description": "Des sessions individuelles adaptées spécifiquement à vos objectifs. Que ce soit pour la réduction d'accent, la préparation aux entretiens ou la terminologie spécifique.",
                    "duration": "Flexible",
                    "level": "Tous Niveaux",
                    "schedule": "Sur Rendez-vous"
                },
                "toefl": {
                    "title": "Préparation TOEFL",
                    "description": "Préparation stratégique pour le TOEFL iBT. Nous nous concentrons sur les compétences spécifiques nécessaires pour réussir dans l'environnement académique.",
                    "duration": "12 Semaines",
                    "level": "Intermédiaire à Avancé",
                    "schedule": "Mar/Jeu - 18h00 EST"
                },
                "kids": {
                    "title": "Anglais pour Enfants",
                    "description": "Des leçons amusantes et engageantes pour les enfants de 6 à 12 ans. Nous utilisons des jeux, des histoires et des chansons.",
                    "duration": "Continu",
                    "level": "Débutant",
                    "schedule": "Sam/Dim - 10h00 EST"
                }
            },
            "modal_duration": "Durée",
            "modal_level": "Niveau",
            "modal_schedule": "Horaire",
            "modal_close": "Fermer"
        },
        "ar": {
            "nav_home": "الرئيسية",
            "nav_about": "من نحن",
            "nav_courses": "دوراتنا",
            "nav_contact": "اتصل بنا",
            "hero_badge": "🚀 أتقن الإنجليزية، اصنع مستقبلك",
            "hero_title": "تحدث الإنجليزية <span class='text-brandRed'>بثقة</span> واكسر القيود.",
            "hero_subtitle": "سواء كنت تستعد لاختبار IELTS أو تهدف للطلاقة المهنية، توفر لك حورية انجليزية الأدوات والتوجيه للنجاح عالمياً.",
            "btn_explore": "استكشف دوراتنا",
            "btn_join": "انضم لجلسة مجانية",
            "about_heading": "عن <span class='text-brandRed'>حورية انجليزية</span>",
            "about_text": "تأسست حورية انجليزية على يد خبراء لغويين، وهي أكثر من مجرد مدرسة. نركز على التطبيق العملي، والفروق الثقافية، والثقة النفسية للتحدث بطلاقة.",
            "about_tailored_title": "تعلم مُصمم خصيصاً لك",
            "about_tailored_desc": "أهدافك فريدة من نوعها، لذا يجب أن يكون مسار تعلمك فريداً أيضاً.",
            "about_global_title": "معايير عالمية",
            "about_global_desc": "مناهج تعليمية صُممت وفقاً لمستويات الإطار الأوروبي المرجعي الموحد للغات (CEFR).",
            "about_sportive_title": "بيئة داعمة",
            "about_sportive_desc": "تعلم في مساحة تحفز على النمو وتعتبر كل خطأ درساً يستحق الاحتفاء.",
            "courses_heading": "دوراتنا <span class='text-brandRed'>المتخصصة</span>",
            "courses_sub": "مصممة لتحقيق تقدم سريع ونتائج دائمة.",
            "btn_seemore": "شاهد المزيد من الدورات",
            "btn_see_more": "شاهد المزيد",
            "btn_details": "التفاصيل",
            "footer_desc": "تمكين المحترفين والطلاب من غزو العالم من خلال إتقان اللغة.",
            "rights": "© 2024 حورية انجليزية. جميع الحقوق محفوظة.",

            "btn_register": "تسجيل",
            "taught_by": "تدريس حورية",
            "most_popular": "الأكثر طلباً",
            "quick_links": "روابط سريعة",
            "connect": "تواصل معنا",
            "privacy": "سياسة الخصوصية",
            "terms": "شروط الخدمة",

            "catalog_title": "كتالوج دوراتنا الكامل",
            "catalog_subtitle": "اعثر على المسار المثالي لإتقان الإنجليزية.",

            "card_title_ielts": "إتقان الآيلتس (IELTS)",
            "card_desc_ielts": "تحضير شامل للوحدات الأكاديمية والعامة لربطك بالفرص العالمية.",
            "card_title_business": "الإنجليزية للأعمال",
            "card_desc_business": "أتقن التفاوض، والعروض التقديمية، وإتيكيت البريد الإلكتروني المحترف لعالم الشركات.",
            "card_title_general": "الطلاقة العامة",
            "card_desc_general": "ابنِ ثقة طبيعية للمحادثات اليومية، والسفر، والتفاعلات الاجتماعية.",
            "card_title_private": "تدريب خاص",
            "card_desc_private": "اهتمام شخصي لأهداف متخصصة وتحسن سريع.",
            "card_title_toefl": "التحضير للتوفل (TOEFL)",
            "card_desc_toefl": "استراتيجيات موجهة للنجاح في اختبار TOEFL iBT.",
            "card_title_kids": "الإنجليزية للأطفال",
            "card_desc_kids": "دروس ممتعة وتفاعلية مصممة للمتعلمين الصغار من سن 6-12.",

            "reviews_heading": "قصص نجاح",
            "review_1_text": "\شكراً جزيلاً لكِ على هذه الجلسة الرائعة والمُدارة بإتقان.<span class='text-white font-bold'>لقد جعلتِ من هذه التجربة إيجابية حقاً بفضل شرحكِ الواضح، وأسلوبكِ الداعم، واهتمامكِ الصادق بتعلمنا. أقدّر عالياً الوقت والجهد اللذين بذلتِهما في تحضير وتقديم هذه الجلسة، فقد كانت ممتعة وقيمة للغاية.</span> شكراً لكِ على توجيهكِ وعلى خلق بيئة تعليمية مريحة. أحبكِ آنسة حورية.\"",
            "review_1_role": "طالبة دورة المحادثة",
            "review_2_text": "\"قد كان من المفيد لي حقاً أن أبدأ رحلة التعلم هذه معكِ؛ <span class='text-white font-bold'> فقد تعلمتُ الكثير من الأشياء في مهارات الكتابة والمحادثة للتحضير لاختبار 'IELTS'. </span> شكراً جزيلاً لكِ على مجهودكِ وعلى كل ما قدمتِهِ لجعل الحصص مفيدة ومثمرة قدر الإمكان.\"",
            "review_2_role": "طالب اتقان الآيلتس",

            "faq_heading": "الأسئلة الشائعة",
            "faq_1_q": "كيف تعمل الدروس عبر الإنترنت؟",
            "faq_1_a": "نستخدم Zoom مع سبورات بيضاء تفاعلية. يتم تسجيل الدروس للمراجعة، ولديك وصول 24/7 لبوابة التعلم.",
            "faq_2_q": "ماذا يتضمن التقييم المجاني؟",
            "faq_2_a": "تشمل الجلسة (20 دقيقة) تقييم التحدث، وفحص سريع للقواعد، وخطة طريق مخصصة تقترح الدورة والجدول الزمني المناسب لأهدافك.",
            "faq_3_q": "هل المواد مشمولة في السعر؟",
            "faq_3_a": "نعم، جميع الكتب الرقمية، وأوراق العمل، والاختبارات التجريبية مشمولة. لا تحتاج لشراء أي شيء آخر.",

            "detail_ielts_title": "إتقان الآيلتس (IELTS)",
            "detail_ielts_desc": "دورتنا لإتقان الآيلتس هي برنامج مكثف مصمم لمساعدتك على تحقيق درجة 7.0 وما فوق. نغطي جميع الوحدات الأربع: الاستماع، القراءة، الكتابة، والتحدث.",
            "detail_ielts_duration": "12 أسبوع",
            "detail_ielts_level": "متوسط إلى متقدم",
            "detail_ielts_schedule": "السبت/الاثنين/الاربعاء - 6:00 مساءً",

            "exams_intro_title": "لماذا الامتحانات الدولية؟",
            "exams_intro_desc": "الشهادات العالمية تثبت كفاءتك في اللغة الإنجليزية للجامعات وأصحاب العمل وسلطات الهجرة في جميع أنحاء العالم. إنها مفتاحك للفرص الدولية.",
            "btn_compare": "مقارنة الامتحانات",
            "compare_page_title": "مقارنة IELTS مقابل TOEFL",
            "compare_head_feature": "الميزة",
            "compare_head_ielts": "IELTS",
            "compare_head_toefl": "TOEFL",
            "comp_purpose": "الهدف",
            "comp_purpose_ielts": "الدراسة، العمل، الهجرة (بريطانيا، أستراليا، كندا، نيوزيلندا)",
            "comp_purpose_toefl": "الدراسة الجامعية (أمريكا، كندا، إلخ)",
            "comp_format": "التنسيق",
            "comp_format_ielts": "ورقي أو عبر الحاسوب",
            "comp_format_toefl": "اختبار عبر الإنترنت (iBT)",
            "comp_speaking": "المحادثة",
            "comp_speaking_ielts": "وجهاً لوجه مع ممتحن",
            "comp_speaking_toefl": "تسجيل عبر الميكروفون",
            "comp_scoring": "الدرجات",
            "comp_scoring_ielts": "مقياس 0-9",
            "comp_scoring_toefl": "0-120 نقطة",

            "compare_head_pte": "PTE Academic",
            "compare_head_cambridge": "Cambridge (CAE)",
            "comp_purpose_pte": "دراسة، هجرة (عالمي)",
            "comp_purpose_cambridge": "دراسة، عمل (صلاحية مدى الحياة)",
            "comp_format_pte": "حاسوب فقط",
            "comp_format_cambridge": "ورقي أو حاسوب",
            "comp_speaking_pte": "تسجيل ميكروفون (ذكاء اصطناعي)",
            "comp_speaking_cambridge": "وجهاً لوجه (مرشحان)",
            "comp_scoring_pte": "10-90 درجة",
            "comp_scoring_cambridge": "مقياس 160-210",

            "card_title_pte": "PTE Academic",
            "card_desc_pte": "اختبار سريع عبر الحاسوب للدراسة بالخارج والهجرة.",
            "card_title_cambridge": "Cambridge C1 Advanced",
            "card_desc_cambridge": "مؤهل عالي المستوى يثبت المهارات اللغوية التي يبحث عنها أصحاب العمل.",

            "card_title_public": "الخطابة العامة",
            "card_desc_public": "تغلب على رهبة المسرح وقدم خطابات قوية.",
            "card_title_interview": "التحضير للمقابلات",
            "card_desc_interview": "أتقن الأسئلة الشائعة وتقنيات المقابلة السلوكية.",

            "card_title_medical": "الإنجليزية الطبية",
            "card_desc_medical": "لمتخصصي الرعاية الصحية العاملين في بيئات دولية.",
            "card_title_tourism": "الإنجليزية للسياحة",
            "card_desc_tourism": "مهارات لغوية أساسية لصناعات الضيافة والسفر.",
            "card_title_it": "الإنجليزية لتقنية المعلومات",
            "card_desc_it": "المفردات التقنية للمهندسين ومطوري البرمجيات.",

            "detail_pte_title": "معلومات PTE",
            "detail_pte_desc": "اختبار محوسب بالكامل موثوق به عالمياً. نتائج سريعة خلال 48 ساعة.",
            "detail_pte_duration": "4 أسابيع",
            "detail_pte_level": "متوسط",
            "detail_pte_schedule": "الثلاثاء/الخميس - 7:00 م",

            "detail_cambridge_title": "Cambridge C1 Advanced",
            "detail_cambridge_desc": "امتحان صارم للنخبة. على عكس الآخرين، هذه الشهادة لا تنتهي صلاحيتها.",
            "detail_cambridge_duration": "14 أسبوع",
            "detail_cambridge_level": "متقدم",
            "detail_cambridge_schedule": "السبت/الأحد - 10:00 ص",

            "detail_public_title": "إتقان الخطابة",
            "detail_public_desc": "تعلم كيفية هيكلة خطابك، والتحكم في صوتك، وجذب الجمهور بثقة.",
            "detail_public_duration": "6 أسابيع",
            "detail_public_level": "جميع المستويات",
            "detail_public_schedule": "الجمعة - 5:00 م",

            "detail_interview_title": "نجاح المقابلة",
            "detail_interview_desc": "مقابلات وهمية، مراجعة السيرة الذاتية، وهيكلة الإجابات (طريقة STAR).",
            "detail_interview_duration": "4 أسابيع",
            "detail_interview_level": "متوسط+",
            "detail_interview_schedule": "الأربعاء - 8:00 م",

            "detail_medical_title": "الإنجليزية للرعاية الصحية",
            "detail_medical_desc": "التركيز على تفاعل المريض، والمصطلحات الطبية، وإجراءات المستشفى.",
            "detail_medical_duration": "10 أسابيع",
            "detail_medical_level": "متوسط",
            "detail_medical_schedule": "الثلاثاء/الخميس - 6:00 م",

            "detail_tourism_title": "الإنجليزية الفندقية",
            "detail_tourism_desc": "تميز خدمة العملاء للفنادق وشركات الطيران.",
            "detail_tourism_duration": "8 أسابيع",
            "detail_tourism_level": "مبتدئ إلى متوسط",
            "detail_tourism_schedule": "الاثنين/الأربعاء - 9:00 ص",

            "detail_it_title": "الإنجليزية التقنية",
            "detail_it_desc": "تواصل بفعالية في الفرق، واكتب وثائق تقنية، وناقش الكود.",
            "detail_it_duration": "12 أسبوع",
            "detail_it_level": "متوسط",
            "detail_it_schedule": "السبت - 2:00 م",

            "detail_business_title": "الإنجليزية للأعمال",
            "detail_business_desc": "أتقن لغة الأعمال العالمية. تعلم كتابة رسائل بريد إلكتروني فعالة، وقيادة الاجتماعات، والتفاوض بثقة.",
            "detail_business_duration": "8 أسابيع",
            "detail_business_level": "متوسط",
            "detail_business_schedule": "الثلاثاء/الخميس - 7:00 م",

            "detail_general_title": "الطلاقة العامة",
            "detail_general_desc": "حسن مهارات المحادثة اليومية، ووسع مفرداتك، واكتسب الثقة للتحدث في أي موقف اجتماعي.",
            "detail_general_duration": "10 أسابيع",
            "detail_general_level": "جميع المستويات",
            "detail_general_schedule": "الإثنين/الأربعاء - 5:00 م",

            "course_details": {
                "ielts": {
                    "title": "إتقان الآيلتس (IELTS)",
                    "description": "دورتنا لإتقان الآيلتس هي برنامج مكثف مصمم لمساعدتك على تحقيق درجة 7.0 وما فوق. نغطي جميع الوحدات الأربع: الاستماع، القراءة، الكتابة، والتحدث.",
                    "duration": "12 أسبوع",
                    "level": "متوسط إلى متقدم",
                    "schedule": "الإثنين/الأربعاء/الجمعة - 6:00 م"
                },
                "business": {
                    "title": "الإنجليزية للأعمال",
                    "description": "أتقن لغة الأعمال العالمية. تعلم كتابة رسائل بريد إلكتروني فعالة، وقيادة الاجتماعات، والتفاوض بثقة.",
                    "duration": "8 أسابيع",
                    "level": "متوسط",
                    "schedule": "الثلاثاء/الخميس - 7:00 م"
                },
                "general": {
                    "title": "الطلاقة العامة",
                    "description": "حسن مهارات المحادثة اليومية، ووسع مفرداتك، واكتسب الثقة للتحدث في أي موقف اجتماعي.",
                    "duration": "10 أسابيع",
                    "level": "جميع المستويات",
                    "schedule": "الإثنين/الأربعاء - 5:00 م"
                },
                "private": {
                    "title": "تدريب خاص",
                    "description": "جلسات فردية مصممة خصيصاً لأهدافك. سواء كان ذلك لتقليل اللهجة، أو التحضير للمقابلة، أو لمصطلحات صناعية محددة.",
                    "duration": "مرن",
                    "level": "جميع المستويات",
                    "schedule": "بالمواعيد"
                },
                "toefl": {
                    "title": "التحضير للتوفل (TOEFL)",
                    "description": "إعداد استراتيجي لاختبار TOEFL iBT. نركز على المهارات المحددة اللازمة للنجاح في البيئة الأكاديمية.",
                    "duration": "12 أسبوع",
                    "level": "متوسط إلى متقدم",
                    "schedule": "الثلاثاء/الخميس - 6:00 م"
                },
                "kids": {
                    "title": "الإنجليزية للأطفال",
                    "description": "دروس ممتعة وجذابة للأطفال من سن 6 إلى 12 عاماً. نستخدم الألعاب والقصص والأغاني.",
                    "duration": "مستمر",
                    "level": "مبتدئ",
                    "schedule": "السبت/الأحد - 10:00 ص"
                }
            },
            "modal_duration": "المدة",
            "modal_level": "المستوى",
            "modal_schedule": "الموعد",
            "modal_close": "إغلاق"
        }
    };

    let currentLang = localStorage.getItem('he_lang') || 'en';

    // --- Set Language Logic ---
    const setLanguage = (lang) => {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found.`);
            return;
        }

        currentLang = lang;

        // Update Simple Text Elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (translations[lang][key].includes('<')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Direction & Font
        const html = document.documentElement;
        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.classList.add('font-arabic');
        } else {
            html.setAttribute('dir', 'ltr');
            html.classList.remove('font-arabic');
        }

        // Save preference
        localStorage.setItem('he_lang', lang);
    };

    // --- Interaction Handlers ---

    // A. Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ensure we get the button even if clicking on children
            const targetBtn = e.target.closest('button');
            if (targetBtn) {
                const lang = targetBtn.getAttribute('data-lang');
                if (lang) setLanguage(lang);
            }
        });
    });


    // B. Burger Menu Logic
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = burgerBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = burgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // C. Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    scrollElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(el);
    });


    // D. Course Modal Logic
    const modal = document.getElementById('course-modal');
    if (modal) {
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalDuration = document.getElementById('modal-duration');
        const modalLevel = document.getElementById('modal-level');
        const modalSchedule = document.getElementById('modal-schedule');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const modalOverlay = document.getElementById('modal-overlay');

        // Close functions
        const closeModal = () => {
            modal.classList.add('hidden');
        };

        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        // Open functions
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.see-details-btn')) {
                const btn = e.target.closest('.see-details-btn');
                const courseKey = btn.getAttribute('data-course');

                if (translations[currentLang] && translations[currentLang].course_details && translations[currentLang].course_details[courseKey]) {
                    const details = translations[currentLang].course_details[courseKey];
                    const labels = translations[currentLang];

                    // Populate
                    if (modalTitle) modalTitle.textContent = details.title;
                    if (modalDesc) modalDesc.textContent = details.description;

                    if (modalDuration) modalDuration.innerHTML = `<strong>${labels.modal_duration || 'Duration'}:</strong> ${details.duration}`;
                    if (modalLevel) modalLevel.innerHTML = `<strong>${labels.modal_level || 'Level'}:</strong> ${details.level}`;
                    if (modalSchedule) modalSchedule.innerHTML = `<strong>${labels.modal_schedule || 'Schedule'}:</strong> ${details.schedule}`;

                    if (closeModalBtn) closeModalBtn.textContent = labels.modal_close || 'Close';

                    // Show
                    modal.classList.remove('hidden');
                } else {
                    console.error('Course details not found for:', courseKey);
                }
            }
        });
    }

    // --- Initialize ---
    // Initialize immediately with saving/default language since we have the data
    setLanguage(currentLang);

});
