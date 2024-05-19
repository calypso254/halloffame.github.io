document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productContainer');
            container.innerHTML = ''; // Clear any existing content
            data.forEach(product => {
                const div = document.createElement('div');
                div.className = 'product';
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.title || 'Product Image'}">
                    <div class="product-title">${product.title || 'No Title Available'}</div>
                    <div class="launch-date">Release Date: ${product.launchDate || 'Not Available'}</div>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Failed to fetch products:', error);
            // Optionally update the DOM to show an error message
        });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const productCards = document.querySelectorAll('.product');
        productCards.forEach(card => {
            const name = card.querySelector('.product-title').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
