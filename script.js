function copyCode(id) {
    let code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
    alert("Kode berhasil disalin!");
}
