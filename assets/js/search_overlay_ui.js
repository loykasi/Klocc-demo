const openSearchBtn = $('.header_search-lite');
const exitSearchBtn = $('.search-bar_exit-btn');
const searchBar = $('.search-bar');

openSearchBtn.onclick = function () {
    OpenOverlay();
    searchBar.classList.add('active');
}

exitSearchBtn.onclick = CloseSearchbar;

window.addEventListener('resize', function(){ if(!x.matches) CloseSearchbar(); }, true);


function CloseSearchbar() {
    CloseOverlay(searchBar);
}