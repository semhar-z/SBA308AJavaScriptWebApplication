export const fetchRandomDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random'); // Update to Dog CEO API
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data.message; // Return the URL of the dog image
    } catch (error) {
        console.error('Error fetching dog image:', error);
        return null; // Return null if there's an error
    }
};