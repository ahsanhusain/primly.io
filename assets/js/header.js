document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
});

const userDropdown = document.getElementById('userDropdown');
userDropdown.addEventListener('click', (event) => {
    userDropdown.classList.toggle('open');
    event.stopPropagation();
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!userDropdown.contains(event.target)) {
        userDropdown.classList.remove('open');
    }
});