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
if (y > 800 && y < 1200) {
$('#vid2').fadeIn();
} else {
$('#vid2').fadeOut();
}
});


// video 3 fade in
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 1600 && y < 2000) {
$('#vid3').fadeIn();
} else {
$('#vid3').fadeOut();
}
});

// video 4 fade in
$(document).scroll(function() {
var y = $(this).scrollTop();
if (y > 2400 && y < 2700) {
$('#vid4').fadeIn();
} else {
$('#vid4').fadeOut();
}
});



});


