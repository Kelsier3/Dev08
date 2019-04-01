$(document).ready(function () {$('#content').hide().fadeIn(3000); 
function resetSign1() {
  welcome = ''; 
  sign = '';
  calcSign();
  initiateVars();
}

function resetSign2(event) {
  var signData= ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
  
  for (i=0; i<signData.length; i++) {
    setTextContentById(signData[i], 'cats');
  }
  event.preventDefault();
}

// Create variables
var greeting = "[not initialized], ";
var name = "[not initialized] ";
var message = "[not initialized]:";
var welcome;
var sign = "[not initialized]";
var tiles;
var subTotal;
var shipping;
var grandTotal;

function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = "Howdy ";
  name = "Molly ";
  message = "Please check your order";
  sign = "Montague House";
  welcome = greeting + name + message;
  calcSign();
}

function setTextContentById(getId, setText) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the personalized welcome message
  el.textContent = setText;
}

function setSign() {

setTextContentById("greeting", welcome);
setTextContentById("userSign", sign);
setTextContentById("tiles", tiles);
setTextContentById("subTotal", "$" + subTotal);
setTextContentById("shipping", "$" + shipping);
setTextContentById("grandTotal", "$" + grandTotal);
}


initiateVars();
setSign();
//resetSign1();
//resetSign2();

var el = document.getElementById('resetButton');

el.addEventListener('click', resetSign2, false);
})