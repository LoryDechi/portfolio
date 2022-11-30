var myNav = document.getElementById('nav');
window.onscroll = function () {
    if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
        myNav.classList.add("personal-nav");
        myNav.classList.remove("bg-transparent");
    }
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("personal-nav");
    }
};