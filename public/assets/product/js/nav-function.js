// Selecting the elements
const navMain = document.getElementById('navMain');
const navMainControl = document.getElementById('navMainControl');
const body = document.body;
const icon = navMainControl.querySelector('i'); // Selecting the <i> element

// Function to toggle the .active class, .noScroll class, and icon class
function toggleNav() {
    navMain.classList.toggle('active');
    body.classList.toggle('noScroll');

    // Toggling the icon class
    if (navMain.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark'); // Updated to 'fa-xmark' for FontAwesome 5+
    } else {
        icon.classList.remove('fa-xmark'); // Updated to 'fa-xmark' for FontAwesome 5+
        icon.classList.add('fa-bars');
    }
}

// Adding the click event listener to the navMainControl only
navMainControl.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the link
    toggleNav();
});

// Function to close the navigation if it's open and the click is outside the navMain
function closeNavOnBodyClick(event) {
    // Check if the navMain is active and the clicked target is not inside the navMain
    if (navMain.classList.contains('active') && !navMain.contains(event.target) && event.target !== navMainControl) {
        toggleNav(); // Close the nav
    }
}

// Adding the click event listener to the body for mobile devices
body.addEventListener('click', closeNavOnBodyClick);
