// Booking HTML
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize interactive elements
  initializeSearchBox();
  initializeLikeButtons();
  initializeGuestSelect();
  initializeDateInputs();
});

// Search box functionality
function initializeSearchBox() {
  const searchButton = document.querySelector('.btn-search');
  const destinationInput = document.querySelector('.search-option input');
  
  searchButton.addEventListener('click', function() {
      const destination = destinationInput.value.trim();
      if (destination) {
          // In a real app, this would trigger a search
          console.log('Searching for:', destination);
          alert(`Searching for destinations in: ${destination}`);
      } else {
          alert('Please enter a destination');
      }
  });
}

// Initialize guest selection dropdown
function initializeGuestSelect() {
  const guestSummary = document.querySelector('.guest-summary');
  const adultsSelect = document.getElementById('adults');
  const childrenSelect = document.getElementById('children');
  const roomsSelect = document.getElementById('rooms');
  
  // Update the summary text when selections change
  adultsSelect.addEventListener('change', updateGuestSummary);
  childrenSelect.addEventListener('change', updateGuestSummary);
  roomsSelect.addEventListener('change', updateGuestSummary);
  
  function updateGuestSummary() {
      const adults = adultsSelect.value;
      const children = childrenSelect.value;
      const rooms = roomsSelect.value;
      
      guestSummary.textContent = `${adults} adults · ${children} children · ${rooms} room${rooms > 1 ? 's' : ''}`;
  }
}

// Initialize date inputs
function initializeDateInputs() {
  const dateSummary = document.querySelector('.date-summary');
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');
  
  // Update the summary text when dates change
  checkInInput.addEventListener('change', updateDateSummary);
  checkOutInput.addEventListener('change', updateDateSummary);
  
  function updateDateSummary() {
      if (checkInInput.value && checkOutInput.value) {
          const checkInDate = new Date(checkInInput.value);
          const checkOutDate = new Date(checkOutInput.value);
          
          // Format dates for display
          const checkInDisplay = formatDate(checkInDate);
          const checkOutDisplay = formatDate(checkOutDate);
          
          dateSummary.textContent = `${checkInDisplay} - ${checkOutDisplay}`;
      } else if (checkInInput.value) {
          const checkInDate = new Date(checkInInput.value);
          const checkInDisplay = formatDate(checkInDate);
          
          dateSummary.textContent = `${checkInDisplay} - Select check-out`;
      } else {
          dateSummary.textContent = 'Check-in - Check-out';
      }
  }
  
  // Format date for display
  function formatDate(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
  }
}

// Handle like buttons
function initializeLikeButtons() {
  const likeButtons = document.querySelectorAll('.like-btn');
  
  likeButtons.forEach(button => {
      button.addEventListener('click', function() {
          this.classList.toggle('active');
          
          // Update SVG fill based on active state
          const svg = this.querySelector('svg');
          if (this.classList.contains('active')) {
              svg.setAttribute('fill', 'currentColor');
          } else {
              svg.setAttribute('fill', 'none');
          }
      });
  });
}

// Hero search label effect for destination input
const destinationInput = document.querySelector('.search-option input');
if (destinationInput) {
  destinationInput.addEventListener('focus', function() {
      this.setAttribute('placeholder', '');
  });
  
  destinationInput.addEventListener('blur', function() {
      if (!this.value) {
          this.setAttribute('placeholder', 'Where are you going?');
      }
  });
}

// Simulate page load animation
window.addEventListener('load', function() {
  const destinations = document.querySelectorAll('.destination-card');
  
  destinations.forEach((card, index) => {
      setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, 100 * index);
  });
});

// Initialize destinations with opacity 0
document.querySelectorAll('.destination-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
})

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const chevron = item.querySelector('.chevron');
        
        question.addEventListener('click', function() {
            const isActive = answer.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherChevron = otherItem.querySelector('.chevron');
                
                otherAnswer.classList.remove('active');
                otherQuestion.classList.remove('active');
                otherChevron.classList.remove('rotated');
            });
            
            // Toggle current item if it wasn't active
            if (!isActive) {
                answer.classList.add('active');
                question.classList.add('active');
                chevron.classList.add('rotated');
            }
        });
    });
});