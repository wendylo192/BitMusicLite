window.onload = function () {
    var cancion1 = document.getElementById("cancion1")
    var cancion2 = document.getElementById("cancion2")
    var cancion3 = document.getElementById("cancion3");
    var cancion4 = document.getElementById("cancion4");
    var cancion5 = document.getElementById("cancion5");
    var cancion6 = document.getElementById("cancion6");

    var reproductor = document.querySelector("audio")
    var ruta = 'assets/audio/'
    var extension = '.mp3'
    var listaCanciones = ['sundaymorning', 'babywhenthelight', 'lostonyou', 'youhadme', 'worldholdon', 'writingsonthewall']

    var play = document.createElement('button')
    play.setAttribute("class", "play-button")
    var icon = document.createElement('i')
    icon.setAttribute('class', 'fa fa-play fa-3x')
    play.appendChild(icon)

    function reproducirCancion(cancion) {
        reproductor.src = `${ruta}${cancion}${extension}`
        reproductor.play()
    }

    cancion1.onclick = function () {
        reproducirCancion(listaCanciones[0])
    }

    cancion2.onclick = function () {
        reproducirCancion(listaCanciones[1])
    }

    cancion3.onclick = function () {
        reproducirCancion(listaCanciones[2])
    }

    cancion4.onclick = function () {
        reproducirCancion(listaCanciones[3])
    }

    cancion5.onclick = function () {
        reproducirCancion(listaCanciones[4])
    }

    cancion6.onclick = function () {
        reproducirCancion(listaCanciones[5])
    }

    function activarOpcion(cancion) {
        cancion.appendChild(play)
    }

    function desactivarOpcion(cancion) {
        cancion.removeChild(play)
    }

    cancion1.onmouseover = function () {
        activarOpcion(cancion1)
    }
    cancion1.onmouseout = function () {
        desactivarOpcion(cancion1)
    }
    cancion2.onmouseover = function () {
        activarOpcion(cancion2)
    }
    cancion2.onmouseout = function () {
        desactivarOpcion(cancion2)
    }
    cancion3.onmouseover = function () {
        activarOpcion(cancion3)
    }
    cancion3.onmouseout = function () {
        desactivarOpcion(cancion3)
    }
    cancion4.onmouseover = function () {
        activarOpcion(cancion4)
    }
    cancion4.onmouseout = function () {
        desactivarOpcion(cancion4)
    }
    cancion5.onmouseover = function () {
        activarOpcion(cancion5)
    }
    cancion5.onmouseout = function () {
        desactivarOpcion(cancion5)
    }
    cancion6.onmouseover = function () {
        activarOpcion(cancion6)
    }
    cancion6.onmouseout = function () {
        desactivarOpcion(cancion6)
    }


}
