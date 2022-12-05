const myCarouselElement = document.querySelector('#carouselExampleControls')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  //interval: 2000,
  wrap: false
});

const myCarouselElement2 = document.querySelector('#carouselExampleControls2')
const carousel2 = new bootstrap.Carousel(myCarouselElement2, {
  //interval: 2000,
  wrap: false
});


var youtubeIframe = document.getElementById("youtubeVideo");

const pageable = new Pageable("main", {
  animation: 500,
  delay: 800,
  pips: false,
  navPrevEl: false,
  navNextEl: false,
  events: {
    wheel: true, // enable / disable mousewheel scrolling
    mouse: false, // enable / disable mouse drag scrolling
    touch: true, // enable / disable touch / swipe scrolling
    keydown: true, // enable / disable keyboard navigation
},
onStart: function () {
    this.pages.forEach((page, i) => {
      //console.log(i)
      page.classList.remove("pg-active");
    });
},
});

pageable.on("scroll.before", data => {
  console.log('scroll start');
  youtubeIframe.classList.add('youtube-pointer')
});

pageable.on("scroll", data => {
  console.log('scroll');
  
});

pageable.on("scroll.end", data => {
  console.log('scroll end');
  youtubeIframe.classList.remove('youtube-pointer')
});

//obtenemos los bones del carousel
const myButtoms = document.querySelectorAll('.temp')
//segundo carousel
myCarouselElement.addEventListener('slide.bs.carousel', event => {
  //console.log(myButtoms);
  //console.log(event.to);
  myButtoms.forEach((element, index) => {
    if (event.to == index) {
      element.classList.add('butom-active');
    } else {
      element.classList.remove('butom-active');
    }
  });
});

function carouselTo(position) {
  carousel.to(position);
}

//obtenemos los bones del carousel
const myButtoms2 = document.querySelectorAll('.temp2')
//segundo carousel
myCarouselElement2.addEventListener('slide.bs.carousel', event => {
  //console.log(myButtoms);
  //console.log(event.to);
  myButtoms2.forEach((element, index) => {
    if (event.to == index) {
      element.classList.add('butom-active');
    } else {
      element.classList.remove('butom-active');
    }
  });
});

function carouselTo2(position) {
  carousel2.to(position);
}



