$(documnent).ready(function() {
    var speed = prompt("Fast or slow?");
    // var romance = prompt("Lonely beach or loud resort?");
    // var eyes = prompt ("Blue eyes or brown eyes?");

    if (speed === 'slow') {
        $('c-murphy').show();
     } else {
        $('j-statham').show();
    }
    });

    // if (speed === 'slow' && eyes === blue) {
    //     $('c-murphy').show();
    // }
    // else if (speed === 'fast' && eyes === blue) {
    //     $('c-bale').show();
    // }
    // else {
    //     $('j-statham').show();
    // }
// });