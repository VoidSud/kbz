function fetchDetails() {
  const bin = document.getElementById('binInput').value.trim();
  const output = document.getElementById('output');

  // Validate the input
  if (bin.length !== 6 || isNaN(bin)) {
    output.innerHTML = "<p style='color: red;'>Please enter a valid 6-digit BIN number.</p>";
    return;
  }

  // Create the path to the details.txt file based on user input
  const filePath = `Bins/${bin}/details.txt`;

  // Fetch the file content
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('CC Not Found. Currently Unavailable');
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
