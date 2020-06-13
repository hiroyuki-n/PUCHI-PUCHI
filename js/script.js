const puchi_break = [
  'img01.svg',
  'img02.svg',
  'img03.svg'
];
const puchi_normal = [
  'img01.svg',
  'img02.svg',
  'img03.svg'
];
const $crash01 = $('.crash01').get(0);
const $audio1 = $('.audio1').get(0);
const $audio2 = $('.audio2').get(0);
const $audio3 = $('.audio3').get(0);



function audio_random() {
  const audio_random = Math.floor(Math.random() * 4);
  if (audio_random == 1) {
    $audio1.play();
  } else if (audio_random == 2) {
    $audio2.play();
  } else {
    $audio3.play();
  }
}

let score = 0;
function puchi_score() {
  score++;
  $('.puchi_score span').text(score);
}






$('.crash_btn').on('click', function () {
  $crash01.play();
  $('.puchi_puchi_list').addClass('action');
  $('.puchi_puchi_crash').addClass('action');
  $('.crash_btn').addClass('action');

  score += 25;
  $('.puchi_score span').text(score);
  setTimeout(function () {
    $('.puchi_puchi_list').removeClass('action');
    $('.puchi_puchi_crash').removeClass('action');
    $('.crash_btn').removeClass('action');
  }, 1500);

});

for (let i = -1; ++i < 25;) {
  const puchi_normal_path = puchi_normal[Math.floor(Math.random() * puchi_normal.length)];
  let $li = $('<li class=\'puchi_puchi puchi_puchi_' + i + '\'><span style="background-image:url(img/puchi_normal/' + puchi_normal_path + ' );"></span></li>');
  $('.puchi_puchi_list').append($li);
  $('.puchi_puchi_' + i).on('click', function () {
    const puchi_break_path = puchi_break[Math.floor(Math.random() * puchi_break.length)];
    $('.puchi_puchi_' + i).html('<span style="background-image:url(img/puchi_break/' + puchi_break_path + ' );"></span>');
    audio_random();
    puchi_score();
    $('.puchi_puchi_' + i).addClass('none');
    setTimeout(function () {
      const puchi_break_path = puchi_normal[Math.floor(Math.random() * puchi_normal.length)];
      $('.puchi_puchi_' + i).html('<span style="background-image:url(img/puchi_normal/' + puchi_break_path + ' );"></span>');
      $('.puchi_puchi_' + i).removeClass('none');
    }, 2000);
  });
}







//shop
$('.shop_btn').on('click', function () {
  $('.shop_content').addClass('open');
});
$('.shop_content .close').on('click', function () {
  $('.shop_content').removeClass('open');
  $('.buy_thanks').hide();
  $('.buy_not').hide();
  $('.buy_btn').show();


});
$('.crash_btn').hide();
$('.buy_thanks').hide();
$('.buy_not').hide();

$('.buy_btn').on('click', function () {


  if (score < 20) {

    $('.buy_not').show();
    $('.buy_btn').hide();


  } else {
    $('.buy_thanks').show();
    $('.buy_btn').hide();
    $('.shop_btn').hide();
    $('.crash_btn').show();
    score -= 20;
    $('.puchi_score span').text(score);



  }

});

//Twitter

$('.twitter_btn').click(function () {
  var tw_contents = ("合計" + score + "ぷちぷち");
  var url = "https://puchi.hryk-n.com";
  window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&hashtags=むげんぷちぷち&count=none&lang=ja");
});
