const catigoriesList = document.querySelectorAll('li.item');
console.log('Number of categories: ', catigoriesList.length);

catigoriesList.forEach(el => {
  const header = el.querySelector('h2');
  const elList = el.querySelector('ul');

  console.log('Category: ', header.textContent);
  console.log('Elements: ', elList.children.length);
});
