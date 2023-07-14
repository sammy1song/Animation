var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set canvas dimensions to match window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// create an array of balls
var balls = [];
for (var i = 0; i < 50; i++) {
    balls[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 10,
        dy: (Math.random() - 0.5) * 10,
        radius: Math.random() * 50,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16) // random color
    };
}

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < balls.length; i++) {
        drawBall(balls[i]);
        
        if (balls[i].x + balls[i].dx > canvas.width-balls[i].radius || balls[i].x + balls[i].dx < balls[i].radius) {
            balls[i].dx = -balls[i].dx;
        }

        if (balls[i].y + balls[i].dy > canvas.height-balls[i].radius || balls[i].y + balls[i].dy < balls[i].radius) {
            balls[i].dy = -balls[i].dy;
        }
        
        balls[i].x += balls[i].dx;
        balls[i].y += balls[i].dy;
    }

    requestAnimationFrame(draw);
}

draw();
