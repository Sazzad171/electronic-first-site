// show hide search
const searchBox = document.getElementById("searchBox");
const showSearchButton = document.getElementById("showSearch");
const hideSearchButton = document.getElementById("closeSearch");

// show
showSearchButton.addEventListener('click', () => {
    searchBox.style.display = 'block';
});

// hide
hideSearchButton.addEventListener('click', () => {
    searchBox.style.display = 'none';
});

// show hide dropdown menu
const dropdownBox = document.getElementById("dropdownMenu");
const menuItem = document.querySelectorAll(".menuItem");

// show
menuItem.forEach(function(item) {
    item.addEventListener("click", function(event) {
        dropdownBox.style.display = "block";
        event.stopPropagation();
    });
});

// hide 
window.addEventListener("click", function(event) {
    if (!dropdownBox.contains(event.target)) {
        dropdownBox.style.display = "none";
    }
});