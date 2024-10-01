var vid = document.querySelectorAll(".reel");
for(let i=0;i<vid.length;i++){
    vid[i].addEventListener('mouseenter',function(e){
        vid[i].play()
    })
    vid[i].addEventListener('mouseout',function(e){
        vid[i].pause()
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

