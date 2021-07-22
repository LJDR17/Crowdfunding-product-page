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

