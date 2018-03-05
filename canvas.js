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

function Circle(x, y, radius, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.colour = colour;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.strokeStyle = colour;
        c.stroke();
    }

    this.update = function (t) {
        //the cos and sin functions create circular movement
        this.x = 400 + (300 * Math.cos(t));
        this.y = 400 + (300 * Math.sin(t));

        this.draw();
    }
}

var circle = new Circle(300, 300, 40, 'white');
var counter = 0;

function animate() {
    requestAnimationFrame(animate);
    //resizes canvas dynamically
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //clears canvas every frame
    c.clearRect(0, 0, innerWidth, innerHeight);

    counter += 0.05;

    circle.update(counter);
}

animate();

