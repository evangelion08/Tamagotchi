//variables
let timeInMinutes = 0;//time in minutes set to 0 
let timeInSeconds = timeInMinutes * 60;//time in seconds reads as time in minutes * 60
let timerIsRunning = false;//time is not running because its false
let img1, img2, img3, img4, img5, img6;//images for happiness
let happiness = 101;//happiness starts at 100 but set as 101 else it starts reading at 99
let coinsCollect = 0;//coins collect starts at 0 and goes up
let coinTimer = 60; //after every minute a coin gets added
let shopOpen = false;//shop is not opened because its false
let imgcomp, imglisten, imgsmo, imgfood, imgmuse;//images for shop
let imgsmoking, imgeating, imglistening, imgmusic;//images for after something has been bought


function setup() {
    getItems();//grabs the items that have been saved
    createCanvas(800, 600);//creates canvas

    // Start button
    startButton = createButton('Start');//name button
    startButton.position(500, 270);//poition
    startButton.mousePressed(startTimer);//function in brackets that have to operate the button

    // Stop button
    stopButton = createButton('Stop');
    stopButton.position(570, 270);
    stopButton.mousePressed(stopTimer);

    // Reset timer button
    resetButton = createButton('reset');
    resetButton.position(640, 270);
    resetButton.mousePressed(resetTimer);

    // Add 5 minutes button
    add5MinutesButton = createButton('+ 5');
    add5MinutesButton.position(615, 310);
    add5MinutesButton.mousePressed(add5Minutes);

    // Add 10 minutes button
    add10MinutesButton = createButton('+10');
    add10MinutesButton.position(550, 310);
    add10MinutesButton.mousePressed(add10Minutes);

    //shop buttons
    shopButton = createButton('SHOP');
    shopButton.position(185, 400);
    shopButton.mousePressed(shopDraw);
    

    //close shop
    closeButton = createButton('CLOSE SHOP');
    closeButton.position(525, 250);
    closeButton.mousePressed(closeShop);
    closeButton.hide();

    //button for food in shop
    foodButton = createButton('FOOD-10');
    foodButton.position(70, 225);
    foodButton.mousePressed(foodShop);
    foodButton.hide();

    //button for music in shop
    listenButton = createButton('MUSIC-20');
    listenButton.position(215, 225);
    listenButton.mousePressed(musicShop);
    listenButton.hide();

    //button for smoke in shop
    smokeButton = createButton('SMOKE-5');
    smokeButton.position(70, 470);
    smokeButton.mousePressed();
    smokeButton.hide();

    //button for guitar in sop
    guitButton = createButton('GUITAR-13');
    guitButton.position(215, 470);
    guitButton.mousePressed();
    guitButton.hide();

    //restart game button
    gameButton = createButton('reset game');
    gameButton.position(30, 10);
    gameButton.mousePressed(resetAll);


    // Load the image for starter page
    img1 = loadImage("libraries/assets/Picture1.jpg");
    img2 = loadImage("libraries/assets/Picture2.jpg");
    img3 = loadImage("libraries/assets/Picture3.jpg");
    img4 = loadImage("libraries/assets/Picture4.jpg");
    img5 = loadImage("libraries/assets/Picture5.jpg");
    img6 = loadImage("libraries/assets/Picture6.jpg");

    //load images for shop
    imgcomp = loadImage("libraries/assets/cat comp.jpg");
    imgdr = loadImage("libraries/assets/drink.jpg");
    imglisten = loadImage("libraries/assets/MUSIC.jpg");
    imgyak = loadImage("libraries/assets/YAKULT.jpg");
    imgsmo = loadImage("libraries/assets/smoke.jpg");
    imgfood = loadImage("libraries/assets/dry-cat-food.png");
    imgmuse = loadImage("libraries/assets/muse.jpg");

    //load images for animation
    imgsmoking = loadImage("libraries/assets/smoking.jpg");
    imgeating = loadImage("libraries/assets/eat.jpg");
    imglistening = loadImage("libraries/assets/listening.jpg");
    imgmusic = loadImage("libraries/assets/making music.jpg");

}

function draw() {

    background(255);

    //lines to make the outline
    fill(0);
    strokeWeight(1);
    line(400, 580, 400, 40);
    line(20, 40, 780, 40);
    line(20, 40, 20, 580);
    line(780, 580, 780, 40);
    line(780, 580, 20, 580);

    timeDraw();//set in draw so that the timer function is drawn

    //rectangle for timer
    noFill();
    strokeWeight(1);
    rect(500, 200, 200, 50);

    //text for happiness and coins
    fill(0);
    textSize(20)
    text(floor(happiness), 100, 100);//floor indicates it will go from 100 to 0
    text(coinsCollect, 500, 100);
    text("coins", 515, 100);
    text("%", 133, 100);


    //if the shop is opened it draws the function "shopdraw" seen as the shop
    if (shopOpen == true) {
        shopDraw();
    }
    else {//if shop is not opened draw starter page
        if (happiness >= 90) {
            image(img2, 100, 150, 250, 250);//at happiness 90% it will change image
        }
        else if (happiness >= 70) {
            image(img5, 100, 150, 250, 250);
        }
        else if (happiness >= 50) {
            image(img3, 100, 150, 250, 250);
        }
        else if (happiness >= 30) {
            image(img6, 100, 150, 250, 250);
        }
        else if (happiness >= 10) {
            image(img4, 100, 150, 250, 250);
        }
        else if (happiness <= 10) {
            image(img1, 100, 150, 250, 250);
        }
    }

    setItems();//saves the items

    //lines drawn for outline
    fill(0);
    strokeWeight(1);
    line(400, 580, 400, 40);
    line(20, 40, 780, 40);
    line(20, 40, 20, 580);
    line(780, 580, 780, 40);
    line(780, 580, 20, 580);

    

}

function closeShop() {//closes the shop when 'close shop' button is pressed
    shopOpen = false;//shop closes because shop = false
    showTimerButtons(true);//timer buttons get shown again
}

function showTimerButtons(show) {//timer buttons get shown
    if (show == true) {
        startButton.show();
        stopButton.show();
        resetButton.show();
        add10MinutesButton.show();
        add5MinutesButton.show();
        shopButton.show();
        closeButton.hide();//these button get hidden when shop isnt open
        foodButton.hide();
        listenButton.hide();
        smokeButton.hide();
        guitButton.hide();
    }
    else {
        startButton.hide();
        stopButton.hide();
        resetButton.hide();
        add10MinutesButton.hide();
        add5MinutesButton.hide();
        shopButton.hide();
        closeButton.show();//these buttons get shown if shop is open
        foodButton.show();
        listenButton.show();
        smokeButton.show();
        guitButton.show();
    }
}




function shopDraw() {//draws layout of shop

    shopOpen = true;//shop is open
    showTimerButtons(false);//timer buttons dont get shown
    background(255);//overlaps everything from the timer screen

   

    image(imgcomp, 410, 250, 300, 300);

    fill(0);
    text("welcome to the shop!", 480, 200);

    //images shop items
    image(imgfood, 25, 75, 150, 150);
    image(imglisten, 175, 75, 150, 150);
    image(imgsmo, 25, 300, 150, 150);
    image(imgmuse, 175, 300, 150, 150);
    
    //lines for outline
    fill(0);
    strokeWeight(1);
    line(400, 580, 400, 40);
    line(20, 40, 780, 40);
    line(20, 40, 20, 580);
    line(780, 580, 780, 40);
    line(780, 580, 20, 580);
}

function foodShop() {//function for adding happiness and reduces coins when item is bought
    if (coinsCollect >= 10) {
        happiness += 10;
        coinsCollect -= 10;
    }
}

function musicShop() {
    if (coinsCollect >= 20) {
        happiness += 30;
        coinsCollect -= 20;
    }
}

function smokeShop() {
    if (coinsCollect >= 5) {
        happiness += 15;
        coinsCollect -= 5;
    }
}

function guitarShop() {
    if (coinsCollect >= 13) {
        happiness += 25;
        coinsCollect -= 13;
    }
}

function timeDraw() {//draws timer

    textSize(32);
    fill(0);
    text(convertTime(timeInSeconds), 555, 235);//converts time in seconds

    if (timerIsRunning && timeInSeconds > 0) {//timer is running and time is in seconds
        let deltaTime = 1 / frameRate(); //framerate is how fast the time will go
        timeInSeconds -= deltaTime;//deltatime used to track time between frames
    } else if (timeInSeconds <= 0) {
        // timer has reached zero, do something
        timerIsRunning = false;//timer is not running
    }

    if (happiness >= 1) {//decides how fast the happiness % decreases
        happiness -= (deltaTime / 10000);
    }

    if (timerIsRunning == true) {//timer is running and after every minute adds 1 coin
        coinTimer -= (deltaTime / 1000);
        if (coinTimer <= 0) {
            coinTimer = 60;
            coinsCollect++;
        }
    }
}


function convertTime(s) {
    let min = floor(s / 60);//calculates minutes
    let sec = floor(s % 60);
    return nf(min, 2) + ':' + nf(sec, 2);//nf is used to format the numbers so it has at least 2 digits
}

function startTimer() {//fnction to start the timer and keep it running
    if (!timerIsRunning) {
        timerIsRunning = true;
    }
}

function stopTimer() {//function to pause timer
    timerIsRunning = false;
}

function resetTimer() {//function to reset timer to 0
    timeInMinutes = 0;
    timeInSeconds = timeInMinutes * 60;
    timerIsRunning = false;
}

function add5Minutes() {//function to add 5 minutes
    timeInMinutes += 5;
    timeInSeconds = timeInMinutes * 60;
}

function add10Minutes() {//function to add 10 minutes
    timeInMinutes += 10;
    timeInSeconds = timeInMinutes * 60;
}


function setItems() {//function to save items
    localStorage.setItem("coinsCollect", coinsCollect);
    localStorage.setItem("happiness", happiness);
}

function getItems() {//function to load items back in

    if (localStorage.getItem("coinsCollect")) {//saved in local storage
        coinsCollect = JSON.parse(localStorage.getItem("coinsCollect"))
    }

    if (localStorage.getItem("happiness")) {
        happiness = JSON.parse(localStorage.getItem("happiness"))
    }
}



function resetAll(){//function to reset everything
    coinsCollect = 0;//coins to 0 
    happiness = 101; // happiness reset to 100
}

































