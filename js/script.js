// Portfolio Data with Video Support
const portfolioData = [
    {
        id: 1,
        title: "Dashboard Analytics UI",
        description: "Interface para dashboard de analytics com foco em usabilidade e visualização de mapa para rastreamento de Mísseis.",
        category: "uiux",
        image: "images/missele-dashboard_01.jpg",
        tags: ["UI Design", "UX Research", "Figma"],
        details: {
            client: "Thomas Gonzalez Roberts",
            duration: "4 dias",
            tools: ["Figma", "Adobe XD", "CorelDraw"],
            challenge: "Criar uma interface intuitiva para visualização de dados complexos",
            solution: "Desenvolvemos um sistema de design consistente com hierarquia visual clara e componentes reutilizáveis.",
            images: ["images/missele-dashboard_01.jpg", "images/missele-dashboard_02.jpg", "images/missele-dashboard_03.jpg", "images/missele-dashboard_04.jpg"]
        }
    },
    {
        id: 2,
        title: "Coffee Mobile App",
        description: "Aplicativo mobile para e-commerce com experiência de compra otimizada e design responsivo.",
        category: "uiux",
        image: "images/uiux_example_new2.png",
        tags: ["Mobile UI", "UX Design", "Prototyping"],
        details: {
            client: "Yulia Coffee Shop",
            duration: "1 semana",
            tools: ["Figma", "Ilustrator", "Photoshop", "CorelDraw"],
            challenge: "Melhorar a taxa de conversão do app mobile existente",
            solution: "Redesenhamos o fluxo de compra com foco na redução de etapas e melhoria da experiência do usuário.",
            images: ["images/uiux_example_new2.png", "images/uiux_example_new1.png"],
            // INSTRUÇÕES PARA EDIÇÃO: Para adicionar vídeo, use a propriedade 'video' com o caminho do arquivo
            video: "videos/coffeeapp-Opera2025-09-1218-29-04.mp4" // Vídeo do projeto Coffee Bar
        }
    },
    {
        id: 3,
        title: "Identidade Visual Ozix",
        description: "Desenvolvimento completo de identidade visual para marca de micro SaaS, incluindo logo, paleta e aplicações.",
        category: "graphic",
        image: "images/graphic_design_example_new1.jpg",
        tags: ["Branding", "Logo Design", "Identidade Visual"],
        details: {
            client: "Ozix Design SaaS",
            duration: "1 semana",
            tools: ["Illustrator", "Photoshop", "InDesign", "CorelDRAW"],
            challenge: "Criar uma identidade que transmitisse elegância e exclusividade",
            solution: "Desenvolvi uma marca sofisticada/tecnologica com tipografia elegante e paleta de cores refinada.",
            images: ["images/graphic_design_example_new1.jpg", "images/ozix_design_saas.jpg", "images/ozix_design_saas_02.jpg"]
        }
    },
    {
        id: 4,
        title: "Car Graphics Showcase",
        description: "Criação de artes digitais destacando carros esportivos de forma moderna e impactante.",
        category: "graphic",
        image: "images/01.jpg",
        tags: ["Graphic Design", "Car Design", "Social Midia"],
        details: {
            client: "Speed Car",
            duration: "1 dia",
            tools: ["Illustrator", "Figma", "CorelDraw" ],
            challenge: "Transmitir velocidade e elegância em imagens atrativas para portfólio e redes sociais.",
            solution: "Desenvolvi composições dinâmicas com cores e contrastes que valorizam o design dos veículos.",
            images: ["images/01.jpg", "images/02.jpg","images/03.jpg"]
        }
    }
];

// Language Data
const languageData = {
    pt: {
        // Navigation
        'Home': 'Home',
        'Sobre': 'Sobre',
        'Portfólio': 'Portfólio',
        'Contato': 'Contato',
        
        // Hero Section
        'Design que': 'Design que',
        'Inspira': 'Inspira',
        'Criando experiências visuais únicas através do Design Gráfico e UI/UX': 'Criando experiências visuais únicas através do Design Gráfico e UI/UX',
        'Ver Portfólio': 'Ver Portfólio',
        'Vamos Conversar': 'Vamos Conversar',
        'Role para baixo': 'Role para baixo',
        
        // About Section
        'Sobre Mim': 'Sobre Mim',
        'Paixão por design e inovação': 'Paixão por design e inovação',
        'Designer Gráfico & UI/UX | Data Science': 'Designer Gráfico & UI/UX | Data Science',
        'Habilidades & Ferramentas': 'Habilidades & Ferramentas',
        'Design & Criação': 'Design & Criação',
        'Visualização & Modelagem': 'Visualização & Modelagem',
        'Desenvolvimento & Código': 'Desenvolvimento & Código',
        
        // Portfolio Section
        'Projetos que fazem a diferença': 'Projetos que fazem a diferença',
        'Todos': 'Todos',
        'UI/UX Design': 'UI/UX Design',
        'Design Gráfico': 'Design Gráfico',
        'Logos Criadas & Revitalizadas': 'Logos Criadas & Revitalizadas',
        
        // Contact Section
        'Vamos Trabalhar Juntos': 'Vamos Trabalhar Juntos',
        'Transforme sua ideia em realidade': 'Transforme sua ideia em realidade',
        'Entre em Contato': 'Entre em Contato',
        'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.': 'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.',
        'Compartilhar Portfólio': 'Compartilhar Portfólio',
        'Nome': 'Nome',
        'E-mail': 'E-mail',
        'Mensagem': 'Mensagem',
        'Enviar Mensagem': 'Enviar Mensagem',
        
        // Footer
        '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo': '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo'
    },
    en: {
        // Navigation
        'Home': 'Home',
        'Sobre': 'About',
        'Portfólio': 'Portfolio',
        'Contato': 'Contact',
        
        // Hero Section
        'Design que': 'Design that',
        'Inspira': 'Inspires',
        'Criando experiências visuais únicas através do Design Gráfico e UI/UX': 'Creating unique visual experiences through Graphic Design and UI/UX',
        'Ver Portfólio': 'View Portfolio',
        'Vamos Conversar': "Let's Talk",
        'Role para baixo': 'Scroll down',
        
        // About Section
        'Sobre Mim': 'About Me',
        'Paixão por design e inovação': 'Passion for design and innovation',
        'Designer Gráfico & UI/UX | Data Science': 'Graphic Designer & UI/UX | Data Science',
        'Habilidades & Ferramentas': 'Skills & Tools',
        'Design & Criação': 'Design & Creation',
        'Visualização & Modelagem': 'Visualization & Modeling',
        'Desenvolvimento & Código': 'Development & Code',
        
        // Portfolio Section
        'Projetos que fazem a diferença': 'Projects that make a difference',
        'Todos': 'All',
        'UI/UX Design': 'UI/UX Design',
        'Design Gráfico': 'Graphic Design',
        'Logos Criadas & Revitalizadas': 'Created & Revitalized Logos',
        
        // Contact Section
        'Vamos Trabalhar Juntos': "Let's Work Together",
        'Transforme sua ideia em realidade': 'Transform your idea into reality',
        'Entre em Contato': 'Get in Touch',
        'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.': "I'm always open to new projects and collaborations. Let's talk about how I can help bring your ideas to life.",
        'Compartilhar Portfólio': 'Share Portfolio',
        'Nome': 'Name',
        'E-mail': 'Email',
        'Mensagem': 'Message',
        'Enviar Mensagem': 'Send Message',
        
        // Footer
        '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo': '&copy; 2024 Developed with 💜 by Gessica Araujo'
    }
};

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const portfolioGrid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('portfolio-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const languageButtons = document.querySelectorAll('.lang-btn');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.updateThemeIcon();
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.updateThemeIcon();
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    updateThemeIcon() {
        const icon = themeToggle.querySelector('.theme-icon');
        icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'pt';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.updateLanguageButtons();
        
        languageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        this.applyLanguage(lang);
        this.updateLanguageButtons();
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('data-lang', lang);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-pt][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.innerHTML.includes('&copy;')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        

        // Traduzir placeholders
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');
        
        if (nameInput) {
            nameInput.placeholder = this.currentLang === 'pt' ? 'Ex: João Silva' : 'Ex: John Smith';
        }
        if (emailInput) {
            emailInput.placeholder = this.currentLang === 'pt' ? 'Ex: seuemail@dominio.com' : 'Ex: youremail@domain.com';
        }
        if (messageTextarea) {
            const ptPlaceholder = messageTextarea.getAttribute('data-pt');
            const enPlaceholder = messageTextarea.getAttribute('data-en');
            messageTextarea.placeholder = this.currentLang === 'pt' ? ptPlaceholder : enPlaceholder;
        }
    }

    updateLanguageButtons() {
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        mobileMenuToggle.addEventListener('click', () => this.toggle());
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        navMenu.classList.toggle('active', this.isOpen);
        this.updateToggleIcon();
    }

    close() {
        this.isOpen = false;
        navMenu.classList.remove('active');
        this.updateToggleIcon();
    }

    updateToggleIcon() {
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (this.isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}

// Navigation with Road Slide Effect
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.roadSlideToSection(target);
                }
            });
        });

        window.addEventListener('scroll', () => this.updateActiveNav());
    }

    roadSlideToSection(target) {
        const offsetTop = target.offsetTop - 80;
        
        // Add road slide effect to target section
        target.classList.add('road-slide');
        
        // Smooth scroll to target
        window.scrollTo({ 
            top: offsetTop, 
            behavior: 'smooth' 
        });
        
        // Remove road slide class after animation
        setTimeout(() => {
            target.classList.remove('road-slide');
        }, 800);
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
}

// Portfolio with Video Support
class Portfolio {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        this.renderPortfolio();
        this.initFilters();
    }

    renderPortfolio() {
        portfolioGrid.innerHTML = '';
        const filteredData = this.currentFilter === 'all' ? portfolioData : portfolioData.filter(item => item.category === this.currentFilter);

        filteredData.forEach((item, index) => {
            const portfolioItem = this.createPortfolioItem(item);
            portfolioGrid.appendChild(portfolioItem);
            setTimeout(() => portfolioItem.classList.add('visible'), index * 100);
            this.observer.observe(portfolioItem);
        });
    }

    createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in glass';
        portfolioItem.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${item.image}')">
                <div class="portfolio-overlay">
                    <button class="btn btn-primary" onclick="portfolio.openModal(${item.id})">Ver Detalhes</button>
                </div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        return portfolioItem;
    }

    initFilters() {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setFilter(button.getAttribute('data-filter'));
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.renderPortfolio();
    }

    openModal(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        modalBody.innerHTML = this.createModalContent(item);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createModalContent(item) {
        let mediaContent = '';
        
        // INSTRUÇÕES PARA EDIÇÃO: Se o projeto tem vídeo, exibe o player responsivo
        if (item.details.video) {
            mediaContent = `
                <div class="modal-video" style="margin-bottom: 1.5rem; text-align: center;">
                    <video controls style="max-width: 100%; max-height: 300px; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                        <source src="${item.details.video}" type="video/mp4">
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            `;
        }
        
        // Adiciona as imagens
        mediaContent += `
            <div class="modal-images">
                ${item.details.images.map(img => `
                    <img src="${img}" alt="${item.title}" 
                         style="max-width:100%; height:auto; margin-bottom:0.75rem; border-radius:0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                `).join('')}
            </div>
        `;

        return `
            <div class="modal-header">
                <h2 id="modal-title">${item.title}</h2>
                <div class="portfolio-tags">${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}</div>
            </div>
            ${mediaContent}
            <div class="modal-details">
                <div class="detail-grid">
                    <div class="detail-item"><h4>Cliente</h4><p>${item.details.client}</p></div>
                    <div class="detail-item"><h4>Duração</h4><p>${item.details.duration}</p></div>
                    <div class="detail-item"><h4>Ferramentas</h4><p>${item.details.tools.join(', ')}</p></div>
                </div>
                <div class="detail-section"><h4>Desafio</h4><p>${item.details.challenge}</p></div>
                <div class="detail-section"><h4>Solução</h4><p>${item.details.solution}</p></div>
            </div>
        `;
    }

    closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause any playing videos
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

// Contact Form
class ContactForm {
    constructor() { 
        this.init(); 
    }

    init() { 
        contactForm.addEventListener('submit', e => this.handleSubmit(e)); 
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const whatsappUrl = `https://wa.me/5551997806768?text=${encodeURIComponent(`Olá! Meu nome é ${name} (${email}).\n\n${message}`)}`;
        window.open(whatsappUrl, '_blank');

        this.showSuccessMessage();
        contactForm.reset();
    }

    showSuccessMessage() {
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Mensagem Enviada! ✓';
        button.style.background = '#10b981';
        setTimeout(() => { 
            button.textContent = originalText; 
            button.style.background = ''; 
        }, 3000);
    }
}

// Social Share
class SocialShare {
    constructor() {
        this.init();
    }

    init() {
        const shareButtons = {
            facebook: document.getElementById('share-facebook'),
            twitter: document.getElementById('share-twitter'),
            linkedin: document.getElementById('share-linkedin')
        };

        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Gessica Design - Portfólio UI/UX, Design Gráfico e Data Science');
        const description = encodeURIComponent('Portfólio profissional de Gessica Araujo - Designer UI/UX, Design Gráfico e Data Science.');

        if (shareButtons.facebook) {
            shareButtons.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        }

        if (shareButtons.twitter) {
            shareButtons.twitter.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        }

        if (shareButtons.linkedin) {
            shareButtons.linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        }
    }
}

// Scroll Animations with Road Slide Effect
class ScrollAnimations {
    constructor() { 
        this.init(); 
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add road slide effect when element becomes visible
                    if (entry.target.classList.contains('slide-in-left') || 
                        entry.target.classList.contains('slide-in-right')) {
                        entry.target.classList.add('road-slide');
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => observer.observe(el));

        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if(heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Enhanced navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.backdropFilter = 'var(--glass-backdrop)';
            navbar.style.borderBottom = '1px solid var(--glass-border)';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = 'none';
            navbar.style.boxShadow = 'none';
        }
    }
}

// Logo Carousel
class LogoCarousel {
    constructor() {
        this.init();
    }

    init() {
        const logoTrack = document.querySelector('.logo-track');
        if (!logoTrack) return;

        // Pause animation on hover
        logoTrack.addEventListener('mouseenter', () => {
            logoTrack.style.animationPlayState = 'paused';
        });

        logoTrack.addEventListener('mouseleave', () => {
            logoTrack.style.animationPlayState = 'running';
        });

        // Add touch support for mobile
        let startX = 0;
        let scrollLeft = 0;

        logoTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            logoTrack.style.animationPlayState = 'paused';
        });

        logoTrack.addEventListener('touchend', () => {
            logoTrack.style.animationPlayState = 'running';
        });
    }
}

// App
class App {
    constructor() { 
        this.init(); 
    }

    init() {
        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.themeManager = new ThemeManager();
        this.languageManager = new LanguageManager();
        this.mobileMenu = new MobileMenu();
        this.navigation = new Navigation();
        this.portfolio = new Portfolio();
        this.contactForm = new ContactForm();
        this.socialShare = new SocialShare();
        this.scrollAnimations = new ScrollAnimations();
        this.logoCarousel = new LogoCarousel();

        this.initModalEvents();
        this.initKeyboardNavigation();
        document.body.classList.add('loaded');
    }

    initModalEvents() {
        modalClose.addEventListener('click', () => this.portfolio.closeModal());
        modalOverlay.addEventListener('click', () => this.portfolio.closeModal());
        document.addEventListener('keydown', e => { 
            if(e.key==='Escape' && modal.classList.contains('active')) {
                this.portfolio.closeModal(); 
            }
        });
    }

    initKeyboardNavigation() {
        // Add keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// Global portfolio instance
let portfolio;

// Start App
const app = new App();
document.addEventListener('DOMContentLoaded', () => { 
    portfolio = app.portfolio; 
});

// Modal styles injection
const modalStyles = `
<style>
.modal-header { margin-bottom:2rem; }
.modal-header h2 { font-size:2rem; font-weight:600; margin-bottom:1rem; color:var(--text-primary); }
.modal-video { text-align: center; }
.modal-images { margin-bottom:2rem; }
.detail-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.5rem; margin-bottom:2rem; }
.detail-item h4, .detail-section h4 { font-size:1.1rem; font-weight:600; color:var(--accent-primary); margin-bottom:0.5rem; }
.detail-item p, .detail-section p { color:var(--text-secondary); line-height:1.6; }
.detail-section { margin-bottom:1.5rem; }

/* Keyboard navigation styles */
.keyboard-navigation *:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}

/* Enhanced video player styles */
video {
    transition: all 0.3s ease;
}

video:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4) !important;
}

/* Road slide animation enhancement */
.road-slide {
    animation: roadSlide 0.8s ease-out;
}

@media(max-width:768px) { 
    .detail-grid { grid-template-columns:1fr; gap:1rem; }
    .modal-content { max-width: 95vw; padding: 1rem; }
    .modal-video video { max-width: 100%; }
}
</style>`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here for PWA features
    });
}

// Preload critical images
const criticalImages = [
    'images/perfil.jpg',
    'images/01.png',
    'images/02.png',
    'images/03.png'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

console.log('🎨 Gessica Design Portfolio - Loaded successfully!');

// Função para compartilhamento nas redes sociais
function initSocialShare() {
    // Obter a URL atual da página
    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareText = encodeURIComponent("Confira o incrível portfólio de Gessica Araujo - Designer UI/UX, Design Gráfico e Data Science!");
    
    // Configurar URLs de compartilhamento
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    
    // Atribuir URLs aos botões
    const facebookBtn = document.getElementById('share-facebook');
    const twitterBtn = document.getElementById('share-twitter');
    const linkedinBtn = document.getElementById('share-linkedin');
    
    if (facebookBtn) facebookBtn.href = facebookShareUrl;
    if (twitterBtn) twitterBtn.href = twitterShareUrl;
    if (linkedinBtn) linkedinBtn.href = linkedinShareUrl;
    
    // Adicionar eventos de clique para abrir em nova janela
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Abrir janela de compartilhamento
            const shareUrl = this.href;
            const windowFeatures = 'width=600,height=400,location=no,menubar=no,toolbar=no,status=no';
            window.open(shareUrl, 'Compartilhar', windowFeatures);
            
            // Feedback visual (opcional)
            showShareFeedback(this);
        });
    });
}

// Função para mostrar feedback visual ao compartilhar
function showShareFeedback(button) {
    const originalBackground = button.style.backgroundColor;
    const platform = button.classList.contains('facebook') ? 'Facebook' : 
                    button.classList.contains('twitter') ? 'Twitter' : 'LinkedIn';
    
    // Efeito visual de confirmação
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#27ae60'; // Verde de confirmação
    
    setTimeout(() => {
        button.style.transform = '';
        button.style.backgroundColor = originalBackground;
    }, 300);
    
    // Log no console para debug
    console.log(`Compartilhando no ${platform}`);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initSocialShare();
});