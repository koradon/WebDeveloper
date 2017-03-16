$(document).ready(function(){
    $(".guessBox").click(function(){
        var discount = Math.floor((Math.random()*5)+5);
        var discount_msg = "<p>Twój rabat to " + discount + "%</p>";
        // take clicked .guessBox and append html text
        $(this).append(discount_msg);

        // this will allow to click on images only once
        // unbinding event listeners from them after first click
        $(".guessBox").each(function(){
            $(this).unbind("click");
        })

    });
});
