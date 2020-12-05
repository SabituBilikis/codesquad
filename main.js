



(function($) {
   
    $('.first.circle').circleProgress({
      value: 1.0,
      animation: false,
      fill: {gradient: ['blue', 'blue']}
    });
  
    
    $('.second.circle').circleProgress({
      value: 1.0
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });
  
    
    $('.third.circle').circleProgress({
      value: 1.0,
      fill: {gradient: [['blue', .5], ['blue', .5]], gradientAngle: Math.PI / 4}
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').text(stepValue.toFixed(2).substr(1));
    });
  })(jQuery);
  
