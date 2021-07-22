//bookmark toggle switch
var toggle = false;
function bookmarkColor() {
    if (toggle==false) {
        var svg = document.getElementById('bookmark-svg');
        var svgInner = document.getElementById('bookmark-svg-inner');
        var text = document.getElementById('bookmark-text');
        text.innerHTML = "Bookmarked";
        text.style.color = "hsl(176, 72%, 28%)";
        svg.style.fill = "hsl(176, 72%, 28%)";
        svgInner.style.fill = "white";
        toggle=true;
    }
    else {
        var svg = document.getElementById('bookmark-svg');
        var svgInner = document.getElementById('bookmark-svg-inner');
        var text = document.getElementById('bookmark-text');
        text.innerHTML = "Bookmark";
        text.style.color = "hsl(0, 0%, 48%)";
        svg.style.fill = "#2F2F2F";
        svgInner.style.fill = "#B1B1B1";
        toggle=false;
        
    } 
}

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
