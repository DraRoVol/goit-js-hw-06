const incrBtn = document.querySelector(`[data-action = 'increment']`);
const decrBtn = document.querySelector(`[data-action = 'decrement']`);
const displayedValue = document.querySelector('#value');

let counterValue = 0;

incrBtn.addEventListener('click', onIncrement);
decrBtn.addEventListener('click', onDecrement);

function onIncrement() {
    console.log((counterValue += 1));
    displayedValue.textContent = counterValue;
};
function onDecrement() {
    console.log((counterValue -= 1));
    displayedValue.textContent = counterValue;
};