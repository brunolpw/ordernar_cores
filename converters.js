/*
Referencia:
    https://www.treinaweb.com.br/blog/javascript-ordenando-elementos-por-cores
    https://jsfiddle.net/ue8s6mdy/4/
    https://www.maujor.com/tutorial/css3-modulo-para-cores.php
*/

function hexToRgb(color) {
    color = color.replace('#', '');
    const red = parseInt(color.substr(0, 2), 16);
    const green = parseInt(color.substr(2, 2), 16);
    const blue = parseInt(color.substr(4, 2), 16);

    return [red, green, blue];
}

function formatRgb(color) {
    color = color.replace(/[rgba()]/gi, '');
    color = color.split(',');

    const red = parseInt(color[0]);
    const green = parseInt(color[1]);
    const blue = parseInt(color[2]);

    return [red, green, blue];
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    let min = Math.min(r, g, b);
    let max = Math.max(r, g, b);
    let delta = max - min;
    let h = 0; // Hue        (Matiz)
    let s = 0; // Saturation (Saturação)
    let l = 0; // Lightness  (Brilho)
	
    // calcula h
    if (delta === 0)    { h = 0; }
    else if (max === r) { h = ((g - b) / delta) % 6; }
    else if (max === g) { h = (b - r) / delta + 2; }
    else                { h = (r - g) / delta + 4; }
    
    h = Math.round(h * 60);
    if (h < 0) { h += 360; }
    
    // calcula l
    l = (max + min) / 2;
    
    // calcula s
    s = delta === 0 
        ? 0 
        : delta / (1 - Math.abs(2 * l - 1));
    
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    
    return [h, s, l];
}

/* ******************************************************************************* */
/*
vermelho = 10
laranja  = 11~39
amarelo  = 40~60
verde    = 120
ciano    = 180
azul     = 240
roxo     = 
magenta  = 300
vermelho = 360
*/
