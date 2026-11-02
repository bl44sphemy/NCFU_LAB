function addToCart() {
    const liveRegion = document.getElementById('live-region');
    liveRegion.textContent = 'Товар добавлен в корзину';

    // Очистка через 3 секунды
    setTimeout(() => {
    liveRegion.textContent = '';
    }, 3000);
 }
