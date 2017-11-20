const header = {
    button: false,
    controller: function () {
        $('.toggle-btn').click(function () {
            $('.menu-wrap').fadeToggle();
            if (header.button === false) {
                $(this).find('span:first-child').css({
                    transform: "rotate(45deg)",
                    top: '9px',
                    width: "35px"
                })
                $(this).find('span:nth-child(2)').css({
                    opacity: 0
                })
                $(this).find('span:nth-child(3)').css({
                    transform: "rotate(-45deg)",
                    bottom: '9px',
                    width: "35px"
                })
                header.button = true
            } else {
                $(this).find('span:first').css({
                    transform: "rotate(0)",
                    top: '0px',
                    width: "35px"
                })
                $(this).find('span:nth-child(2)').css({
                    opacity: 1
                })
                $(this).find('span:nth-child(3)').css({
                    transform: "rotate(0)",
                    bottom: '0px',
                    width: "35px"
                })
                header.button = false
            }
        });
        $(".menu a,.scroll-link").click(function (event) {
            event.preventDefault();
            let target = $(this).attr('href'),
                top = $(target).offset().top;
            $('body,html').animate({scrollTop: top}, Math.abs(top - $(document).scrollTop()) / 2);

            $('.toggle-btn').find('span:first').css({
                transform: "rotate(0)",
                top: '0px',
                width: "35px"
            })
            $('.toggle-btn').find('span:nth-child(2)').css({
                opacity: 1
            })
            $('.toggle-btn').find('span:nth-child(3)').css({
                transform: "rotate(0)",
                bottom: '0px',
                width: "35px"
            })

            header.button = false;
            if (screen.width < 768) {
                $('.menu-wrap').fadeOut();
            }
        });
    }
};
header.controller();

