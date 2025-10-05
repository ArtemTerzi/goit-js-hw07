const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const colorText = document.querySelector('span.color');
button.addEventListener('click', handleClick);

function handleClick() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorText.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
