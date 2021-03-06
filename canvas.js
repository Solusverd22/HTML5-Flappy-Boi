var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

////three quads
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'blue';
//c.fillRect(400, 100, 100, 200);
//c.fillRect(300, 300, 100, 100);
//console.log(canvas);

////line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.strokeStyle = 'green';
//c.stroke();

//for (var i = 0; i < 10; i++) {
//    c.beginPath();
//    c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
//    c.strokeStyle = 'lightblue';
//    c.stroke();
//}
var input = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function(event){
    input.x = event.x;
    input.y = event.y;
    })

window.addEventListener('click',
    function () {
        if (checkClicked(circle.x, circle.y, circle.radius)) {
            console.log('good job');
            timerStart = d.getTime();
            flash = true;
        }
    })



function Circle(x, y, radius, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;

    this.draw = function () {
        //outer circle
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.strokeStyle = colour;
        c.fillStyle = colour;
        c.fill();
        //inner circle
        c.stroke();
        c.beginPath();
        c.arc(this.x, this.y, this.radius/2, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.fillStyle = 'red';
        c.fill();
        c.stroke();
    }

    this.update = function () {
        //the cos and sin functions create circular movement
        this.x = 400 + (300 * Math.cos(d.getTime()/1000));
        this.y = 400 + (300 * Math.sin(d.getTime()/1000));

        this.draw();
    }
}

function checkClicked(x,y,r) {
    var xDisp = input.x - x;
    var yDisp = input.y - y;
    var c = (xDisp * xDisp) + (yDisp * yDisp);
    if (Math.abs(c) < (r * r)) {
        return true;
    } else {
        return false;
    }  
}

function animateFlash() {
    h = window.innerHeight;
    w = window.innerWidth;
    if (flash) {
        if ((d.getTime() - timerStart) < 100) {
            c.fillStyle = 'red';
            c.fillRect(0, 0, w, h);
        }else if (d.getTime() - timerStart < 200) {
            c.fillStyle = 'white';
            c.fillRect(0, 0, w, h);
        }else if (d.getTime() - timerStart < 300) {

            flash = false;
        }
    }
}

var circle = new Circle(300, 300, 40, 'white');
var flash = false;
var timerStart = 0;
var d = new Date();

function animate() {
    requestAnimationFrame(animate);
    //resizes canvas dynamically
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //clears canvas every frame
    c.clearRect(0, 0, innerWidth, innerHeight);
    //update time
    d = new Date();

    animateFlash();

    circle.update();
}

animate();

