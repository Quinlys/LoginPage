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


function getName(str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }                       
    var filename = str.slice(i);            
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

$('.click').on('click', function(e){
 e.preventDefault();
  $('#photo').animate({
     width : 300,
     height : 250
  });
});



