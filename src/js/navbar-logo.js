window.onload = function() {
    const arrImg = ["dist/img/logo.png", "dist/img/logo-hover.png"];
    $("#navbar-logo_hover").hover(function(){
        $("#navbar-logo__img").attr("src", arrImg[1]).fadeIn(400);
    }, function(){
        $("#navbar-logo__img").attr("src", arrImg[0]).fadeIn(400);
    });
}