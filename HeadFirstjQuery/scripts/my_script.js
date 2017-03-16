$(document).ready(function(){
    $(".guessBox").click(checkForCode);
    function getRandom (num) {
        var discount = Math.floor(Math.random()*num);
        return discount;
    };

    var hideCode = function(){
        var numRand = getRandom(4);
        $(".guessBox").each(function(index, value){
            if(numRand == index){
                $(this).append("<span id='has_discount'></span>")
                return false;
            }
        });
    };

    hideCode();

    function checkForCode(){
        var discount_msg;

        if($.contains(this, document.getElementById("has_discount"))){
            var discount = getRandom(5);
            var discount_msg = "<p>Twój rabat to " + discount + "%</p>";
        } else {
            discount_msg = "<p>Niestety tutaj rabatu nie ma</p>";
        };

        // take clicked .guessBox and append html text
        $(this).append(discount_msg);


        // this will allow to click on images only once
        // unbinding event listeners from them after first click
        $(".guessBox").each(function(){
            $(this).unbind("click");
        })
    };


});
