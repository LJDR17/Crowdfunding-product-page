//bookmark toggle switch
var toggle = false;
function bookmarkColor() {
    if (toggle==false) {
        var svg = document.getElementById('bookmark-svg');
        var svgInner = document.getElementById('bookmark-svg-inner');
        var text = document.getElementById('bookmark-text');
        if (window.matchMedia("(min-width: 860px)").matches) {
          text.innerHTML = "Bookmarked";
        }
        text.style.color = "hsl(176, 72%, 28%)";
        svg.style.fill = "hsl(176, 72%, 28%)";
        svgInner.style.fill = "white";
        toggle=true;
    }
    else {
        var svg = document.getElementById('bookmark-svg');
        var svgInner = document.getElementById('bookmark-svg-inner');
        var text = document.getElementById('bookmark-text');
        if (window.matchMedia("(min-width: 860px)").matches) {
          text.innerHTML = "Bookmark";
        }
        text.style.color = "hsl(0, 0%, 48%)";
        svg.style.fill = "#2F2F2F";
        svgInner.style.fill = "#B1B1B1";
        toggle=false;
        
    } 
}

//money + backer incrementing
var numberElement = document.getElementById('number-backed');
var moneyElement = document.getElementById('money-backed');

function increment1() {
    numberElement.innerHTML = Number(numberElement.innerHTML) + 1;
    moneyElement.innerHTML = Number(moneyElement.innerHTML) + 25;
}

function increment2() {
  numberElement.innerHTML = Number(numberElement.innerHTML) + 1;
  moneyElement.innerHTML = Number(moneyElement.innerHTML) + 75;
}

document.getElementById("25").addEventListener("click", increment1);
document.getElementById("75").addEventListener("click", increment2);


//modal popup box
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}
 
//progress bar
var width = 1;
function move() {
  var progress = document.getElementById("progress");
    if (width < 100) {
      width+=1;
      progress.style.width = width + '%';
    }
}

//bookmark button responsive design
var x = window.matchMedia("(max-width: 860px)")
function bookmark(x) {
  if (x.matches) {
    document.getElementById("bookmark-text").innerHTML = "";

  } else if (toggle==false) {
    document.getElementById("bookmark-text").innerHTML = "Bookmark";
  }
  else {
    document.getElementById("bookmark-text").innerHTML = "Bookmarked";
    
  }
}
bookmark(x) 
x.addEventListener("change", bookmark) 


//header image responsive design
var y = window.matchMedia("(max-width: 768px)")
function header(y) {
  if (y.matches) {
    document.getElementById("header-image").src = "images/image-hero-mobile.jpg";
  }
  else {
    document.getElementById("header-image").src = "images/image-hero-desktop.jpg";
  }
}
header(y) 
y.addEventListener("change", header) 
