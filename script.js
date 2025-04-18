document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted!');
    alert('Thank you for expressing interest in Palm Hills New Cairo!');
});

// Select the cursor element
const cursor = document.querySelector('.cursor');

// Add an event listener to track mouse movement

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
document.querySelectorAll('.hover-target').forEach((element) => {
    element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.2)'; // Grow the cursor
    });
    element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset the cursor size
    });
});
document.querySelectorAll('.hover-click').forEach((element) => {
    element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Grow the cursor
    });
    element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset the cursor size
    });
});
function animateCursor() {
    circleX += (mouseX - circleX) * 0.1; // Smooth interpolation
    circleY += (mouseY - circleY) * 0.1;

    cursor.style.left = `${circleX}px`;
    cursor.style.top = `${circleY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

