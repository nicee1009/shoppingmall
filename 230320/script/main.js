$(function(){


  //1.토글버튼 변수
  let t_btn = $('#toggle');
  let t_n = 1;
  let c_btn = $('#c_btn');
  let m_btn = $('.gnb > li');

  t_btn.click(function(){
    // 토글버튼 클릭시 side_menu의 위치가 왼쪽으로부터 0px위치에 배치
    $('.side_menu').toggleClass('wrap_pos');

    if(t_n==1){
      $('body').css('overflow','hidden');
      t_n=0;
    }else{
      $('body').css('overflow','scroll');
      t_n=1;
    }
  });

  //닫기버튼 클릭시 side_menu의 위치가 왼쪽으로 -300px위치에 배치
  c_btn.click(function(){
    $('.side_menu').removeClass('wrap_pos');

    if(t_n==1){
      $('body').css('overflow','hidden');
      t_n=0;
    }else{
      $('body').css('overflow','scroll');
      t_n=1;
    }
  });

  //lnb메뉴 나타나게 하기
  m_btn.click(function(){
    $(this).find('.lnb').css('display','block');
    $(this).siblings().find('.lnb').css('display','none');
  });

});