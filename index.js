let colorsList = [];

const colorsListEl = document.querySelector('.colors');
const buttonGenerateEl = document.getElementById('generate');
const buttonSortEl = document.getElementById('sort');
const buttonResetEl = document.getElementById('reset');

buttonGenerateEl.addEventListener('click', () => { generateColors() });
buttonSortEl.addEventListener('click', () => { sortList() });
buttonResetEl.addEventListener('click', () => { resetList() });

function createColorEl (color) {
	return `<div class="color" style="background-color: ${color};"></div>`;
}

function setColorListEl (colors) {
	colorsListEl.innerHTML = colors.map(createColorEl).join('');
}

function addNewColor () {
	const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    colorsList.push(`rgb(${r}, ${g}, ${b})`);
    console.log(colorsList.length);
    
    setColorListEl(colorsList);
}

function generateColors () {
    for(let i = 0; i < 10; i++) {
        addNewColor();
    }
}

function sortList () {
    const sortedList = colorsList.map(color => {
        color = color.includes('#') 
            ? hexToRgb(color) 
            : formatRgb(color);

        return rgbToHsl(...color);
    })
    .sort((a, b) => a[0] - b[0] > 0 ? 1 : -1)
    .map(hslColor => `hsl(${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%)`);
    
    setColorListEl(sortedList);
}

function resetList () {
	colorsList = [
        "#fbb735", "#e98931", "#eb403b", "#b32E37", "#6c2a6a",
        "#5c4399", "#274389", "#1f5ea8", "#227FB0", "#2ab0c5",
        "#39c0b3"
	].sort();
    
    setColorListEl(colorsList);
}

resetList();