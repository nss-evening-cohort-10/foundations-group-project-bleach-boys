const memberInfo = [
    {
        info: "When I was younger, I was obsessed with Pinky and the Brain. I even had a T-shirt collection. I also had one of those bowl haircuts, but I prefer to forget about that fact." , 
        name: "Matt"
    },
    {
        info: "When I was younger, I wanted to be an archaeologist because of Indiana Jones." , 
        name: "Rocket", 
    },
    {
        info: "I got really bad food poisoning when I was in Costa Rica. It was so bad that I had to be hospitalized for three days and put on a morphine drip.", 
        name: "Mark",
    },
    {
        info: "I went to college to be a high school history teacher. I’m still technically certified to teach high school history.", 
        name: "Phnuff",
    },
    {
        info: "I don’t play any sports nor know anything about them. I couldn’t think of anything more boring than going to a sporting event. In fact, I once fell asleep at a hockey match.",
        name: "Jon"
    }
]
const Jon = document.getElementById("JonInfo");
const Phnuff = document.getElementById("PhnuffInfo");
const Mark = document.getElementById("MarkInfo");
const Rocket = document.getElementById("RocketInfo");
const Matt = document.getElementById("MattInfo");

//PRINT TO DOM
const printToDom = (message, divID) => {
  document.getElementById(divID).innerHTML = message;
  };

const bandMemberShow = (memberInfo) => {
    let stringDom = "";
    for (let i = 0; i < memberInfo.length; i++) {
        const oneBandMember = memberInfo[i];
        stringDom += `
            <div class="soloInfo jumbotron text-center">
                <p>${oneBandMember.info}</p>
            </div>`
            printToDom(stringDom, "info")
    }
}

const clearScreen = () => {
    document.getElementById("info").innerHTML = "";
}
const filter = (filteredMember) => {
    bandMemberShow(memberInfo.filter(function(member) {
        return member.name === filteredMember;
    }));
}


const aboutEventListeners = () => {
    Matt.addEventListener(`click`, function() {
        clearScreen();
        filter("Matt");
    } )

    Rocket.addEventListener(`click`, function() {
        clearScreen();
        filter("Rocket");
    } )

    Mark.addEventListener(`click`, function() {
        clearScreen();
        filter("Mark");
    } )

    Phnuff.addEventListener(`click`, function() {
        clearScreen();
        filter("Phnuff");
    } )

    Jon.addEventListener(`click`, function() {
        clearScreen();
        filter("Jon");
    } )
}

//ALBUM OBJECT ARRAY
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
    albumUrl: "https://bandcamp.com"
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
    albumUrl: "https://bandcamp.com"
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
    albumUrl: "https://bandcamp.com"
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
    albumUrl: "https://bandcamp.com"
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
    albumUrl: "https://bandcamp.com"
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
    albumUrl: "https://bandcamp.com"
  },
];

// CREATE ALBUM CARD PRINTER
const albumCardPrinter = arr => {
  let htmlString = "";
  for (i = 0; i < arr.length; i++) {
    htmlString += `<div class=" album card mb-3 albums-card">
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
    `    
  } printToDom(htmlString, "album-zone");
};

//CAROUSEL OBJECT ARRAY
const slides = [
    { 
    slideUrl: './images/bleachBoys_slider1.jpg',
    slideAlt: 'Holy Water or Fire?',
    heading: 'Music',
    subHeader: 'Check out our albums.',
    btnUrl: './music.html',
    btnText: 'LISTEN UP!'
    },
    { 
    slideUrl: './images/bleachBoys_slider2.jpg',
    slideAlt: 'Why\'d the chicken cross the road? to go to the Bleach Boys Concert of course.',
    heading: 'Concerts',
    subHeader: 'Come out and support us!',
    btnUrl: './concerts.html',
    btnText: 'LISTEN IN!'
    },
    {
    slideUrl: './images/bleachBoys_slider3.jpg',
    slideAlt: 'Dude. Dude. Dude. Dude.',
    heading: 'Bleach Boy Gear',
    subHeader: 'Finally cloths you love so much you\'ll never wash or take off.',
    btnUrl: './gear.html',
    btnText: 'GEAR UP!'
    }
];

//CAROUSEL BUILDER AND PRINTER
const slidePrinter = (slidesArr) => {
    let domString = ''
    for (let i = 0; i < slidesArr.length; i ++) {
        const slide = slidesArr[i];
        domString += `
        <div class="carousel-item">
            <img src="${slide.slideUrl}" alt="${slide.slideAlt}">
            <div class="carousel-caption d-none d-md-block">
                <h1>${slide.heading}</h1>
                <p>${slide.subHeader}</p>
                <a class="btn btn-color" href="${slide.btnUrl}" role="button">&nbsp;&nbsp;&nbsp;${slide.btnText}&nbsp;&nbsp;&nbsp</a>
            </div>
      </div> 
      `   
    };
   
    printToDom(domString, 'homeCarousel');
    document.getElementsByClassName("carousel-item")[0].className += " active";
};

//GEAR OBJECT ARRAY
const gear = [
    {
        image: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T347A1MPA540PT17X22Y67D1008625786S65/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=2564,crop=list,version=1565757568,modelImageVersion=1551791379/bleach-womens-t-shirt.jpg",
        price: "$19.99",
        description: "100% preshrunk cotton. Fabric Weight: 5.0 oz. Product runs small. Double-stitched seams at shoulder, sleeve, collar and waist. This shirt is very durable and reliable.",
        type: "shirt",
        popular: true,
    },
    {
        image: "https://res.cloudinary.com/teepublic/image/private/s--GxLq0lh8--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-45/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-370/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1458051453/production/designs/448547_1.jpg",
        price: "$14.99",
        description: "Music Band T-Shirt - are you looking for a cool 'music band' t-shirt? Then you've found it! The perfect shirt for saying 'how do you do fellow kids?' - you'll fit in perfectly with this Funny Music Band Shirt.",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://ih0.redbubble.net/image.278474159.9435/ra,unisex_tshirt,x2200,101010:01c5ca27c6,front-c,392,146,750,1000-bg,f8f8f8.u1.jpg",
        price: "$19.99",
        description: "Slim fit, but if that’s not your thing, order a size up. Solid color t-shirts are 100% cotton; heather grey is 90% cotton, 10% polyester; charcoal heather is 52% cotton, 48% polyester",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://s3.amazonaws.com/hatscolor/wp-content/uploads/2019/03/24124444/image-1-247x296.png",
        price: "$24.99",
        description: "100% cotton twill. 6 panel embroidered. Adjustable Hook and Loop closure. One size fits most.",
        type: "cap",
        popular: true,
    },
    {
        image: "https://media.customon.com/unsafe/600x600/img.customon.com/img/2314145/7909,42,0,1,62,303.2,178.61236363636,37.9,25.693818181818,1478194510-Clorox-Bleach-Pyrocinycal-Leafy/merchantimagenew/clorox-bleach-pyrocinycal-leafy-brushed-cotton-twill-hat-white.jpg",
        description: "Fabric 100% cotton in front two panels; 100% polyester Spacer Mesh in mid and back panels. Closure 7-position adjustable snap.",
        price: "14.99",
        type: "cap",
        popular: false,
    },
    {
        image: "https://www.myanimeshoponline.com/wp-content/uploads/2018/09/bwallet-300x437.jpg",
        price: "$14.99",
        description: "100% genuine leather. Stylish black wallet that will make you much cooler than all the instructors in class.",
        type: "misc",
        popular: true,
    },
    {
        image: "https://ih0.redbubble.net/image.454199651.7990/ssrco,mhoodie,womens,oatmeal_heather,front,tall_three_quarter,x1000-bg,f8f8f8.u2.jpg",
        price: "$39.99",
        description: "Heavyweight 9oz preshrunk cotton rich fleece made from 80% Cotton, 20% Polyester. Front pouch pocket, matching drawstring and rib cuffs. Ethically sourced following the World Responsible Apparel Practices Standards. Note: If you like your hoodies baggy go 2 sizes up.",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://media.customon.com/unsafe/600x600/img.customon.com/img/2313934/7909,13,0,0,62,168,98.967272727273,21,40.516363636364,1478194510-Clorox-Bleach-Pyrocinycal-Leafy/merchantimagenew/clorox-bleach-pyrocinycal-leafy-zip-up-hoodie-white.jpg",
        price: "$49.99",
        description: "Prepare to be astonished with the quality of our unisex zip-up hoodie. Comfortable, durable, and softer than other brand, this zip-up hoodie is a ringspun combed cotton and polyester combined. Ringspun combed cotton is no ordinary cotton which came from an extensive process of spinning, twisting, and thinning of the cotton strands.",
        type: "jacket",
        popular: false,
    },
  ]
  
  // GEAR CARD PRINTER
  const printGear = (gearArray) => { 
      let stringToPrint = '';
      for (let i = 0; i < gearArray.length; i++) {
          const merch = gearArray[i]
          stringToPrint += `
          <div class="container card mb-3" id="merchCards" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="${merch.image}" class="card-img" id="imageCard" alt="image of ${merch.type}">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <p class="card-text">${merch.description}</p>
                      <p class="card-text">${merch.price}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
          `        
      } 
      printToDom(stringToPrint, "gear-zone");
  }
  
  //CONCERT OBJECT ARRAY
  const concertDates = [
      {
          location: 'Royal Albert Hall, London',
          time: '13th October 6:37 pm',
          ticketUrl: 'ticketmaster.com',
          imgUrl: './images/albert-hall-map.png',
          mapUrl: 'https://www.google.com/maps/place/Royal+Albert+Hall/@51.5009088,-0.1795547,17z/data=!3m1!4b1!4m5!3m4!1s0x4876055b21867ad1:0x5efe9cee35da2fd9!8m2!3d51.5009088!4d-0.177366'
      },
      {
          location: 'Level III, Swindon',
          time: '14th October 7:38 pm',
          ticketUrl: 'ticketmaster.com',
          imgUrl: './images/level-iii-map.png',
          mapUrl: 'https://www.google.com/maps/place/Level+III/@51.559248,-1.7902537,17z/data=!3m1!4b1!4m5!3m4!1s0x4871444402a67b47:0xaf041daaa5d9a8df!8m2!3d51.559248!4d-1.788065'
      },
      {
          location: 'Sydney Opera House, Sydney',
          time: '15th October 9:21 pm',
          ticketUrl: 'ticketmaster.com',
          imgUrl: './images/sydney-opera-house-map.png',
          mapUrl: 'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967'
      },
      {
          location: 'Bridgestone Arena, Nashville',
          time: '16th October 8:14 pm',
          ticketUrl: 'ticketmaster.com',
          imgUrl: './images/bridgestone-arena-map.png',
          mapUrl: 'https://www.google.com/maps/place/Bridgestone+Arena/@36.1591736,-86.7806846,17z/data=!3m1!4b1!4m5!3m4!1s0x8864665ec38d6447:0xa900537ecd3f6612!8m2!3d36.1591736!4d-86.7784959'
      },
      {
          location: 'The Basement East, Nashville',
          time: '17th October 10:28 pm',
          ticketUrl: 'ticketmaster.com',
          imgUrl: './images/basement-east-map.png',
          mapUrl: 'https://www.google.com/maps/place/The+Basement+East/@36.175686,-86.7577787,17z/data=!3m1!4b1!4m5!3m4!1s0x886466334bb7caed:0x7d32d7f9cf5cac87!8m2!3d36.175686!4d-86.75559'
      }
  ]
  
  //PRINTS CONCERTS TO CONCERTS PAGE
  const printConcerts = (concertArray) => {
    let string = '';
    for (let i = 0; i < concertArray.length; i++) {
        const currentConcert = concertArray[i];
        string += `
          <div class="concert-card card">
              <div class="card-body row collapsed" id="heading${i}" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                  <h5 id="listing${i}" class="card-title col-10 concert-listing">
                      ${currentConcert.time} | ${currentConcert.location}
                  </h5>
                  <a class="btn btn-color col" href="https://www.ticketmaster.com/" role="button">Get Tickets</a>
              </div>
              <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#concert-list">
                  <a href="${currentConcert.mapUrl}">
                      <img src="${currentConcert.imgUrl}" class="card-img-top" alt="Map of ${currentConcert.location}">
                  </a>
              </div>
          </div>
        `
    }
    printToDom(string, 'concert-list');
    const firstListing = document.getElementById('listing0');
    firstListing.className = 'card-title col-10 concert-listing';
    firstListing.setAttribute('aria-expanded', 'true');
    const firstMap = document.getElementById('collapse0');
    firstMap.className += ' show';
}

  const buttonClick = (e) => {
      const name = e.target.id
      if (name === "All") {
          printGear(gear);
          return;
      }  
      const selectedGear = []
      for (let i = 0; i < gear.length; i++) {
          const merch = gear[i]
          if (merch.type === name) {
              selectedGear.push(merch);
          }        
      } printGear(selectedGear);
  } 
  //PRINT POPULAR GEAR
  const printPopGear = (gearArray) => { 
    let stringToPrint = '';
    for (let i = 0; i < gearArray.length; i++) {
      const merch = gearArray[i];
      if (merch.popular === true) {
      stringToPrint += `
      <div class="container card mb-3" id="merchCards" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
              <img src="${merch.image}" class="card-img" id="imageCard" alt="image of ${merch.type}">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <p class="card-text">${merch.description}</p>
                  <p class="card-text">${merch.price}</p>
              </div>
          </div>
        </div>
      </div>
      `        
  } 
}
  printToDom(stringToPrint, "popGear");
};

//PRINT ALL FUNCTIONS TO THEIR RESPECTIVE PAGES
const init = () => {
  if (document.title.includes("Home")) {
    slidePrinter(slides);
    printPopGear(gear);
  } else if (document.URL.includes("music")) {
    albumCardPrinter(albums);
  } else if (document.URL.includes("about")) {
      aboutEventListeners();
  } else if (document.URL.includes("gear")) {
      document.getElementById('shirt').addEventListener('click', buttonClick)
      document.getElementById('cap').addEventListener('click', buttonClick)
      document.getElementById('misc').addEventListener('click', buttonClick)
      document.getElementById('All').addEventListener('click', buttonClick)
      printGear(gear);
  } else if (document.URL.includes("concerts")){
      printConcerts(concertDates);
  } else {
      console.log("bruh");
  }
}

//CALL INIT
init();