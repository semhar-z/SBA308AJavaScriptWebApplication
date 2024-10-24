import { fetchRandomDogImage, fetchBreedsList } from './api.js';

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
        dogImage1.src = imageUrl; 
    } else {
        dogImage1.alt = 'Error fetching image'; 
    }
});


// Search for dog breeds
document.getElementById('searchButton').addEventListener('click', async () => {
    const breedInput = document.getElementById('breedInput').value.trim().toLowerCase();
    const searchedDogImage = document.getElementById('searchedDogImage');
    // const searchedDogImage = document.getElementById('searchedDogImage').style.visibility = 'visible';


    if (breedInput) {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();

            if (data.status === 'success') {
                searchedDogImage.src = data.message; // Set the image source to the fetched URL
                searchedDogImage.style.display = 'block'; // Show the image
            } else {
                console.error('No images found for this breed.');
                searchedDogImage.style.display = 'none'; // Hide the image if not found
            }
        } catch (error) {
            console.error('Error fetching breed image:', error);
            searchedDogImage.style.display = 'none'; // Hide the image if there's an error
        }
    }
});

// GET Breeds List
document.getElementById('getBreedsButton').addEventListener('click', async () => {
    const breedsList = document.getElementById('breedsList');
    const breeds = await fetchBreedsList();

    if (breeds) {
        breedsList.innerHTML = breeds.map(breed => `<p>${breed}</p>`).join('');
    }
});


  // jsonplaceholder API I used this for simulation // I could not find any other API
  // that I can post 
document.getElementById('addFavoriteBreed').addEventListener('click', async () => {
    const breedInput = document.getElementById('favoriteBreed').value.trim().toLowerCase();
    
    if (breedInput) {
        try {
            //  POST request
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Favorite Breed',
                    body: breedInput,
                }),
            });

            const data = await response.json();

            // Log the response data to the console
            console.log('POST Response:', data);

            // Update favorite breed display with the response
            document.getElementById('favoriteBreedDisplay').innerHTML = `Favorite Breed: ${data.body}`;
        } catch (error) {
            console.error('Error adding favorite breed:', error);
        }
    }
});
