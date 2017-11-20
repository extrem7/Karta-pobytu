const upButton = {
    btn: '.scroll-up',
    controller: function () {
        $(upButton.btn).click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, {
                duration: 1250
            });
        });
        $(window).scroll(function () {
            if ($(document).scrollTop() > $('.how-works').offset().top) {
                $('.scroll-up').css({opacity: 1, zIndex: 4});
            } else {
                $('.scroll-up').css({opacity: 0, zIndex: -1});
            }
        });
    }
};
/***/
function testimonialsLoad(e) {
    const list = $(e).prev();
    const item = $(list).find('> div:not(.hidde)').size();
    if (item + 3 >= $(list).find('> div').size()) {
        $(e).fadeOut();
        console.log(e)
    }
    const items = $(list).find('div:nth-child(' + (item + 1) + '),div:nth-child(' + (item + 2) + '),div:nth-child('
        + (item + 3) + ')');
    $(items).slideDown(1000).removeClass('hidde');
}

$('.testimonials .button').click(function (e) {
    e.preventDefault();
    let $this = this;
    testimonialsLoad($this);
});
upButton.controller();