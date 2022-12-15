// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



/*function encriptar(){
    let texto = document.getElementById("text-input").value.toLowerCase();
    let txt = texto.split("");
    let txt2 = "";
    for(let i = 0; i < txt.length; i++){
        for(let j = 0; j < vocales.length; j++){
            if(txt[i] == vocales[j]){
                txt2 += palabras[j];
            }
        }
    }
    document.getElementById("texto2").value = txt2;

    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show"
    document.getElementById("copiar").style.display = "inherit";


}
*/


function encriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
       var textoEncriptado = "";
         for (var i = 0; i < texto.length; i++) {
             var letra = texto[i];
             if(letra == "e"){
                 textoEncriptado += "enter";
             }else if(letra == "i"){
                 textoEncriptado += "imes";
             }else if(letra == "a"){
                 textoEncriptado += "ai";
             }else if(letra == "o"){
                 textoEncriptado += "ober";
             }else if(letra == "u"){
                 textoEncriptado += "ufat";
             }else{
                 textoEncriptado += letra;
             }
         }
        document.getElementById("text-output").innerHTML = textoEncriptado;
        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
  }

  function desencriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
         var textoDesencriptado = texto.replace(/enter/igm, "e");
            var textoDesencriptado = textoDesencriptado.replace(/imes/igm, "i");
            var textoDesencriptado = textoDesencriptado.replace(/ai/igm, "a");
            var textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
            var textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");
            

            document.getElementById("text-output").innerHTML = textoDesencriptado;
            document.getElementById("imgDerecha").style.display = "none";
            document.getElementById("texto").style.display = "none";
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";
    }

    function copiar(){
        var texto = document.getElementById("text-output");
        texto.select();
        document.execCommand('copy');
        alert("Copiado");

    }
