console.log("font.js loaded");

const fontButton = document.getElementById('font-toggle');

const fonts = [
    "'Helvetica', sans-serif",
    "'Courier New', Courier, monospace",
    "'Georgia', serif",
    "'Lucida Console', Monaco, monospace",
    "'Comic Sans MS', cursive, sans-serif"
];

let currentFontIndex = 0;

fontButton.addEventListener('click', () => {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    document.getElementById('container').style.setProperty('font-family', fonts[currentFontIndex], 'important');
    console.log("Font changed to:", fonts[currentFontIndex]);
});