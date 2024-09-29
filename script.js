document.addEventListener('DOMContentLoaded', function () {
    
    const readMoreLink = document.querySelector('.read-more');
    const showLessLink = document.querySelector('.paragraph.hidden a');
    const hiddenParagraph = document.querySelector('.paragraph.hidden');

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