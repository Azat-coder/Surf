export function tabs(btnClass, tabClass) {
    const categoryBtns = document.querySelectorAll(`.${btnClass}`);
    const categoryTabs = document.querySelectorAll(`.${tabClass}`);

    const removeActiveClasses = () => {
        categoryBtns.forEach((btn) => {
            btn.classList.remove(`${btnClass}--active`);
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
            btn.classList.add(`${btnClass}--active`);
            tab.classList.remove('visually-hidden');
        });
    }
}