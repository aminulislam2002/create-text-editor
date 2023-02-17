function makeUpperCase() {
  document.getElementById("textarea").style.textTransform = "uppercase";
}
function makeLowerCase() {
  document.getElementById("textarea").style.textTransform = "lowercase";
}
function textCenter() {
  document.getElementById("textarea").style.textAlign = "center";
}
function textRight() {
  document.getElementById("textarea").style.textAlign = "right";
}
function textLeft() {
  document.getElementById("textarea").style.textAlign = "left";
}
function textItalic() {
  document.getElementById("textarea").style.fontStyle = "italic";
}
function textBold() {
  document.getElementById("textarea").style.fontWeight = "bold";
}
function capitalize() {
  document.getElementById("textarea").style.textTransform = "capitalize";
}
// Text color funtion, using text input
function textColorChange() {
  let textColor = document.getElementById("textColorNameInput").value;
  document.getElementById("textarea").style.color = textColor;
}
// Background color function, using text input
function bgColorChange() {
  let bgColor = document.getElementById("bgColorNameInput").value;
  document.getElementById("textarea").style.backgroundColor = bgColor;
}
// Clear textarea funtion
function clearTextarea() {
  document.getElementById("textarea").value = "";
}
// Text color function, using color input
function textColor() {
  let tColor = document.getElementById("text-color").value;
  document.getElementById("textarea").style.color = tColor;
}
// Background color function, using color input
function bgColors() {
  let bgColorName = document.getElementById("bg-color").value;
  document.getElementById("textarea").style.backgroundColor = bgColorName;
}
