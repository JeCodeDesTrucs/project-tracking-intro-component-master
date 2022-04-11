const mobileBtn = document.getElementById("mobile-nav-btn");
const mobileMenu = document.querySelector(".navigation-list");

mobileBtn.addEventListener('click', () => {
    if(mobileMenu.classList.contains("active-nav")){
        mobileMenu.classList.add("navigation-list");
        mobileMenu.classList.remove("active-nav");
        mobileBtn.removeAttribute('id');
        mobileBtn.setAttribute('id', 'mobile-nav-btn');
    }else{
        mobileMenu.classList.add("active-nav");
        mobileMenu.classList.remove("navigation-list");
        mobileBtn.removeAttribute('id');
        mobileBtn.setAttribute('id', 'btn-active');
    }
});