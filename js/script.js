(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function(){

$('.meny').clickToggle(function() {
            $('#mwrapper').animate({
                left: "0px"
            }, 400);
            $('.meny i').toggleClass('rotate');
        },
        function() {
            $('#mwrapper').animate({
                left: "-100%"
            }, 400);
            $('.meny i').toggleClass('rotate');
        });
        $("#card").flip({
            axis: 'y',
            trigger: 'click'
        });
        $("#card1").flip({
            axis: 'y',
            trigger: 'click'
        });
        $("#card2").flip({
            axis: 'y',
            trigger: 'click'
        });
        $("#card3").flip({
            axis: 'y',
            trigger: 'click'
        });
});