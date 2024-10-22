//your JS code here. If required.
// Attach event listener to the button
document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve the values from the input fields
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // If the input fields are empty or delay is not a number, handle it
    if (!text || isNaN(delay)) {
        document.getElementById('output').innerText = "Please provide valid text and delay.";
        return;
    }

    // Function that returns a promise resolving after a delay
    const delayMessage = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Wait for the specified delay
    await delayMessage(delay);

    // Display the text in the output div
    document.getElementById('output').innerText = text;
});
