window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
  })
})
