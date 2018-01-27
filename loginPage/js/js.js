$(document).ready(function(){
    var primaryBtn = $('#click1');
    var secondaryBtns = $('.secondary');
    primaryBtn.click(function () {
        //primaryBtn.classList.add('hide');
        deleteItem(primaryBtn, 600, showSecondaryBtns);
    });

    function deleteItem(item, delay, callback) {
        item.animate({opacity:0},{duration: 500, queue: false
        }).promise().done(
            function(){
                item.remove();
                callback(delay);}
        );


    }

    function showSecondaryBtns(delay) {
        secondaryBtns.animate({opacity:1});
    }



});




