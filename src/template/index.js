$(document).ready(function(){

    $(".presentacion").click(function(){
        $(".presentacion .logo").fadeOut("slow",function(){
            $(".presentacion").fadeOut(2000);
        });
    });
    $("div.par[style*=\"1\"]").click(function(){
        $("div.par[style*=\"1\"]").fadeOut(10);
        $("div.par, div.juego").fadeIn(1000);
    });

    $(".button").click(function(){
        $(".button").css({"background-position":"0px 0px"});
        $(".luces").css({"background-position":"0px 0px"});
        $(".ascensor .puerta_der").css({"animation-name":"open_der"});
        $(".ascensor .puerta_izq").css({"animation-name":"open_izq"});
    });

    $(".ascensor .puerta_izq").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(".button").css({"background-position":"-35px 0"});
        $(".luces").css({"background-position":"-50px 0"});
    });

    $(".ascensor .puerta_izq").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        //iniciamos el juego
        $(".HUD").fadeIn(3000);
        $(".ascensor .grupo .persona").fadeIn(1500);
        $(".ascensor .grupo").fadeIn(1800);
    });

    $(".ascensor_der").click(function(){
        $(".ascensor:nth-child(2) .puerta_der").css({"animation-name":"close_der"});
        $(".ascensor:nth-child(2) .puerta_izq").css({"animation-name":"close_izq"});
    });

    $(".ascensor_izq").click(function(){
        $(".ascensor:nth-child(1) .puerta_der").css({"animation-name":"close_der"});
        $(".ascensor:nth-child(1) .puerta_izq").css({"animation-name":"close_izq"});
    });

});