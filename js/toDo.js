//input to add new li
$('input').on('keypress', function(e){
    if(e.which === 13) {
        $(this).attr('disabled', 'disabled')
        let text = $.parseHTML($(this).val())
        $('ol').append('<li><span>X</span> ' + text[0].textContent + '</li>');
        $(this).removeAttr('disabled')
    }
})
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