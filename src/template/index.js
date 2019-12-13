$(document).ready(function(){

    $(".presentacion").click(function(){
        $(".presentacion .logo").fadeOut("slow",function(){
            $(".presentacion").fadeOut(200/*0*/);
        });
    });
    $("div.par[style*=\"1\"]").click(function(){
        $("div.par[style*=\"1\"]").fadeOut(10);
        $("div.par, div.juego").fadeIn(100/*0*/);
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
        //iniciamos el juego
        
        $(".HUD").fadeIn(2000);
        $(".ascensor .grupo").fadeOut(2000);

    });

    $(".ascensor").click(function(){
        $(".ascensor .puerta_der").css({"animation-name":"close_der"});
        $(".ascensor .puerta_izq").css({"animation-name":"close_izq"});
    });

});