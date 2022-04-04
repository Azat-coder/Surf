export function popularGoodsTabs() {
    const categoryBtns = document.querySelectorAll('.popular-goods__category-link');
    const categoryTabs = document.querySelectorAll('.popular-goods__tab');

    const removeActiveClasses = () => {
        categoryBtns.forEach((btn) => {
            btn.classList.remove('popular-goods__category-link--active');
        });

        categoryTabs.forEach((tab) => {
            tab.classList.add('visually-hidden');
        });
    };

    for (let i = 0; i < categoryBtns.length; i++) {
        const btn = categoryBtns[i];
        const tab = categoryTabs[i];

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            removeActiveClasses();
            btn.classList.add('popular-goods__category-link--active');
            tab.classList.remove('visually-hidden');
        });
    }
}