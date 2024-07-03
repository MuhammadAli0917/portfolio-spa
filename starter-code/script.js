const nameInput = document.getElementById('nameInput');
const nameErrorSvg = document.getElementById('nameErrorSvg');
const nameErrorMsg = document.getElementById("nameErrorMsg");

const error = false

if (error){
    nameInput.addEventListener('focus', () => {
        nameErrorSvg.style.display = "block"
        nameErrorMsg.style.display = "block"
    });
}


