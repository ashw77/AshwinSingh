let sidesSlider;
let shapeSlider;
let shapeValue = 0;
let sides = 3; 
let minSides = 3;
let colorPicker;

function setup() {
  let canvas = createCanvas(1920, 800);
  

  // Define the parent container
  let canvasContainer = select('#canvas-container');

  // Append the canvas to the parent container
  canvas.parent(canvasContainer);
  //saveCanvas(canvas, 'myCanvas', 'jpg');

  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.parent('controls'); 
  colorPicker1.class('colorpicker'); 
  colorPicker1.id('colorpicker');
  colorPicker1.input(updateColor)
  //colorPicker.position(0, height + 5);

  shapeSlider = createSlider(0, 1, shapeValue, 0.01);
  //shapeSlider.position(10, height + 10);
  shapeSlider.parent('controls'); 
  shapeSlider.class('slider'); 
  shapeSlider.id('slider2');
  //shapeSlider.style('width', '80px');
  shapeSlider.input(updateShape);
  

  sidesSlider = createSlider(3, 100, sides, 1);
  sidesSlider.parent('controls'); 
  sidesSlider.class('slider'); 
  sidesSlider.id('slider1');
  //sidesSlider.position(10, height + 10);
  //sidesSlider.style('width', '80px');
  sidesSlider.input(updateSides);

  
  
  noLoop(); 
}

function draw() {
  background(0);

  let cl = colorPicker1.color();

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 300;
  
  const angleIncrement = TWO_PI / sides;

  // beginShape();
  // for (let i = 0; i < sides; i++) {
  //   const angle = angleIncrement * i;
  //   const x = centerX + cos(angle) * radius;
  //   const y = centerY + sin(angle) * radius;
  //   vertex(x, y);
  // }
  // endShape(CLOSE);
  
   // Calculate the number of points for the blob shape based on the shape slider
   const numPoints = int(map(shapeValue, 0, 1, minSides, 10));

   // Create a blob shape with curved points
   noFill();
   stroke(cl);
   beginShape();
   for (let i = 0; i < sides; i++) {
     const angle = angleIncrement * i;
     const x = centerX + cos(angle) * radius;
     const y = centerY + sin(angle) * radius;
     vertex(x, y);
      const x1 = centerX + cos(angle) * radius;
      const y1 = centerY + sin(angle) * radius;
      const x2 = centerX + cos(angle + shapeValue * PI) * radius;
      const y2 = centerY + sin(angle + shapeValue * PI) * radius;
      line(x1, y1, x2, y2);
      // const x3 = centerX + cos(angle) * (radius + random(-shapeValue * 20, shapeValue * 20));
      // const y3 = centerY + sin(angle) * (radius + random(-shapeValue * 20, shapeValue * 20));
      // vertex(x3,y3);
   }
   endShape(CLOSE);
      
 }
 
 function updateShape() {
   shapeValue = shapeSlider.value();
   redraw(); 
 }


function updateSides() {
  sides = sidesSlider.value();
  redraw();     
}

function updateColor() {
  sides = colorPicker1.color();
  redraw();     
}