//PrintToDom
const printToDom = (textToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };
//Carousel Object Array
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
//Loops through the Carousel Array
//Creates each "carousel-item" 
//Prints them to the "homeCarousel" div
//Adds the "active" class to the first "carousel-item"
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
//Print the Carousel
slidePrinter(slides);

