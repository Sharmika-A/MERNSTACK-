// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const sortDropdown = document.getElementById('sort');
    let products = [];
  
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        products = data;
        renderProducts(products);
      })
      .catch(error => console.error('Error fetching products:', error));
  
    // Sort products based on the selected option
    sortDropdown.addEventListener('change', () => {
      const selectedOption = sortDropdown.value;
      let sortedProducts = [...products];
  
      switch (selectedOption) {
        case 'price-asc':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          sortedProducts = [...products];
      }
  
      renderProducts(sortedProducts);
    });
  
    // Function to render products to the page
    function renderProducts(products) {
      productsGrid.innerHTML = '';
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
    }
  });