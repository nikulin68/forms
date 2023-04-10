import Button from './button';

const popBtnContainers = document.querySelectorAll('#pop-button');

popBtnContainers.forEach((container) => {
  const popButton = new Button(container);
  popButton.bindToDOM();
});
