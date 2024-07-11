document.addEventListener('DOMContentLoaded', (event) => {
    const buildings = document.querySelectorAll('.building');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');

    buildings.forEach((building, index) => {
        building.addEventListener('click', () => {
            notificationText.textContent = `You clicked on building ${index + 1}`;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        });
    });
});
