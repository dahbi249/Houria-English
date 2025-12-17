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
            "about_curriculum_title": "Expert Curriculum",
            "about_curriculum_desc": "British English standards tailored for international success.",
            "about_learning_title": "Interactive Learning",
            "about_learning_desc": "Live Zoom classes, digital whiteboards, and real-time feedback.",
            "courses_heading": "Our Specialized <span class='text-brandRed'>Courses</span>",
            "courses_sub": "Designed for rapid progress and lasting results.",
            "btn_seemore": "See More Courses",
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

            "card_title_ielts": "IELTS Mastery",
            "card_desc_ielts": "Comprehensive preparation for Academic and General modules connecting you to global opportunities.",
            "card_title_business": "Business English",
            "card_desc_business": "Master negotiation, presentations, and professional email etiquette for the corporate world.",
            "card_title_general": "General Fluency",
            "card_desc_general": "Build natural confidence for daily conversations, travel, and social interactions.",
            "card_title_private": "Private Coaching",
            "card_desc_private": "Personalized attention for specialized goals and rapid improvement.",
            "card_title_toefl": "TOEFL Prep",
            "card_desc_toefl": "Targeted strategies for the TOEFL iBT exam success.",
            "card_title_kids": "Kids English",
            "card_desc_kids": "Fun, interactive lessons designed for young learners aged 6-12.",

            "reviews_heading": "Success Stories",
            "review_1_text": "\"I finally reached my <span class='text-white font-bold'>Band 8.0</span> in IELTS thanks to Houria. The specific breakdown of my writing errors was exactly what I needed to cross the threshold.\"",
            "review_1_role": "IELTS Mastery Student",
            "review_2_text": "\"The lessons are so engaging! I feel much more confident speaking in my corporate meetings. I even gave my first presentation in English last week!\"",
            "review_2_role": "Business English Student",

            "faq_heading": "Frequently Asked Questions",
            "faq_1_q": "How do the online classes work?",
            "faq_1_a": "We use Zoom with interactive whiteboards and shared digital materials. Classes are recorded so you can review them later, and you'll have 24/7 access to our learning portal.",
            "faq_2_q": "What does the free assessment include?",
            "faq_2_a": "The 20-minute session includes a speaking evaluation, a quick grammar check, and a personalized roadmap suggesting which course and timeline fits your goals.",
            "faq_3_q": "Are materials included in the price?",
            "faq_3_a": "Yes, all digital textbooks, worksheets, and practice exams are included. You don't need to purchase anything else.",

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
            "about_curriculum_title": "Programme Expert",
            "about_curriculum_desc": "Normes d'anglais britannique adaptées pour un succès international.",
            "about_learning_title": "Apprentissage Interactif",
            "about_learning_desc": "Cours Zoom en direct, tableaux blancs numériques et feedback en temps réel.",
            "courses_heading": "Nos Cours <span class='text-brandRed'>Spécialisés</span>",
            "courses_sub": "Conçus pour des progrès rapides et durables.",
            "btn_seemore": "Voir plus de cours",
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
            "review_1_text": "\"J'ai enfin atteint mon <span class='text-white font-bold'>Band 8.0</span> à l'IELTS grâce à Houria. L'analyse précise de mes erreurs d'écriture était exactement ce dont j'avais besoin.\"",
            "review_1_role": "Étudiant Maîtrise IELTS",
            "review_2_text": "\"Les cours sont tellement captivants ! Je me sens beaucoup plus confiant lors de mes réunions d'entreprise. J'ai même fait ma première présentation en anglais la semaine dernière !\"",
            "review_2_role": "Étudiante Anglais des Affaires",

            "faq_heading": "Foire Aux Questions",
            "faq_1_q": "Comment fonctionnent les cours en ligne ?",
            "faq_1_a": "Nous utilisons Zoom avec des tableaux blancs interactifs. Les cours sont enregistrés pour révision et vous avez accès 24/7 au portail d'apprentissage.",
            "faq_2_q": "Que comprend l'évaluation gratuite ?",
            "faq_2_a": "La session de 20 minutes comprend une évaluation orale, un contrôle grammatical rapide et une feuille de route personnalisée.",
            "faq_3_q": "Le matériel est-il inclus dans le prix ?",
            "faq_3_a": "Oui, tous les manuels numériques, fiches d'exercices et examens blancs sont inclus. Vous n'avez rien d'autre à acheter.",

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
            "hero_subtitle": "سواء كنت تستعد لاختبار IELTS أو تهدف للطلاقة المهنية، توفر لك حورية إنجلش الأدوات والتوجيه للنجاح عالمياً.",
            "btn_explore": "استكشف دوراتنا",
            "btn_join": "انضم لجلسة مجانية",
            "about_heading": "عن <span class='text-brandRed'>حورية إنجلش</span>",
            "about_text": "تأسست حورية إنجلش على يد خبراء لغويين، وهي أكثر من مجرد مدرسة. نركز على التطبيق العملي، والفروق الثقافية، والثقة النفسية للتحدث بطلاقة.",
            "about_curriculum_title": "منهج خبير",
            "about_curriculum_desc": "معايير الإنجليزية البريطانية المصممة للنجاح الدولي.",
            "about_learning_title": "تعلم تفاعلي",
            "about_learning_desc": "دروس Zoom مباشرة، وسبورات بيضاء رقمية، وملاحظات فورية.",
            "courses_heading": "دوراتنا <span class='text-brandRed'>المتخصصة</span>",
            "courses_sub": "مصممة لتحقيق تقدم سريع ونتائج دائمة.",
            "btn_seemore": "شاهد المزيد من الدورات",
            "btn_details": "التفاصيل",
            "footer_desc": "تمكين المحترفين والطلاب من غزو العالم من خلال إتقان اللغة.",
            "rights": "© 2024 حورية إنجلش. جميع الحقوق محفوظة.",

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
            "review_1_text": "\"أخيراً حققت <span class='text-white font-bold'>8.0</span> في الآيلتس بفضل حورية. تحليل أخطائي في الكتابة كان بالضبط ما أحتاجه لتجاوز العقبة.\"",
            "review_1_role": "طالب إتقان الآيلتس",
            "review_2_text": "\"الدروس ممتعة جداً! أشعر بثقة أكبر الآن في التحدث خلال اجتماعات الشركة. حتى أنني قدمت عرضي التقديمي الأول بالإنجليزية الأسبوع الماضي!\"",
            "review_2_role": "طالبة الإنجليزية للأعمال",

            "faq_heading": "الأسئلة الشائعة",
            "faq_1_q": "كيف تعمل الدروس عبر الإنترنت؟",
            "faq_1_a": "نستخدم Zoom مع سبورات بيضاء تفاعلية. يتم تسجيل الدروس للمراجعة، ولديك وصول 24/7 لبوابة التعلم.",
            "faq_2_q": "ماذا يتضمن التقييم المجاني؟",
            "faq_2_a": "تشمل الجلسة (20 دقيقة) تقييم التحدث، وفحص سريع للقواعد، وخطة طريق مخصصة تقترح الدورة والجدول الزمني المناسب لأهدافك.",
            "faq_3_q": "هل المواد مشمولة في السعر؟",
            "faq_3_a": "نعم، جميع الكتب الرقمية، وأوراق العمل، والاختبارات التجريبية مشمولة. لا تحتاج لشراء أي شيء آخر.",

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
