const openSideNavbarBtn = $('.header_mobile-navbar');
const exitSideNavbarBtn = $('.side-navbar_exit-btn');
const sideNavbar = $('.side-navbar');

openSideNavbarBtn.onclick = function () {
    OpenModal();
    sideNavbar.classList.add('active');
}

exitSideNavbarBtn.onclick = CloseSideNavbar;

window.addEventListener('resize', function(){ if(!x.matches) CloseSideNavbar(); }, true);

function CloseSideNavbar() {
    CloseSpecificModal(sideNavbar);
}