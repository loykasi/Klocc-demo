const openAuthFormBtn = $('.header_user');
const exitAuthFormBtn = $('.auth-form_exit-btn')
const authForm = $('.auth-form');

openAuthFormBtn.onclick = function () {
    if(x.matches) {
        window.open("#", "_self");
        // console.log("MOBILE");
    } else {
        OpenModal();
        authForm.classList.add('active');
    }
}

exitAuthFormBtn.onclick = CloseAuthForm;

window.addEventListener('resize', function(){ if(x.matches) CloseAuthForm(); }, true);

function CloseAuthForm() {
    CloseSpecificModal(authForm);
}