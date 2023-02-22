const  fontSizeControl = document.querySelector('#font-size-control');
const textLabel = document.querySelector('#text');

fontSizeControl.addEventListener('input', onChangeText);

function onChangeText() {
    textLabel.style.fontSize = `${fontSizeControl.value}px`
}
