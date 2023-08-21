// Function to open the default email client with a new email
function emailMe() {
  window.location.href = "mailto:ojhasujan60@gmail.com";
}

// Attach the emailMe function to the email button click event
document.querySelector(".email-button").addEventListener("click", emailMe);

// Function to show/hide the "scroll to top" button
function toggleScrollTopButton() {
  var scrollTopButton = document.getElementById("scroll-top-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// Function to scroll back to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Attach the toggleScrollTopButton function to the scroll event
window.onscroll = function() {
  toggleScrollTopButton();
};
