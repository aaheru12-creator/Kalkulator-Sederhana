let layar = document.getElementById('layar');

function tambahAngka(angka) { layar.value += angka; }
function operasi(op) { layar.value += op; }
function bersihkan() { layar.value = ''; }
function hitung() { 
    try { layar.value = eval(layar.value); } 
    catch { layar.value = 'Error'; } 
}