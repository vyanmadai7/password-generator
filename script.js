const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lenDisplay = document.getElementById("lenDisplay");

lengthSlider.oninput = () => {
    lenDisplay.textContent = lengthSlider.value;
};

function generatePassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~|{}[]<>?";

    let allChars = "";
    if (document.getElementById("upper").checked) allChars += upper;
    if (document.getElementById("lower").checked) allChars += lower;
    if (document.getElementById("number").checked) allChars += numbers;
    if (document.getElementById("symbol").checked) allChars += symbols;

    if (allChars === "") {
        passwordBox.value = "Select at least one option";
        return;
    }

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}
