/*====================================== toggle icon navbar ======================================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');      
    navbar.classList.toggle('activeNavbar');  

}




/*====================================== scroll  sections active link ======================================*/

let sections =  document.querySelectorAll('section');
let navLinks =  document.querySelectorAll('header nav a')

/* 
there are three ways to  set event 

you can write any event , i am just taking an example as click event

in HTML :-  <tagName  onclick = 'functionName()'> </tagName>
            <tagName  onclick = '{....function script....}'> </tagName>

in JS :-    object.onclick = function(){....function script....}
            object.onclick = () => {....function script....}
            object.onclick = functionName();

in JS with addEventListener :-  object.addEventListener('click' , {....function script....})
                                object.addEventListener('click' , functionName())

object can be :- element , windows , screen , anything


there are one ways to  remove event
in JS with addEventListener :-  object.removeEventListener('click' , {....function script....})
                                object.removeEventListener('click' , functionName())
*/

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<(offset+height )){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })



    /*====================================== sticky navbar ======================================*/
    let header = document.querySelector('header')
    header.classList.toggle('sticky' , window.scrollY>100);


    /*====================================== remove toggle icon and navbar when click navbar link (scroll)======================================*/
    menuIcon.classList.remove('bx-x');      
    navbar.classList.remove('activeNavbar');  
}




/*====================================== scroll reveal   :- external javascript library for animation when content comes in view part ======================================*/

ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading' , {origin : 'top'});
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form' , {origin : 'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img' , {origin : 'left'});
ScrollReveal().reveal('.home-content p , .about-content' , {origin : 'right'});


/*====================================== typed JS   :- external javascript library ======================================*/
const typed = new Typed('.multiple-text' , {
    strings:['Frontend Developer' , 'Digital Marketing' , 'Web Designer' , 'Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})