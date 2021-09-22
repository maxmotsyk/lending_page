// burger menu
const byrgerDoActive = function (iconBurger){
    if(iconBurger){
        const menu_left  =  document.querySelector('.menu_left');
        iconBurger.addEventListener("click",function(e){
        iconBurger.classList.toggle('active');
        menu_left.classList.toggle('active');
        });
    }
    else{
        console.log ('Not found');
    }
}

const iconMenu = document.querySelector('.burger_menu');
byrgerDoActive(iconMenu);

// slider

let sliders = document.querySelectorAll('.screen');
let slider_mass = [];
console.log(sliders);
for(let i = 0; i < sliders.length; i++ ){
    slider_mass[i] = sliders[i].src;
    sliders[i].remove();
}

console.log(slider_mass);

let step = 0;
let offset = 0;

function drow(){
   let img =  document.createElement('img');
   img.src = slider_mass[step];
   img.classList.add('screen');
   img.style
}