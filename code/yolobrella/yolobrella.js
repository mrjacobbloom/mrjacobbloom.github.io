//EVERYTHING ELSE
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
var interval = setInterval(circlesfunc, 35);
var iteration = 0;
var animiteration = 0;
var circles = new Array();
var notfailed = true;

var raining = false;
var rain = -35;
var raindrops = new Array();

var instructions = false;
var privacy = false;

var plantage = 0;
var plage100 = false;
var stem;
var sun = 0;
var leaves = new Array();
var timing = false;
var timer = 0;

var fire = new Object();
fire.delta = 3;
fire.xpos = canvas.width / 2;
fire.on = false;
var firegrd = context.createLinearGradient(0,canvas.height - 170,0,canvas.height - 60);
firegrd.addColorStop(0,'rgba(0,0,0,.05)');
firegrd.addColorStop(0.15,'rgba(200,100,0,.3)');
firegrd.addColorStop(1,'rgba(200,0,0,.6)');

var ground;

var pattern = document.getElementById('pattern');
var pcontext = pattern.getContext('2d');
var cimage = document.getElementById("cimage");
var cpattern = pcontext.createPattern(cimage, "repeat");
var patternfill;

pattern.width = 512;
pattern.height = 512;

var MousePos = new Object();
    MousePos.x = (canvas.width / 2);
    MousePos.y = (canvas.width / 3);
var CurrentPos = new Object();
    CurrentPos.x = (canvas.width / 2);
    CurrentPos.y = (canvas.width / 3);

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function handleMouseMove(clientX, clientY) {
    if(notfailed) {
        MousePos.x = clientX;
        MousePos.y = clientY;
        if(instructions) {
            document.getElementById('titlebar').className = '';
            instructions = false;
        }
    }
}

window.addEventListener('mousemove', (evt) => handleMouseMove(evt.clientX, evt.clientY));
window.addEventListener('touchstart', (evt) => handleMouseMove(evt.touches[0].clientX, evt.touches[0].clientY));

window.addEventListener('resize', function (evt) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fire.xpos = canvas.width / 2;
}, false);

document.getElementById('closebutton').addEventListener('click', function (evt) {
    document.getElementById('titlebar').className = 'forcedone';
    instructions = true;
});

document.getElementById('failreplay').addEventListener('click', function (evt) {
    location.reload();
});

document.getElementById('up').addEventListener('click', function (evt) {
    if(circles.length < 120) {
        newCircle();
    }
});
document.getElementById('down').addEventListener('click', function (evt) {
    if(circles.length > 10) {
        circles.splice(circles.length - 1, 1);
        cloudChange();
    }
});

window.addEventListener('keydown', function (evt) {
    if(notfailed) {
        if (evt.keyCode == 38) {
            document.getElementById('up').click();
            document.getElementById('up').className = 'click';
        } else if (evt.keyCode == 40) {
            document.getElementById('down').click();
            document.getElementById('down').className = 'click';
        } else if(evt.keyCode == 32) {
            fail('<i class="fa fa-phone fa-wobble"></i> YOU RANG?');
        }
    }
}, false);
window.addEventListener('keyup', function (evt) {
    document.getElementById('up').className = '';
    document.getElementById('down').className = '';
}, false);

for(i = 0; i < 10; i++) {newCircle();}


function newCircle() {
    c = new Object();
    if (circles.length == 0) {
        c.x = 0;
        c.y = 0;
    } else if (circles.length < 10) {
        c.x = Math.floor(Math.random() * 200) - 100;
        c.y = Math.floor(Math.random() * 100) - 50;
    } else {
        var xmax = 7 * circles.length;
        if (xmax >= 0.5 * canvas.width) {
            xmax = 0.5 * canvas.width;
        }
        c.x = Math.floor(Math.random() * 2 * xmax) - xmax;
        c.y = Math.floor(Math.random() * 200) - 100;
    }
    c.rmax = 30 + Math.floor(Math.random() * 60);
    c.r = 0.5 * c.rmax;
    c.n = Math.random() * 6;
    c.plus = (Math.random() * 0.1) + 0.02;
    if(Math.random() < 0.5) {c.plus *= -1;}
    c.nr = 2 + Math.random() * 7;
    circles.push(c);

    cloudChange();
}

function cloudChange() {
    pcontext.fillStyle = cpattern;
    pcontext.fillRect(0, 0, pattern.width, pattern.height);
    if (circles.length < 25) {
        pcontext.fillStyle = "rgba(222, 222, 222, .5)";
    } else {
        var col = 222 - (6 * (circles.length - 25));
        pcontext.fillStyle = "rgba(" + col + "," + col + "," + col + ", .5)";
    }
    pcontext.fillRect(0, 0, pattern.width, pattern.height);
    patternfill = context.createPattern(pattern, "repeat");

    if (circles.length < 62) {
        raining = false;
    } else {
        raining = true;
    }
}

function circlesfunc() {
    if(timing) {
        timer += 0.03;
    }
    
    //bounding
    Bounding = new Object();
    Bounding.left = CurrentPos.x;
    Bounding.right = CurrentPos.x;
    for(i = 0; i < circles.length; i++) {
        var xn = circles[i].nr * Math.cos(circles[i].n);
        var myleft = CurrentPos.x + circles[i].x - circles[i].r + xn;
        if(myleft < Bounding.left) {
            Bounding.left = myleft;
        }
        var myright = CurrentPos.x + circles[i].x + circles[i].r + xn;
        if(myright > Bounding.right) {
            Bounding.right = myright;
        }
    }
    Bounding.width = Bounding.right - Bounding.left;
    
    //cloud position
    var theta;
    if (CurrentPos.x == MousePos.x) {
        theta = 1;
    } else {
        theta = Math.atan((CurrentPos.y - MousePos.y) / (CurrentPos.x - MousePos.x));
        if ((CurrentPos.x - MousePos.x) > 0) {
            theta = theta + Math.PI;
        }
    }
    var dist = Math.sqrt(
    Math.pow(CurrentPos.x - MousePos.x, 2) + Math.pow(CurrentPos.y - MousePos.y, 2)) * 0.03;
    CurrentPos.x = CurrentPos.x + dist * Math.cos(theta);
    CurrentPos.y = CurrentPos.y + dist * Math.sin(theta);
    
    //rain
    if (raining) {
        while(raindrops.length < 50) {
            var d = new Object();
            d.x = Bounding.left + 15 + (Math.random() * (Bounding.width - 30));
            if(rain > 2) {
                d.y = CurrentPos.y;
            } else {
                d.y = CurrentPos.y + (Math.random() * (canvas.height - CurrentPos.y));
            }
            d.plus = 15 + (Math.random() * 15);
            raindrops.push(d);
        }
        for (i = 0; i < raindrops.length; i++) {
                raindrops[i].y += raindrops[i].plus;
            }
        
        if(rain < 250) {rain += 0.06;}
    } else {
        if(rain > -50) {rain -= 0.06;}
    }
    
    //stem
    if(plantage > 0) {
        if(plantage < 40) {
            stem = "rgb(92,145,87)"; //green
            plage100 = false;
        } else if(plantage < 100) {
            var stween = 1 - ((plantage - 40) / 60);
            stem = "rgb(" + 
                parseInt((stween * 18) + 74) + "," + 
                parseInt((stween * 87) + 58) + "," + 
                parseInt((stween * 75) + 12) + ")";
            plage100 = false;
        } else {
            stem = "rgb(74,58,12)"; //brown
            plage100 = true;
        }
    }
    if(-5 < rain && rain < 40 && plantage < 150) {
        plantage += .6;
        if(plantage < 2) {
            timer = 0;
            timing = true;
        }
    } else if(plantage > 0) {
        plantage -= .6;
        if(plantage < 100) {
            while(leaves.length > 0) {
                leaves.pop(); //removes last element
            }
            if(plantage < 5) {
                if(rain < 5) {
                    fail('<i class="fa fa-tint fa-wobble"></i> DRAUGHT');
                } else {
                    fail('<i class="fa fa-umbrella fa-wobble"></i> DROWNED');
                }
            }
        }
    }
    
    //leaves
    if(plage100) {
        if(leaves.length < 30 && 1 == Math.floor(Math.random() * 16 && plantage < 144)) {
            l = new Object();
            l.bd = plantage;
            var leafdist = Math.random()*30;
            var leaftheta = Math.random()*2*Math.PI;
            l.y = leafdist*Math.sin(leaftheta);
            l.x = leafdist*Math.cos(leaftheta);
            l.n = Math.random() * 6;
            l.plus = (Math.random() * 0.35) - 0.175;
            var lum = Math.floor(Math.random() * 50);
            if(leaves.length < 27) {
                l.c = "rgb(" + (38+lum) + "," +
                (82+lum) + "," + (33+lum) + ")";
            } else {
                l.c = "rgb(" + (135+lum) + "," +
                (75+lum) + "," + (135+lum) + ")";
            }
            leaves.push(l);
        }
        for(i = 0; i < leaves.length; i++) {
            leaves[i].n += leaves[i].plus;
        }
    }
    
    //calc sun
    if(plage100){
        if(!(Bounding.right < (canvas.width / 2) - 25 || Bounding.left > (canvas.width / 2) + 25)) {
            if(raining && sun > 0) {
                sun = 0;
            } else if(sun > -300) {
                sun -= 0.6;
            }
        } else if(sun < 300) {
                sun += 0.6;
        }
    } else {
        sun = 0;
    }
    
    //fire
    if(plage100 && sun > 290) {
        if(plantage < 149) {plantage++;}
        if(Math.abs(fire.xpos - (canvas.width / 2)) >= 20) {
            fire.delta = -1 * fire.delta;
        }
        fire.xpos += fire.delta;
        
        fire.on = true;
        
        fail('<i class="fa fa-sun-o fa-wobble"></i> SUNBURN');
    }

    //circles
    for (i = 0; i < circles.length; i++) {
        if (circles[i].r < circles[i].rmax) {
            circles[i].r = circles[i].r + 2;
        }

        circles[i].n += circles[i].plus;
        if (circles[i].n >= Math.PI * 2) {
            circles[i].n = 0;
        }
    }
    
    //ground
    if(rain >= 0) {
            ground = "rgb(110,75,0)"; //brown
        } else if(rain > -20) {
            var gtween = 1 - Math.abs(rain + 20)/20;
            ground = "rgb(" + parseInt((gtween * 122) + 110) + "," + parseInt((gtween * 128) + 75) + "," + parseInt(gtween * 139) + ")";
        } else {
            ground = "rgb(232,203,139)"; //sandy
        }
    
    
    iteration++;
}

function circlesdraw() {
    if(timing) {
        document.getElementById('timer').innerHTML = Math.round(timer) + 's';
    }
    
    if(iteration !== 0) {
        animiteration = iteration;
        context.clearRect(0,0,canvas.width,canvas.height);
        
        //rain
        if (raining && (canvas.height - rain) > CurrentPos.y) {
            context.strokeStyle = "rgb(110, 150, 200)";
            context.lineCap = 'round';
            context.lineWidth = 5;
            for (i = 0; i < raindrops.length;) {
                if((raindrops[i].y + raindrops[i].plus) > (canvas.height - rain - 16)) {
                    raindrops.splice(i, 1);
                } else {
                    i++;
                }
            }
            for (i = 0; i < raindrops.length; i++) {
                context.beginPath();
                context.moveTo(raindrops[i].x, raindrops[i].y);
                context.lineTo(raindrops[i].x, (raindrops[i].y + 15));
                context.stroke();
            }
        }
        
        //stem
        if(plantage != 0) {
            context.strokeStyle = stem;
            context.lineCap = 'round';
            context.lineWidth = 10;
            context.beginPath();
            
            if(plantage > 15 && plantage < 100) {
                context.moveTo(canvas.width / 2, canvas.height - 33);
                context.lineTo(canvas.width / 2, canvas.height - (33 + (plantage - 15)));
                context.stroke();
            } else if(plantage >= 100) {
                context.moveTo(canvas.width / 2, canvas.height - 33);
                context.lineTo(canvas.width / 2, canvas.height - 118);
                context.stroke();
            }
        }
        
        //leaves
        if(plage100) {
            for(i = 0; i < leaves.length; i++) {
                if(leaves[i].bd < plantage) {
                    var r;
                    if(plantage - leaves[i].bd < 6) {
                        r = plantage - leaves[i].bd;
                    } else {
                        r = 6;
                    }
                    
                    if (leaves[i].n >= Math.PI * 2) {
                        leaves[i].n = 0;
                    }
                    var x = (canvas.width/2) + leaves[i].x +
                        (1.5 * Math.cos(leaves[i].n));
                    if(sun < -290) {
                        if(plantage < 149) {plantage++;}
                        if(leaves[i].y > -70 + (6 * leaves[i].plus)) {
                            leaves[i].y += -6 * Math.abs(leaves[i].plus);
                        }
                        fail('<i class="fa fa-moon-o fa-wobble"></i> DARKNESS');
                    }
                    var y = canvas.height - 110 - leaves[i].y +
                        (1.5 * Math.sin(leaves[i].n));
                    
                    context.fillStyle = leaves[i].c;
                    context.beginPath();
                    context.arc(x, y, r, 0, 2*Math.PI);
                    context.fill();
                }
            }
        }
        
        //shadow
        var grd = context.createLinearGradient(0,CurrentPos.y,
                                               0,CurrentPos.y + 100);
        grd.addColorStop(0,'transparent');
        grd.addColorStop(1,'rgba(0,0,0,.1)');
        context.fillStyle = grd;
        context.beginPath();
        context.rect(Bounding.left, CurrentPos.y,
                     Bounding.width,
                     canvas.height - CurrentPos.y);
        context.fill();
        
        //fire
        if(fire.on) {
            context.fillStyle = firegrd;
            context.beginPath();
            context.moveTo(fire.xpos,canvas.height - 170);
            context.quadraticCurveTo((canvas.width / 2) - 80,
                              canvas.height - 90,
                              canvas.width / 2,canvas.height - 60);
            context.quadraticCurveTo((canvas.width / 2) + 80, canvas.height - 90,fire.xpos,canvas.height - 170);
            context.fill();
        }
        
        //circles
        context.fillStyle = patternfill;
        for (i = 0; i < circles.length; i++) {
            
            var xn = circles[i].nr * Math.cos(circles[i].n);
            var yn = circles[i].nr * Math.sin(circles[i].n);
            
            var x = CurrentPos.x + xn + circles[i].x;
            var y = CurrentPos.y + yn + circles[i].y;
            
            context.beginPath();
            context.arc(x, y, circles[i].r, 0, 2 * Math.PI);
            context.fill();
        }
        
        //flood
        if(rain > 0) {
            context.fillStyle = "rgba(110, 150, 200, .7)";
            context.beginPath();
            context.rect(0, canvas.height - rain, canvas.width, rain);
            context.fill();
        }
        
        //ground
        context.fillStyle = ground;
        context.beginPath();
        context.moveTo(0,canvas.height);
        context.bezierCurveTo(0,canvas.height -
                              50,canvas.width,canvas.height -
                              50,canvas.width,canvas.height);
        context.fill();
    }
    window.requestAnimationFrame(circlesdraw);
}
circlesdraw();

function fail(text) {
    if(notfailed) {
        notfailed = false;
        timing = false;
        interval = clearInterval(interval);
        interval = setInterval(circlesfunc, 55);
        document.getElementById('failstamp').innerHTML = 
            text;
        document.getElementById('failtimer').innerHTML = 'your plant lived ' + Math.round(timer) + ' seconds';
        document.getElementById('fail').style.display = '';
        setTimeout(function() {
            document.getElementById('fail').className = 'show';
        },800);
    }
}
