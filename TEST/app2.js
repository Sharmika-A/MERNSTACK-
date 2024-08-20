// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fetchCartsButton = document.getElementById('fetch-carts');
    const cartsContainer = document.getElementById('carts-container');
  
    fetchCartsButton.addEventListener('click', () => {
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;
  
      if (!startDate || !endDate) {
        alert('Please select both start and end dates.');
        return;
      }
  
      // Convert dates to ISO format for comparison
      const start = new Date(startDate).toISOString();
      const end = new Date(endDate).toISOString();
  
      fetch('https://fakestoreapi.com/carts')
        .then(response => response.json())
        .then(carts => {
          const filteredCarts = carts.filter(cart => {
            const cartDate = new Date(cart.date).toISOString();
            return cartDate >= start && cartDate <= end;
          });
  
          renderCarts(filteredCarts);
        })
        .catch(error => console.error('Error fetching carts:', error));
    });
  
    function renderCarts(carts) {
      cartsContainer.innerHTML = '';
  
      if (carts.length === 0) {
        cartsContainer.innerHTML = '<p>No carts found in the selected date range.</p>';
        return;
      }
  
      carts.forEach(cart => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        cartItem.innerHTML = `
          <h2>Cart ID: ${cart.id}</h2>
          <p>Date: ${cart.date}</p>
          <p>User ID: ${cart.userId}</p>
          <p>Products: ${cart.products.length}</p>
        `;
  
        cartsContainer.appendChild(cartItem);
      });
    }
  });