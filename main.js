// menu burger

function showResponsiveMenu() {
    var menu = document.getElementById("navburger");
    var icon = document.getElementById("burger");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

// darkmode

const Switchmode = document.querySelector('.SM')

Switchmode.addEventListener('click', () =>{

    const body = document.body
  if (body.classList.contains('dark')) {
      body.classList.add('light')
      body.classList.remove('dark')
} else if (body.classList.contains('light')) {
    body.classList.add('dark')
    body.classList.remove('light')}

})

// sliders livres

const items = document.querySelectorAll('.slider img')
const nbSlide = items.length;
let count = 1

function slideSuivante(){
   
    items[count].classList.remove('active')    

    if(count > 0){
        count--
    }else {
        count = nbSlide - 1
    }
    items[count].classList.add('active')
    console.log(count);

    setTimeout ("slideSuivante()", 2000)
}

window.onload = function() {slideSuivante(); textanim()} 