// burger menu
const byrgerDoActive = function (iconBurger){
    if(iconBurger){
        const menu_left  =  document.querySelector('.menu_left');
        iconBurger.addEventListener("click",function(e){
            if(window.innerWidth > 991){
                iconBurger.classList.toggle('active');
                menu_left.classList.toggle('active');
            }
            else{
                const menu2 =  document.querySelector('.menu2');
                iconBurger.classList.toggle('active');
                menu2.classList.toggle('active');
                menu2.parentNode.classList.toggle('active');
                if(window.innerWidth <= 767){
                    document.querySelector("body").classList.toggle('lock');
                }
            }
        });
    }
    else{
        console.log ('Not found');
    }
}

const iconMenu = document.querySelector('.burger_menu');
byrgerDoActive(iconMenu);



// do class for sliders
class Slider {
    
    constructor (class_id_img){
        this.class_id_img = class_id_img;
        this.img_src_mass = [];
    }

    imgInMass(){
        for(let i = 0; i < this.class_id_img.length; i++ ){
            this.img_src_mass[i] = this.class_id_img[i].src;
        }
    }

    left(){
        let temp = this.img_src_mass[0];
        this.img_src_mass.shift();
        this.img_src_mass.push(temp);
          
        this.refreshImgSrc();
    }
    
    right(){
        let temp = this.img_src_mass[this.img_src_mass.length -1];
        this.img_src_mass.pop();
        this.img_src_mass.unshift(temp);
    
        this.refreshImgSrc();
    }

    refreshImgSrc(){
        for(let i = 0; i < this.img_src_mass.length; i++){
            this.class_id_img[i].src = this.img_src_mass[i];
        }
    }
}
// classEnd


// sliderONE
let img_screen = document.querySelectorAll('.screenImg');
const slider1 = new Slider(img_screen);


document.getElementById("iphone_screens_row_2").onwheel = function(event){
    slider1.imgInMass();
    if(event.deltaY > 0){
        slider1.left()
    }
    else{
        slider1.right();
    }
    return false;
}
// sliderONEend


// sliderONEMobileVersion
document.getElementById("iphone_screens_row_2").addEventListener("touchend",endTouch);
document.getElementById("iphone_screens_row_2").addEventListener("touchstart",function(e){
    startTochx = e.changedTouches[0].pageX;
});

let startTochx = 0;
function endTouch (event){
    slider1.imgInMass();
    if(event.changedTouches[0].pageX > startTochx){
        slider1.right();
    }
    else{
        slider1.left()
    }
}
// sliderONEMobileVersionEnd

// sliderTWO
let img_humans = document.querySelectorAll('#humans');
const slider2 = new Slider(img_humans);


document.getElementById('row_left').addEventListener("click",function(e){
    slider2.imgInMass();
    slider2.left();
});

document.getElementById('row_right').addEventListener("click",function(e){
    slider2.imgInMass();
    slider2.right();
});
// sliderTWOoend


// sliderTWOMobileVersion
document.getElementById("custumers_row").addEventListener("touchstart",function(e){
    startTochx2 = e.changedTouches[0].pageX;
});
document.getElementById("custumers_row").addEventListener("touchend",endTouch2);

let startTochx2 = 0;
function endTouch2 (event){

    if(event.changedTouches[0].pageX > startTochx2){
        slider2.imgInMass();
        slider2.right();
    }
    else{
        slider2.imgInMass();
        slider2.left();
    }
}
// sliderTWOMobileVersionEnd


// movement of cards
let card2 = document.querySelector('.card2');

card2.addEventListener("mouseover",function(e){
    let card1 = document.querySelector('.card1');
    card2.classList = ('card2 active');
    card1.classList = ('card1 unactive');
});

card2.addEventListener("click",function(e){
    let card1 = document.querySelector('.card1');
    card2.classList = ('card2 active');
    card1.classList = ('card1 unactive');
});

card2.addEventListener("mouseout",function(e){
    let card1 = document.querySelector('.card1');
    card2.classList = ('card2');
    card1.classList = ('card1');
});
// movement of cards end

// under_menu
function under_menu_open(child){
    
    let parent = child.parentNode;
    let neighboring = parent.nextElementSibling;
    parent.classList.toggle('active');
    neighboring.classList.toggle('active');
}

let pluss_mass = document.querySelectorAll('#plus_menu');

log(pluss_mass);
for(let i = 0; i < pluss_mass.length;i++){
    pluss_mass[i].addEventListener("click",function(e){
        under_menu_open(this);
    });
}
// under_menu end