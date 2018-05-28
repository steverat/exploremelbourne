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
    var balltitle = document.getElementsByClassName("balltitle");
    var adjective = document.getElementsByClassName("adjective")[0];
    var topic = document.getElementsByClassName("topic")[0];



    // left positions small balls

    var littleBallPosition = ["35px", "85px", "135px","185px"];

    // original positions of little balls

    var originalTopPosition = ["150","70","40","70","150"];
    var originalLeftPosition = ["30","60","140","220","250"];


    // image file names, ball titles

    var ballSrc = ["culture","history","buildings","laneways","streetart"];
    var adjectiveWord = ["Cool","Happy","Beautiful","Laconic","Sublime"];
    var topicWord = ["Culture","History","Buildings","Laneways","Street Art"];


    var currentBall = 0;
    var defaultSize = true;



    function toggleSize(myBall) {

        // first check if in default position and we haven't clicked the big ball to close it


        // blank space causing issue.. make big one without padding and resize as soon as hit

        if ((defaultSize === true) || (myBall !== currentBall)) {




            // if true let's go ahead and move to detailed position
            // this is also for switching between balls if one is already active


            var ballNumber = myBall - 1; 


            // make me small

            me.style.top = "230px";
            me.style.left = "220px";
            me.style.width = "110px";
            me.style.height = "110px";


            // positioning of non-current balls

            var i = 0, j = 0;
            for (i; i < ball.length; i++) {

                if (i !== ballNumber) {
                    ball[i].style.top = littleBallPosition[j];
                    ball[i].style.left = "285px";
                    ball[i].style.width = "50px";
                    ball[i].style.height = "50px";
                    ball[i].src = ballSrc[i] + "-icon.png";
                    j++;
                }
            }

            // make big ball

            ball[ballNumber].style.top = "40px";
            ball[ballNumber].style.left = "40px";
            ball[ballNumber].style.width = "240px";
            ball[ballNumber].style.height = "240px";
            ball[ballNumber].src = ballSrc[ballNumber] + ".png";

            // add text to ball

            if (defaultSize === true) {

                adjective.innerHTML = adjectiveWord[ballNumber];
                topic.innerHTML = topicWord[ballNumber];


                window.setTimeout(function() {

                    for (i = 0; i < 2; i++) {
                        balltitle[i].style.opacity = "1";
                    }

                }, 250);

            } else {

                for (i = 0; i < 2; i++) {
                    balltitle[i].style.opacity = "0";
                }
                
                window.setTimeout(function() {

                    for (i = 0; i < 2; i++) {
                        adjective.innerHTML = adjectiveWord[ballNumber];
                        topic.innerHTML = topicWord[ballNumber];
                        balltitle[i].style.opacity = "1";
                    }

                }, 250);

            }

            // move text and bg down

            textbg.style.top = "275px";
            letsgo.style.top = "295px";
            and.style.top = "325px";
            exploremelbourne.style.top = "335px";


            defaultSize = false;

            // set currentball so if user clicks again it will send back to default position

            currentBall = myBall;


            // send back to default position

        } else {

            // this should happen if click ball that is currently open



            // make me bigger again

            me.style.top = "140px";
            me.style.left = "60px";
            me.style.width = "240px";
            me.style.height = "240px"; 


            // remove ball text


            for (i = 0; i < 2; i++) {
                balltitle[i].style.opacity = "0";
            }

            window.setTimeout(function() {

                adjective.innerHTML = "";
                topic.innerHTML = ""; 

            }, 1000);



            // make balls bigger

            for (i = 0; i < (ball.length); i++) {
                if (ball[i] != currentBall) {
                    ball[i].style.width = "80px";
                    ball[i].style.height = "80px";
                    ball[i].src = ballSrc[i] + "-icon.png";
                };
            }

            // move balls back to their original positions


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


            // move text and bg back up

            textbg.style.top = "250px";
            letsgo.style.top = "270px";
            and.style.top = "300px";
            exploremelbourne.style.top = "310px";

            defaultSize = true; 
        }
    }

    //  event handlers

    ball1.onclick = function () { toggleSize(1); };
    ball2.onclick = function () { toggleSize(2); };
    ball3.onclick = function () { toggleSize(3); };
    ball4.onclick = function () { toggleSize(4); };
    ball5.onclick = function () { toggleSize(5); };

}