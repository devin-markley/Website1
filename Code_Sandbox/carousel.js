const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages= document.querySelectorALL('.carousel-slide img');
//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size * counter ) + 'px)'

//button listeners
nextBtn.addEventListener('click',()=>{
	carouselSlide.style.transition = "transform 0.4s ease-in-out"
	counter++;
	carouselSlide.style.transform= 'translateX(' +(-size * counter ) + 'px)'
})