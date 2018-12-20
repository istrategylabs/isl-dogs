const apiUrl = 'https://dog.ceo/api/breeds/image/random/10';

// Use the Fetch API to get data from this URL
fetch(apiUrl).then(r => r.json()).then(data => {

    console.log(data);

    // Per API documentation, the `message` key
    // should have an array of image URLs
    const { message } = data;

    // Loop over the image URLs and create an <img>
    // element for each; set its src and add a class and
    // add it to the DOM
    message.forEach(image => {
        const img = document.createElement("img");
        img.src = 'image';
        img.classList.add('thumbnail')
        document.getElementById('content').appendChild(img);
    });
});

document.addEventListener('click', function(e) {
    console.log(e.target);
});