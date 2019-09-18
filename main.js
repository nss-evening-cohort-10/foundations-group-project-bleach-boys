console.log("main.js is linked");

const printToDOM = (stringToPrint, divID) => {
  document.getElementById(divID).innerHTML = stringToPrint;
};

const albums = [
  {
    coverUrl:
      "./images/Bleach_BOYS-01.png",
    title: "Bleach Boys",
    songs: [
      "Spin Cycle",
      "Bleach Boys",
      "Basic Bleach",
      "Clean AF",
      "Now We Bleachin'",
      "Can't Breach the Bleach",
      "Preach Bleach",
      "Ode To Clorox",
      "Go Bleach Yourself"
    ],
    albumUrl: "bandcamp.com"
  },
  {
    coverUrl:
      "./images/Bleach_BOYS-02.png",
    title: "Dirty Laundry",
    songs: [
      "Whites Cycle",
      "Mr. Clean",
      "Drink Bleach",
      "Antimicrobial",
      "Reach for Bleach",
      "To Each Their Bleach",
      "Bleach In My Eyes",
      "Eye Damage",
      "Blinded By The Bleach"
    ],
    albumUrl: "bandcamp.com"
  },
  {
    coverUrl:
      "./images/Bleach_BOYS-03.png",
    title: "Sodium Hypochlorite",
    songs: [
      "Acid Washed",
      "Oxidize THIS!",
      "All White Everything",
      "Yes, We Drink Bleach",
      "Bleach Blonde Baby",
      "No Color",
      "NaOCl",
      "Claude Louis Berthollet",
      "Eau De Javel"
    ],
    albumUrl: "bandcamp.com"
  },
  {
    coverUrl:
      "./images/Bleach_BOYS-04.png",
    title: "Chlorine Dream",
    songs: [
      "Chlorine Dream",
      "Let's Drink Bleach",
      "Clean Your Pool",
      "Color-Safe",
      "The Custodian",
      "Teach Bleach",
      "Bleach Bath For Two",
      "Thirsty For Bleach",
      "Esophagus Damage"
    ],
    albumUrl: "bandcamp.com"
  },
  {
    coverUrl:
      "./images/Bleach_BOYS-06.png",
    title: "Swimming In Bleach",
    songs: [
      "Bleach Breach",
      "Leeches in the Bleaches",
      "Rid Me Of Color",
      "Squeaky Clean",
      "Clorox Motherfucker",
      "God the Bleach Tastes So Good",
      "Bored Of Hue",
      "Sitting On the Bleachers",
      "Shouldn't Drink Bleach But I Do"
    ],
    albumUrl: "bandcamp.com"
  },
  {
    coverUrl:
      "./images/Bleach_BOYS-05.png",
    title: "Faded",
    songs: [
      "Sweet Sweet Bleach",
      "Are We Bleaching?",
      "Stuck In the Cycle",
      "Wash Mosh",
      "Nightmares Of Color",
      "Who's Got The Clorox?",
      "You'd Better B-leach It!",      
      "Bleach Your Brain",
      "Bleach On Down To Bleach Town"
    ],
    albumUrl: "bandcamp.com"
  },
];

const albumCardPrinter = arr => {
  let htmlString = "";
  for (i = 0; i < arr.length; i++) {
    htmlString += `<div class="card mb-3 album">
      <div class="row no-gutters">
        <div class="col-md-6">
          <img src="${arr[i].coverUrl}" class="card-img" alt="${arr[i].title}">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <a href="${arr[i].albumUrl}"><h5 class="card-title">${
      arr[i].title
    }</h5></a>
            <p class="card-text small">1.  ${arr[i].songs[0]} <br>
              2.  ${arr[i].songs[1]}<br>
              3.  ${arr[i].songs[2]}<br>
              4.  ${arr[i].songs[3]}<br>
              5.  ${arr[i].songs[4]}<br>
              6.  ${arr[i].songs[5]}<br>
              7.  ${arr[i].songs[6]}<br>
              8.  ${arr[i].songs[7]}<br>
              9.  ${arr[i].songs[8]}<br>
            </p>
          </div>
        </div>
      </div>
     </div>
    `;
    
  } printToDOM(htmlString, "album-zone");
};

albumCardPrinter(albums);
