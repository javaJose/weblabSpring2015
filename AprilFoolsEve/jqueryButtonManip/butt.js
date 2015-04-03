$(function(){

    var el= $('#wrapper');
    var btn = el.find('button');
console.log(btn);
    btn.on('click', function(){
        console.log('click')
        if(el.hasClass('active')){
            el.removeClass('active');
        }
        else{
            el.addClass('active');
        }
    });

});

