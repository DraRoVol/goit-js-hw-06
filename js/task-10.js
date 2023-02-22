function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const controls = document.querySelector('#controls');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = Number(controls.querySelector('input').value);
    const boxWidth = 30;
    const boxHeight = 30;
    const boxesArray = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxWidth + i * 10}px`;
      box.style.height = `${boxHeight + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesArray.push(box);
    }

    boxes.append(...boxesArray);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }
