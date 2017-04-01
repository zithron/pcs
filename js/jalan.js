var count = 0,
    $svg = $('svg').drawsvg({
      callback: function() {
        $('#log').html('<p>Animation complete! <strong>' + (count++) + '</strong></p>');
        animate();
      }
    });

function animate() {
  $svg.drawsvg('animate');  
}

animate();