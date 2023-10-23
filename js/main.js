window.addEventListener("wheel",go);

window.addEventListener("resize", re);

let burgerOn ;

function re(){
    if(innerWidth >= 800){
        $("#header").addClass("on");
        $(".refresh").addClass("on");
    }else{
        $("#header").removeClass("on");
        $(".refresh").removeClass("on");
        $(".burger").removeClass("on");
        $(".bur_gnb").removeClass("on");
    }
}
$(".refresh").click(
    function(){
        location.reload();
    }
);

function go(){
    if(scrollY>=200){
        $("#header").addClass("on");
        $(".refresh").addClass("on");       

    }else{
        $("#header").removeClass("on");
        $(".refresh").removeClass("on");
    }
    
}

$(".burger").click(
    function(){
        burgerOn = $(".burger").hasClass("on");
        if(burgerOn){
            $(".burger").removeClass("on");
            $(".bur_gnb").removeClass("on"); 
            $(".sub_our").hide();
        }else{
            $(".burger").addClass("on");
            $(".bur_gnb").addClass("on");             
        }
    }
);

$(".open_sub_our").click(
    function(){
        $(".sub_our").show();
        $(".bur_gnb").removeClass("on"); 
    }
);
$(".back").click(
    function(){
        $(this).parent().parent().hide();
        $(".bur_gnb").addClass("on");
    }
);