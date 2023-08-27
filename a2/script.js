let imageOptions = [];
let selectedImage;
let fonts = [];
let selectedFont;
let title1 = "";
let title2 = "";
let textColor = [0, 0, 0];
let fontSize = 32;
let titleInput1;
let titleInput2;
let fontRadio;
let rSlider, bSlider, gSlider;
let fontSizeSlider;

function preload() {
  // Load image optionsScared
  imageOptions[0] = loadImage("Cute_cat.jpg");
  imageOptions[1] = loadImage("Scared_cat.jpg");
  imageOptions[2] = loadImage("angry_cat.jpeg");
  
  // Load fonts
  fonts[0] = loadFont("Roboto-LightItalic.ttf");
  fonts[1] = loadFont("Roboto-Medium.ttf");
  fonts[2] = loadFont("Roboto-MediumItalic.ttf");
}

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas
    
    //Example of an input element (button) --- Replace this with your own inputs/controls
    // Assign all your input elements the parent - 'column-one'

    let btn1 = createButton('Click Me'); //creates a button element called btn1

    btn1.parent('column-one'); //sets div id="column-two"></div> as the parent container of the element
    btn1.class('buttons'); //assigns the class 'buttons' to the element
    btn1.id('button1'); //assigns the id 'button1' to element
  
   let imageDropdown = createSelect();
    imageDropdown.parent('column-two'); //sets div id="column-two"></div> as the parent container of the element
  
  imageDropdown.position(10, 10);
  for (let i = 0; i < imageOptions.length; i++) {
    imageDropdown.option(`Image ${i + 1}`);
  }
  imageDropdown.changed(changeImage);

  // Text input fields
  titleInput1 = createInput();
  titleInput1.position(10, 40);
  titleInput1.input(updateTitle1);

  titleInput2 = createInput();
  titleInput2.position(10, 70);
  titleInput2.input(updateTitle2);

  // Font selection
  fontRadio = createRadio();
  fontRadio.position(10, 100);
  for (let i = 0; i < fonts.length; i++) {
    fontRadio.option(`Font ${i + 1}`);
  }
  fontRadio.selected("Font 1");
  fontRadio.changed(changeFont);

  // RGB sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(10, 140);
  rSlider.input(updateTextColor);

  gSlider = createSlider(0, 255, 0);
  gSlider.position(10, 170);
  gSlider.input(updateTextColor);

  bSlider = createSlider(0, 255, 0);
  bSlider.position(10, 200);
  bSlider.input(updateTextColor);

  // Font size slider
  fontSizeSlider = createSlider(16, 64, 32);
  fontSizeSlider.position(10, 230);
  fontSizeSlider.input(updateFontSize);
  }
  
function draw() {
  background(255);
  if (selectedImage) {
    image(selectedImage, 0, 0, width, height);
    fill(textColor);
    textSize(fontSize);
    textFont(selectedFont);
    textAlign(CENTER, CENTER);
    text(title1, width / 2, height - 100);
    text(title2, width / 2, height - 50);
  }
}
function changeImage() {
  let selectedIndex = int(this.value().split(" ")[1]) - 1;
  selectedImage = imageOptions[selectedIndex];
}

function updateTitle1() {
  title1 = this.value();
}

function updateTitle2() {
  title2 = this.value();
}

function changeFont() {
  let selectedIndex = int(this.value().split(" ")[1]) - 1;
  selectedFont = fonts[selectedIndex];
}

function updateTextColor() {
  textColor = [rSlider.value(), gSlider.value(), bSlider.value()];
}

function updateFontSize() {
  fontSize = fontSizeSlider.value();
}

  

  