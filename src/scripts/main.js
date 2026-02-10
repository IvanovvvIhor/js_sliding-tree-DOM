'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach((element) => {
  const span = document.createElement('SPAN');
  const text = element.firstChild;

  element.insertBefore(span, text);

  span.appendChild(text);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const nextLi = parentLi.querySelector('ul');

  if (!nextLi) {
    return;
  }
  nextLi.hidden = !nextLi.hidden;
});
