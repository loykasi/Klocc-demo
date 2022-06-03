const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var x = window.matchMedia("(max-width: 739px)");


// Product Tab System
const tabs = $$('.tab-item');
const panes = $$('.tab-content_products');

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-content_products.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
});


// Authen Tab System
const authTabs = $$('.auth-form_tab-btn');
const authPanes = $$('.auth-form_form');

authTabs.forEach((tab, index) => {
    const pane = authPanes[index];

    tab.onclick = function () {
        $('.auth-form_tab-btn.active').classList.remove('active');
        $('.auth-form_form.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
    }
});


// Open/Close Modal method
const modal = $('.modal');
const modalItems = $$('.modal-item');
const exitModalBtn = $('.modal_overlay');

function OpenModal() {
    modal.classList.add('active');
    tryDisableScroll();
}

function CloseAllModal() {
    modal.classList.remove('active');
    modalItems.forEach((item) => {
        item.classList.remove('active');
    });
    tryEnableScroll();
}

function CloseSpecificModal(target) {
    if(target.classList.contains('active')) {
        modal.classList.remove('active');
        target.classList.remove('active');
        enableScroll();
    }
}

exitModalBtn.onclick = function () {
    CloseAllModal();
}


// Open/Close Modal method
const overlay = $('.overlay');
const overlayItems = $$('.overlay-item');

function OpenOverlay() {
    overlay.classList.add('active');
    disableScroll();
}

function CloseOverlay(target) {
    if(target.classList.contains('active')) {
        overlay.classList.remove('active');
        target.classList.remove('active');
        enableScroll();
    }
}