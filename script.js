document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productContainer');
            data.forEach(product => {
                const div = document.createElement('div');
                div.className = 'product-card';
                div.innerHTML = `
                    <img src="${product.image}" alt="Product Image">
                    <h2>${product.name}</h2>
                    <p>Release Date: ${product.releaseDate}</p>
                `;
                container.appendChild(div);
            });
        });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const name = card.querySelector('h2').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
