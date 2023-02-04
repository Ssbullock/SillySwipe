// app.js
const form = document.querySelector('.create-profile-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const profilePicture = form.querySelector('#profile-picture').files[0];
  const bio = form.querySelector('#bio').value.trim();
  const truth1 = form.querySelector('#truth1').value.trim();
  const truth2 = form.querySelector('#truth2').value.trim();
  const lie = form.querySelector('#lie').value.trim();

  if (!profilePicture || !bio || !truth1 || !truth2 || !lie) {
    alert('All fields are required!');
    return;
  }

  // Add code here to process the form data and store it in a database
});
