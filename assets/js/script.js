document.addEventListener('DOMContentLoaded', () => {

    // --- Global Translations Object ---
    let translations = {};
    let currentLang = localStorage.getItem('he_lang') || 'en';

    // --- 1. Load Translations ---
    const loadTranslations = async () => {
        try {
            const response = await fetch('assets/translations.json');
            translations = await response.json();
            // Initialize with saved or default language
            setLanguage(currentLang);
        } catch (error) {
            console.error('Could not load translations:', error);
        }
    };

    // --- 2. Set Language Logic ---
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

    // --- 3. Interaction Handlers ---

    // A. Language Switcher
    // We delegate the event to the document or common parent/navbar to be safe, 
    // or just attach to all existing buttons directly if they exist on load.
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ensure we get the button even if clicking on children (though text usually safe)
            const targetBtn = e.target.closest('button');
            if (targetBtn) {
                const lang = targetBtn.getAttribute('data-lang');
                setLanguage(lang);
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

        // Open functions - Attach to current and future .see-details-btn
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.see-details-btn')) {
                const btn = e.target.closest('.see-details-btn');
                const courseKey = btn.getAttribute('data-course');

                if (translations[currentLang] && translations[currentLang].course_details && translations[currentLang].course_details[courseKey]) {
                    const details = translations[currentLang].course_details[courseKey];
                    const labels = translations[currentLang];

                    // Populate
                    modalTitle.textContent = details.title;
                    modalDesc.textContent = details.description;

                    // We can use innerHTML for structured info or just text
                    modalDuration.innerHTML = `<strong>${labels.modal_duration || 'Duration'}:</strong> ${details.duration}`;
                    modalLevel.innerHTML = `<strong>${labels.modal_level || 'Level'}:</strong> ${details.level}`;
                    modalSchedule.innerHTML = `<strong>${labels.modal_schedule || 'Schedule'}:</strong> ${details.schedule}`;

                    // Update Labels inside modal if needed (e.g. Close button text)
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
    loadTranslations();

});
