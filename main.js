function Calcular() {
    
    let tipo = document.querySelector("#Tipo").value;
    let Personas = document.querySelector("#personas").value;
    let Kilometros = document.querySelector("#Kilometros").value;
    let pago = 0
    let pago2 = 0
    precio1= 2.0
    precio2= 2.5
    precio3= 3.0
    if (tipo =="A") {
        if (Personas >= 20) {
            pago = Personas*Kilometros*precio1
            pago2 = pago/Personas
        }else{
            pago = Kilometros*precio1
            pago2 = pago/Personas
        }
    }else if(tipo =="B"){
        if (Personas >= 20) {
            pago = Personas*Kilometros*precio2
            pago2 = pago/Personas
        }else{
            pago = Kilometros*precio2
            pago2 = pago/Personas
        }
    }else{
        if (Personas >= 20) {
            pago = Personas*Kilometros*precio3
            pago2 = pago/Personas
        }else{
            pago = Kilometros*precio3
            pago2 = pago/Personas
        }
    }
    
    document.querySelector("#Resultado") .innerHTML=`El resultado es: ${pago}`;
    document.querySelector("#ppersonas") .innerHTML=`El pago de las personas es: ${pago2}`;
}
document.querySelector("button").addEventListener("click", Calcular)