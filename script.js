// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // Insert the menu toggle before the nav
    header.insertBefore(menuToggle, nav);
    
    // Add click event to toggle menu
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.product .btn');
    const cartCount = document.querySelector('.cart-container a:first-child');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${count})`;
            
            // Create notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = 'Item added to cart!';
            document.body.appendChild(notification);
            
            // Show notification
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Add CSS for notification and mobile menu
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: -50px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: bottom 0.3s, opacity 0.3s;
            z-index: 1000;
        }
        
        .notification.show {
            bottom: 20px;
            opacity: 1;
        }
        
        .menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 24px;
        }
        
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
                position: absolute;
                top: 15px;
                right: 15px;
            }
            
            nav {
                width: 100%;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            
            nav.active {
                max-height: 300px;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav ul li {
                margin: 10px 0;
            }
            
            .cart-container {
                margin-top: 10px;
            }
        }
    `;
    
    document.head.appendChild(style);
});

// Image slider for hero section (if needed)
function createImageSlider() {
    const heroSection = document.querySelector('.hero');
    const images = [
        'https://via.placeholder.com/1920x600?text=Electronics+Sale',
        'https://via.placeholder.com/1920x600?text=New+Arrivals',
        'https://via.placeholder.com/1920x600?text=Best+Deals'
    ];
    
    let currentImage = 0;
    
    // Change background image every 5 seconds
    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 184, 212, 0.8), rgba(0, 229, 255, 0.8)), url('${images[currentImage]}')`;
    }, 5000);
}

// Uncomment to enable image slider
// createImageSlider(); 