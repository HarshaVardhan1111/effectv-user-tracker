document.addEventListener('DOMContentLoaded', function() {
    // Example stats data - replace with actual data fetching if needed
    const statsData = {
        ticketNumber: 'T12345',
        totalOrder: '$150.00',
        startTime: '2024-08-10 10:00 AM',
        endTime: '2024-08-10 12:00 PM',
        elapsedTime: '2 hours',
        clientName: 'John Doe',
        rating: 4
    };

    // Function to set the stats details
    function setStatsDetails(data) {
        document.getElementById('ticket-number').textContent = data.ticketNumber;
        document.getElementById('total-order').textContent = data.totalOrder;
        document.getElementById('start-time').textContent = data.startTime;
        document.getElementById('end-time').textContent = data.endTime;
        document.getElementById('elapsed-time').textContent = data.elapsedTime;
        document.getElementById('client-name').textContent = data.clientName;

        // Display stars for rating
        const ratingStars = document.getElementById('rating-stars');
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('i');
            star.className = i <= data.rating ? 'fas fa-star' : 'far fa-star';
            ratingStars.appendChild(star);
        }
    }

    // Call the function with example data
    setStatsDetails(statsData);
});
