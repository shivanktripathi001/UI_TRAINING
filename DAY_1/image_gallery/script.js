const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close');

// Open modal when thumbnail is clicked
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});