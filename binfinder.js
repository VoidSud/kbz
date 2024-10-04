// Function to populate the BIN selector
function populateBinSelect() {
  const binSelect = document.getElementById('binInput');

  // Fetch the list of BINs from the JSON file
  fetch('bins.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load BINs');
      }
      return response.json();
    })
    .then(data => {
      // Populate the selector with the retrieved BINs
      data.bins.forEach(bin => {
        const option = document.createElement('option');
        option.value = bin;
        option.textContent = bin;
        binSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching BINs:', error);
      const output = document.getElementById('output');
      output.innerHTML = `<p style='color: red;'>Error loading BINs: ${error.message}</p>`;
    });
}

// Function to fetch details based on selected BIN
function fetchDetails() {
  const bin = document.getElementById('binInput').value.trim();
  const output = document.getElementById('output');

  // Check if a BIN is selected
  if (!bin) {
    output.innerHTML = "<p style='color: red;'>Please select a valid 6-digit BIN number.</p>";
    return;
  }

  // Create the path to the details.txt file based on user input
  const filePath = `Bins/${bin}/details.txt`;

  // Fetch the file content
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Looks Like this bus doesn't exist 😔');
      }
      return response.text();
    })
    .then(data => {
      // Display the content of details.txt
      output.innerHTML = `<pre>${data}</pre>`;
    })
    .catch(error => {
      output.innerHTML = `<p style='color: red;'>Error: ${error.message}</p>`;
    });
}

// Call the function to populate the selector when the page loads
document.addEventListener('DOMContentLoaded', populateBinSelect);
