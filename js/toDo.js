//input to add new li

//delete items
$('li').on('click', function() {
    //if li is gray turn black
    if($(this).css('color') === 'rgb(39, 39, 39)') {
        $(this).css({
            color: 'rgb(100, 100, 100)',
            textDecoration: 'line-through'
        })
    } else {
        $(this).css({
            color: 'rgb(39, 39, 39)',
            textDecoration: 'none'
        })
    }
})