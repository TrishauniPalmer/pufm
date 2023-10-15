// This string of Arrays defines the images to load.
const allImages = [
        'images/gallery/bamboo bar.jpg',
        'images/gallery/cane desk and chair.jpg',
        'images/gallery/cane bench and dining chairs.jpg',
        'images/gallery/curve vanity.jpg',
        'images/gallery/king and inlay bedside tables.jpg',
        'images/gallery/out door seating area.jpg',
        'images/gallery/teak vanity and mirrors.jpg',
        'images/gallery/twin bed and bed bench.jpg',
        'images/gallery/red lattice chairs.jpg'
];

// Function to get the images to load.
const loadMoreImages = () => {
        const gallery = document.querySelector('.gallery-images');
        
        // This removes the perviously loaded images.
        const imagesToRemove = gallery.querySelectorAll('img');
        imagesToRemove.forEach((image) => {
                gallery.removeChild(image);
        });

        for(let i = 0; i < allImages.length; i++) {
                        const img = document.createElement('img');
                        img.src = allImages[i];
                        gallery.appendChild(img);
                }
}



const loadMoreButton = document.getElementById('load-more');
loadMoreButton.addEventListener('click', loadMoreImages);


