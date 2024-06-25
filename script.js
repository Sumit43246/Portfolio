/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

                });
            };
       });



    /*==================== sticky navbar ====================*/
       let header = document.querySelector('header');

       header.classList.toggle('sticky', window.scrollY > 100);
       
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance:'200px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });
ScrollReveal().reveal('.skill-left', { origin: 'top' });
ScrollReveal().reveal('.skill.right', { origin: 'bottom' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer.', 'Web Designer.', 'Frontend Developer.'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

/*==================== customized about section ====================*/
var toggleBtn = document.getElementById('show-btn');
var showText = document.getElementById('another-text');

function toggelText(){
  if(showText.style.display === 'none'){
    showText.style.display = 'block';
  }
  else{
    showText.style.display = 'none';
  }
}

/*==================== circle skill ====================*/


 const circle = document.querySelectorAll('.circle');
 circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

  for(let i = 0; i < dots ; i++){
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
     }
     elem.innerHTML = points;
     const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
    }
 })
