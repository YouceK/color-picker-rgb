var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

changeColor = function() {
  red1 = document.querySelector('#red1').value;
  green1 = document.querySelector('#green1').value;
  blue1 = document.querySelector('#blue1').value;
  colorStr1 = "rgb(" + red1 + "," + green1 + "," + blue1 + ")";
  red2 = document.querySelector('#red2').value;
  green2 = document.querySelector('#green2').value;
  blue2 = document.querySelector('#blue2').value;
  colorStr2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";
  body.style.background = "linear-gradient(to right," + colorStr1 + "," + colorStr2 + ")";
  css.textContent = body.style.background + ";";
}

showValues1 = function() {
 document.querySelector('#redv1').innerHTML = document.querySelector("#red1").value;
  document.querySelector('#greenv1').innerHTML = document.querySelector("#green1").value;
  document.querySelector('#bluev1').innerHTML = document.querySelector("#blue1").value;
}
showValues2 = function() {
 document.querySelector('#redv2').innerHTML = document.querySelector("#red2").value;
  document.querySelector('#greenv2').innerHTML = document.querySelector("#green2").value;
  document.querySelector('#bluev2').innerHTML = document.querySelector("#blue2").value;
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);


