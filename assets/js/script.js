// target the HTML elements

const keyPressedSpan = document.querySelectore("#key");
const keyCodeSpan = document.querySelectorr("#code");
const eventStatusSpan = document.querySelector("#status");

//callback function
const handleKeyDown = function (event) {
  // get key pressed data from the event object
  const keyPressed = event.key;
  const keyCode = event.code;

  // set text content of the spans
  keyPressedSpan.textContent = keyPressed;
  keyCodeSpan.TextContent = keyCode;
  eventStatusSpan.textContent = "KEYDOWN Event";
};

// add key down event listener
document.addEventListener("keydown", handleKeyDown);

// add key up event listener
document.addEventListener("keyup", handleKeyUp);
