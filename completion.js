document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    const ticketNumber = localStorage.getItem('ticketNumber');
    const totalOrder = localStorage.getItem('totalOrder');
    const startTime = localStorage.getItem('startTime');
    const endTime = localStorage.getItem('endTime');
    const elapsedTime = localStorage.getItem('totalTime');
    const clientName = localStorage.getItem('clientName');
    const rating = localStorage.getItem('rating');

    // Display data on the page
    document.getElementById('ticket-number').textContent = ticketNumber;
    document.getElementById('total-order').textContent = totalOrder;
    document.getElementById('start-time').textContent = startTime;
    document.getElementById('end-time').textContent = endTime;
    document.getElementById('Total-time').textContent = elapsedTime;
    document.getElementById('client-name').textContent = clientName;

    // Display rating
    const ratingStars = document.getElementById('rating-stars');
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.innerHTML = i <= rating ? '&#9733;' : '&#9734;';
        ratingStars.appendChild(star);
    }

    // Export to CSV functionality
    document.getElementById('export-button').addEventListener('click', () => {
        const csvContent = [
            ['Ticket Number', 'Total Order', 'Start Time', 'End Time', 'total Time', 'Client Name', 'Rating'],
            [ticketNumber, totalOrder, startTime, endTime, elapsedTime, clientName, rating]
        ].map(e => e.join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'completion_data.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    // Go back button
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'rating.html';
    });
});
