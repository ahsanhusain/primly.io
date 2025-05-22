document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
});

const userDropdown = document.getElementById('userDropdown');
userDropdown.addEventListener('click', () => {
    userDropdown.classList.toggle('open');
});