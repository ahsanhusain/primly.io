// DOM Elements

// Dropdown functionality
function toggleDropdown(button, menu) {
    const isOpen = menu.classList.contains('show');
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isOpen) {
        menu.classList.add('show');
        button.querySelector('.dropdown-arrow').style.transform = 'rotate(180deg)';
    }
}

function closeAllDropdowns() {
    
    const allMenus = document.querySelectorAll('.ddropdown-menu');
    const allArrows = document.querySelectorAll('.dropdown-arrow');
    
    allMenus.forEach(menu => menu.classList.remove('show'));
    allArrows.forEach(arrow => arrow.style.transform = 'rotate(0deg)');
}

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    closeAllDropdowns();
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.ddropdown-menu').forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Handle dropdown item selection
document.querySelectorAll('.ddropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const menu = item.closest('.ddropdown-menu');
        const button = menu.previousElementSibling;
        const textElement = button.querySelector('.filter-text');
        
        // Update button text if it's a filter dropdown
        if (textElement) {
            textElement.textContent = item.textContent;
        }
        
        // Close the dropdown
        closeAllDropdowns();
        
        console.log('Selected:', item.textContent);
    });
});

// Card hover effects and interactions
document.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Action button functionality
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const icon = btn.textContent;
        if (icon === '❤️') {
            btn.style.color = btn.style.color === 'red' ? '' : 'red';
        } else if (icon === '🔗') {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    });
});

// // Loading animation for images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('load', () => {
//         img.style.opacity = '1';
//     });
    
//     img.style.opacity = '0';
//     img.style.transition = 'opacity 0.3s ease';
// });

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Primly Travel Website Loaded');
    
    // Add loading state to images
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            //img.style.opacity = '0';
        }
    });
});