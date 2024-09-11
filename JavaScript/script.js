const  inputName = document.querySelector ("#inp-nombre");
const outputText = document.querySelector ("#salida-saludo");
// function Saludar () {
//     const saludoCompleto = "hola, me llamo Jarvis, un placer conocerte " + inputName.value;
//     outputText.innerHTML = saludoCompleto;
// }

function Saludar() {
    if (inputName.value != "") {
        const saludoCompleto = "Nǐ hǎo, un placer conocerte " + inputName.value;
        outputText.innerHTML = saludoCompleto;
    }else {
            outputText.innerHTML = "请 Qǐng Por favor, ingresa tu nombre para empezar.";
    }
}