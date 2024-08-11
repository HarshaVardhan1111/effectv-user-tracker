document.addEventListener('DOMContentLoaded', () => {
    const ticketNumberInput = document.getElementById('ticket-number');
    const totalOrderInput = document.getElementById('total-order');
    const startButton = document.getElementById('start-timer');
    const stopButton = document.getElementById('stop-timer');
    const timerDisplay = document.getElementById('timer-display');
    const bellIcon = document.getElementById('bell-icon');

    let startTime, timerInterval;

    startButton.addEventListener('click', () => {
        // Check if ticket number is valid (only numbers)
        if (!/^\d+$/.test(ticketNumberInput.value)) {
            alert('Please enter a valid ticket number (digits only).');
            return;
        }

        startTime = new Date();
        localStorage.setItem('ticketNumber', ticketNumberInput.value);
        localStorage.setItem('totalOrder', totalOrderInput.value);
        localStorage.setItem('startTime', startTime.toISOString());

        timerInterval = setInterval(() => {
            const elapsed = new Date() - startTime;
            const hours = String(Math.floor(elapsed / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((elapsed % (1000 * 60)) / 1000)).padStart(2, '0');
            timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);

        startButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
        bellIcon.style.display = 'none'; // Hide bell icon initially
    });

    stopButton.addEventListener('click', () => {
        clearInterval(timerInterval);

        const endTime = new Date();
        localStorage.setItem('endTime', endTime.toISOString());
        localStorage.setItem('elapsedTime', timerDisplay.textContent);
        window.location.href = 'rating.html';
    });

    // Optionally, you can show the bell icon when the ticket number is valid
    ticketNumberInput.addEventListener('input', () => {
        if (/^\d+$/.test(ticketNumberInput.value)) {
            bellIcon.style.display = 'inline';
        } else {
            bellIcon.style.display = 'none';
        }
    });
});
