const playElement = document.getElementsByClassName('play');

// Show the element when the pointer is over it
playElement.addEventListener('mouseover', () => {
    playElement.classList.add('show');
});

// Hide the element when the pointer leaves it
playElement.addEventListener('mouseout', () => {
    playElement.classList.remove('show');
});

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `https://api.jiosaavn.com/v1/search?type=song&query=${encodeURIComponent(query)}`;

async function fetchSongDetails() {
    const query = document.getElementById('queryInput').value;
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
}
