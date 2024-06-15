document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.color-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            document.body.style.backgroundColor = color;
        });
    });
});
