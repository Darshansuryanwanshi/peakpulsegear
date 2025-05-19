document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');

    // Home page: Shop Now button alert
    const shopButton = document.querySelector('.hero .btn');
    if (shopButton) {
        shopButton.addEventListener('click', () => {
            alert('Welcome to the Shop!');
        });
    }

    // Shop page: Filter products
    const categoryFilter = document.querySelector('#category-filter');
    const priceFilter = document.querySelector('#price-filter');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const category = categoryFilter ? categoryFilter.value : 'all';
        const price = priceFilter ? priceFilter.value : 'all';

        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPrice = parseFloat(card.dataset.price);

            const categoryMatch = category === 'all' || category === cardCategory;
            const priceMatch = price === 'all' ||
                              (price === '0-500' && cardPrice <= 500) ||
                              (price === '500+' && cardPrice > 500);

            card.style.display = categoryMatch && priceMatch ? 'block' : 'none';
        });
    }

    if (categoryFilter && priceFilter) {
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
        filterProducts(); // Initial filter
    }
});