_¡Pero el `for` no se trata sólo de números! Por ejemplo también podríamos utilizarlo para acumular un resultado booleano._ :open_mouth:

Agus quiere saber si en alguna de sus últimas marcas de natacion :person_swimming: superó su objetivo personal de 3 minutos: 

```javascript
ム algunaVezSuperoObjetivo([3.2, 3.4, 3.01, 3.08])
false // todas sus marcas fueron de más de 3 minutos
ム algunaVezSuperoObjetivo([3.1, 3.2, 2.9, 3.1])
true  // una de sus marcas (2.9) fue menor a 3 minutos
```

Y para eso definió la siguiente función:

```javascript
function algunaVezSuperoObjetivo(duraciones) {
  let supero = false // en principio, no se superó la marca de 3 minutos
  
  for (duracion of duraciones) {
    let supero = supero || duracion < 3 // pero si alguna de ellas es menor a 3 minutos,
                                    // entonces sí la habrá superado
  }
  return supero;
}
```

Como vemos, acá la variable local que estamos usando de _acumulador_ es booleana, y en cada _iteración_ (es decir, cada vez que visitamos una `duracion`) actualizaremos su valor, para saber si esta `duracion` o alguna de las anteriores fue menor a 3. 


> ¡Ahora te toca a vos! Dani tampoco quiere perder la práctica diaria de fútbol :soccer: y necesita una función `todosLosDiasUnPoco` que reciba una lista con cuántos minutos practicó cada cada día, y retorne si su práctica diaria fue siempre mayor a 30 minutos: 
>
> 
> ```javascript
> ム todosLosDiasUnPoco([35, 40, 32, 60])
> true  // todos los días practicó más de 30 minutos
> ム todosLosDiasUnPoco([15, 45, 90, 0])
> false // un día practicó solo 15 minutos, y otro no practicó nada
>``` 
> 
> Nuevamente, te dejamos el molde de la función para que te sirva como punto de partida. 



