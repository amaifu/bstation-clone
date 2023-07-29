const searchContainer = document.querySelector('.search-container');
const inputSearch = document.querySelector('.search-container .search-input');

inputSearch.addEventListener('focus', () => {
    searchContainer.style.borderColor = '#3083ff';
});
inputSearch.addEventListener('focusout', () => {
    searchContainer.style.borderColor = '#ddd';
});

