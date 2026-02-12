function pxToRem(px) {
    return px / 16;
}

function convert() {
    const pxValue = document.getElementById('pxInput').value;
    
    if (pxValue === '') {
        alert('Please enter a px value');
        return;
    }
    
    const remValue = pxToRem(pxValue);
    document.getElementById('result').textContent = `${pxValue}px = ${remValue}rem`;
}