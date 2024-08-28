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
    <div style={{ padding: '20px' }}>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button
        onClick={handleButtonClick}
        style={{ padding: '8px 16px', fontSize: '16px' }}
      >
        Find Meaning
      </button>

      {/* Display the API response */}
      {response && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
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
    </div>
  );
}

export default MeaningFinder;
