/** * @jest-environment jsdom */
import Button from '../button';

test('button should render self', () => {
  document.body.innerHTML = '<div id="pop-button" data-content="Click to toggle popover" data-popover-header="Popover title" data-popover-content="And here\'s some amazing content. It\'s very engaging. Right?"></div>';
  const container = document.querySelector('#pop-button');
  const popButton = new Button(container);
  popButton.bindToDOM();

  const content = 'Click to toggle popover';
  const popoverHeader = 'Popover title';
  const popoverContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

  expect(container.innerHTML).toEqual(Button.markup(content, popoverHeader, popoverContent));
});

test('button should show popover', () => {
  document.body.innerHTML = '<div id="pop-button"></div>';
  const container = document.querySelector('#pop-button');
  const popButton = new Button(container);
  popButton.bindToDOM();
  const popover = container.querySelector(Button.popoverSelector);
  const button = container.querySelector(Button.popButtonSelector);

  button.click();

  expect(popover.hidden).toBeFalsy();
});
