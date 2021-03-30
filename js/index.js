//開新分頁動畫----暫時關閉中
function myload() {
    //動畫打開
    $(".winebcg").delay(1000).fadeOut(1000);

    //開場動畫
    $(".golden-circle").addClass("show");

    //動畫關閉
    // $(".winebcg").hide();

    // lax init
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });
    let run = -500;

    for (let i = 1; i < 5; i++) {
        let position = document.querySelector("#wine-sticky-area").offsetTop;

        lax.addElements(`.wine-testbox0${i}`, {
            scrollY: {
                opacity: [
                    [
                        position + run,
                        position + run + 500,
                        position + run + 1000,
                        position + run + 1500,
                        position + run + 2000,
                    ],
                    [0, 1, 1, 1, 0],
                ],
                translateY: [
                    [
                        position + run,
                        position + run + 500,
                        position + run + 1000,
                        position + run + 1500,
                        position + run + 2000,
                    ],
                    [1000, 0, 0, -400, -1000],
                ],
            },
        });
        lax.addElements(`.wine-textbox0${i}`, {
            scrollY: {
                opacity: [
                    [
                        position + run,
                        position + run + 500,
                        position + run + 1000,
                        position + run + 1500,
                        position + run + 2000,
                    ],
                    [0, 1, 1, 1, 0],
                ],
                translateY: [
                    [
                        position + run,
                        position + run + 500,
                        position + run + 1000,
                        position + run + 1500,
                        position + run + 2000,
                    ],
                    [1000, 0, 0, -400, -1000],
                ],
            },
        });
        lax.addElements(`.wine-title0${i}`, {
            scrollY: {
                opacity: [
                    [
                        position + run,
                        position + run + 500,
                        position + run + 1000,
                        position + run + 1500,
                        position + run + 2000,
                    ],
                    [0.4, 1, 1, 1, 0.4],
                ],
            },
        });
        document.querySelector(`#fake-wine-${i}`).style.top= position + run +'px';


        run += 1000;
    }
}

window.onload = myload;

//漢堡條動畫
$("#header-button").click(function () {
    $(this).toggleClass("hamburger-open");
});

//--------------------------自身的------------------

// 新增 下一瓶酒 btn click事件
$(document).on("click", ".my-next-circle", function () {
    $(".wine-title-area").addClass("action"); //顯示酒選單
    $(".my-title-group").removeClass("active"); //移除所有title的active
    $(
        `.my-title-group:nth-child(${$(".my-next-circle").index(this) + 1})`
    ).addClass("active"); //對應的title加上active
});

// 新增 酒標題 click事件
$(document).on("click", ".my-title-group", function () {
    $(".wine-each").removeClass("action"); //移除所有content的active
    $(`.wine-each:nth-child(${$(this).index() + 5})`).addClass("action"); //對應的content加上active
    $(".wine-title-area").removeClass("action"); //移除酒選單的active
    $("html,body").animate({ scrollTop: 0 }, 200); //滾動卷軸到最頂端
});

//向下按鈕 click事件
$(document).on("click", ".next-btn", function () {
    //向下滑動100vh(#index-top的高)
    $("html,body").animate({ scrollTop: $("#index-top").height() + 10 }, 200);
});
