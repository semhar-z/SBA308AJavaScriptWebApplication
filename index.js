import { fetchRandomDogImage } from './api.js';

document.getElementById('randomDogButton').addEventListener('click', function () {
    const dogImage = document.getElementById('dogImage');

    // Fetch a random dog image from the Random Dog API
    fetch('https://random.dog/woof.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Check if data contains the URL for the dog image
            if (data && data.url) {
                // Set the image source to the URL from the JSON response
                dogImage.src = data.url;
            } else {
                console.error('Invalid data structure:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
});




document.getElementById('randomDogButton1').addEventListener('click', async () => {
    const dogImage1 = document.getElementById('dogImage1');
    const imageUrl = await fetchRandomDogImage(); // Fetch new dog image

    if (imageUrl) {
        dogImage1.src = imageUrl; // Update image src if fetched successfully
    } else {
        dogImage1.alt = 'Error fetching image'; // Update alt text on error
    }
});
