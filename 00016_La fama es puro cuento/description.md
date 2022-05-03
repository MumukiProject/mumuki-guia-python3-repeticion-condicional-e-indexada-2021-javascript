¡Que suerte que te encontramos, pensábamos que ya te ibas! ¿Podrías quedarte un poco más en esta lección? Es que Agus y Dani nos pidieron les demos una mano para llevar cuenta de sus estadísticas.  

Por ahora, para Agus ya definimos esta función...

```javascript
function cuantasVecesSuperoObjetivo(duraciones) {
  let veces = 0;
  
  for (let duracion of duraciones){
    if (duracion < 3){
      veces += 1
    }
  }
  return veces;
}
```

...que es muy parecida a la que ya habíamos definido, pero tiene una novedad: ahora estamos contando **cuantas veces** se superó el objetivo. Y para eso necesitamos un `if`, con algunas novedades: 

  * Por un lado, está dentro del `for` y no retorna nada;
  * por el otro, no tiene `else`, si la condición no se cumple, no hace _nada_. 

En otras palabras: en cada iteración, si la condición `duracion < 3` se cumple, el acumulador `veces` se incrementará, y en caso contrario, permanecerá igual. 

> Sabiendo esto, ahora ayudemos a Dani a definir `cuantasVecesEntrenoLoSuficiente`, que retorna la cantidad de veces que entrenó más de 30 minutos. 
>
> ```javascript
> ム cuantasVecesEntrenoLoSuficiente([35, 40, 32, 60])
> 4  // todos los días practicó más de 30 minutos
> ム cuantasVecesEntrenoLoSuficiente([15, 45, 90, 0])
> 2 // sólo dos días entrenó más de 30 minutos
> ```