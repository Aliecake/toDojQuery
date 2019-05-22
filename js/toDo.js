//input to add new li

//cross off items
$('li').on('click', function() {
    $(this).toggleClass('done');
})

//delete items
$('span').on('click', function(e) {
    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    })
    e.stopPropagation();
})