document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
  
    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Thank you, ${name}! Your RSVP for ${guests} guest(s) is confirmed. We look forward to seeing you!`;
  
    // Clear form fields
    e.target.reset();
  });
  