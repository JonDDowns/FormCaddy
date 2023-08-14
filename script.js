var canvas = document.getElementById("canvas");
var overlay = document.getElementById("overlay");
var ctx = canvas.getContext("2d");

var $canvas=$("#canvas");
var canvasOffset=$canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

var isDown = false;
var startX, startY;
var prevStartX = 0;
var prevStartY = 0;
var prevWidth = 0;
var prevHeight = 0;
var X1p, Y1p, maxX2p, maxY2p;

ctx.strokeStyle="blue";
ctx.lineWidth=3;
var overlay = document.getElementById("overlay");
var ctx = canvas.getContext("2d");

function handleMouseDown(e) {
  e.preventDefault();
  e.stopPropagation();
  startX = parseInt(e.clientX - offsetX);
  startY = parseInt(e.clientY - offsetY);
  isDown = true;
}

function handleMouseUp(e) {
  e.preventDefault();
  e.stopPropagation();
  isDown = false;
  document.getElementById("X1p").value = X1p;
  document.getElementById("Y1p").value = Y1p;
  document.getElementById("X2p").value = X2p;
  document.getElementById("Y2p").value = Y2p;
}

function handleMouseOut(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleMouseMove(e) {
  e.preventDefault();
  e.stopPropagation();
  if (!isDown) {
    return;
  }
  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);
  var width = mouseX - startX;
  var height = mouseY - startY;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(startX, startY, width, height);
  prevStartX = startX;
  prevStartY = startY;
  prevWidth = width;
  prevHeight = height;

  X1p = prevStartX / canvas.width;
  Y1p = prevStartY / canvas.height;
  X2p = (prevStartX + prevWidth) / canvas.width;
  Y2p = (prevStartY + prevHeight) / canvas.height;
}

$("#canvas").mousedown(function(e) {
  handleMouseDown(e);
});
$("#canvas").mousemove(function(e) {
  handleMouseMove(e);
});
$("#canvas").mouseup(function(e) {
  handleMouseUp(e);
});
$("#canvas").mouseout(function(e) {
  handleMouseOut(e);
});
