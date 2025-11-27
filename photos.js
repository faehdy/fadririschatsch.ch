/* ===========================
   Photo Gallery Lightbox
   =========================== */

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const photoItems = document.querySelectorAll('.photo-item img');
    
    let currentIndex = 0;
    
    // Open lightbox when clicking on a photo
    photoItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(img);
        });
    });
    
    function openLightbox(img) {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
    }
    
    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Previous photo
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + photoItems.length) % photoItems.length;
        lightboxImg.src = photoItems[currentIndex].src;
        lightboxCaption.textContent = photoItems[currentIndex].alt;
    });
    
    // Next photo
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % photoItems.length;
        lightboxImg.src = photoItems[currentIndex].src;
        lightboxCaption.textContent = photoItems[currentIndex].alt;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (e.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });
});
