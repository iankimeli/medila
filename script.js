// $(document).ready(()=>{
   // let myForm = $("#myForm")
//function validate(){
   // let name = $('#name').val();
    //let email = $('#email').val();
  //  let message= $('#message').val();

    //if {name =="" || email =='' || message ==''}
      //  alert{'Error! All fields must be filled'}
       // return false
}
})
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
    });
})