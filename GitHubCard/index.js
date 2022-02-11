import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cardsEntry = document.querySelector("div.cards");

axios.get("https://api.github.com/users/mcfrr3")
  .then(res => {
    console.log(res);
    const myGithubCard = makeGithubCard(res.data);
    cardsEntry.appendChild(myGithubCard);
  })
  .catch(err => {
    console.error(err);
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const makeGithubCard = dataObj => {
  // create elements
  const card = document.createElement("div");
  const usrImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userTitle = document.createElement("h3");
  const userName = document.createElement("p");
  const userLocation = document.createElement("p");
  const profileText = document.createElement("p");
  const githubLink = document.createElement("a");
  const followersCount = document.createElement("p");
  const followingCount = document.createElement("p");
  const userBio = document.createElement("p");

  // Add classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userTitle.classList.add("name");
  userName.classList.add("username");

  // Add text and properties
  usrImg.src = dataObj["avatar_url"];
  userTitle.textContent = dataObj.name;
  userName.textContent = dataObj.login;
  userLocation.textContent = `Location: ${dataObj.location}`;
  profileText.textContent = "Profile: ";
  githubLink.href = dataObj["html_url"];
  githubLink.textContent = dataObj["html_url"];
  followersCount.textContent = `Followers: ${dataObj.followers}`;
  followingCount.textContent = `Following: ${dataObj.following}`;
  userBio.textContent = `Bio: ${dataObj.bio}`;

// create structure
  card.appendChild(usrImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userTitle);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profileText);
  profileText.appendChild(githubLink);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(userBio);

  return card;
};

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "crharding"
];

followersArray.forEach(instructor => {
  axios.get(`https://api.github.com/users/${instructor}`)
  .then(res => {
    console.log(res);
    const myGithubCard = makeGithubCard(res.data);
    cardsEntry.appendChild(myGithubCard);
  })
  .catch(err => {
    console.error(err);
  });
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
