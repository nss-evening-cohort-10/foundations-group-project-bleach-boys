const slides = [
    { 
    slideUrl: './images/bleachBoys_slider1.jpg',
    slideAlt: '',
    heading: 'MUSIC',
    subHeader: 'Check out our albums.',
    btnUrl: 'music.html',
    btnText: '',
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
        const slide = slidesArr[i]
        domString += `
        <div class="carousel-item">
            <img src="${slide.slideUrl}" alt="${slide.slideAlt}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${slide.heading}</h5>
                <p>${slide.subHeadr}</p>
                <a href="${slide.btnUrl}" class="btn" role="button">${slide.heading}<a>
            </div>
      </div>       `   
    };
    printToDom('homeCarousel', domString);
};
slidePrinter(slides);
// if(indexOf(slidesArr)=== 0{
//     innerHTML('active')
// })