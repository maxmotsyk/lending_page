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


// movement of cards
let card2 = document.querySelector('.card2');

card2.addEventListener("mouseover",function(e){
    let card1 = document.querySelector('.card1');
    card2.classList = ('card2 active');
    card1.classList = ('card1 unactive');
});

card2.addEventListener("mouseout",function(e){
    let card1 = document.querySelector('.card1');
    card2.classList = ('card2');
    card1.classList = ('card1');
});
