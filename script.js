document.getElementsByClassName('single__slide').slick({
    dots: true,
    arrows : false,
});
document.getElementsByClassName('double__slide').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows : true,
      dots:false,
      prevArrow: "<img src='img/arrows-rith.png' class='next' alt='1'>",
      nextArrow: "<img src='img/arrows-left.png' class='last' alt='2'>",
});
    
var burgermenu = false;
function burgerMenu(x) {
    if (burgermenu == false) {
        x.classList.toggle("change");
        $(" .menu").addClass("on");
        $(" header").addClass("on");
        burgermenu = true;
    }
    else {
        x.classList.toggle("change");
        $(" .menu").removeClass("on");
        $(" header").removeClass("on");
        burgermenu = false;
    }
}
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
  }, 500);
}
