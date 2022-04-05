export function useHoverImage() {
    const image = document.querySelector('.product-description__imagecontainer');

    if (!image) {
        return;
    }

    const addBackground = elem => {    
        if (elem.style.backgroundImage === '') {
            elem.style.backgroundImage = 'url(../img/goods/wetsuit-hover.png)';
            elem.style.cursor = 'zoom-out';
            elem.firstElementChild.style.opacity = 0;
        } else {
            elem.style.backgroundImage = '';
            elem.style.cursor = 'zoom-in';
            elem.firstElementChild.style.opacity = 1;
        }
    };

    image.addEventListener('click', () => {
        addBackground(image);
    });
}