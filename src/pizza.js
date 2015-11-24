// Write your Pizza Builder JavaScript in this file.

$(document).on('ready',function(){
  $('.crust').removeClass('crust-gluten-free');
  $('.btn').toggleClass('active');
  $('section.green-pepper').toggle();
  $('section.mushroom').toggle();
  $('section.pep').toggle();
  
  
  $('.sauce').removeClass('sauce-white');
  $('.sauce').addClass('sauce-regular');

  $('.btn-green-peppers').on('click',function(){
    $('.green-pepper').toggle();
    $(event.currentTarget).toggleClass('active');
    var price = parseInt($('strong').text());
    console.log(price);
    var num_pepper = $('.green-pepper').length;
    if($('.btn-green-peppers').hasClass('active')){
      price = price + 1*num_pepper;
    }else{
      price = price - 1*num_pepper;
    }
    $('strong').text(price);
  });

  $('.btn-mushrooms').on('click',function(){
    $('.mushroom').toggle();
    $(event.currentTarget).toggleClass('active');
  });

  $('.btn-pepperonni').on('click',function(){
    $('.pep').toggle();
    $(event.currentTarget).toggleClass('active');
  });
  
  $('.btn-sauce').on('click',function(){
    $('.crust').toggleClass('crust-gluten-free');
    $(event.currentTarget).toggleClass('active');
  });

  $('.btn-crust').on('click',function(){
    $('.sauce').toggleClass('sauce-white');
    $(event.currentTarget).toggleClass('active');
  });



});





// crust-gluten-free
// sauce-white

// btn-sauce
// btn-crust