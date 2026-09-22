// ===============================
// ELEMENTOS
// ===============================

const boton = document.getElementById("boton");

const mensaje = document.getElementById("mensaje");

const texto = document.getElementById("texto");

const jardin = document.getElementById("jardin");

const petalosCaidos =
    document.getElementById("petalosCaidos");


// ===============================
// MENSAJE
// ===============================

const mensajeFinal =
    "Estas flores amarillas son para recordarte que incluso en los días más oscuros siempre puede existir un motivo para sonreír. 💛🌻- para la mejor Amiga del mundo mundial";


// ===============================
// BOTÓN
// ===============================

boton.addEventListener("click", function () {

    // Ocultar botón
    boton.style.display = "none";

    // Mostrar mensaje
    mensaje.classList.remove("oculto");

    // Escribir mensaje
    escribirMensaje();

    // Crear flores
    crearFlores();

    // Comenzar pétalos
    iniciarPetalos();

});


// ===============================
// EFECTO DE ESCRITURA
// ===============================

function escribirMensaje() {

    let posicion = 0;

    texto.textContent = "";

    const intervalo =
        setInterval(function () {

            texto.textContent +=
                mensajeFinal[posicion];

            posicion++;

            if (
                posicion >=
                mensajeFinal.length
            ) {

                clearInterval(intervalo);

            }

        }, 45);

}


// ===============================
// CREAR FLORES
// ===============================

function crearFlores() {

    const cantidad = 12;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        // Crear flor
        const flor =
            document.createElement("div");

        flor.classList.add("flor");


        // Posición
        flor.style.left =
            (
                Math.random() * 95
            ) + "%";


        // Tamaño
        const escala =
            0.45 +
            Math.random() * 0.75;


        flor.style.transform =
            scale($,{escala});


        // Retraso
        flor.style.animationDelay =
            (
                Math.random() * 1.5
            ) + "s";


        // =========================
        // PÉTALOS
        // =========================

        const petalos =
            document.createElement("div");

        petalos.classList.add("petalos");


        for (
            let j = 0;
            j < 6;
            j++
        ) {

            const petalo =
                document.createElement("span");

            petalos.appendChild(
                petalo
            );

        }


        // =========================
        // CENTRO
        // =========================

        const centro =
            document.createElement("div");

        centro.classList.add("centro");


        // =========================
        // TALLO
        // =========================

        const tallo =
            document.createElement("div");

        tallo.classList.add("tallo");


        // =========================
        // HOJAS
        // =========================

        const hoja1 =
            document.createElement("div");

        hoja1.classList.add(
            "hoja",
            "hoja-1"
        );


        const hoja2 =
            document.createElement("div");

        hoja2.classList.add(
            "hoja",
            "hoja-2"
        );


        tallo.appendChild(hoja1);

        tallo.appendChild(hoja2);


        // =========================
        // ARMAR FLOR
        // =========================

        flor.appendChild(petalos);

        flor.appendChild(centro);

        flor.appendChild(tallo);


        // =========================
        // AGREGAR AL JARDÍN
        // =========================

        jardin.appendChild(flor);

    }

}


// ===============================
// PÉTALOS CAYENDO
// ===============================

function iniciarPetalos() {

    setInterval(
        crearPetalo,
        500
    );

}


function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add(
        "petalo-caido"
    );


    // Posición aleatoria
    petalo.style.left =
        (
            Math.random() * 100
        ) + "vw";


    // Tamaño aleatorio
    const tamaño =
        8 +
        Math.random() * 10;


    petalo.style.width =
        tamaño + "px";


    petalo.style.height =
        tamaño * 1.4 + "px";


    // Velocidad
    const velocidad =
        4 +
        Math.random() * 5;


    petalo.style.animationDuration =
        velocidad + "s";


    // Agregar
    petalosCaidos.appendChild(
        petalo
    );


    // Eliminar después
    setTimeout(
        function () {

            petalo.remove();

        },
        velocidad * 1000
    );

}