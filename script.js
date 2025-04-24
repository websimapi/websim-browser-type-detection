document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    if (navigator.webdriver) {
        body.classList.add('is-automated');
    } else {
        body.classList.add('is-human');
    }
});

