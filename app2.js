
const container = document.querySelector('.container');
const card = document.querySelector('.card');


const discription = document.querySelector('.discription');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const sneaker2 = document.querySelector('.sneaker');
const circle = document.querySelector('.circle');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');




// Animate IN
container.addEventListener('mousemove', (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 7
    let yAxis = (window.innerHeight / 2 - e.pageY) / 7

    console.log(xAxis, yAxis)
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
 
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'

    // popout
    setTimeout(() => {
        circle.style.transform = "translateZ(100px) rotateZ(-25deg)";
    }, 1000)
    title.style.transform = `translatez(${100}px)`;
    sneaker.style.transform = `translatez(${100}%) rotatez(${-45}deg)`;
    sneaker2.style.transform = `translatez(${100}px)`;
    discription.style.transform = 'translateZ(325x)';
    purchase.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(75px)'
    // sneaker.style.transform = "translateZ(100px) rotateZ(-35deg)";
    

})

// Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.6s ease'
    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`
    discription.style.transform = 'translateZ(0)';
    discription.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)'
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    circle.style.transform = "translateZ(0px) rotateZ(0deg)";
})

