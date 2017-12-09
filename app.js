$(document).ready(function() {
    $(function() {
            $('.container').click(function() {
                $('.container').toggleClass('open');
            });
        })
    $("button").click(function(){
        var div = $("#clean");
       $("#clean").animate({left: '300px', opacity: '0.5'}, "slow");

    });
});