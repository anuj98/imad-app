console.log('Loaded!');

//image cicking functions
var image = document.getElementById("img");
image.onClick = function(){
    
    var interval = setInterval(moveLeft, 100);
    image.style.marginLeft = '200px';  
};