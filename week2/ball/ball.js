
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};
const BOUNCE_FRICTION_LOSS = 0.99;


function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function cacheOldBallPosition() {
    old.x = ball.x;
    old.y = ball.y;
}

function applyGravity() {
    ball.dy += 0.5; // gravity
}

function applyVelocity() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    cacheOldBallPosition();

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    // bounce onf vertical bounds
    if (ball.x + radius > 400 || ball.x - radius < 0) {
            if(ball.x - radius < 0) {
                ball.x = radius;
            } else {
                ball.x = 400 - radius;
            }
            ball.dx = -ball.dx * BOUNCE_FRICTION_LOSS;
        }

    // bounce on hirzontal bounds
    if (ball.y + radius > 400) {
        ball.dy = -ball.dy * BOUNCE_FRICTION_LOSS;
        ball.y = 400 - radius;
    }

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    applyGravity();
    applyVelocity();

}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


