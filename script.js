/* NAV BAR CLICK */
$("#menu-bar").click(function(){
    $("#menu-bar").toggleClass("fa-times");
    $(".navbar").toggleClass("active");
})

/* SEARCH ICON */
$("#search-icon").click(function(){
    $("#search-form").removeAttr("style");
    $("#search-form").addClass("active");

})

$("#close").click(function(){
    $("#search-form").removeClass("active");
    $("#search-form").css("top", "-110%");
})

/* SWIPER JS */
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/* LOAD MORE FOR MENU*/
$(".menu-card").slice(0, 12).fadeIn();
$("#load-more").click(function(){
  $(".menu-card").slice(0, 33).fadeIn();
  $(this).fadeOut();
});