function preload(){
    img=loadImage('assets/greece3.jpg');
}

function setup(){
    createCanvas(500, 800);

    
    img.resize(0,height);
    img.filter(BLUR,1);

    //create canvas

    // change the frame rate to make slower
    frameRate(30);
    //load image
    
    //img.loadPixels();
    background(255);
}

function draw(){ 
    
    

    // Set the background to black and turn off the fill color
    //image(img,0,0);
    //var x=floor(width*noise(0.1*frameCount));
    var x=floor(random(width));
    var y=floor(random(height));
    print(x,y);
    var col=color(img.get(x,y));
    print(col);
    tr1=new triangleObj(x,y, col);
    tr1.generate();
    print(frameCount);
}

function triangleObj(x,y, col){
    this.x=x;
    this.y=y;
    if (frameCount<100){
        this.dist=height/5;
    }
    else if (frameCount<500){
        this.dist=height/10;
    }
    else if (frameCount<1000){
        this.dist=height/20;
    }
    else if (frameCount<3000){
        this.dist=height/30;
    }
    else if (frameCount<5000){
        this.dist=height/50;
    }
    else{
        this.dist=height/70;
    }
    this.scale=100/frameCount;
    this.col=col;
    this.generate=function(){
        push();
        noStroke();
        var r1=floor(random(this.dist));
        var x1=constrain(this.x+r1,0, width);
        var y2=constrain(this.y+r1,0, height);
        var x3=constrain(this.x-r1,0, width);
        col.setAlpha(200);
        fill(this.col);
        rect(this.x, this.y, this.dist, this.dist);
        //triangle(x1, this.y, this.x, y2, x3, this.y);
        pop();
    }
}