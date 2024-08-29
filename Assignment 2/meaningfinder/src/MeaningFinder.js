import React, { useState } from 'react';

function MeaningFinder() {
  const [name, setName] = useState(''); // To store the input value
  const [response, setResponse] = useState(null); // To store the API response

  // Handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Handle button click
  const handleButtonClick = async () => {
    try {
      const res = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await res.json();
      setResponse(data); // Store the response in state
      console.log(data); // Log the response in the console
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f4f8',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      margin: '50px auto',
      textAlign: 'center',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <h1 style={{
        color: '#333',
        marginBottom: '20px',
        fontSize: '24px'
      }}>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
        style={{
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          border: '2px solid #ddd',
          borderRadius: '5px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        Find Meaning
      </button>

      {/* Display the API response */}
      {response && (
        <div style={{
          marginTop: '20px',
          fontSize: '18px',
          color: '#555',
          animation: 'fadeIn 0.5s'
        }}>
          {response.error ? (
            <p>Error: {response.error}</p>
          ) : (
            <p>
              The predicted age for the name <strong>{response.name}</strong> is{' '}
              <strong>{response.age}</strong> years.
            </p>
          )}
        </div>
      )}

      {/* Keyframes for fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default MeaningFinder;
