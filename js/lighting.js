document.addEventListener('mousemove', (e) => {
    const nameElement = document.getElementById('interactive-name');
    const { top, left, width, height } = nameElement.getBoundingClientRect();
    
    // Calculate the cursor position relative to the element
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Adjust background position based on the cursor
    nameElement.style.backgroundPosition = `${x - width / 2}px ${y - height / 2}px`;
});

