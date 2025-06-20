// Elementos do DOM
const header = document.querySelector('header');
const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const techCircles = document.querySelectorAll('.tech-circle');
const scrollIndicator = document.querySelector('.scroll-indicator');
const contatoForm = document.querySelector('#contato-form');
const statNumbers = document.querySelectorAll('.stat-number');
const progressBars = document.querySelectorAll('.progress-bar');

// Animações dos círculos de fundo
function animateCircles() {
    techCircles.forEach((circle, index) => {
        const size = 100 + (index * 50);
        const speed = 20 + (index * 5);
        const delay = index * 0.5;
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.animation = `float ${speed}s ease-in-out ${delay}s infinite`;
    });
}

// Efeito parallax nos círculos
function handleParallax() {
    techCircles.forEach((circle, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(window.scrollY * speed);
        circle.style.transform = `translateY(${yPos}px)`;
    });
}

// Header scroll effect
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Menu mobile
function toggleMenu() {
    menuMobile.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Filtro do portfólio
function filterPortfolio() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Atualiza botões ativos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtra itens
            portfolioItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'todos' || filter === category) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 50);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
}

// Filtro das soluções
function filterSolucoes() {
    const filterBtns = document.querySelectorAll('.solucoes-filters .filter-btn');
    const solucaoCards = document.querySelectorAll('.solucao-card');
    const solucoesGrid = document.querySelector('.solucoes-grid');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Atualiza botões ativos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtra itens
            solucaoCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'todos' || filter === category) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });

            // Ajusta o grid após a filtragem
            setTimeout(() => {
                const visibleCards = document.querySelectorAll('.solucao-card[style*="display: block"]');
                if (visibleCards.length === 1) {
                    solucoesGrid.style.justifyContent = 'center';
                } else {
                    solucoesGrid.style.justifyContent = 'flex-start';
                }
            }, 300);
        });
    });
}

// Animação dos números
function animateNumbers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.value);
                const duration = 2000;
                const startTime = performance.now();
                
                function updateNumber(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const currentValue = Math.floor(progress * finalValue);
                    target.textContent = currentValue.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    }
                }
                
                requestAnimationFrame(updateNumber);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(number => observer.observe(number));
}

// Animação das barras de progresso
function animateProgressBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.dataset.value;
                bar.style.width = `${value}%`;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Scroll suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });
}

// Animação ao scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// Validação do formulário
function initFormValidation() {
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Simula envio
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
                submitBtn.classList.add('success');
                
                // Reseta formulário
                this.reset();
                
                // Restaura botão
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                }, 3000);
            }, 1500);
        });
    }
}

// Adiciona estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .portfolio-item {
        opacity: 0;
        transform: scale(0.9);
        transition: all 0.3s ease-out;
    }
    
    .portfolio-item.show {
        opacity: 1;
        transform: scale(1);
    }
    
    .tech-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease-out;
    }
    
    .tech-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    animateCircles();
    filterPortfolio();
    filterSolucoes();
    animateNumbers();
    animateProgressBars();
    initSmoothScroll();
    animateOnScroll();
    initFormValidation();
    
    // Event listeners
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleParallax();
    });
    
    menuMobile.addEventListener('click', toggleMenu);
    
    // Anima tech stack items sequencialmente
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), index * 100);
    });
});

// Controle do Modal de Detalhes
function toggleLandingDetails() {
    const modal = document.getElementById('landingDetailsModal');
    modal.classList.toggle('active');
    
    // Previne o scroll do body quando o modal estiver aberto
    document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}

// Fecha o modal ao clicar fora dele
document.addEventListener('click', (e) => {
    const modal = document.getElementById('landingDetailsModal');
    if (e.target === modal) {
        toggleLandingDetails();
    }
});

// Fecha o modal com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('landingDetailsModal');
        if (modal.classList.contains('active')) {
            toggleLandingDetails();
        }
    }
});

// Função para alternar o modal de landing pages
function toggleLandingPages() {
    const modal = document.getElementById('landingPagesModal');
    const body = document.body;

    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    } else {
        modal.classList.add('active');
        body.style.overflow = 'hidden';
        body.classList.add('modal-open');
    }
}

// Fecha o modal ao clicar fora
window.addEventListener('click', (event) => {
    const modal = document.getElementById('landingPagesModal');
    const modalContent = document.querySelector('#landingPagesModal .modal-content');
    const body = document.body;

    if (event.target === modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    }
});

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('landingPagesModal');
    const body = document.body;

    if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    }
});

// Função para alternar o modal de Jogos
function toggleGamesModal() {
    const modal = document.getElementById('gamesModal');
    const body = document.body;

    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    } else {
        modal.classList.add('active');
        body.style.overflow = 'hidden';
        body.classList.add('modal-open');
    }
}

// Fecha o modal de Jogos ao clicar fora
window.addEventListener('click', (event) => {
    const modal = document.getElementById('gamesModal');
    const modalContent = document.querySelector('#gamesModal .modal-content');
    const body = document.body;

    if (event.target === modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    }
});

// Fecha o modal de Jogos ao pressionar ESC
document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('gamesModal');
    const body = document.body;

    if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.style.overflow = '';
        body.classList.remove('modal-open');
    }
});

window.toggleLandingPages = toggleLandingPages;
window.toggleGamesModal = toggleGamesModal; 