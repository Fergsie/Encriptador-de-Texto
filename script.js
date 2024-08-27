const textarea = document.querySelector(".m_textarea");
const mensaje = document.querySelector(".mensaje");
document.querySelector(".btmCopiar").style.visibility = 'hidden'


function btnEncriptar(){
    const textoEncriptado = Encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    document.querySelector('.btmCopiar').style.visibility = 'visible';
}
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
    document.querySelector('.btmCopiar').style.visibility = 'visible';
}
function Encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i=0;i< matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
function Desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i=0;i< matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    const texto = document.querySelector(".mensaje").value;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar el texto: ", err);
            });
    } else {
        alert("La API del portapapeles no está disponible en este navegador.");
    }
}
