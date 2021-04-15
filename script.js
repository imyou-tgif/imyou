$(function(){
  ScrollReveal().reveal('.about-contents-left,.b', { 
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    origin: "top" ,
    distance: "100px",
  });  
  ScrollReveal().reveal('.about-contents-right', { 
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    delay: 300,
    origin: "right" ,
    distance: "100px",
  });  
  ScrollReveal().reveal('.c', { 
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    origin: "right" ,
    distance: "100px",
  });  
  ScrollReveal().reveal('.a', { 
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    origin: "left" ,
    distance: "100px",
  });  
  ScrollReveal().reveal('.works-content', { 
    duration: 2000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
    origin: "bottom" ,
    distance: "100px",
  });  
  ScrollReveal().reveal('.main-img', { 
    duration: 4000, // アニメーションの完了にかかる時間
    viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  });

  $('.menu-btn').on('click',function(){
    $('.menu').toggleClass('is-active');
  });
  $('.menu__item').click(function(){
    $('.menu').removeClass('is-active');
  });
});
