const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
input.addEventListener('input', handleChange);

function handleChange({ target: { value } }) {
  userName.textContent = value.trim() || 'Anonymous';
}
