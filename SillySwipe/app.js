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


let mockData = [];

fetch('user-data.json')
  .then(response => response.json())
  .then(data => {
    mockData = data;

    const table = document.getElementById('profiles');

    for (let i = 0; i < mockData.length; i++) {
      const profile = mockData[i];
      const row = table.insertRow();

      const pictureCell = row.insertCell();
      const picture = document.createElement('img');
      picture.src = profile.picture;
      picture.width = 50;
      picture.height = 50;
      pictureCell.appendChild( picture );

      const bioCell = row.insertCell();
      bioCell.innerHTML = profile.bio;

      const truthsAndLiesCell = row.insertCell();
      truthsAndLiesCell.innerHTML = profile.truthsAndLies;
    }
  });

  document.getElementById('profile-form').addEventListener('submit', event => {
    event.preventDefault();
  
    const picture = event.target.picture.value;
    const bio = event.target.bio.value;
    const truthsAndLies = event.target.truthsAndLies.value;
  
    profiles.insertOne({ picture, bio, truthsAndLies }, (err, result) => {
      console.log("Profile saved!");
    });
  });
  
  profiles.find({}).toArray((err, result) => {
    const table = document.getElementById('profiles');
  
    for (let i = 0; i < result.length; i++) {
      const profile = result[i];
      const row = table.insertRow();
  
      const pictureCell = row.insertCell();
      const picture = document.createElement('img');
      picture.src = profile.picture;
      picture.width = 50;
      picture.height = 50;
      pictureCell.appendChild( picture );
  
      const bioCell = row.insertCell();
      bioCell.innerHTML = profile.
    }  
  }