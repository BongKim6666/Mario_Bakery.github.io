$(".concept").vegas({
  delay: 7000,
  timer: true,
  transition: "fade",
  transitionDuration: 2000,
  animation: "kenburns",
  slides: [
    { src: "Mario_Bakery/../img/concept/slide1.jpg" },
    { src: "Mario_Bakery/../img/concept/slide2.jpg" },
    { src: "Mario_Bakery/../img/concept/slide3.jpg" },
  ],
});

$(".sli").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 490,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
});

$(document).ready(function () {
  $(".back-Top").hide();
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 200) {
      $(".back-Top").show();
    } else {
      $(".back-Top").hide();
    }
  });

  $(".back-Top").click(function () {
    $(document).scrollTop(0);
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 2500,
  // reset: true,
});

sr.reveal(`.sp2 , .sp3`);

sr.reveal(`.sp1`, { origin: "right", delay: 1900 });
sr.reveal(`.sp4`, { origin: "left", delay: 3300 });
sr.reveal(`.sp5`, { origin: "left", delay: 3900 });
sr.reveal(`.sp6`, { origin: "left", delay: 4600 });
