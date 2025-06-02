document.addEventListener("DOMContentLoaded", function() {
    let navItems = document.querySelectorAll('.navItem');
    
    function removeActiveFromAll() {
        navItems.forEach(item => item.classList.remove('active'));
    }
    
    let lastActiveNavItem = localStorage.getItem('lastActiveNavItem');
    if (lastActiveNavItem) {
        removeActiveFromAll();
        let activeItem = document.querySelector(`.navItem[href="${lastActiveNavItem}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            console.log('Nav item clicked:', item.innerText, '| Href:', item.getAttribute('href'));  // Debug log
            removeActiveFromAll();
            item.classList.add('active');
            localStorage.setItem('lastActiveNavItem', item.getAttribute('href'));
        });
    });

    // Added event listener for homepage click
    let homeLink = document.querySelector('#myLink');
    homeLink.addEventListener('click', function() {
        removeActiveFromAll();
        localStorage.removeItem('lastActiveNavItem');
    });
});

// Additional event listener to log any click events on the document
document.addEventListener('click', function(event) {
    console.log('Element clicked:', event.target);
});
