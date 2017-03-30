$('#fittext1').fitText(1.1, { minFontSize: '50px'});
$('#fittext2').fitText(1.1, { minFontSize: '50px'});
$('.hey-look-an-easter-egg').hover(
  function() {
    $(this).children('.fa').removeClass('fa-exchange');
    $(this).children('.fa').addClass('fa-bed');
  }, function() {
    $(this).children('.fa').removeClass('fa-bed');
    $(this).children('.fa').addClass('fa-exchange');
  }
);