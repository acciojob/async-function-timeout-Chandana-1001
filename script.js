
document.getElementById('btn').addEventListener('click', async function() {
    
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    if (!text || isNaN(delay)) {
        document.getElementById('output').innerText = "Please provide valid text and delay.";
        return;
    }

    
    const delayMessage = (ms) => new Promise(resolve => setTimeout(resolve, ms
    await delayMessage(delay);


    document.getElementById('output').innerText = text;
});
