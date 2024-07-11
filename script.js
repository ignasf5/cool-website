document.addEventListener('DOMContentLoaded', (event) => {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const swapTextBtn = document.getElementById('swapTextBtn');
    const textElement = document.getElementById('text');
    const slider = document.getElementById('slider');

    // Function to change the background color of the container
    changeColorBtn.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.querySelector('.container').style.backgroundColor = randomColor;
    });

    // Function to swap the text content
    swapTextBtn.addEventListener('click', () => {
        textElement.textContent = textElement.textContent === "This is some text that will be swapped." 
            ? "The text has been swapped!" 
            : "This is some text that will be swapped.";
    });

    // Function to handle slider input
    slider.addEventListener('input', () => {
        const value = slider.value;
        textElement.style.fontSize = value + 'px';
    });
});
