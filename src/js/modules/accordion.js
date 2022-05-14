export function useAccordion (sectionClass, mobileWidth=false) {
    const initializeAccordion = () => {
        const section = document.querySelector(`.${sectionClass}`);
        const accordions = section?.querySelectorAll('.accordion');

        if (!section || !accordions) { 
            return;
        }

        accordions.forEach( acc => {
            const accItem = acc.querySelector('.accordion__item');
            const accContent = acc.querySelector('.accordion__content');

            if (acc.classList.contains('accordion--closed')) {
                accContent.classList.add('accordion__content--hidden');
                accItem.classList.add('accordion__item--closed');
            } else {
                const itemContent = acc.querySelector('.accordion__content');
                itemContent.style.height = itemContent.scrollHeight + 'px';
            }

            accItem.addEventListener('click', () => {
                if (!accItem.classList.contains('accordion__item--closed')) {
                    accContent.style.height = 0 + 'px';
                    accContent.classList.add('accordion__content--hidden');
                    accItem.classList.add('accordion__item--closed');
                    const nextElem = acc.nextElementSibling;

                    if (nextElem) {
                        const nextElemContent = nextElem.querySelector('.accordion__content');
                        const nextElemItem = nextElem.querySelector('.accordion__item');
                        nextElemContent.style.height = nextElemContent.scrollHeight + 'px';
                        nextElemContent.classList.remove('accordion__content--hidden');
                        nextElemItem.classList.remove('accordion__item--closed');
                    }
                } else {
                    for (let index = 0; index < acc.parentElement.children.length; index++) {
                        const elem = acc.parentElement.children[index];
                        const siblingContent = elem.querySelector('.accordion__content');
                        const siblingItem = elem.querySelector('.accordion__item');
                        siblingContent.style.height = 0 + 'px';
                        siblingContent.classList.add('accordion__content--hidden');
                        siblingItem.classList.add('accordion__item--closed');
                    }
    
                    accContent.style.height = accContent.scrollHeight + 'px';
                    accContent.classList.remove('accordion__content--hidden');
                    accItem.classList.remove('accordion__item--closed');
                }
            });
        });
    };

    if (mobileWidth) {
        const windowInnerWidth = document.documentElement.clientWidth;
        if(windowInnerWidth <= mobileWidth) {
            initializeAccordion();
        };
    } else {
        initializeAccordion();
    }
}