window.onload = function() {
    const arrImg = ["dist/img/Logo.png", "dist/img/logo-hover.png"];
    $("#navbar-logo_hover").hover(function(){
        $("#navbar-logo__img").attr("src", arrImg[1]);
    }, function(){
        $("#navbar-logo__img").attr("src", arrImg[0]);
    });
}