/**
 * Created by Mark on 12/21/13.
 */
//<![CDATA][
$(window).load(function(){
$('.progress').each(function() {
    var el = $(this), count = 0;
    el.children('.bar').each(function () {
        if(!$(this).hasClass('bar')) return;
        var text = $(this).text().split('');
        count += text.length;
    });
    el.attr('amount', count * 2);
});
    $('.progress').click(function() {
        if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
    });
});//]]>
