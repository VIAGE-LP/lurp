$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    // 日本的modal
    $('.modal-open-button').click(function () {
        $('#modal-wrap').css('position', 'absolute');
    });

    // 日本的modal自動抓取月份最後一天
    var nowDate = new Date();
    var year = nowDate.getFullYear()
    var month = nowDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var lastDay = new Date(`${year}`, `${month}`, 0);
    var day = lastDay.getDate();
    day = day < 10 ? '0' + day : day;
    $('#lastday').text(`${month}/${day}`);

    // $("#wh-call-to-action").removeAttr("wh-click");
    $("#wh-call-to-action").removeClass("wh-animation-in");
    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#lp_form').position().top;
        var width = $(window).width();

        if ((formTop <= (scrollPos + windowHeight / 2)) && (width <= 768)) {
            $("#fb-root").attr({
                style: "display: none;"
            });
            $("#wrapper img#line").attr({
                style: "display: block;"
            });
            $(".line_alert").attr({
                style: "display: block;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#fb-root").attr({
                style: "display: block;"
            });
        }
    });
});
