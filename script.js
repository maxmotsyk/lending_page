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

// do class for sliders
// class Slider {
    
//     constructor (class_id_img){
//         this.class_id_img = class_id_img;
//         this.img_src_mass = [];
//     }

//     imgInMass(){
//         for(let i = 0; i < this.class_id_img.length; i++ ){
//             this.img_src_mass[i] = this.class_id_img[i].src;
//         }
//     }

//     left(){
//         let temp = this.img_src_mass[0];
//         this.img_src_mass.shift();
//         this.img_src_mass.push(temp);
          
//         refreshImgSrc();
//     }
    
//     right(){
//         let temp = this.img_src_mass[this.img_src_mass.length -1];
//         this.img_src_mass.pop();
//         this.img_src_mass.unshift(temp);
    
//         this.refreshImgSrc();
//     }

//     refreshImgSrc(){
//         for(let i = 0; i < this.img_src_mass.length; i++){
//             this.class_id_img[i].src = this.img_src_mass[i];
//         }
//     }
// }

// let img_humans = document.querySelectorAll('#humans');
// const slider2 = new Slider(img_humans);

// document.getElementById('row_left').addEventListener("click",function(e){
//     slider2.imgInMass();
//     slider2.left();
// });