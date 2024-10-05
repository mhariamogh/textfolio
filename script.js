document.addEventListener('DOMContentLoaded', function () {

    const readMoreLink = document.querySelector('.read-more');
    const showLessLink = document.querySelector('.paragraph.hidden a');
    const hiddenParagraph = document.querySelector('.paragraph.hidden');
    const fadeInElements = document.querySelectorAll('.fade-in');
    const video = document.getElementById('bio-video');
    const bioVideo = document.getElementById('bio-video');
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    bioVideo.addEventListener('mouseover', () => {
        customCursor.style.opacity = 1; // Show the custom cursor
    });

    bioVideo.addEventListener('mouseout', () => {
        customCursor.style.opacity = 0; // Hide the custom cursor
    });

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });


    fadeInElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('visible');
        }, 20); // Adjust delay as needed
    });

    if (video) {
        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0; // Reset to the beginning if paused
            }
        });
    }

    if (readMoreLink && hiddenParagraph && showLessLink) {
        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault();
            hiddenParagraph.classList.remove('hidden');
            hiddenParagraph.classList.add('visible');
            readMoreLink.classList.add('hidden');
        });

        showLessLink.addEventListener('click', function (event) {
            event.preventDefault();
            hiddenParagraph.classList.remove('visible');
            hiddenParagraph.classList.add('hidden');

            // Remove the 'hidden' class from the "Read More" link immediately
            readMoreLink.classList.remove('hidden');
        });
    }
});