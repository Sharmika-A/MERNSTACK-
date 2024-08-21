// Handle Login Form Submission
// Handle Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the default form submission behavior
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login Response:', data);  // Log the response in the browser's console

        if (data.token) {
            // If the login is successful, display a success message on the page
            document.getElementById('login-message').textContent = 'Login successful!';
            document.getElementById('login-message').style.color = 'green';
            
            // Log a success message in Visual Studio Code's console
            console.log('Login successful! Token:', data.token);
        } else {
            // If login fails, display an error message on the page
            document.getElementById('login-message').textContent = 'Login failed. Please try again.';
            document.getElementById('login-message').style.color = 'red';
            
            // Log a failure message in Visual Studio Code's console
            console.log('Login failed. Error:', data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('login-message').textContent = 'An error occurred. Please try again.';
        document.getElementById('login-message').style.color = 'red';
    });
});


// Handle Register Form Submission
document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Register Response:', data);
      if (data.token) {
          document.getElementById('register-message').textContent = 'Registered successfully!';
      } else {
          document.getElementById('register-message').textContent = 'Registration failed. Please try again.';
      }
  })
  .catch(error => console.error('Error:', error));
});


