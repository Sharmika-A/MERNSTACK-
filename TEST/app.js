// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
  
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
          `;
  
          productsGrid.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });