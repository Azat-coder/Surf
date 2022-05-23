export function reviewImages() {
    const imageBlock = document.querySelector('.review__imageblock');

    if (!imageBlock) {
        return;
    }

    const largeImageBlock = imageBlock.querySelector('.review__image-main');
    const smallImagesBlock = imageBlock.querySelector('.review__image-small');
    const images = imageBlock.querySelectorAll('img');

    images.forEach((image) => {
        image.addEventListener('click', () => {
            const largeImage = largeImageBlock.querySelector('img');
            smallImagesBlock.append(largeImage);
            largeImageBlock.append(image);
        });
    });
}