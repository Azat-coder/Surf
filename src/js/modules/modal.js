export function modal(modalClass, modalBtnClass, btnCloseClass, focusInputId, useSpinner) {
    const modal = document.querySelector(`.${modalClass}`);
    const modalBtns = document.querySelectorAll(`.${modalBtnClass}`);
    const btnClose = document.querySelector(`.${btnCloseClass}`);
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const hiddenClass = 'hidden';
    let spinner = null;

    if (useSpinner) {
        spinner = modal.querySelector('.spinner');
    }

    if (!modal) {
        return;
    }

    modalBtns.forEach(modalBtn => {
        modalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal--active');
            main.classList.add(hiddenClass);
            header.classList.add(hiddenClass);
            footer.classList.add(hiddenClass);
            document.body.style.overflow = 'hidden';

            if (focusInputId) {
                const focusInput = document.querySelector(`#${focusInputId}`);
                focusInput.focus();
            }
            
            if (spinner) {
                setTimeout(() => spinner.classList.add('visually-hidden'), 1000);
            }
        });
    });

    btnClose.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        main.classList.remove(hiddenClass);
        header.classList.remove(hiddenClass);
        footer.classList.remove(hiddenClass);
        document.body.style.overflow = '';

        if (spinner) {
            spinner.classList.remove('visually-hidden');
        }
    });

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.modal__wrap')) {
            event.stopPropagation();
        } else if (target.closest('.modal')) {
            modal.classList.remove('modal--active');
            main.classList.remove(hiddenClass);
            header.classList.remove(hiddenClass);
            footer.classList.remove(hiddenClass);
            document.body.style.overflow = '';
            
            if (spinner) {
                spinner.classList.remove('visually-hidden');
            }
        }
    });

    document.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            modal.classList.remove('modal--active');
            main.classList.remove(hiddenClass);
            header.classList.remove(hiddenClass);
            footer.classList.remove(hiddenClass);
            document.body.style.overflow = '';
            
            if (spinner) {
                spinner.classList.remove('visually-hidden');
            }
        }
    });
}