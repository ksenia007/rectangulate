function preload(){
    img=loadImage('assets/greece3.jpg');
}

function setup(){
    createCanvas(500, 800);

    
    img.resize(width,0); //resized the image to fit, 0 means that there will be no contraint on this parameter (no distortion)
    img.filter(BLUR,1); //blur the image to alleviate the effect of the noise

    // set the frame rate 
    frameRate(30);
    
    background(255);
}

function draw(){ 
    //get ranfom x and y locations
    var x=floor(random(width));
    var y=floor(random(height));
    //get the color of the pixel at the selected location
    var col=color(img.get(x,y));
    //create new rectanle
    tr1=new rectangleObj(x,y, col);
    //call the function that actually draws it
    tr1.generate();
}

function rectangleObj(x,y, col){
    //set the center
    this.x=x; 
    this.y=y;
    //set the size depending on the frame count
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
    //set the color
    this.col=col;
    this.generate=function(){
        push();
        noStroke();
        rectMode(CENTER);
        col.setAlpha(200); //change alpha for the color to make transparent
        fill(this.col); //set colot
        rect(this.x, this.y, this.dist, this.dist); //draw
        pop();
    }
}
