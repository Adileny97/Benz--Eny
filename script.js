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
// Function to check if the cookie consent has been accepted
function checkCookieConsent() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='));
}

// Function to set a cookie with an expiration date
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

document.addEventListener('DOMContentLoaded', function() {
    const cookieConsentBanner = document.getElementById('cookieConsent');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    // Show the cookie consent banner if not yet accepted
    if (!checkCookieConsent()) {
        cookieConsentBanner.style.display = 'block';
    }

    // Set cookie consent and hide the banner when the accept button is clicked
    acceptCookiesButton.addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 365); // Set consent for 1 year
        cookieConsentBanner.style.display = 'none';
    });
});
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});

