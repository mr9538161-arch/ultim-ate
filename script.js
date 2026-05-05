// --- Services Details Data --- //
const servicesData = {
    ps: {
        title: "البلاستيشن",
        desc: "اختر الفئة المفضلة لديك واستمتع بأقوى الألعاب والتحديات مع الأصدقاء.",
        categories: [
            { title: "ألعاب مباريات وكرة قدم", icon: "fa-solid fa-futbol", img: "https://images.unsplash.com/photo-1493707553966-283afac8c358?auto=format&fit=crop&w=500", p: "أحدث إصدارات فيفا وبيس وغيرها من الألعاب الرياضية الحماسية." },
            { title: "ألعاب حرب وأكشن", icon: "fa-solid fa-person-rifle", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500", p: "كول أوف ديوتي، باتلفيلد، والمزيد من ألعاب القتال الجماعي والمغامرات." },
            { title: "ألعاب سباق ومنوعة", icon: "fa-solid fa-car", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=500", p: "تحديات سباق السيارات والعديد من الألعاب المنوعة والممتعة." }
        ]
    },
    tennis: {
        title: "كرة التنس",
        desc: "أجواء تنافسية وبطولات ومعدات احترافية لممارسة رياضتك المفضلة.",
        categories: [
            { title: "طاولات تنس احترافية", icon: "fa-solid fa-table-tennis-paddle-ball", img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=500", p: "ألعب على أفضل الطاولات المطابقة للمواصفات الدولية." },
            // { title: "مضارب بجودة عالية", icon: "fa-solid fa-fire", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=500", p: "نوفر لك مضارب بخامات ممتازة تمنحك تحكماً أعلى وسرعة في اللعب." },
            // { title: "تدريب وبطولات", icon: "fa-solid fa-trophy", img: "https://images.unsplash.com/photo-1611250282006-4484dd3fba6b?auto=format&fit=crop&w=500", p: "حسّن مهاراتك وشارك في بطولات الملتقى للفوز بجوائز قيمة." }
        ]
    },
    copyGames: {
        title: "نسخ الألعاب",
        desc: "أضخم مكتبة ألعاب لجميع أجهزة الكونسول بأسعار مناسبة.",
        categories: [
            { title: "ألعاب PS4 و PS5", icon: "fa-brands fa-playstation", img: "https://images.unsplash.com/photo-1608269785084-dd948d3d99e5?auto=format&fit=crop&w=500", p: "مكتبة ضخمة وحصرية لأحدث الألعاب متوفرة للنسخ والتحميل السريع." },
            { title: "تحديثات وإضافات", icon: "fa-solid fa-download", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500", p: "نقوم بتحديث ألعابك القديمة وإضافة الداتا باك والخرائط الجديدة." }
        ]
    },
    billiards: {
        title: "البلياردو",
        desc: "التركيز، الدقة، والأجواء الهادئة هي ما يميز صالة البلياردو لدينا.",
        categories: [
            { title: "طاولات 8-Ball", icon: "fa-solid fa-bowling-ball", img: "https://images.unsplash.com/photo-1602070868112-9bd0fae7ccfa?auto=format&fit=crop&w=500", p: "استمتع باللعبة الكلاسيكية الأكثر شعبية مع أصدقائك في أجواء مميزة." },
            { title: "طاولات سنوكر المحترفين", icon: "fa-solid fa-gem", img: "https://images.unsplash.com/photo-1598285994273-049bd21d603a?auto=format&fit=crop&w=500", p: "مساحات وطاولات سنوكر مخصصة لعشاق الدقة والاحتراف المتقدم." },
            { title: "إكسسوارات راقية", icon: "fa-solid fa-magic", img: "https://images.unsplash.com/photo-1588725842845-a4bba8903c73?auto=format&fit=crop&w=500", p: "عصي ومثلثات وطباشير من ماركات أصلية لضمان أفضل تسديدة." }
        ]
    },
    foosball: {
        title: "كرة قدم الطاولة",
        desc: "حماس الفرفيرة وضحكات الأصدقاء متوفرة بأفضل التجهيزات.",
        categories: [
            { title: "طاولات خشبية صلبة", icon: "fa-solid fa-futbol", img: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=500", p: "تصميم انسيابي للّعب السريع ومقابض مريحة لليد لتحديات طويلة." },
            // { title: "أجواء التحدي", icon: "fa-solid fa-people-group", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=500", p: "مكان واسع ومريح يجمعك بالأصدقاء لتكوين فرق واللعب الجماهيري." }
        ]
    },
    copySeries: {
        title: "نسخ المسلسلات",
        desc: "أفلام ومسلسلات بدقة 4K جاهزة لتأخذها معك لأي مكان.",
        categories: [
            { title: "مسلسلات NETFLIX", icon: "fa-solid fa-tv", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=500", p: "أحدث الحلقات من المنصات العالمية كاملة ومترجمة." },
            { title: "أفلام السينما والأكشن", icon: "fa-solid fa-film", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500", p: "تشكيلة من أفلام البوكس أوفيس بجودة البلوراي العالية." },
            { title: "مكتبة الأنمي", icon: "fa-solid fa-bolt", img: "https://images.unsplash.com/photo-1578632292335-df3fbc185854?auto=format&fit=crop&w=500", p: "جميع الأنميات المفضلة والمستمرة متوفرة للمشاهدة المتواصلة." }
        ]
    },
    gym: {
        title: "الصالة الرياضية",
        desc: "أجهزة متطورة وبرامج تدريب متكاملة لصناعة جسم الأحلام.",
        categories: [
            { title: "كمال الأجسام والأوزان", icon: "fa-solid fa-dumbbell", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500", p: "قسم مخصص للأوزان الحرة والآلات الثقيلة لتضخيم وتعريض العضلات." },
            { title: "اللياقة والكارديو", icon: "fa-solid fa-heart-pulse", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500", p: "أجهزة جري ودراجات لتنشيط القلب وحرق الدهون والحصول على قوام رشيق." },
            { title: "مدربون محترفون", icon: "fa-solid fa-user-group", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500", p: "استشارات ومتابعة غذائية وتدريبية مستمرة من نخبة المدربين." }
        ]
    },
    gymnastics: {
        title: "الجمباز",
        desc: "مرونة وخفة ومهارة تناسب مختلف الفئات السنية.",
        categories: [
            { title: "الجمباز الأرضي والفني", icon: "fa-solid fa-child-reaching", img: "https://images.unsplash.com/photo-1566352063345-31c183bc66d6?auto=format&fit=crop&w=500", p: "تدريبات على البساط للقفز والشقلبة وتطوير مرونة الجسم بشكل مذهل." },
            { title: "تدريبات التوازن والتكوين", icon: "fa-solid fa-scale-balanced", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=500", p: "تمارين متخصصة تساعد على التوافق العضلي والعصبي بأمان." }
        ]
    },
    martial: {
        title: "الفنون القتالية",
        desc: "تعلم الدفاع عن النفس وارفع مستوى الانضباط والتركيز.",
        categories: [
            { title: "الجودو والكاراتيه", icon: "fa-solid fa-yin-yang", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=500", p: "تعلم المهارات الأساسية وتكنيك الإسقاط واللكمات بروح الدفاع والانضباط." },
            { title: "الملاكمة والكيك بوكسينغ", icon: "fa-solid fa-hand-fist", img: "https://images.unsplash.com/photo-1622599511051-16ba38812bf0?auto=format&fit=crop&w=500", p: "حلبات مجهزة بالكامل للتدرب على تفريغ طاقتك وبناء قوة دفاعية قوية." },
            { title: "الدفاع المتقدم (MMA)", icon: "fa-solid fa-khanda", img: "https://images.unsplash.com/photo-1599863261623-1d0fc1d11ce0?auto=format&fit=crop&w=500", p: "فنون القتال المختلطة مع محترفين معتمدين لتطوير السرعة وردات الفعل." }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
// --------------------------
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
// -------------------------------------------
    // Close mobile menu when an item is clicked
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Scroll Animations Observer (Handles the entry animation)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // For cards: add animation delay
                if (entry.target.classList.contains('service-card')) {
                    const delay = entry.target.style.getPropertyValue('--i') || 0;
                    entry.target.style.transitionDelay = `${delay * 0.1}s`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.glass-panel').forEach(panel => {
        panel.style.opacity = "0";
        panel.style.transform = "scale(0.95)";
        panel.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

        const panelObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "scale(1)";
                    panelObserver.unobserve(entry.target);
                }
            });
        });
        panelObserver.observe(panel);
    });

    createParticles();
    init3DTilt();
});

// Dynamic Modal Logic
const modal = document.getElementById('dynamic-modal');
const modalTitle = document.getElementById('modal-title-accent');
const modalDesc = document.getElementById('modal-desc');
const modalCategoriesContainer = document.getElementById('modal-categories-container');

function openModal(serviceId) {
    const data = servicesData[serviceId];
    if (!data) return;

    // Populate Data
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Build categories HTML
    modalCategoriesContainer.innerHTML = ''; // clear old
    const fragment = document.createDocumentFragment();
    data.categories.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'category-card';
        catCard.innerHTML = `
            <img src="${cat.img}" alt="${cat.title}" loading="lazy" decoding="async">
            <div class="overlay">
                <i class="${cat.icon}"></i>
                <h3>${cat.title}</h3>
                <p>${cat.p}</p>
            </div>
        `;
        catCard.onclick = () => catCard.classList.toggle('active');
        fragment.appendChild(catCard);
    });
    modalCategoriesContainer.appendChild(fragment);

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// 3D Tilt Hover Effect for High Impact
function init3DTilt() {
    // Prevent tilt logic on touch devices (mobile) to avoid sticking bugs
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;

    const cards = document.querySelectorAll('.tilt-efx');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            // Only apply tilt after scroll animation finished
            if (!card.classList.contains('visible')) return;

            card.style.transition = "none";

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 15 degrees)
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('visible')) return;
            card.style.transition = "transform 0.5s ease-out, box-shadow 0.3s ease, border-color 0.3s ease";
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

function createParticles() {
    const container = document.getElementById('particles');
    // Reduce particles for mobile to improve performance and prevent lag
    const particleCount = window.innerWidth < 768 ? 15 : 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const colors = [
            { bg: 'rgba(255, 215, 0, 0.5)', shadow: 'rgba(255, 215, 0, 0.8)' },   // Gold
            { bg: 'rgba(0, 242, 254, 0.5)', shadow: 'rgba(0, 242, 254, 0.8)' },   // Cyan
            { bg: 'rgba(255, 0, 128, 0.5)', shadow: 'rgba(255, 0, 128, 0.8)' },   // Pink/Purple
            { bg: 'rgba(0, 255, 128, 0.5)', shadow: 'rgba(0, 255, 128, 0.8)' },   // Green
            { bg: 'rgba(255, 80, 80, 0.5)', shadow: 'rgba(255, 80, 80, 0.8)' },   // Red
            { bg: 'rgba(150, 0, 255, 0.5)', shadow: 'rgba(150, 0, 255, 0.8)' }    // Deep Purple
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color.bg;
        particle.style.boxShadow = `0 0 12px ${color.shadow}`;

        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';

        const duration = Math.random() * 20 + 10;
        particle.style.animation = `floatParticle ${duration}s linear infinite`;
        particle.style.animationDelay = `-${Math.random() * 20}s`;

        container.appendChild(particle);
    }

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 50 - 25}vw); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);
}
