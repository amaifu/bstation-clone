const searchContainer = document.querySelector('.search-container');
const inputSearch = document.querySelector('.search-container .search-input');
const hamburgerMenu = document.querySelector('header .header-left .hamburger-menu');
const aside = document.querySelector('aside');
const asideLoginSuggestion = document.querySelector('aside .login-suggestion');
const asideFooter = document.querySelector('aside footer');
const nav = document.querySelector('aside .nav');
const navCollapse = document.querySelector('aside .nav-collapse');


// Focus on search bar
inputSearch.addEventListener('focus', () => {
    searchContainer.style.borderColor = '#3083ff';
});
inputSearch.addEventListener('focusout', () => {
    searchContainer.style.borderColor = '#ddd';
});
