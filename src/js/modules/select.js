export function useSelect() { 
    const selects = document.querySelectorAll('.select');

    selects.forEach((select) => {
        select.addEventListener('click', () => {
            const optionList = select.nextElementSibling;
            const changingText = select.querySelector('.changing-text');
            optionList.classList.toggle('visually-hidden');

            if (!optionList.classList.contains('visually-hidden')) {
                const options = optionList.querySelectorAll('.option');

                options.forEach((option) => {
                    option.addEventListener('click', () => {
                        const optionText = option.textContent || option.firstElementChild.textContent;
                        changingText.innerHTML = optionText;
                        optionList.classList.add('visually-hidden');
                    });
                });
            }

            document.addEventListener('click', event => {
                let target = event.target;
                if (target.closest('.option-list') || target.closest('.select')) {
                    event.stopPropagation();
                } else if (target.closest('body')) {
                    optionList.classList.add('visually-hidden');
                }
            });
        });
    });
}
