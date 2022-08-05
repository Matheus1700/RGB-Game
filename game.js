var rgb_append = document.getElementById("rgb")
var subtitle_append = document.getElementById("subtitle")

var div1 = document.getElementById("div-1")
var div2 = document.getElementById("div-2")
var div3 = document.getElementById("div-3")
var div4 = document.getElementById("div-4")
var div5 = document.getElementById("div-5")
var div6 = document.getElementById("div-6")

var start_button = document.getElementById("start")
var reset_button = document.getElementById("reset")

var lista_divs = [div1, div2, div3, div4, div5, div6]

var rgb_correto = ""
var div_correta
var index_correto

var rgb = ""
var red, green, blue;

//lista_divs.splice(0, 1) -- remove (index, numero de elem)

start_button.onclick = function iniciarJogo(){
    subtitle_append.innerText = "Advinhe a Cor"
    randomizarRGB()
}

reset_button.onclick = function resetarCores(){
    subtitle_append.innerText = "Advinhe a Cor"
    randomizarRGB()
}

function randomizarRGB(){
    //Escolhendo a div
    div_correta = lista_divs[intervaloRandom(0,5)]
    index_correto = lista_divs.indexOf(div_correta)
    console.log("Index Correto: " + index_correto)

    for (let i = 0; i < 6; i++){
        red = intervaloRandom(0, 255)
        green = intervaloRandom(0, 255)
        blue = intervaloRandom(0, 255)

        rgb = "rgb(" + String(red) + "," + String(green) + "," + String(blue) + ")"
        console.log(rgb)

        lista_divs[i].style.backgroundColor = rgb
        lista_divs[i].style.transition = "0.3s";
        
        if (index_correto == i){
            rgb_correto = rgb
            rgb_append.innerText = rgb_correto
        }

    }
    verificarRespostas()
}


//Só isso que falta
function verificarRespostas(){
    div1.addEventListener('click', function verficarClick(event) {
        if (div1.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV1")
            transformarCores()
        } else {
            div1.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })

    div2.addEventListener('click', function verficarClick(event) {
        if (div2.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV2")
            transformarCores()
        } else {
            div2.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })

    div3.addEventListener('click', function verficarClick(event) {
        if (div3.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV3")
            transformarCores()
        } else {
            div3.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })

    div4.addEventListener('click', function verficarClick(event) {
        if (div4.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV4")
            transformarCores()
        } else {
            div4.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })

    div5.addEventListener('click', function verficarClick(event) {
        if (div5.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV5")
            transformarCores()
        } else {
            div5.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })

    div6.addEventListener('click', function verficarClick(event) {
        if (div6.style.backgroundColor == lista_divs[index_correto].style.backgroundColor){
            console.log("acertou! DIV6")
            transformarCores()
        } else {
            div6.style.backgroundColor = "rgba(255, 255, 255, 0)"
        }
    })
     
}

function transformarCores(){
    subtitle_append.innerText = "Acertou!"
    for (let i = 0; i < 6; i++){
        lista_divs[i].style.backgroundColor = rgb_correto
    }
}

//Função que gera um intervalo entre dois números
function intervaloRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
