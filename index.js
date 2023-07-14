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
    let res = parseFloat(parseFloat(273.15)+parseInt(CelsiusVal));
    Kelvin.value = res.toFixed(4);
}
kel(CelsiusVal)

const FahrenheitFunc = (CelsiusVal) =>{
    // Multiply by 9, divide by 5, then add 32
    let res =  parseFloat( 32+(parseInt(CelsiusVal)*9)/5);
           Fahrenheit.value = res.toFixed(4);
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
   let res = parseFloat(parseInt(KelvinVal)-parseFloat(273.15));
   Celsius.value = res.toFixed(4);
}
Cel(KelvinVal);

const FahrenheitFunc = (KelvinVal) =>{
   // Subtract 273.15, multiply by 1.8, and then add 32
   let res = 1.8*(parseFloat(KelvinVal)-273.15)+32;
    Fahrenheit.value = res.toFixed(4);
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
        let res = ((parseFloat(FahrenheitVal)-32)*5)/9;
    Celsius.value = res.toFixed(4);
     }
     CelsiusFunc(FahrenheitVal);

    const kel = (FahrenheitVal) =>{
        let res = parseFloat(FahrenheitVal.value-32)/1.8+273.15
   Kelvin.value = res.toFixed(4);
}
kel(Fahrenheit)
});