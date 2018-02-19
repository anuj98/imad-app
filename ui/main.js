console.log('Loaded!');

//image cicking functions
var image = document.getElementById("img");

var marginLeft = 0;
function moveRight(){
    marginRight  = marginRight+10;
    image.style.marginRight = marginRight + "px";
}
image.onClick = function(){
    
    var interval = setInterval(moveRight, 100);
    //image.style.marginLeft = '200px';  
};