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

// do class for sliders

let img = document.querySelectorAll('.screenImg');
let img_src_mass = [];
let img_src_human = [];

function imgInMass(img,img_src_mass){
    for(let i = 0; i < img.length; i++ ){
        img_src_mass[i] = img[i].src;
    }
}

function refreshImgSrc(class_img){
    for(let i = 0; i < img_src_mass.length; i++){
        document.querySelectorAll(class_img)[i].src = img_src_mass[i];
    }
}

function left(class_img){
    let temp = img_src_mass[0];
    img_src_mass.shift();
    img_src_mass.push(temp);
      
    refreshImgSrc(class_img);
}

function right(class_img){
    let temp = img_src_mass[img_src_mass.length -1];
    img_src_mass.pop();
    img_src_mass.unshift(temp);

    refreshImgSrc(class_img);
}

document.getElementById("iphone_screens_row_2").onwheel = function(event){
    imgInMass(img,img_src_mass);
    if(event.deltaY > 0){
        left('.screenImg');
    }
    else{
        right('.screenImg')
    }
    return false;
}


// let img_humans = document.querySelectorAll('#humans');
// console.log(img_humans);

// document.getElementById('row_left').addEventListener("click",function(e){
//     imgInMass(img_humans,img_src_human);
//     left('#humans');
// });