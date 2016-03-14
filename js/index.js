$('#stickyheader').hide();
$('#vid1').hide();


$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 4000);


    $(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 700) {
$('#stickyheader').fadeIn();
} else {
$('#stickyheader').fadeOut();
}
});


// video 1 fade in 
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 100 && y < 400) {
$('#vid1').fadeIn();
} else {
$('#vid1').fadeOut();
}
});


// video 2 fade in
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 1000 && y < 1900) {
$('#vid2').fadeIn();
} else {
$('#vid2').fadeOut();
}
});


// video 3 fade in
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 2000 && y < 2500) {
$('#vid3').fadeIn();
} else {
$('#vid3').fadeOut();
}
});

// video 4 fade in
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 3500 && y < 5000) {
$('#vid4').fadeIn();
} else {
$('#vid4').fadeOut();
}
});



});


