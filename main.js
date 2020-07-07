// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let array = [500, 200, 350, 400, 580, 170, 225, 325];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // draw bar graph
    ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'grey';
    for (let i = 0; i < array.length; i++) {
        ctx.fillRect(i*100, cnv.height - array[i], cnv.width/array.length, array[i]);
        ctx.strokeRect(i*100, cnv.height - array[i], cnv.width/array.length, array[i]);
    }


    // Request another Animation Frame
    requestAnimationFrame(draw);
}