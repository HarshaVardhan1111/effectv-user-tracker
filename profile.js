// Function to extract query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        username: params.get('username'),
        password: params.get('password')
    };
}

// Function to display user details on the page
function displayUserDetails() {
    const userDetails = getQueryParams();

    // Check if user details are present
    if (userDetails.name && userDetails.id) {
    
        document.getElementById('username').textContent = userDetails.username || 'Not available';
        document.getElementById('password').textContent = userDetails.password || 'Not available';
    } else {
        // Handle the case where user details are missing
        document.getElementById('userName').textContent = 'Name: Not available';
        document.getElementById('employeeId').textContent = 'Employee ID: Not available';
    }
}

// Call the function to display user details when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayUserDetails();
});
