window.onload = function(){

    // attach elements to js variables with class

    var me = document.getElementsByClassName("me")[0];
    var ball = document.getElementsByClassName("ball");
    var ball1 = document.getElementsByClassName("ball1")[0];
    var ball2 = document.getElementsByClassName("ball2")[0];
    var ball3 = document.getElementsByClassName("ball3")[0];
    var ball4 = document.getElementsByClassName("ball4")[0];
    var ball5 = document.getElementsByClassName("ball5")[0];
    var allballs = document.getElementsByClassName("allballs")[0];
    var textbg = document.getElementsByClassName("textbg")[0];
    var title = document.getElementsByClassName("title");
    var letsgo = document.getElementsByClassName("letsgo")[0];
    var and = document.getElementsByClassName("and")[0];
    var exploremelbourne = document.getElementsByClassName("exploremelbourne")[0];
    var balltitle = document.getElementsByClassName("balltitle");
    var adjective = document.getElementsByClassName("adjective")[0];
    var topic = document.getElementsByClassName("topic")[0];
    var blurb = document.getElementsByClassName("blurb")[0];



    // left positions small balls

    var littleBallPosition = ["35", "85", "135","185"];

    // original positions of little balls

    var originalTopPosition = ["150","70","40","70","150"];
    var originalLeftPosition = ["30","60","140","220","250"];


    // image file names, ball titles

    var ballSrc = ["culture","history","buildings","laneways","streetart"];
    var adjectiveWord = ["Captivating","Hypnotising","Beautiful","Loveable","Sublime"];
    var topicWord = ["Culture","History","Buildings","Laneways","Street Art"];


    var currentBall = 0;
    var defaultSize = true;



    function toggleSize(myBall) {

        // first check if in default position and we haven't clicked the big ball to close it


        // blank space causing issue.. make big one without padding and resize as soon as hit

        if ((defaultSize === true) || (myBall !== currentBall)) {


            //scroll to top

            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });

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
                    ball[i].style.position = "fixed";
                    ball[i].style.top = littleBallPosition[j] + "px";
                    ball[i].style.left = "285px";
                    ball[i].style.width = "50px";
                    ball[i].style.height = "50px";
                    ball[i].src = ballSrc[i] + "-icon.png";
                    j++;
                }
            }

            // make big ball

            ball[ballNumber].style.position = "absolute";
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


            // addblurb text

            // !!! need to add logic to show blurb segment depending on which clicked andresize the bg accordingly

            blurb.style.opacity = 1;


            // updatedark background size

            textbg.style.top = "255px";
            textbg.style.height = "360px";   
            textbg.style.background = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.6), rgba(0,0,0,.7), rgba(0,0,0,.6),rgba(0,0,0,0))";


            // move title text down and disappear

            letsgo.style.top = "595px";
            and.style.top = "625px";
            exploremelbourne.style.top = "635px";
            for (i=0;i<title.length;i++) {
                title[i].style.opacity = "0";
            }



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



            // make balls back to original positions

            for (i = 0; i < (ball.length); i++) {
                ball[i].style.position = "absolute";
                ball[i].style.width = "80px";
                ball[i].style.height = "80px";
                ball[i].src = ballSrc[i] + "-icon.png";
                ball[i].style.top = originalTopPosition[i] + "px";
                ball[i].style.left = originalLeftPosition[i] + "px";
            }


            // move text and bg back up

            textbg.style.top = "250px";
            textbg.style.height = "130px";   
            textbg.style.background = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5), rgba(0,0,0,.6), rgba(0,0,0,.7),rgba(0,0,0,0))";
            letsgo.style.top = "270px";
            and.style.top = "300px";
            exploremelbourne.style.top = "310px";
            for (i=0;i<title.length;i++) {
                title[i].style.opacity = "1";
            }

            // hide blurb text

            blurb.style.opacity = 0;



            defaultSize = true; 
        }
    }


    //  event handlers


    allballs.onclick = function() {
        var selection = event.target.dataset.ball;
        if (selection === "text") {
            toggleSize(currentBall);
        }
        else if (selection != undefined) {
            toggleSize(selection);
        }
    };

}