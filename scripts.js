window.onload = function(){

    // attach elements to js variables with class

    var me = document.getElementsByClassName("me")[0];
    var ball = document.getElementsByClassName("ball");
    var ball1 = document.getElementsByClassName("ball1")[0];
    var ball2 = document.getElementsByClassName("ball2")[0];
    var ball3 = document.getElementsByClassName("ball3")[0];
    var ball4 = document.getElementsByClassName("ball4")[0];
    var ball5 = document.getElementsByClassName("ball5")[0];
    var textbg = document.getElementsByClassName("textbg")[0];
    var letsgo = document.getElementsByClassName("letsgo")[0];
    var and = document.getElementsByClassName("and")[0];
    var exploremelbourne = document.getElementsByClassName("exploremelbourne")[0];


    var defaultsize = true;




    function toggleSize() {
        if (defaultsize === true) {

            // make me small

            me.style.top = "230px";
            me.style.left = "220px";
            me.style.width = "110px";
            me.style.height = "110px";

            // make balls smaller and align left

            for (i = 0; i < (ball.length - 1); i++) {
                ball[i].style.width = "50px";
                ball[i].style.height = "50px";
                ball[i].style.left = "285px";
            }

            // move each ball

            ball1.style.top = "35px";
            ball2.style.top = "85px";
            ball3.style.top = "135px";
            ball4.style.top = "185px";

            ball5.style.top = "40px";
            ball5.style.left = "40px";
            ball5.style.width = "240px";
            ball5.style.height = "240px";
            ball5.src = "streetart.png";

            // move text and bg

            textbg.style.top = "275px";
            letsgo.style.top = "295px";
            and.style.top = "325px";
            exploremelbourne.style.top = "335px";


            defaultsize = false;

        } else {

            // make me big


            me.style.top = "140px";
            me.style.left = "60px";
            me.style.width = "240px";
            me.style.height = "240px"; 

            // make balls bigger

            for (i = 0; i < ball.length; i++) {
                ball[i].style.width = "80px";
                ball[i].style.height = "80px";
            }  



            // move each ball 

            ball1.style.top = "150px";
            ball1.style.left = "30px";
            ball2.style.top = "70px";
            ball2.style.left = "60px";
            ball3.style.top = "40px";
            ball3.style.left = "140px";
            ball4.style.top = "70px";
            ball4.style.left = "220px";
            ball5.style.top = "150px";
            ball5.style.left = "250px";                   
            ball5.src = "streetart-icon.png";

            // move text and bg


            textbg.style.top = "250px";
            letsgo.style.top = "270px";
            and.style.top = "300px";
            exploremelbourne.style.top = "310px";



            defaultsize = true; 


        }
    }

    ball5.onclick = function () { toggleSize(); };

}