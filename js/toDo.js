
//cross off items
$('ol').on('click', 'li', function() {
    $(this).toggleClass('done');
})

//delete items
$('ol').on('click', 'span', function(e) {
    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    })
    e.stopPropagation();
})
//input to add new li
$('input[type="text"]').on('keypress', function(e){
    if(e.which === 13) {
        $(this).attr('disabled', 'disabled')
        let text = $.parseHTML($(this).val())
        $('ol').append('<li><span>X</span> ' + text[0].textContent + '</li>');
        $(this).removeAttr('disabled')
        $(this).val('')
    }
})