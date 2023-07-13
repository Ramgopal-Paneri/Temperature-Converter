let Celsius = document.getElementById('Celsius');
let Kelvin = document.getElementById('Kelvin');
let Fahrenheit = document.getElementById('Fahrenheit');

Celsius.addEventListener('input', (e)=>{
     if (!e.target.value) {
        return;
     }
    let CelsiusVal = e.target.value;
const kel = (CelsiusVal) =>{
    // console.log( parseInt(273)+parseInt(CelsiusVal))
    Kelvin.value = parseFloat(parseFloat(273.15)+parseInt(CelsiusVal));
}
kel(CelsiusVal)

const FahrenheitFunc = (CelsiusVal) =>{
    // Multiply by 9, divide by 5, then add 32 
           Fahrenheit.value = parseFloat( 32+(parseInt(CelsiusVal)*9)/5);
}
FahrenheitFunc(CelsiusVal);
});


Kelvin.addEventListener('input', (e)=>{
    let KelvinVal = e.target.value;
    if (!e.target.value) {
        return;
     }
    const Cel = (KelvinVal) =>{
   // console.log( parseInt(273)+parseInt(CelsiusVal))
   Celsius.value = parseFloat(parseInt(KelvinVal)-parseFloat(273.15));
}
Cel(KelvinVal);

const FahrenheitFunc = (KelvinVal) =>{
   // Subtract 273.15, multiply by 1.8, and then add 32
    Fahrenheit.value = 1.8*(parseFloat(KelvinVal)-273.15)+32;
}
FahrenheitFunc(KelvinVal);
});


Fahrenheit.addEventListener('input', (e)=>{
    let FahrenheitVal = e.target.value;
    if (!e.target.value) {
        return;
     }
    const CelsiusFunc = (FahrenheitVal) =>{
        // Subtract 32, then multiply by 5, then divide by 9 console.log(FahrenheitVal)

    Celsius.value = ((parseFloat(FahrenheitVal)-32)*5)/9
     }
     CelsiusFunc(FahrenheitVal);

    const kel = (FahrenheitVal) =>{
   Kelvin.value = parseFloat(FahrenheitVal.value-32)/1.8+273.15;
}
kel(Fahrenheit)
});