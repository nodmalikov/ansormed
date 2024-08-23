const elMenuBtn = document.querySelector('.menu-btn');
const elMenuWrapper = document.querySelector('.sitenav-wrapper');
const elCircleBtn = document.querySelector('.circle-btn');
const elHeader = document.querySelector('.header');
const elMainContent = document.querySelector('.main');

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

// MENU-OPEN
if (elMenuBtn) {
    elMenuBtn.addEventListener('click', function () {
        elMenuWrapper.classList.add('open-menu');
        elMenuBtn.classList.add('close-btn')
    });
}

// MENU-CLOSE
if (elCircleBtn) {
    elCircleBtn.addEventListener('click', function () {
        elMenuWrapper.classList.remove('open-menu');
        elMenuBtn.classList.remove('close-btn')
    });
}

// REMOVE MENU-OPEN CLASS WHEN CLICKING OUTSIDE THE HEADER
document.addEventListener('click', function (event) {
    if (!elHeader.contains(event.target)) {
        elMenuWrapper.classList.remove('open-menu');
        elMenuBtn.classList.remove('close-btn')
    }
});

// SCROLL
const offset = elHeader.offsetHeight;

window.onscroll = function() {
    if (window.scrollY > offset-10) {
        elHeader.classList.add('header-scroll')
    } else if(window.scrollY < offset-20) {
        elHeader.classList.remove('header-scroll')
    }
}

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);

// LOADER
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};