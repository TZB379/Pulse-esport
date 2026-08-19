$(document).ready(function () {


    var favGame = localStorage.getItem("pulse_favourite_game");

    if (favGame !== null) {
        $("#preferenceNote").text(
            "Your favourite game is " + favGame + "."
        );

        $(".game-choice").each(function () {
            if ($(this).attr("data-game") === favGame) {
                $(this).addClass("active");
            }
        });
    }

    $(".game-choice").click(function () {

        var selectedGame = $(this).attr("data-game");

        localStorage.setItem(
            "pulse_favourite_game",
            selectedGame
        );

        $(".game-choice").removeClass("active");

        $(this).addClass("active");

        $("#preferenceNote")
            .hide()
            .text(
                selectedGame +
                " has been saved as your favourite game."
            )
            .fadeIn(300);
    });

    var pageView = sessionStorage.getItem(
        "pulse_home_views"
    );

    if (pageView === null) {
        pageView = 1;
    } else {
        pageView = Number(pageView) + 1;
    }

    sessionStorage.setItem(
        "pulse_home_views",
        pageView
    );

    $("#visitMessage").text(
        "HOME SESSION VIEW: " + pageView
    );


    var eventDate = new Date(
        "August 21, 2026 17:00:00"
    ).getTime();

    function updateCountdown() {

        var curDate = new Date().getTime();

        var dis = eventDate - curDate;

        if (dis <= 0) {

            $("#days").text("00");
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");

            return;
        }

        var day = Math.floor(
            dis / (1000 * 60 * 60 * 24)
        );

        var hour = Math.floor(
            (dis % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        var min = Math.floor(
            (dis % (1000 * 60 * 60))
            / (1000 * 60)
        );

        var sec = Math.floor(
            (dis % (1000 * 60))
            / 1000
        );

        $("#days").text(
            String(day).padStart(2, "0")
        );

        $("#hours").text(
            String(hour).padStart(2, "0")
        );

        $("#minutes").text(
            String(min).padStart(2, "0")
        );

        $("#seconds").text(
            String(sec).padStart(2, "0")
        );
    }

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );

    $(window).scroll(function () {

        if ($(window).scrollTop() > 40) {

            $(".pulse-navbar").css(
                "background",
                "rgba(11, 14, 20, 0.98)"
            );

        } else {

            $(".pulse-navbar").css(
                "background",
                "rgba(11, 14, 20, 0.90)"
            );
        }
    });

});