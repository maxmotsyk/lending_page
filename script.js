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
    }
}

function refreshImgSrc(){
    for(let i = 0; i < img_src_mass.length; i++){
       
        document.querySelectorAll('.screenImg')[i].src = img_src_mass[i];
    }
}

function left(){
    let temp = img_src_mass[0];
    img_src_mass.shift();
    img_src_mass.push(temp);
      
    refreshImgSrc();
}

function right(){
    let temp = img_src_mass[4];
    img_src_mass.pop();
    img_src_mass.unshift(temp);

    refreshImgSrc();
}
imgInMass(img,img_src_mass);
// colInMass(col_mass);

document.getElementById("iphone_screens_row_2").onwheel = function(event){
    if(event.deltaY > 0){
        left();
    }
    else{
        right()
    }
    return false;
}



