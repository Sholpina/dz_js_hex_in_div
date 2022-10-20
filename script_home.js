// if (typeof (jQuery == undefined)) {
//     alert ("Jquery installed");
// }else {
//     alert ("Jquery not installed")
// }

$('.pickedColor').keyup(function() {
    $('.elementToChange').css('background-color', $(this).val());
})