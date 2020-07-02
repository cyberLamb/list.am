
var navElement = document.getElementsByClassName('lt-menu-hover');

Object.keys(navElement).forEach(function (index) {
    navElement[index].onmouseover = function() {
        document.getElementById('overlay').style.display = "block";
    };
    navElement[index].onmouseleave = function() {
        document.getElementById('overlay').style.display = "none";
    };
})



document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

function myFunction(element) {
    element.nextElementSibling.classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    console.log(event);
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("lt-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}