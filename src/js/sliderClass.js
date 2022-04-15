// базовые классы и селекторы
const ITEMS_SELECTOR = '.slider__items';
const ITEM_SELECTOR = '.slider__item';
const ITEM_CLASS_ACTIVE = 'slider__item_active';
const NEXT_BTN_SELECTOR = '.slider__control-next';
const PREV_BTN_SELECTOR = '.slider__control-prev';
const CONTROL_CLASS_SHOW = 'visually-hidden';
// индикаторы
const INDICATOR_WRAPPER_ELEMENT = 'ol';
const INDICATOR_WRAPPER_CLASS = 'slider__indicators';
const INDICATOR_ITEM_ELEMENT = 'li';
const INDICATOR_ITEM_CLASS = 'slider__indicator';
const INDICATOR_ITEM_CLASS_ACTIVE = 'slider__indicator--active';

class Slider {
    constructor(selector, options) {
        this._selector = document.querySelector(selector);
        // .slider__items
        this._items = this._selector.querySelector(ITEMS_SELECTOR);
        // .slider__item
        this._itemList = this._selector.querySelectorAll(ITEM_SELECTOR);
        // Кнопки управления
        this._btnNext = this._selector.querySelector(NEXT_BTN_SELECTOR);
        this._btnPrev = this._selector.querySelector(PREV_BTN_SELECTOR);
        // направление смены слайдов (по умолчанию)
        this._direction = 'next';
        // текущее значение трансформации
        this._transform = 0;
        // текущий индекс
        this._currentIndex = 0;
        // конфигурация слайдера (по умолчанию)
        this._options = {
            transition: true,
            transition_duration: 0.3,
        };
        // изменяем конфигурацию слайдера в соответствии с переданными настройками
        for (var key in options) {
            if (this._options.hasOwnProperty(key)) {
                this._options[key] = options[key];
            }
        }
        // добавляем к слайдам data-атрибуты
        for (let i = 0; i < this._itemList.length; i++) {
            this._itemList[i].dataset.order = i;
            this._itemList[i].dataset.index = i;
        }
        // скрываем в начальном состоянии кнопку назад
        this._checkBtnsVisibility();
        // назначаем обработчики
        this._addEventListener();
        // Добавляем индикаторы
        this._addIndicators();
        // Устанавливаем активный класс индикатора
        this._setIndicators();
    }

    // перейти к следующему слайду
    next() {
        this._direction = 'next';
        this._move();
    }

    // перейти к предыдущему слайду
    prev() {
        this._direction = 'prev';
        this._move();
    }

    // добавление индикаторов
    _addIndicators() {
        const itemsInViewCount = Math.round(this._items.clientWidth / this._itemList[0].clientWidth);

        if(itemsInViewCount >= this._itemList.length) {
            return;
        }

        if (this._selector.querySelector('.' + INDICATOR_WRAPPER_CLASS)) {
            return;
        }
        const wrapper = document.createElement(INDICATOR_WRAPPER_ELEMENT);
        wrapper.className = INDICATOR_WRAPPER_CLASS;
        for (let i = 0; i < this._itemList.length; i++) {
            const item = document.createElement(INDICATOR_ITEM_ELEMENT);
            item.className = INDICATOR_ITEM_CLASS;
            item.dataset.slideTo = i;
            wrapper.appendChild(item);
        }
        this._selector.appendChild(wrapper);
    }

    _setIndicators() {
        const indicators = this._selector.querySelectorAll('.' + INDICATOR_ITEM_CLASS);
        if (indicators.length) {
            for (let i = 0; i < indicators.length; i++) {
                const item = indicators[i];
                const index = parseInt(item.dataset.slideTo);

                if (this._currentIndex === index) {
                    item.classList.add(INDICATOR_ITEM_CLASS_ACTIVE);
                } else {
                    item.classList.remove(INDICATOR_ITEM_CLASS_ACTIVE);
                }
            }
        }
    }
    
    _move() {
        const itemWidth = this._itemList[0].clientWidth;      
        const step = this._direction === 'next' ? -itemWidth : itemWidth;
        const transform = this._transform + step;

        this._direction === 'next' ? this._currentIndex++ : this._currentIndex--;      
        this._transform = transform;
        this._items.style.transform = 'translateX('.concat(transform, 'px)');

        if (this._options.transition) {
            this._items.style.transition = `transform ${this._options.transition_duration}s ease-in-out`;
        }
        
        this._checkBtnsVisibility();
        this._setIndicators();
    }

    _checkBtnsVisibility() {
        const itemsInViewCount = Math.round(this._items.clientWidth / this._itemList[0].clientWidth);
        
        if(itemsInViewCount + this._currentIndex >= this._itemList.length) {
            this._btnNext.classList.add(CONTROL_CLASS_SHOW);
        } else {
            this._btnNext.classList.remove(CONTROL_CLASS_SHOW);
        }

        if(this._currentIndex <= 0) {
            this._btnPrev.classList.add(CONTROL_CLASS_SHOW);
        } else {
            this._btnPrev.classList.remove(CONTROL_CLASS_SHOW);
        }
    }

    _addEventListener() {
        function onClick(e) {
            e.preventDefault();

            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                this._direction = e.target.dataset.slide;
                this._move();
            }
        }

        // click
        this._selector.addEventListener('click', onClick.bind(this));
    }
}

export { Slider };