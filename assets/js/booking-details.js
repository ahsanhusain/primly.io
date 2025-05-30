// Tab functionality
function switchTab(tabId) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');

    console.log('Switched to tab:', tabId);
}

// Details toggle functionality
function toggleDetails(detailsId) {
    const detailsSection = document.getElementById(detailsId);
    const allDetails = document.querySelectorAll('.booking-details');

    // Close all other details sections
    allDetails.forEach(detail => {
        if (detail.id !== detailsId) {
            detail.classList.remove('active');
        }
    });

    // Toggle current details section
    detailsSection.classList.toggle('active');

    console.log('Toggled details for:', detailsId);
}

// Action handlers
function handleAction(action, propertyName) {
    const message = action.charAt(0).toUpperCase() + action.slice(1) + 'd booking for ' + propertyName;
    alert(message);
    console.log(action + ' action for:', propertyName);
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);

    // Filter booking cards based on search term
    const bookingCards = document.querySelectorAll('.booking-card');
    bookingCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Initialize
console.log('Primly booking system initialized');