// Mobile menu toggle functionality
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

console.log('menuBtn:', menuBtn);
console.log('navLinks:', navLinks);
console.log('menuBtnIcon:', menuBtnIcon);

menuBtn.addEventListener("click", () => {
    console.log('Menu clicked!');
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    console.log('Menu is open:', isOpen);
    
    if (isOpen) {
        menuBtnIcon.classList.remove('ri-menu-line');
        menuBtnIcon.classList.add('ri-close-fill');
        console.log('Icon changed to close');
    } else {
        menuBtnIcon.classList.remove('ri-close-fill');
        menuBtnIcon.classList.add('ri-menu-line');
        console.log('Icon changed to menu');
    }
});

// Close menu when clicking on a link
const navLinks_items = navLinks.querySelectorAll('a');
navLinks_items.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("open");
        menuBtnIcon.classList.remove('ri-close-fill');
        menuBtnIcon.classList.add('ri-menu-line');
        console.log('Menu closed via link click');
    });
});