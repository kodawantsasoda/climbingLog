function loadCustomContent() {
    return `
        <h2>Flowstone Climbing Gym<br>Redlands, CA</h2>
        <h3>Stats: </h3>
        <ul>
            <li>Highest Grade Climbed: </li>
            <br>
            <li>Highest Grade Flashed: </li>
            <br>
            <li>Number of Routes Climbed: </li>
        </ul>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the original div
    const originalDiv = document.querySelector('.box');

    // Create a new div element
    const newDiv = originalDiv.cloneNode(true);

    // Replace the content of the duplicated div
    newDiv.innerHTML = loadCustomContent();

    // Append the new div after the original div
    originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);
});

