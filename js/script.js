$(document).ready(function(){
    $('.reviews_slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $(window).scroll(function(){
     if($(this).scrollTop()>50){
       $('.wrapper').css('background-color','rgba(123,123,123,0.4)');
    } else{
      $('.wrapper').css('background-color','rgba(123,123,123,0.2)');
    }
    /* if($(this).scrollTop() > 600){
      $('.delivery').fadeIn();
      
    }
    if($(this).scrollTop() > 1200){
      $('.agent').fadeIn();
    }
    if($(this).scrollTop() > 1560){
      $('.cost').fadeIn();
      
    }
    if($(this).scrollTop() > 2000){
      $('.manager').fadeIn();
    }
    if($(this).scrollTop() > 2400){
      $('.with').fadeIn();
    }
    if($(this).scrollTop() > 2900){
      $('.reviews').fadeIn();
    }
    if($(this).scrollTop() > 3200){
      $('.map').fadeIn();
    }
    if($(this).scrollTop() > 3500){
      $('.footer').fadeIn(); */
    
    if($(this).scrollTop() > 2600 && $(this).scrollTop()<3900){
      $('.window').fadeIn();
    }else{
      $('.window').fadeOut();
    }
  });  
});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});



  let btn1 =document.getElementById('sign1');
btn1.addEventListener('click',function(){
 document.getElementById('content1').style.display = 'none';
 document.getElementById('content1.1').style.display = 'block';
 btn1.style.display= 'none';
 let btn2=document.getElementById('out1');
 btn2.addEventListener('click',function(){
  document.getElementById('content1').style.display = 'block';
  document.getElementById('content1.1').style.display = 'none';
  btn1.style.display= 'block';
 });
  });  
  

let btn2 =document.getElementById('sign2');
btn2.addEventListener('click',function(){
 document.getElementById('content2').style.display = 'none';
 document.getElementById('content2.1').style.display = 'block';
 btn2.style.display= 'none';
 let btnO=document.getElementById('out2');
 btnO.addEventListener('click',function(){
   console.log("asd");
  document.getElementById('content2').style.display = 'block';
  document.getElementById('content2.1').style.display = 'none';
  btn2.style.display= 'block';
 });
});
let btn3 =document.getElementById('sign3');
btn3.addEventListener('click',function(){
 document.getElementById('content3').style.display = 'none';
 document.getElementById('content3.1').style.display = 'block';
 btn3.style.display= 'none';
 let btn=document.getElementById('out3');
 btn.addEventListener('click',function(){
  document.getElementById('content3').style.display = 'block';
  document.getElementById('content3.1').style.display = 'none';
  btn3.style.display= 'block';
 });
});
 let btn4 =document.getElementById('sign4');
  btn4.addEventListener('click',function(){
  document.getElementById('content4').style.display = 'none';
  document.getElementById('content4.1').style.display = 'block';
  btn4.style.display= 'none';
 let btn=document.getElementById('out4');
 btn.addEventListener('click',function(){
  document.getElementById('content4').style.display = 'block';
  document.getElementById('content4.1').style.display = 'none';
  btn4.style.display= 'block';
 });
}); 
 













 