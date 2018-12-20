const apiUrl = 'https://dog.ceo/api/breeds/image/random/10';

fetch(apiUrl).then(r => r.json()).then(data => {

    console.log(data);

    const { message } = data;

    message.forEach(image => {
        const img = document.createElement("img");
        img.src = 'image';
        img.classList.add('thumbnail')
        document.getElementById('response').appendChild(img);
    });
});

document.addEventListener('click', function(e) {
    console.log(e.target);
});