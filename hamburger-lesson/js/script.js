/*global $*/
$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// .toggleClass()でclass属性を切り替える

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。