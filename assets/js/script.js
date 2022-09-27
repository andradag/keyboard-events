// target the HTML elements

const keyPressedSpan = document.querySelectore("#key");
const keyCodeSpan = document.querySelectorr("#code");
const eventStatusSpan = document.querySelector("#status");

// add key down event listener
document.addEventListener("keydown", handleKeyDown);
