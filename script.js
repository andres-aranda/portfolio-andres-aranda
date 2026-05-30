/* ==========================================================================
   Andrés Aranda - Portfolio Interactive JavaScript (ES6+)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* === Theme Toggle System (Light / Dark) === */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme on load
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });

    
    /* === Mobile Menu Navigation === */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    };

    const closeMenu = () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    
    /* === Header Scroll Effects (Hide/Show & Transparency) === */
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Apply scroll-up/scroll-down classes
        if (scrollTop > scrollThreshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else {
                // Scrolling up
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
        } else {
            // At the top
            header.classList.remove('scroll-up', 'scroll-down');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll values
    });

    
    /* === Active Link Highlighting on Scroll === */
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    
    /* === Intersection Observer for Scroll Reveal animations === */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // If the skills section is revealed, animate the skill bars
                if (entry.target.id === 'skills') {
                    animateSkills(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    
    /* === Skills Progress Bar Animation === */
    const animateSkills = (container) => {
        const activePane = container.querySelector('.tab-pane.active');
        if (activePane) {
            const progressBars = activePane.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                // Since widths are in the styles, we can read it and apply it or trigger the transition
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 50);
            });
        }
    };

    // Re-animate skills when tab is switched
    const reAnimateTabSkills = (pane) => {
        const progressBars = pane.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const width = bar.style.width || bar.getAttribute('data-width');
            if (width && !bar.getAttribute('data-width')) {
                bar.setAttribute('data-width', width);
            }
            const targetWidth = bar.getAttribute('data-width') || width;
            
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 50);
        });
    };

    
    /* === Tab System for Technical Skills === */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Deactivate all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Activate clicked button and pane
            btn.classList.add('active');
            const activePane = document.getElementById(targetTab);
            activePane.classList.add('active');

            // Trigger progress bar animations for the newly active pane
            reAnimateTabSkills(activePane);
        });
    });

    
    /* === Dynamic Typing Effect in Hero Subtitle (Optional Micro-animation) === */
    // Let's add an automatic reveal to the Hero section immediately on load
    setTimeout(() => {
        const heroReveals = document.querySelectorAll('#hero .reveal');
        heroReveals.forEach(el => el.classList.add('revealed'));
    }, 100);
});
