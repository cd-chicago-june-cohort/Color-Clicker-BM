function random_color() {
    var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    color = '#';
    
    for(var i = 0; i < 6; i++) {
        x = Math.floor((Math.random()*16))
        color += rgb[x];
        console.log(color); 
    }
        return color;
    }

$(document).ready(function(){

$('#large_box').click(function(){
    $(this).children().css('background-color', random_color());
    $(this).css('background-color', random_color());
    console.log(random_color);
    console.log(this);
})
    $('.side_box').click(function(event){
    $(this).siblings().css('background-color', random_color());
    event.stopPropagation();
    console.log(random_color);
    console.log(this);
})

    $('.middle_box').click(function(event){
    $(this).parent().css('background-color', random_color());
    event.stopPropagation();
    console.log(random_color);
    console.log(this);
})

});



