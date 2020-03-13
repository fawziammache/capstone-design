console.log("Hello")

var table = ('#results-table');

(window).scroll(function(e){
    if(table.offset().top !== 0){
        if(!table.hasClass('shadow')){
            table.addClass('shadow');
        }
    }else{
        table.removeClass('shadow');
    }
});