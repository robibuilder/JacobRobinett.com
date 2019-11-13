function myFunction() {
    var jumbotron = document.getElementByTagName("DIV")[0].className;
    alert(jumbotron);
}

$(window).on('resize', function() {
    if($(window).height() < 575) {
        $('jumbotron').addClass('small_window');
        $('jumbotron').removeClass('medium_window');
        $('jumbotron').removeClass('large_window');
    }
    if($(window).height() < 768) {
        $('jumbotron').addClass('medium_window');
        $('jumbotron').removeClass('small_window');
        $('jumbotron').removeClass('large_window');
    }else{
    	$('jumbotron').addClass('large_window');
        $('jumbotron').removeClass('medium_window');
        $('jumbotron').removeClass('small_window');
    }
})