const slides = [
    { 
    slideUrl: './images/bleachBoys_slider1.jpg',
    slideAlt: '',
    heading: 'MUSIC',
    subHeader: 'Check out our albums.',
    btnUrl: 'music.html'
    },
    { 
    slideUrl: './images/bleachBoys_slider2.jpg',
    slideAlt: '',
    heading: 'CONCERTS',
    subHeader: 'Come out and support us!',
    btnUrl: 'concerts.html'
    },
    {
    slideUrl: './images/bleachBoys_slider3.jpg',
    slideAlt: '',
    heading: 'GEAR',
    subHeader: 'Gear up!',
    btnUrl: 'gear.html'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

const slidePrinter = (slidesArr) => {
    let domString = ''
    for (let i = 0; i < slidesArr.length; i ++) {
        const pet = slidesArr[i]
        domString += `
        <div class="carousel-item">
            <img src="${slidesArr.slideUrl}" alt="${slidesArr.slideAlt}">
                <div class="carousel-caption d-none d-md-block">
                <h5>${slidesArr.heading}</h5>
                <p>...</p>
            </div>
      </div>       `   
    };
    printToDom('carousel-inner', domString);
};

// if(indexOf(slidesArr)=== 0{
//     innerHTML('active')
// })