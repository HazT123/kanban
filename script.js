$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    document.getElementById("mainButton").addEventListener("click", function () {
        $(".rightTriangle").animate({
            width: "0px"
        }, 700)
        $(".leftTriangle").animate({
            width: "0px"
        }, 700)
        $("#mainButton").animate({
            top: "90%",
            opacity: "0"
        }, 700)
        $(".mainLogo").animate({
            top: "30%",
            opacity: "0"
        }, 700)
        setTimeout(function () {
            $("#mainButton").css("display", "none")
            $(".rightTriangle").css("display", "none")
            $(".leftTriangle").css("display", "none")
            $(".mainLogo").css("display", "none")

            $("#imran").animate({
                opacity: "0"
            }, 1000)
            $("#stuart").animate({
                opacity: "0"
            }, 1000)
            setTimeout(function () {
                $("#imran").css("display", "none")
                $("#stuart").css("display", "none")
            }, 1000)
        }, 700)
    })
});