var speed;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
    translate(width/2, height/2);

    // SUN
    celestialObjSun(color(255,150,0), 200); 
    // EARTH
    celestialObjEarth(color(0,0,255), 80); 
    
    push();
    // MOON1    
    celestialObjMoon1(color(255), 30); 
    // Asteroid1    
    celestialObjAsteroid1(color(255, 127, 80), 18);
    pop();
    
    push();
    // MOON2           
    celestialObjMoon2(color(255), 50);
    // Asteroid2    
    celestialObjAsteroid2(color(255, 127, 80), 22);    
    pop();


    pop();
}

//Sun object function
function celestialObjSun(c, size){
    push();
    strokeWeight(5);
    fill(c);
    stroke(0);
    rotate(radians(speed/3))        
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
    pop();
}

//Earth object function
function celestialObjEarth(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    rotate(radians(speed)) 
    translate(300,300);    
    ellipse(0, 0, size, size);
    
    push();    
    rotate(radians(speed))     
    line(0, 0, size/2, 0);
    pop();
}

//Moon 1 object function
function celestialObjMoon1(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    rotate(radians(-speed * 2)) 
    translate(100,100);    
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

//Asteroid 1 object function
function celestialObjAsteroid1(c, size){
    strokeWeight(2);
    fill(c);
    stroke(0);
    rotate(radians(speed * 4)) 
    translate(25,25);    
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

//Moon 2 object function
function celestialObjMoon2(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    rotate(radians(speed)) 
    translate(150,150);    
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

//Asteroid 2 object function
function celestialObjAsteroid2(c, size){
    strokeWeight(2);
    fill(c);
    stroke(0);
    rotate(radians(speed * 2)) 
    translate(30,30);    
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
