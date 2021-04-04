// Elements
const docBody = document.querySelector('body');
const colorPickers = document.querySelectorAll('.color-picker');
const rangePicker = document.querySelector('.range-picker');
const bgToggle = document.querySelector('.control-group__bg');
const bgSelector = document.querySelector('.bg-selector');
const bgs = document.querySelectorAll('.bg');
const opacityPicker = document.querySelector('.opacity-picker');

let gradColor1 = '#ffffff';
let gradColor2 = '#ffffff';
let gradAngle = 90;
let gradOpacity = 0.6;
let img = "";


// Controllers


function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5,7), 16);
    return `${r}, ${g}, ${b}`;
}


function updateColors(el) {
    if(el.classList.contains('color-picker__one')) {
        gradColor1 = `rgba(${hexToRGB(el.value)}, ${gradOpacity})`;
    } else {
        gradColor2 = `rgba(${hexToRGB(el.value)}, ${gradOpacity})`;
    }
}

function colorControl() {
    updateColors(this);
    docBody.style.backgroundImage = `linear-gradient(${gradAngle}deg, ${gradColor1}, ${gradColor2}), url('img/${img}-bg.png')`;
}


function rangeControl() {
    gradAngle = this.value;
    docBody.style.backgroundImage = `linear-gradient(${gradAngle}deg, ${gradColor1}, ${gradColor2}), url('img/${img}-bg.png')`;
}

function toggleBgSelector() {
    bgSelector.classList.toggle('bg-selector--show');
}

function bgControl() {
    img = this.dataset.bg;
    docBody.style.backgroundImage = `linear-gradient(${gradAngle}deg, ${gradColor1}, ${gradColor2}), url('img/${img}-bg.png')`;
}

function opacityControl() {
    gradOpacity = `${this.value}`;
    gradColor1 = gradColor1.split(",");
    gradColor1.pop();
    gradColor1.push(` ${gradOpacity}`);
    gradColor1 = `${gradColor1.join()})`;
    gradColor2 = gradColor2.split(",");
    gradColor2.pop();
    gradColor2.push(` ${gradOpacity}`);
    gradColor2 = `${gradColor2.join()})`;
    console.log(gradColor2);
    docBody.style.backgroundImage = `linear-gradient(${gradAngle}deg, ${gradColor1}, ${gradColor2}), url('img/${img}-bg.png')`;
}

// Event listeners
colorPickers.forEach(picker => picker.addEventListener('input', colorControl));
rangePicker.addEventListener('input', rangeControl);
bgToggle.addEventListener('click', toggleBgSelector);
bgs.forEach(bg => bg.addEventListener('click', bgControl));
opacityPicker.addEventListener('input', opacityControl);
