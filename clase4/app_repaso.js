// Botón de Like
let likeCount = 0;
const likeButton = document.getElementById('likeButton');
const likeCountDisplay = document.getElementById('likeCount');

likeButton.addEventListener('click', function() {
    likeCount++;
    likeCountDisplay.textContent = `Likes: ${likeCount}`;
});

// Botón de Mostrar/Ocultar Div
const toggleButton = document.getElementById('toggleButton');
const toggleDiv = document.getElementById('toggleDiv');

toggleButton.addEventListener('click', function() {
    if (toggleDiv.style.display === 'none') {
        toggleDiv.style.display = 'block';
    } else {
        toggleDiv.style.display = 'none';
    }
});
