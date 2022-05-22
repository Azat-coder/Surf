export function cart() {
    document.addEventListener('DOMContentLoaded', () => {
        const productBtn = document.querySelector('.modal-quickview__btn');
        const productCountItem = document.querySelector('.control__link-cartnumber');
        const productsList = document.querySelector('.cart__list');
        const finalPriceBlock = document.querySelector('.cart__summary-count');
        const main = document.querySelector('.main');
        const header = document.querySelector('.header');
        const footer = document.querySelector('.footer');
        const hiddenClass = 'hidden';
    
        let currentProductCount = '';
        let currentProducts = [];
        let finalPrice = 0;
    
        if (localStorage.getItem('productCount')) {
            currentProductCount = localStorage.getItem('productCount');       
        } else {
            localStorage.setItem('productCount', 0);
        } 
    
        if (localStorage.getItem('currentProducts')) {
            currentProducts = JSON.parse(localStorage.getItem('currentProducts'));
        } else {
            localStorage.setItem('currentProducts', JSON.stringify([]));
        }
    
        const createProductHtml = (title, price, imgsrc) => {
            return `
                    <li class="cart__item cart-item">
                        <div class="cart-item__titleblock"> <img src="${imgsrc}"/>
                            <h3 class="cart-item__title">${title}</h3>
                        </div>
                        <div class="cart-item__priceblock">
                            <p class="cart-item__price">${price} руб</p>
                            <button class="btn cart-item__del-btn">Удалить</button>
                        </div>
                    </li>
                `;
        };
    
        const createProductsHtml = (products) => {
            let html = '';
    
            products.forEach(product => {
                html += createProductHtml(product.title, product.price, product.imgsrc);
            });
    
            return html;
        };
    
        const getProductPrice = (priceString) => {
            return String(priceString).replace(/[^0-9]+/g,'');
        };
    
        productCountItem.innerHTML = currentProductCount;
    
        if (productsList) {
            if (!currentProducts.length) {
                productsList.innerHTML = 'Корзина пуста';
            } else {
                productsList.innerHTML = createProductsHtml(currentProducts);
            }
        }
            
        const countFinalPrice = () => {
            if (finalPriceBlock) {
                finalPrice = currentProducts.reduce((acc, i) => acc + Number(i.price), 0);
                finalPriceBlock.innerHTML = finalPrice + ' ' + 'руб';
            }
        };
            
        countFinalPrice();
    
        productBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentProductCount++;
            localStorage.setItem('productCount', currentProductCount);
            productCountItem.innerHTML = currentProductCount;
    
            const productBlock = e.currentTarget.closest('.modal-quickview__form');
            const productTitle = productBlock.querySelector('.modal-quickview__title').textContent;
            const productPrice = getProductPrice(productBlock.querySelector('.modal-quickview__price').textContent);
            const productImage = productBlock.querySelector('.modal-quickview__imagecontainer').children[0].getAttribute('src');
    
            let products = JSON.parse(localStorage.getItem('currentProducts'));
            products.push({
                title: productTitle,
                price: productPrice,
                imgsrc: productImage,
            });
    
            localStorage.setItem('currentProducts', JSON.stringify(products));
            const modal = e.currentTarget.closest('.modal');
            modal.classList.remove('modal--active');
            main.classList.remove(hiddenClass);
            header.classList.remove(hiddenClass);
            footer.classList.remove(hiddenClass);
        });

        const deleteFunc = () => {
            const deleteBtns = document.querySelectorAll('.cart-item__del-btn');
        
            deleteBtns.forEach(deleteBtn => {
                deleteBtn.addEventListener('click', (e) => {
                    const productCard = e.currentTarget.closest('.cart-item');
                    const productTitle = productCard.querySelector('.cart-item__title').textContent;
                    console.log(currentProducts);
    
                    const deleteElem = () => {
                        for (let i = 0; i < currentProducts.length; i++) {
                            if (currentProducts[i].title === productTitle) {
                                currentProducts.splice(i, 1);
                                return;
                            }
                        }
                    };
                    
                    deleteElem();
    
                    console.log(currentProducts, 'after');
    
                    localStorage.setItem('currentProducts', JSON.stringify(currentProducts));
    
                    if (currentProducts.length === 0) {
                        productsList.innerHTML = 'Корзина пуста';
                    } else {
                        productsList.innerHTML = createProductsHtml(currentProducts);
                    }
    
                    localStorage.setItem('productCount', --currentProductCount);
                    productCountItem.innerHTML = currentProductCount;
    
                    countFinalPrice();
                    deleteFunc();
                });
            });
        };
    
        deleteFunc();
    });

}