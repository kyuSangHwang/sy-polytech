let koOrEn = "";

$(document).ready(function () {
    $("#productInquiry").addClass("menuOn");

    const content = $('.content');
    content.css('top', '0');

    $('#addressEmailSelector').on('change', function() {
        $("#addressEmail").val(this.value);
    });

    $('#productTypeSelector').on('change', function() {
        $("#productType").val(this.value);
    });

});

function sendEmail(){
    koOrEn = location.search;

    const fullEmail = $("#fullEmail");
    const idEmail = $("#idEmail");
    const addressEmail = $("#addressEmail");
    fullEmail.val(idEmail.val() +"@"+ addressEmail.val());

    const nameVal = $("#inputName").val();
    const companyNameVal = $("#inputCompanyName").val();
    const positionVal = $("#inputPosition").val();
    const productTypeVal = $("#productType").val();
    const inquiryTitleVal = $("#inquiryTitle").val();
    const inquiryBodyVal = $("#inquiryBody").val();
    const fullEmailVal = fullEmail.val();

    if (!!idEmail || !!addressEmail || !!nameVal || !!companyNameVal || !!productTypeVal || !!inquiryTitleVal || !!inquiryBodyVal) {
        alert(_enterRequiredEntry_);
        return;
    }

    const templateParams = {
        companyName: companyNameVal,
        name: nameVal,
        position: positionVal,
        fullEmail: fullEmailVal,
        productType: productTypeVal,
        inquiryTitle: inquiryTitleVal,
        inquiryBody: inquiryBodyVal
    };

    emailjs.init("user_xEiJJbURzHCGkDn5NOrYv");

    if (!!koOrEn && koOrEn == "?lang=en") {
        emailjs.send('service_rw0xulz', 'template_product', templateParams).then(function (response) {
            // TODO: 다국어
            Swal.fire({
                title: 'Product inquiry has been sent successfully!',
                text: 'We will reply to you as soon as possible.',
                icon: 'success',
                confirmButtonText: 'Check'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            })
        },function () {
            location.reload();
        })
    } else {
        emailjs.send('service_rw0xulz', 'template_product', templateParams).then(function (response) {
            Swal.fire({
                title: '제품문의가 성공적으로 발송 되었습니다!',
                text: '빠른 시일내에 답변 드리겠습니다.',
                icon: 'success',
                confirmButtonText: '확인'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            })
        },function () {
            location.reload();
        })
    }

}