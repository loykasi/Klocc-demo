const thumbnailBorder = $$('.img-slider_item-border');
const thumbnails = $$('.img-slider_item-img');
const bigImage = $('.product-image_big-img');

thumbnails.forEach((thumbnail, index) => {
    const border = thumbnailBorder[index];

    thumbnail.addEventListener('mouseover', function () {
        $('.img-slider_item-border.active').classList.remove('active');
        border.classList.add('active');
        bigImage.style.backgroundImage = 'url(' + this.src + ')';
    })
});