$(document).ready(function () {
    var $svg = $('svg').drawsvg();

    $svg.drawsvg('animate');

    var $svg = $('.svg').drawsvg({
        easing: 'easeInOutQuart',
        callback: function () {
            animate();
        }
    });
    
    var $form = $('.form svg').drawsvg({
        easing: "easeInOutQuart",
    });
    var $monitor = $('.monitor svg').drawsvg({
        easing: "easeInOutQuart",
    });
    var $piala = $('.piala svg').drawsvg({
        easing: "easeInOutQuart",
    });
    /*RUN*/
    function animate() {
        $svg.drawsvg('animate');
    }
    animate();
    var options = [{
        selector: '.form',
        offset: 300,
        callback: function () {
            $form.drawsvg('animate');
        }
    }, {
        selector: '.monitor',
        offset: 300,
        callback: function () {
            $monitor.drawsvg('animate');
        }
    }, {
        selector: '.piala',
        offset: 300,
        callback: function () {
            $piala.drawsvg('animate');
        }
    }, ];
    Materialize.scrollFire(options);
});
