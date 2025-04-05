const colors = ["	#ffebcd", "	#e9967a", "8fbc8f", "	#ff1493", "#f0e68c", "#ba55d3"];
let currentIndex = 0;

function changeColor() {
  // Set the background to the next color in the array
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}