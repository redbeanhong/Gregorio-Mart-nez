//開新分頁動畫----暫時關閉中
function myload() {
    //動畫打開
    $(".winebcg").delay(1000).fadeOut(1000);

    //動畫關閉
    // $(".winebcg").hide();

    // lax init
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

window.onload = myload;

//點擊navbar連結後，選單會自動收合
$(function closenav() {
    $('#navbarToggleExternalContent a').on('click', function () {
        $('.navbar-toggler').click();
    });
});

//swiper啟動
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//漢堡條動畫
$("#header-button").click(function () {
    $(this).toggleClass("hamburger-open");
});
