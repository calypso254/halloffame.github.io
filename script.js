document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productContainer');
            data.forEach(product => {
                const div = document.createElement('div');
                div.className = 'product-card';
                div.innerHTML = `
                    <img src="${product.image ? product.image : 'path/to/default/image.jpg'}" alt="${product.title ? product.title : 'No title available'}">
                    <h2>${product.title ? product.title : 'Untitled'}</h2>
                    <p>Release Date: ${product.launchDate ? product.launchDate : 'Not available'}</p>
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
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const name = card.querySelector('h2').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
