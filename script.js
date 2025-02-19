document.getElementById('contactButton').addEventListener('click', function() {
    alert('Thank you for your interest! You can contact us at adilcannes11@gmail.com.');
});
document.addEventListener('DOMContentLoaded', (event) => {
  // Assume you have a function getUserID() that returns the user's ID
  const userID = getUserID();
  if (userID) {
    gtag('config', 'G-8MS9N9C17P', {
      'user_id': userID
    });
  }
});
