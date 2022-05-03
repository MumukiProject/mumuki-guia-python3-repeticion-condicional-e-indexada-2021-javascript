_¡Y llegamos al plato fuerte de la lección :spaghetti:!_

De todas las cosas interesantes que podemos hacer con las secuencias de cosas, probablemente la más poderosa sea la de _recorrer_ **cada uno** de sus elementos :person_walking:, utilizando la estructura de control `for`: 

```javascript
function imprimirCadaElemento(elementos){
  for(let elemento of elementos){ 
    console.log(elemento);
  }
}
```

Esta estructura de control nos permitirá...

> ...no, mejor no te contamos qué hace exactamente `for` :smiling_imp:. Descubrilo probando el **procedimiento** `imprimirCadaElemento` en la consola: 
> 
> ```javascript
> ム imprimirCadaElemento(["Violeta", "Mercedes", "Natalia", "Charo", "María Elena"])
> ム imprimirCadaElemento([true, false, false, true])
> ム imprimirCadaElemento("adivinador")
> ム imprimirCadaElemento(range(1, 10))    # range en inglés significa rango
> ム imprimirCadaElemento(range(5, 30, 2)) # prestá atención al tercer argumento de range
> ```
> 
> Cuando termines, escribí `listo()`