const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
let collide = false;
let jumpSfx = new Audio('jump.mp3');
let gameOver = new Audio('gameOver.mp3');
let backGroundMusic = new Audio('backgroundMusic.mp3');





function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function() {
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(checkCollision, 10);

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    let cactusTop = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("top")
    );

    // detect collision
    if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 260) {
        // collision
        collide = true;
        gameOver.play();
        backGroundMusic.pause();
        alert("Game Over! Your score: " + score);
        cactus.classList.remove("cactusMove");
        score = 0;
        document.getElementById("scoretab").innerHTML = score;
        
    } else {
        collide = false;
    }
}

function startGame(){
    backGroundMusic.currentTime =0;
    backGroundMusic.play();
    cactus.classList.add("cactusMove"); 
    backGroundMusic.loop();
}

document.addEventListener("keydown", function(event) {
    jump();
    jumpSfx.play();
    if (!collide) {
        score += 10;
        document.getElementById("scoretab").innerHTML = score;
    } else {
        document.getElementById("scoretab").innerHTML = 0;
        score = 0;
    }
});
