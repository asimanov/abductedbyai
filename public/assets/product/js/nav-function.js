document.addEventListener("click", function(event){
    toggleNav();
});

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
        icon.classList.add('fa-x');
    } else {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    }
}

// Adding the click event listener
navMainControl.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the link
    // toggleNav();
});