let tarjetasElegidas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 0;
let tiempoJugada = null;




let mostrarMovimiento = document.getElementById('mov');
let mostrarAciertos = document.getElementById('match');
let mostrarTiempo = document.getElementById('time');
let mostrarFelicitacion= document.getElementById('title');



let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);


function contarTiempo(){
    tiempoJugada=setInterval(()=>{
        tiempo++;
        mostrarTiempo.innerHTML= `Tiempo: ${tiempo} segundos`;
    },1000);
}



function mostrar(id){
    if(temporizador==false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasElegidas++;

    if(tarjetasElegidas==1){
        //mostrar primer tarjeta
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = `<img src="./imagenes/${primerResultado}.png" alt="">`;

        //desabilitar el primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasElegidas==2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./imagenes/${segundoResultado}.png" alt="">`;
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimiento.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado==segundoResultado){
            tarjetasElegidas = 0;

            tarjeta1.style.border = "solid 3px #7acbfe";
            tarjeta2.style.border = "solid 3px #7acbfe";


            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos==10){
                clearInterval(tiempoJugada);

                mostrarFelicitacion.innerHTML = `Felicidades!!!`;
                mostrarFelicitacion.style.textShadow = "2px 2px 15px #00090d";
                mostrarFelicitacion.style.letterSpacing = "0.5rem";

                mostrarAciertos.innerHTML = `Completaste el juego`;
                mostrarTiempo.innerHTML= `Tu tiempo fue de ${tiempo} segundos`;
                mostrarMovimiento.innerHTML = `Con sólo ${movimientos} movimientos`;

                window.scrollTo({
                    top:0, behavior:"smooth"
                });
            }

        }else{
            //mostrar un tiempo y volver a ocultar
            setTimeout(()=>{
                tarjeta1.innerHTML= '';
                tarjeta2.innerHTML= '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasElegidas = 0;
            },800);
        }

        

    }
}

function reiniciarJuego(){
    window.location.reload()
}