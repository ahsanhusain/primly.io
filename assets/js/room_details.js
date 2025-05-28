let currentSlide = 0;
let uploadedImages = [];

// Carousel Functions
function triggerFileInput() {
    document.getElementById('imageInput').click();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImages.push(e.target.result);
            addImageToCarousel(e.target.result);
            // Navigate to the new image
            currentSlide = uploadedImages.length; // Default image is at index 0
            updateCarousel();
        };
        reader.readAsDataURL(file);
    }
}

function addImageToCarousel(imageSrc) {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = '<img src="' + imageSrc + '" alt="Uploaded image">';
    carouselWrapper.appendChild(slide);
}

function prevSlide() {
    const totalSlides = 1 + uploadedImages.length;
    currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
}

function nextSlide() {
    const totalSlides = 1 + uploadedImages.length;
    currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const offset = -currentSlide * 100;
    carouselWrapper.style.transform = 'translateX(' + offset + '%)';
}

// Accordion Functions
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    if (isActive) {
        header.classList.remove('active');
        content.classList.remove('active');
    } else {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// Dropdown Functions
function toggleDropdown(toggle) {
    const dropdown = toggle.nextElementSibling;
    const isActive = dropdown.classList.contains('active');
    
    // Close all dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
    });

    if (!isActive) {
        dropdown.classList.add('active');
    }
}

function selectOption(option, value) {
    const toggle = option.closest('.custom-dropdown').querySelector('.dropdown-toggle');
    toggle.firstChild.textContent = value;
    option.closest('.dropdown-menu').classList.remove('active');
}

// Date Functions
function editDate(inputId) {
    const input = document.getElementById(inputId);
    input.focus();
    input.showPicker();
}

function clearDate(inputId) {
    const input = document.getElementById(inputId);
    input.value = '';
}

// Action Functions
function bookNow() {
    alert('Booking process initiated! This would normally redirect to payment.');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});
// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Room Details page loaded successfully');
    updateCarousel();
});