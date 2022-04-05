export function useHoverImage() {
    const image = document.querySelector('.product-description__imagecontainer');

    image.addEventListener('click', () => {
        image.style.backgroundImage = 'wetsuit-hover.png';
    });
}