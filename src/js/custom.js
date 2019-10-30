import '../sass/main.scss';
import '../sass/_vars.scss';



var themebool = false;
var count = 1;
document.getElementById('themebutton1').onclick = function(){
    alert("button was clicked " + (count++) + " times");
}