$(document).ready(function() {
    $(function() {
            $('.container').click(function() {
                $('.container').toggleClass('open');
            });
        })

                
    $('.hidden-navbar').hide();

     var menuState = false; 
     $(function() {
        $('.hamburger').click(function() {
            if (menuState) {
                $('.hidden-navbar').fadeOut(300);
                menuState = false;
            } else {
                $('.hidden-navbar').fadeIn(300);
                menuState = true;     
            }
        });
    });
    // $("button").click(function(){
    //     var div = $("#clean");
    //    $("#clean").animate({left: '300px', opacity: '0.5'}, "slow");

    //    }

    	// var first = document.querySelector("#aiJGpFF8V");
		// var firstLengtha = first.getTotalLength();
        // console.log(firstLengtha);

        // var second = document.querySelector("#f1G9tOoBLK");
		// var secondLength = second.getTotalLength();
        // console.log(secondLength);

        // var third = document.querySelector("#b5gWfnHBtj");
		// var thirdLength = third.getTotalLength();
        // console.log(thirdLength);
        
        // var fourth = document.querySelector("#b2afMgsppt");
		// var fourthLength = fourth.getTotalLength();
        // console.log(fourthLength);
        
        // var fifth = document.querySelector("#eInj2OfBP");
		// var fifthLength = fifth.getTotalLength();
        // console.log(fifthLength);

        // var six = document.querySelector("#ayFOvH8P4");
		// var sixLength = six.getTotalLength();
        // console.log(sixLength);
        
        // var seven = document.querySelector("#brmiKq7zu");
		// var sevenLength = seven.getTotalLength();
		// console.log(sevenLength);
});