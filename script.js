$(function () {
    let desp = $("#desp");
    let devp = $("#devp");
    let prop = $("#prop");
    let destext = $("#destext");
    let devtext = $("devtext");
    let protext = $("protext");

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    $(".des").on("click", function (){
        $(".des").slideUp("slow");
        $(des).show(500);
        $(destext).animate({
            fontweight:"bolder", fontsize:"30px"
        })
    });
    $(".dev").on("click", function (){
        $(".dev").slideUp("slow");
        $(devp).show(500);
        $(devtext).animate({
            fontweight:"bolder", fontsize:"30px"
        })
    });
    $(".pro").on("click", function (){
        $(".pro").slideUp("slow");
        $(prop).show(500);
        $(protext).animate({
            fontweight:"bolder", fontsize:"30px"
        })
    });
    $(desp, desptext).on("click", function () {
        $(".des").slideDown("slow");
        $(desp).hide(500);
        $(destext).animate({
            fontweight: "normal", fontsize: "16px"
        })
    });
    $(devp, devtext).on("click", function () {
        $(".dev").slideDown("slow");
        $(devp).hide(500);
        $(devtext).animate({
            fontweight: "normal", fontsize: "16px"
        })
    });
    $(prop, protext).on("click", function () {
        $(".pro").slideDown("slow");
        $(prop).hide(500);
        $(protext).animate({
            fontweight: "normal", fontsize: "16px"
        })
        $(".port").hover(function() {
            $(".porttext", this).slideToggle("slow");
        }),  function(){
            $(".porttext", this).slideToggle("slow");
        });
    });
    $("form#form").on("cubmit", function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()){
            alert ("Hey " + name + ", Thank you for filling in your details, we will reach out to you");
        }
        else {
            alert("Please enter your correct details");
        }
    })
})