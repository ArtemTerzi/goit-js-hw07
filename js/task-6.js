const boxContainer = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', handleClick);
destroyBtn.addEventListener('click', destroyBoxes);

function handleClick() {
  let value = input.value;

  if (!value || value > 100 || value < 1)
    return alert('The value must be in the range 1 to 100.');

  createBoxes(value);
  input.value = '';
}

function createBoxes(amount) {
  const baseSize = 30;
  const step = 10;

  boxContainer.innerHTML = '';

  const boxes = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * step;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }

  boxContainer.appendChild(boxes);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
