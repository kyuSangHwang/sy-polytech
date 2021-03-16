
let secondOpening = true;

$(document).ready(function () {
    new fullpage('#fullpage', {
        licenseKey: 'D1AF2031-25C74F5F-8F279168-8FF34DAF',
        paddingTop: '0px',
        paddingBottom: '0px',
        autoScrolling: true,
        scrollingSpeed: 700,
        slidesNavigation: false,
        controlArrows: false, //슬라이더 버튼
        keyboardScrolling: false, //키보드로 슬라이더 이동
        dragAndMove: true, //마우스나 손가락을 써서 슬라이더 이동
        fadingEffect: 'slides'
    });

    $('.productList').click(function () {
        location.href = "/product";
    });

    $('.topContent').on("click", function (event) {
        if(secondOpening){
            const $thisId = $(this).children().attr("id");
            const $onId = $('.topContentOn').children().attr("id");
            const $slideImage02 = $('.slideImage02');
            const $slideImage03 = $('.slideImage03');
            if ($thisId != $onId) {
                event.stopPropagation();
                const $mainSecondImage02 = $('.mainSecondImg02');
                const $mainSecondImage03 = $('.mainSecondImg03');

                const $mainContentP01 = $('.mainContentP01');
                const $mainContentP02 = $('.mainContentP02');
                const $mainContentP03 = $('.mainContentP03');

                const $mainContentSpanP = $('.mainContent > span > p');
                const $mainContentRightP = $('.mainContentRight > p');

                $('.topContent').removeClass("topContentOn");
                $(this).addClass("topContentOn");

                $slideImage02.css("opacity", "0");
                $slideImage03.css("opacity", "0");
                $mainContentSpanP.css("height", "0");
                $mainContentRightP.css("opacity", "0");

                switch ($thisId) {
                    case 'forHuman':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forHuman_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forHuman_03.jpg");
                        $mainContentP01.text("더 안전하고, 편리한 세상을 위해");
                        $mainContentP02.text("더 나은 제품을 만들어갑니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("아이들이 마음 편히 놀 수 있게\n더 편리하고 안전한 세상을 위해\nSY-POLYTECH이 앞장서겠습니다.");

                        break;

                    case 'forNature':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forNature_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forNature_03.jpg");
                        $mainContentP01.text("우리의 후손을 위해서");
                        $mainContentP02.text("지금의 환경을 지켜나갑니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("지속 가능한 발전을 하기 위해,\nSY-POLYTECH은 앞장서 녹색성장을 추구하고 있습니다.");
                        break;

                    case 'bestQuality':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/bestQuality_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/bestQuality_03.jpg");
                        $mainContentP01.text("최고의 제품을 위해");
                        $mainContentP02.text("최고의 퀄리티를 위해");
                        $mainContentP03.text("끊임없이 관리하고 연구합니다.");
                        $mainContentRightP.text("항상 마음 놓고 사용하실 수 있게,\n고객님의 신뢰를 최우선으로 하여,\nSY-POLYTECH은 엄격한 품질관리를 시행하고 있습니다.");
                        break;

                    case 'globalLeader':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/globalLeader_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/globalLeader_03.jpg");
                        $mainContentP01.text("한국을 넘어 전 세계로");
                        $mainContentP02.text("저희가 이끌어 나가겠습니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("대한민국을 넘어\n전 세계 어디서든 가치를 인정받을 수 있게,\nSY-POLYTECH이 앞장서서 이끌어 나가겠습니다.");
                        break;
                }
                $mainContentRightP.html($mainContentRightP.html().replace(/\n/g, '<br/>'));

                $slideImage02.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                $slideImage03.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                $mainContentSpanP.stop().animate({
                    'height': '65',
                }, 1500, 'swing');

                $mainContentRightP.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');
            }
        }
    })
});

function mainAnimation(index) {
    if (index == 2) {
        setTimeout(mainSecondAnimation, 200);
    }
}

function mainSecondAnimation() {
    secondOpening = false;
    const $mainContentSpanP = $('.mainContent > span > p');
    const $mainContentRightP = $('.mainContentRight > p');
    const $slideImage02 = $('.slideImage02');
    const $slideImage03 = $('.slideImage03');

    setTimeout(function () {
        secondOpening = true;
    }, 1300);

    $slideImage02.animate({
        'left': '50',
    }, 1000, 'swing');

    $slideImage03.animate({
        'right': '0',
    }, 1000, 'swing');

    setTimeout(function () {
        $mainContentSpanP.animate({
            'height': '65',
        }, 1500, 'swing');

        $mainContentRightP.animate({
            'opacity': '1',
        }, 1500, 'swing');

    }, 500);
}

