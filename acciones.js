let btnencriptar = document.querySelector( "#encriptar" );
let btndesencriptar = document.querySelector("#desencriptar");
let Ptexto = document.querySelector("#contenidot");
let contenido = document.querySelector(".contenido-texto")
let resultado = document.querySelector("#resultadoC");

btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
function encriptar(){
    ocultar();
    let cajatexto = recuperarT();
    resultado.textContent = encriptarT(cajatexto);

}

function desencriptar(){
    ocultar();
    let cajatexto = recuperarT();
    resultado.textContent = desencriptarT(cajatexto);
}

function recuperarT(){
    let cajatexto = document.querySelector("#contenidot")
    return cajatexto.value
}

function ocultar(){
    contenido.classList.add("ocultar");

}


function encriptarT(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}
function desencriptarT(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}


const btncopiar = document.querySelector("#copiarT");
btncopiar.addEventListener("click",copiar =()=>{
    let cont = document.querySelector("#resultadoC").textContent;
    navigator.clipboard.writeText(cont);

})