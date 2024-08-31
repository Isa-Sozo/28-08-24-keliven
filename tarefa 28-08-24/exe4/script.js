const thumbnails = document.querySelectorAll('.gallery img');
const featuredImage = document.getElementById('featuredImage');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        featuredImage.src = thumbnail.src;
    });
});