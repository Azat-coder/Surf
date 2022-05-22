export function formValidate () {
    const form = document.querySelector('.modal-request__form');
    const formInputs = form.querySelectorAll('.modal-input');
    const nameInput = form.querySelector('.modal-request__name');
    const phoneInput = form.querySelector('.modal-request__tel');

    const validateName = (name) => {
        const re = /^[а-яёa-z]+$/iu;
        return re.test(String(name).toLowerCase());
    };

    const validatePhone = (number) => {
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re.test(String(number).toLowerCase());
    };

    const checkInput = (input, validateFunc, validateText) => {
        const val = input.value;
        input.classList.add('modal-input--error');
        const inputUndertext = input.nextSibling;

        if (!validateFunc(val)) {
            inputUndertext.innerHTML = validateText;
        } else {
            input.classList.remove('modal-input--error');
            inputUndertext.innerHTML = ''; 
        }
    };

    form.onsubmit = function () {
        const nameVal = nameInput.value;
        const phoneVal = phoneInput.value;
        const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(input => {
            const inputUndertext = input.nextSibling;

            if (input.value === '') {
                input.classList.add('modal-input--error');                
                inputUndertext.innerHTML = 'Введите какое-нибудь значение';                
            } else {
                input.classList.remove('modal-input--error');
                inputUndertext.innerHTML = ''; 
            }
        });

        if (emptyInputs.length !== 0) {
            return false;
        }

        checkInput(nameInput, validateName, 'Введите подходящее имя');

        checkInput(phoneInput, validatePhone, 'Введите подходящий номер телефона');


        if (!validatePhone(phoneVal) || !validateName(nameVal)) {
            return false;
        }
    };

    nameInput.oninput = () => {
        checkInput(nameInput, validateName, 'Введите подходящее имя');
    };

    phoneInput.oninput = () => {
        checkInput(phoneInput, validatePhone, 'Введите подходящий номер телефона');
    };
}