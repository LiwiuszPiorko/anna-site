$('.wrapper .first, .modal1 span.hide').on('click', function () {
    $('.biogram .modal1').toggleClass('active');
  })
$('.wrapper .second, .modal2 span.hide').on('click', function () {
    $('.biogram .modal2').toggleClass('active');
  })
$('.wrapper .third, .modal3 span.hide').on('click', function () {
    $('.biogram .modal3').toggleClass('active');
  })
  $('.wrapper .fourth, .modal4 span.hide').on('click', function () {
    $('.biogram .modal4').toggleClass('active');
  })
  $('.items .item1, .polish span.hide').on('click', function(){
    $('.publications .polish').toggleClass('active') 
  })
  $('.items .item2, .foreign span.hide').on('click', function(){
    $('.publications .foreign').toggleClass('active') 
  })
  $('.about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.header').offset().top
    }, 500)
})
$('.biogramBtn').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.biogram').offset().top
  }, 500)
})
$('.publicationsBtn').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.publications').offset().top
  }, 500)
})
$('.projectsBtn').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.projects').offset().top
  }, 500)
})
$('.contactBtn').on('click', function () {
  $('body, html').animate({
      scrollTop: $('.footer').offset().top
  }, 500)
})
