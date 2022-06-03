const addOneBtn = $('.qty_box-next-btn');
const subOneBtn = $('.qty_box-pre-btn');
const qtyInputBox = $('.qty_box-input');
let qty = 1;
let maxQty = 10;

function UpdateQty() {
    qtyInputBox.value = qty.toString();
}

function LimitQty() {
    if (qty <= 1) {
        qty = 1;
        subOneBtn.classList.add('disable');
    }
    else if (qty >= maxQty) {
        qty = maxQty;
        addOneBtn.classList.add('disable');
    }
    else {
        subOneBtn.classList.remove('disable');
        addOneBtn.classList.remove('disable');
    }
}

function AddOne() {
    qty = qty + 1;
    LimitQty();
    UpdateQty();
}

function RemoveOne() {
    qty = qty - 1;
    LimitQty();
    UpdateQty();
}

addOneBtn.onclick = AddOne;
subOneBtn.onclick = RemoveOne;