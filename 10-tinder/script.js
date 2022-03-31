const data = [
  {
    name: "Ezzi Morales",
    age: 32,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Nick Talman",
    age: 30,
    gender: "male",
    lookingfor: "female",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "James Bond",
    age: 37,
    gender: "male",
    lookingfor: "female",
    location: "London UK",
    image: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Lisa Simson",
    age: 23,
    gender: "female",
    lookingfor: "male",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// next event
document.getElementById("next").addEventListener("click", nextProfile);

// next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // no more profiles
    window.location.reload();
  }
}

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
