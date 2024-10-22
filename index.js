// document.getElementById('randomDogButton').addEventListener('click', function () {
//     const dogImage = document.getElementById('dogImage');

//     // Fetch a random dog image from the Random Dog API
//     fetch('https://random.dog/woof.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json(); // Parse the response as JSON
//         })
//         .then(data => {
//             // Check if data contains the URL for the dog image
//             if (data && data.url) {
//                 // Set the image source to the URL from the JSON response
//                 dogImage.src = data.url;
//                 dogImage.style.display = 'block'; // Show the image
//             } else {
//                 console.error('Invalid data structure:', data);
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching dog image:', error);
//             dogImage.style.display = 'none'; // Hide the image if there's an error
//         });
// });

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
