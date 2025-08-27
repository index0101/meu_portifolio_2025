// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Dashboard Analytics UI",
        description: "Interface moderna para dashboard de analytics com foco em usabilidade e visualização de dados.",
        category: "uiux",
        image: "images/uiux_example_new1.png",
        tags: ["UI Design", "UX Research", "Figma"],
        details: {
            client: "TechCorp Solutions",
            duration: "3 semanas",
            tools: ["Figma", "Adobe XD", "Principle"],
            challenge: "Criar uma interface intuitiva para visualização de dados complexos",
            solution: "Desenvolvemos um sistema de design consistente com hierarquia visual clara e componentes reutilizáveis.",
            images: [
                "images/uiux_example_new1.png",
                "images/uiux_example_new2.png"
            ]
        }
    },
    {
        id: 2,
        title: "E-commerce Mobile App",
        description: "Aplicativo mobile para e-commerce com experiência de compra otimizada e design responsivo.",
        category: "uiux",
        image: "images/uiux_example_new2.png",
        tags: ["Mobile UI", "UX Design", "Prototyping"],
        details: {
            client: "Fashion Store",
            duration: "4 semanas",
            tools: ["Sketch", "InVision", "Zeplin"],
            challenge: "Melhorar a taxa de conversão do app mobile existente",
            solution: "Redesenhamos o fluxo de compra com foco na redução de etapas e melhoria da experiência do usuário.",
            images: [
                "images/uiux_example_new2.png",
                "images/uiux_example_new1.png"
            ]
        }
    },
    {
        id: 3,
        title: "Identidade Visual Luxury Brand",
        description: "Desenvolvimento completo de identidade visual para marca de luxo, incluindo logo, paleta e aplicações.",
        category: "graphic",
        image: "images/graphic_design_example_new1.jpg",
        tags: ["Branding", "Logo Design", "Identidade Visual"],
        details: {
            client: "Luxury Boutique",
            duration: "6 semanas",
            tools: ["Illustrator", "Photoshop", "InDesign"],
            challenge: "Criar uma identidade que transmitisse elegância e exclusividade",
            solution: "Desenvolvemos uma marca sofisticada com tipografia elegante e paleta de cores refinada.",
            images: [
                "images/graphic_design_example_new1.jpg",
                "images/graphic_design_example_new2.jpg"
            ]
        }
    },
    {
        id: 4,
        title: "Logo Design Minimalista",
        description: "Criação de logo minimalista para startup de tecnologia com foco em simplicidade e modernidade.",
        category: "graphic",
        image: "images/graphic_design_example_new2.jpg",
        tags: ["Logo Design", "Minimalismo", "Startup"],
        details: {
            client: "Tech Startup",
            duration: "2 semanas",
            tools: ["Illustrator", "Figma"],
            challenge: "Criar um logo memorável que representasse inovação e confiabilidade",
            solution: "Desenvolvemos um símbolo geométrico simples com tipografia moderna e versátil.",
            images: [
                "images/graphic_design_example_new2.jpg",
                "images/graphic_design_example_new1.jpg"
            ]
        }
    }
];

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

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        mobileMenuToggle.addEventListener('click', () => this.toggle());
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
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

// Smooth Scrolling and Navigation
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active navigation item on scroll
        window.addEventListener('scroll', () => this.updateActiveNav());
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
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
}

// Portfolio Management
class Portfolio {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderPortfolio();
        this.initFilters();
    }

    renderPortfolio() {
        portfolioGrid.innerHTML = '';
        
        const filteredData = this.currentFilter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === this.currentFilter);

        filteredData.forEach((item, index) => {
            const portfolioItem = this.createPortfolioItem(item, index);
            portfolioGrid.appendChild(portfolioItem);
        });

        // Trigger animations
        setTimeout(() => {
            document.querySelectorAll('.portfolio-item').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('fade-in', 'visible');
                }, index * 100);
            });
        }, 100);
    }

    createPortfolioItem(item, index) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in';
        portfolioItem.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${item.image}')">
                <div class="portfolio-overlay">
                    <button class="btn" onclick="portfolio.openModal(${item.id})">Ver Detalhes</button>
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
                const filter = button.getAttribute('data-filter');
                this.setFilter(filter);
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Hide current items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('hidden');
        });

        // Render new items after animation
        setTimeout(() => {
            this.renderPortfolio();
        }, 300);
    }

    openModal(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        modalBody.innerHTML = this.createModalContent(item);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createModalContent(item) {
        return `
            <div class="modal-header">
                <h2 id="modal-title">${item.title}</h2>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-images">
                ${item.details.images.map(img => `
                    <img src="${img}" alt="${item.title}" style="width: 100%; margin-bottom: 1rem; border-radius: 0.75rem;">
                `).join('')}
            </div>
            
            <div class="modal-details">
                <div class="detail-grid">
                    <div class="detail-item">
                        <h4>Cliente</h4>
                        <p>${item.details.client}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Duração</h4>
                        <p>${item.details.duration}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Ferramentas</h4>
                        <p>${item.details.tools.join(', ')}</p>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Desafio</h4>
                    <p>${item.details.challenge}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Solução</h4>
                    <p>${item.details.solution}</p>
                </div>
            </div>
        `;
    }

    closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Contact Form Management
class ContactForm {
    constructor() {
        this.init();
    }

    init() {
        contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Create WhatsApp message
        const whatsappMessage = `Olá! Meu nome é ${name} (${email}).\n\n${message}`;
        const whatsappUrl = `https://wa.me/5551997806768?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success message
        this.showSuccessMessage();
        
        // Reset form
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

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }

    handleScroll() {
        // Parallax effect for hero background
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Update navbar background opacity
        const navbar = document.querySelector('.navbar');
        const opacity = Math.min(scrolled / 100, 1);
        navbar.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
    }
}

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth reveal animation
    revealElement(element, delay = 0) {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    },

    // Generate random ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
};

// Initialize Application
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

initializeComponents() {
    // Initialize all components
    this.themeManager = new ThemeManager();
    this.mobileMenu = new MobileMenu();
    this.navigation = new Navigation();
    this.portfolio = new Portfolio();
    this.contactForm = new ContactForm();

    // Initialize scroll animations for existing elements
    // Cria o observer antes de adicionar as classes
    this.scrollAnimations = new ScrollAnimations();
    this.initScrollAnimations();

    // Initialize modal events
    this.initModalEvents();

    // Add loading complete class
    document.body.classList.add('loaded');
}

    initModalEvents() {
        // Close modal events
        modalClose.addEventListener('click', () => this.portfolio.closeModal());
        modalOverlay.addEventListener('click', () => this.portfolio.closeModal());
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.portfolio.closeModal();
            }
        });
    }

    initScrollAnimations() {
        // Add animation classes to elements
        document.querySelectorAll('.section-header').forEach(el => {
            el.classList.add('fade-in');
        });

        document.querySelectorAll('.about-text').forEach(el => {
            el.classList.add('slide-in-left');
        });

        document.querySelectorAll('.about-visual, .contact-form').forEach(el => {
            el.classList.add('slide-in-right');
        });
    }
}

// Global portfolio instance for modal access
let portfolio;

// Start the application
const app = new App();

// Make portfolio globally accessible after initialization
document.addEventListener('DOMContentLoaded', () => {
    portfolio = app.portfolio;
});

// Add some CSS for modal content styling
const modalStyles = `
<style>
.modal-header {
    margin-bottom: 2rem;
}

.modal-header h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.modal-images {
    margin-bottom: 2rem;
}

.detail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.detail-item h4,
.detail-section h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
}

.detail-item p,
.detail-section p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.detail-section {
    margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
    .detail-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
</style>
`;

// Inject modal styles
document.head.insertAdjacentHTML('beforeend', modalStyles);

