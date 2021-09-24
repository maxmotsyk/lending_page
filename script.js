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

let img = document.querySelectorAll('.screenImg');
let img_src_mass = [];
// let col_mass = [];

// function colInMass(col_mass){
//     let col = document.querySelectorAll('.col-md-2.screen');

//     for(let i = 0; i < col.length;i++){
//         col_mass[i] = col;
//     }
// }

function imgInMass(img,img_src_mass){

    for(let i = 0; i < img.length; i++ ){
        img_src_mass[i] = img[i].src;
        img[i].remove();
    }
}

function fillingCol(img_src_mass){
    for(let i = 0; i < 5 ;i++){
        let img = document.createElement('img');
        img.classList.add('screenImg');
        img.src = img_src_mass[i];
        document.querySelectorAll('.col-md-2.screen')[i].appendChild(img);
    }
}

function left(){
    let temp;
}

imgInMass(img,img_src_mass);
// colInMass(col_mass);
fillingCol(img_src_mass);



