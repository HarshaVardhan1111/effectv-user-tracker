document.addEventListener('DOMContentLoaded', () => {
    const ticketNumberSpan = document.getElementById('ticket-number');
    const totalOrderSpan = document.getElementById('total-order');
    const startTimeSpan = document.getElementById('start-time');
    const endTimeSpan = document.getElementById('end-time');
    const elapsedTimeSpan = document.getElementById('elapsed-time');
    const clientNameInput = document.getElementById('client-name');
    const ratingStars = document.getElementById('rating-stars');
    const submitButton = document.getElementById('submit-rating');
    const ratingMessage = document.getElementById('rating-message');

    // Retrieve data from localStorage
    const ticketNumber = localStorage.getItem('ticketNumber');
    const totalOrder = localStorage.getItem('totalOrder');
    const startTime = new Date(localStorage.getItem('startTime'));
    const endTime = new Date(localStorage.getItem('endTime'));
    const elapsedTime = localStorage.getItem('elapsedTime');

    // Display data
    ticketNumberSpan.textContent = ticketNumber;
    totalOrderSpan.textContent = totalOrder;
    startTimeSpan.textContent = startTime.toLocaleTimeString();
    endTimeSpan.textContent = endTime.toLocaleTimeString();
    elapsedTimeSpan.textContent = elapsedTime;

    let ratingValue = 0;

    // Handle star rating
    ratingStars.addEventListener('click', (event) => {
        if (event.target.dataset.value) {
            ratingStars.querySelectorAll('span').forEach(span => {
                span.classList.remove('selected');
            });
            event.target.classList.add('selected');
            ratingValue = parseInt(event.target.dataset.value);
        }
    });
    
    // Handle submit button
    submitButton.addEventListener('click', () => {
        if (ratingValue === 0) {
            ratingMessage.textContent = 'Please select a rating!';
            ratingMessage.style.color = 'red';
            return;
        }
        const clientName = clientNameInput.value;
        if (!clientName) {
            ratingMessage.textContent = 'Please enter the client name!';
            ratingMessage.style.color = 'red';
            return;
        }
        ratingMessage.textContent = `Thank you for rating ${ratingValue} star(s)!`;
        ratingMessage.style.color = 'green';
        
        submitButton.addEventListener('click', () => {
            const clientName = document.getElementById('client-name').value;
            const endTime = new Date().toISOString(); // Update end time
    
            localStorage.setItem('clientName', clientName);
            localStorage.setItem('endTime', endTime);
        
        // Redirect to completed.html after a short delay to allow message display
        setTimeout(() => {
            window.location.href = 'completion.html';
        }, 1000);
    });
});
});
