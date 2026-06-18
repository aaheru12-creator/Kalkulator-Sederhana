let layar = document.getElementById('layar');

function tambahAngka(angka) { layar.value += angka; }
function operasi(op) { layar.value += op; }
function bersihkan() { layar.value = ''; }
function hapusTerakhir() { layar.value = layar.value.slice(0, -1); }

function hitung() {
    try { layar.value = eval(layar.value); }
    catch { layar.value = 'Error'; }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) tambahAngka(key);
    else if (['+', '-', '*', '/'].includes(key)) operasi(key);
    else if (key === 'Enter') hitung();
    else if (key === 'Escape') bersihkan();
});