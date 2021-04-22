const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slider');

let slides = document.querySelectorAll('.slider__container');

const interval = 3500;
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

const startSlide = () => {
   slideId = setInterval( () => {
      index++;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
      slide.style.transition = '.7s';
   }, interval);
}

slide.addEventListener('transitionend', () => {
   slides = document.querySelectorAll('.slider__container');
   if(slides[index].id === firstClone.id) {
      slide.style.transition = 'none';
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
   }
});

slideContainer.addEventListener('mouseenter', () => { clearInterval(slideId) })
slideContainer.addEventListener('mouseleave', startSlide);

startSlide();