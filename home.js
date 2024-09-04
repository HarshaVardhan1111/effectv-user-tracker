document.addEventListener('DOMContentLoaded', function() {
    // Function to show submenu
    function showSubmenu(event) {
        const submenu = event.currentTarget.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    }

    // Function to hide submenu
    function hideSubmenu(event) {
        const submenu = event.currentTarget.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    }

    // Get all navigation items with submenus
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        // Show submenu on hover
        item.addEventListener('mouseenter', showSubmenu);
        // Hide submenu when not hovering
        item.addEventListener('mouseleave', hideSubmenu);
    });

    // Optional: Add click event to toggle submenu
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            if (this.querySelector('.submenu')) {
                event.preventDefault(); 
                const submenu = this.querySelector('.submenu');
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Ensure that links perform their default action
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
        });
    });
});
