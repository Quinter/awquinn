var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');

    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(70,70, 60, 0, 2 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(85,100);
    ctx.lineTo(100,85);
    ctx.lineTo(140,120);
    ctx.lineTo(120,140);
    ctx.fill();