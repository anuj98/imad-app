console.log('Loaded!');

//image cicking functions
var image = document.getElementById("img");

var marginLeft = 0;
function moveRight(){
    marginLeft  = marginLeft + 10;
    image.style.marginRight = marginLeft + 'px';
}
image.onClick = function(){
    var interval = setInterval(moveRight, 100);  
};